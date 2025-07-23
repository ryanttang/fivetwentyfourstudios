'use client'

import { logger } from './logger'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
  networkRequests: number
  errors: number
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    networkRequests: 0,
    errors: 0
  }

  private startTime: number = 0
  private renderStartTime: number = 0

  start() {
    this.startTime = performance.now()
    logger.info('PerformanceMonitor', 'Performance monitoring started')
  }

  startRender() {
    this.renderStartTime = performance.now()
  }

  endRender() {
    if (this.renderStartTime > 0) {
      this.metrics.renderTime = performance.now() - this.renderStartTime
      logger.debug('PerformanceMonitor', 'Render completed', {
        renderTime: this.metrics.renderTime
      })
    }
  }

  end() {
    this.metrics.loadTime = performance.now() - this.startTime
    
    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024 // MB
    }

    logger.info('PerformanceMonitor', 'Performance monitoring completed', this.metrics)
    return this.metrics
  }

  trackNetworkRequest(url: string, method: string, duration: number, status: number) {
    this.metrics.networkRequests++
    logger.debug('PerformanceMonitor', 'Network request', {
      url,
      method,
      duration,
      status,
      totalRequests: this.metrics.networkRequests
    })
  }

  trackError(error: Error, context?: string) {
    this.metrics.errors++
    logger.error('PerformanceMonitor', 'Error tracked', error, { context })
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  reset() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      networkRequests: 0,
      errors: 0
    }
    this.startTime = 0
    this.renderStartTime = 0
  }
}

export const performanceMonitor = new PerformanceMonitor()

// React hook for performance monitoring
export function usePerformanceMonitoring(componentName: string) {
  const startRender = () => {
    performanceMonitor.startRender()
  }

  const endRender = () => {
    performanceMonitor.endRender()
  }

  return {
    startRender,
    endRender
  }
} 