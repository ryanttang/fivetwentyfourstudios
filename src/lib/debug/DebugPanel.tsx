'use client'

import { useState, useEffect, useCallback } from 'react'
import { logger, LogLevel, LogEntry } from './logger'

interface DebugPanelProps {
  isVisible?: boolean
  onToggle?: (visible: boolean) => void
}

export function DebugPanel({ isVisible = false, onToggle }: DebugPanelProps) {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [logLevel, setLogLevel] = useState<LogLevel>(LogLevel.DEBUG)
  const [autoScroll, setAutoScroll] = useState(true)
  const [filterComponent, setFilterComponent] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)

  // Update logs periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(logger.getLogs())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Filter logs based on level and component
  const filteredLogs = logs.filter(log => {
    const levelMatch = log.level >= logLevel
    const componentMatch = !filterComponent || log.component.includes(filterComponent)
    return levelMatch && componentMatch
  })

  const clearLogs = useCallback(() => {
    logger.clearLogs()
    setLogs([])
  }, [])

  const exportLogs = useCallback(() => {
    const data = logger.exportLogs()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `debug-logs-${new Date().toISOString()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const getLevelColor = (level: LogLevel) => {
    switch (level) {
      case LogLevel.DEBUG: return 'text-gray-500'
      case LogLevel.INFO: return 'text-blue-600'
      case LogLevel.WARN: return 'text-yellow-600'
      case LogLevel.ERROR: return 'text-red-600'
      case LogLevel.CRITICAL: return 'text-red-800'
      default: return 'text-gray-600'
    }
  }

  const getLevelName = (level: LogLevel) => {
    return LogLevel[level]
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 w-96 max-h-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-sm font-semibold text-gray-800">Debug Panel</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isMinimized ? '🔽' : '🔼'}
          </button>
          <button
            onClick={() => onToggle?.(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Controls */}
          <div className="p-3 border-b border-gray-200 space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs text-gray-600">Level:</label>
              <select
                value={logLevel}
                onChange={(e) => setLogLevel(Number(e.target.value))}
                className="text-xs border border-gray-300 rounded px-2 py-1"
              >
                <option value={LogLevel.DEBUG}>DEBUG</option>
                <option value={LogLevel.INFO}>INFO</option>
                <option value={LogLevel.WARN}>WARN</option>
                <option value={LogLevel.ERROR}>ERROR</option>
                <option value={LogLevel.CRITICAL}>CRITICAL</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <label className="text-xs text-gray-600">Filter:</label>
              <input
                type="text"
                placeholder="Component name..."
                value={filterComponent}
                onChange={(e) => setFilterComponent(e.target.value)}
                className="text-xs border border-gray-300 rounded px-2 py-1 flex-1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={autoScroll}
                  onChange={(e) => setAutoScroll(e.target.checked)}
                  className="mr-1"
                />
                Auto-scroll
              </label>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={clearLogs}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Clear
              </button>
              <button
                onClick={exportLogs}
                className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Export
              </button>
            </div>
          </div>

          {/* Logs */}
          <div className="max-h-64 overflow-y-auto p-2">
            {filteredLogs.length === 0 ? (
              <div className="text-xs text-gray-500 text-center py-4">
                No logs to display
              </div>
            ) : (
              <div className="space-y-1">
                {filteredLogs.map((log, index) => (
                  <div key={index} className="text-xs border-b border-gray-100 pb-1">
                    <div className="flex items-start space-x-2">
                      <span className={`font-mono ${getLevelColor(log.level)}`}>
                        {getLevelName(log.level)}
                      </span>
                      <span className="text-gray-500 font-mono">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {log.component}
                      </span>
                    </div>
                    <div className="ml-4 mt-1 text-gray-700">
                      {log.message}
                    </div>
                    {log.data !== undefined && (
                      <div className="ml-4 mt-1">
                        <pre className="text-xs bg-gray-100 p-1 rounded overflow-x-auto">
                          {typeof log.data === 'string' ? log.data : JSON.stringify(log.data, null, 2)}
                        </pre>
                      </div>
                    )}
                    {log.error && (
                      <div className="ml-4 mt-1">
                        <pre className="text-xs bg-red-100 p-1 rounded overflow-x-auto text-red-700">
                          {log.error.toString()}
                        </pre>
                      </div>
                    )}
                    {log.performance && (
                      <div className="ml-4 mt-1 text-xs text-green-600">
                        Duration: {log.performance.duration.toFixed(2)}ms
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
} 