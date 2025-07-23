'use client'

import { useEffect, useRef, useCallback } from 'react'
import { logger, LogLevel } from './logger'

export interface UseDebugOptions {
  componentName: string
  logLevel?: LogLevel
  trackProps?: boolean
  trackPerformance?: boolean
  trackLifecycle?: boolean
}

export function useDebug(options: UseDebugOptions) {
  const {
    componentName,
    logLevel = LogLevel.DEBUG,
    trackProps = true,
    trackPerformance = true,
    trackLifecycle = true
  } = options

  const mountTime = useRef<number>(Date.now())
  const renderCount = useRef<number>(0)
  const prevProps = useRef<any>(null)

  // Set log level for this component
  useEffect(() => {
    logger.setLogLevel(logLevel)
  }, [logLevel])

  // Track component mount
  useEffect(() => {
    if (trackLifecycle) {
      logger.componentMount(componentName, { mountTime: mountTime.current })
    }
    renderCount.current = 0
  }, [componentName, trackLifecycle])

  // Track component unmount
  useEffect(() => {
    return () => {
      if (trackLifecycle) {
        const totalTime = Date.now() - mountTime.current
        logger.componentUnmount(componentName)
      }
    }
  }, [componentName, trackLifecycle])

  // Performance tracking
  const trackOperation = useCallback((operation: string) => {
    if (!trackPerformance) return { end: () => {} }
    return logger.time(componentName, operation)
  }, [componentName, trackPerformance])

  // Props tracking
  const trackPropsChange = useCallback((currentProps: any) => {
    if (!trackProps || !prevProps.current) {
      prevProps.current = currentProps
      return
    }

    const changedProps: Record<string, { prev: any; next: any }> = {}
    let hasChanges = false

    // Compare props
    const allKeys = new Set([...Object.keys(prevProps.current), ...Object.keys(currentProps)])
    
    for (const key of allKeys) {
      const prevValue = prevProps.current[key]
      const nextValue = currentProps[key]
      
      if (prevValue !== nextValue) {
        changedProps[key] = { prev: prevValue, next: nextValue }
        hasChanges = true
      }
    }

    if (hasChanges) {
      logger.componentUpdate(componentName, prevProps.current, currentProps)
      logger.debug(componentName, 'Props changed', { changedProps })
    }

    prevProps.current = currentProps
  }, [componentName, trackProps])

  // Debug methods
  const debug = useCallback((message: string, data?: any) => {
    logger.debug(componentName, message, data)
  }, [componentName])

  const info = useCallback((message: string, data?: any) => {
    logger.info(componentName, message, data)
  }, [componentName])

  const warn = useCallback((message: string, data?: any) => {
    logger.warn(componentName, message, data)
  }, [componentName])

  const error = useCallback((message: string, error?: Error, data?: any) => {
    logger.error(componentName, message, error, data)
  }, [componentName])

  const critical = useCallback((message: string, error?: Error, data?: any) => {
    logger.critical(componentName, message, error, data)
  }, [componentName])

  // Render tracking
  const trackRender = useCallback((props?: any) => {
    renderCount.current++
    
    if (trackProps && props) {
      trackPropsChange(props)
    }

    logger.debug(componentName, `Render #${renderCount.current}`, { 
      renderCount: renderCount.current,
      timeSinceMount: Date.now() - mountTime.current
    })
  }, [componentName, trackProps, trackPropsChange])

  return {
    debug,
    info,
    warn,
    error,
    critical,
    trackOperation,
    trackRender,
    trackPropsChange,
    renderCount: renderCount.current,
    timeSinceMount: Date.now() - mountTime.current
  }
} 