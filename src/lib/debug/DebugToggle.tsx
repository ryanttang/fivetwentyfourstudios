'use client'

import { useState } from 'react'
import { logger } from './logger'
import { DebugPanel } from './DebugPanel'

export function DebugToggle() {
  const [isDebugVisible, setIsDebugVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true)

  const toggleDebug = () => {
    setIsDebugVisible(!isDebugVisible)
  }

  const toggleLogging = () => {
    const newEnabled = !isEnabled
    setIsEnabled(newEnabled)
    logger.setEnabled(newEnabled)
  }

  const clearLogs = () => {
    logger.clearLogs()
  }

  const exportLogs = () => {
    const data = logger.exportLogs()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `debug-logs-${new Date().toISOString()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      {/* Debug Toggle Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDebug}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                isDebugVisible 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
              title="Toggle Debug Panel"
            >
              🐛 Debug
            </button>
            
            <button
              onClick={toggleLogging}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                isEnabled 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
              title={isEnabled ? 'Disable Logging' : 'Enable Logging'}
            >
              {isEnabled ? '📝' : '🚫'}
            </button>
            
            <button
              onClick={clearLogs}
              className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs font-medium transition-colors"
              title="Clear Logs"
            >
              🗑️
            </button>
            
            <button
              onClick={exportLogs}
              className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs font-medium transition-colors"
              title="Export Logs"
            >
              📤
            </button>
          </div>
        </div>
      </div>

      {/* Debug Panel */}
      <DebugPanel 
        isVisible={isDebugVisible}
        onToggle={setIsDebugVisible}
      />
    </>
  )
} 