'use client'

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  CRITICAL = 4
}

export interface LogEntry {
  timestamp: string
  level: LogLevel
  component: string
  message: string
  data?: unknown
  error?: Error
  performance?: {
    duration: number
    memory?: number
  }
}

class DebugLogger {
  private logs: LogEntry[] = []
  private maxLogs = 1000
  private logLevel: LogLevel = LogLevel.DEBUG
  private isEnabled = process.env.NODE_ENV === 'development'

  setLogLevel(level: LogLevel) {
    this.logLevel = level
  }

  setEnabled(enabled: boolean) {
    this.isEnabled = enabled
  }

  private addLog(entry: Omit<LogEntry, 'timestamp'>) {
    if (!this.isEnabled) return

    const logEntry: LogEntry = {
      ...entry,
      timestamp: new Date().toISOString()
    }

    this.logs.push(logEntry)
    
    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }

    // Console output based on level
    if (entry.level >= this.logLevel) {
      const prefix = `[${entry.component}]`
      const levelName = LogLevel[entry.level]
      
      switch (entry.level) {
        case LogLevel.DEBUG:
          console.debug(prefix, entry.message, entry.data || '')
          break
        case LogLevel.INFO:
          console.info(prefix, entry.message, entry.data || '')
          break
        case LogLevel.WARN:
          console.warn(prefix, entry.message, entry.data || '')
          break
        case LogLevel.ERROR:
        case LogLevel.CRITICAL:
          console.error(prefix, entry.message, entry.error || entry.data || '')
          break
      }
    }
  }

  debug(component: string, message: string, data?: unknown) {
    this.addLog({ level: LogLevel.DEBUG, component, message, data })
  }

  info(component: string, message: string, data?: unknown) {
    this.addLog({ level: LogLevel.INFO, component, message, data })
  }

  warn(component: string, message: string, data?: unknown) {
    this.addLog({ level: LogLevel.WARN, component, message, data })
  }

  error(component: string, message: string, error?: Error, data?: unknown) {
    this.addLog({ level: LogLevel.ERROR, component, message, error, data })
  }

  critical(component: string, message: string, error?: Error, data?: unknown) {
    this.addLog({ level: LogLevel.CRITICAL, component, message, error, data })
  }

  // Performance tracking
  time(component: string, operation: string) {
    const start = performance.now()
    return {
      end: (data?: unknown) => {
        const duration = performance.now() - start
        this.addLog({
          level: LogLevel.DEBUG,
          component,
          message: `${operation} completed`,
          data,
          performance: { duration }
        })
      }
    }
  }

  // Component lifecycle tracking
  componentMount(component: string, props?: unknown) {
    this.info(component, 'Component mounted', { props })
  }

  componentUnmount(component: string) {
    this.info(component, 'Component unmounted')
  }

  componentUpdate(component: string, prevProps?: unknown, nextProps?: unknown) {
    this.debug(component, 'Component updated', { prevProps, nextProps })
  }

  // Error boundary tracking
  componentError(component: string, error: Error, errorInfo?: unknown) {
    this.error(component, 'Component error', error, errorInfo)
  }

  // Get all logs
  getLogs(): LogEntry[] {
    return [...this.logs]
  }

  // Get logs by level
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level >= level)
  }

  // Get logs by component
  getLogsByComponent(component: string): LogEntry[] {
    return this.logs.filter(log => log.component === component)
  }

  // Clear logs
  clearLogs() {
    this.logs = []
  }

  // Export logs as JSON
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }
}

export const logger = new DebugLogger() 