'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { logger } from './logger'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  componentName?: string
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const componentName = this.props.componentName || 'ErrorBoundary'
    
    // Log the error
    logger.componentError(componentName, error, errorInfo)
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-lg font-semibold text-red-800 mb-2">
            Something went wrong
          </h2>
          <details className="text-sm text-red-700">
            <summary className="cursor-pointer mb-2">
              Error details
            </summary>
            <pre className="bg-red-100 p-2 rounded text-xs overflow-auto">
              {this.state.error?.toString()}
            </pre>
            {this.state.errorInfo && (
              <details className="mt-2">
                <summary className="cursor-pointer">Component stack</summary>
                <pre className="bg-red-100 p-2 rounded text-xs overflow-auto mt-1">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </details>
        </div>
      )
    }

    return this.props.children
  }
} 