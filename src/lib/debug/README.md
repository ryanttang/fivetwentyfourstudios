# Debug Tools Documentation

This directory contains comprehensive debugging tools for the FiveTwentyFour Studios application. These tools help track issues, monitor performance, and provide real-time debugging capabilities.

## 🛠️ Available Tools

### 1. Logger (`logger.ts`)
A centralized logging system with different log levels and component tracking.

**Features:**
- Multiple log levels (DEBUG, INFO, WARN, ERROR, CRITICAL)
- Component-specific logging
- Performance tracking
- Lifecycle tracking
- Export capabilities

**Usage:**
```typescript
import { logger } from '@/lib/debug'

// Basic logging
logger.info('MyComponent', 'Component initialized')
logger.error('MyComponent', 'Something went wrong', error)

// Performance tracking
const timer = logger.time('MyComponent', 'API call')
// ... do work ...
timer.end({ result: 'success' })
```

### 2. useDebug Hook (`useDebug.ts`)
A React hook that provides easy debugging capabilities for components.

**Features:**
- Automatic component lifecycle tracking
- Props change detection
- Performance monitoring
- Render counting

**Usage:**
```typescript
import { useDebug } from '@/lib/debug'

function MyComponent(props) {
  const debug = useDebug({
    componentName: 'MyComponent',
    trackProps: true,
    trackPerformance: true,
    trackLifecycle: true
  })

  // Track renders
  debug.trackRender(props)

  // Custom logging
  debug.info('User clicked button', { buttonId: 'submit' })

  return <div>...</div>
}
```

### 3. Error Boundary (`ErrorBoundary.tsx`)
A React error boundary component that catches and logs errors.

**Features:**
- Automatic error logging
- Custom fallback UI
- Error details display
- Component stack traces

**Usage:**
```typescript
import { ErrorBoundary } from '@/lib/debug'

<ErrorBoundary 
  componentName="MyComponent"
  fallback={<div>Custom error UI</div>}
  onError={(error, errorInfo) => {
    // Custom error handling
  }}
>
  <MyComponent />
</ErrorBoundary>
```

### 4. Debug Panel (`DebugPanel.tsx`)
A real-time debug panel that displays logs and provides debugging controls.

**Features:**
- Real-time log display
- Log level filtering
- Component filtering
- Auto-scroll
- Export logs
- Clear logs

### 5. Debug Toggle (`DebugToggle.tsx`)
A floating debug control panel for easy access to debugging features.

**Features:**
- Toggle debug panel visibility
- Enable/disable logging
- Clear logs
- Export logs

### 6. Performance Monitor (`performance.ts`)
A performance monitoring system that tracks various metrics.

**Features:**
- Load time tracking
- Render time tracking
- Memory usage monitoring
- Network request tracking
- Error counting

**Usage:**
```typescript
import { performanceMonitor, usePerformanceMonitoring } from '@/lib/debug'

// Start monitoring
performanceMonitor.start()

// In components
function MyComponent() {
  const { startRender, endRender } = usePerformanceMonitoring('MyComponent')
  
  useEffect(() => {
    startRender()
    // ... component logic
    endRender()
  }, [])
}
```

## 🚀 Quick Start

1. **Add debug toggle to your app:**
```typescript
import { DebugToggle } from '@/lib/debug'

// In your root layout
<DebugToggle />
```

2. **Add debugging to components:**
```typescript
import { useDebug } from '@/lib/debug'

function MyComponent(props) {
  const debug = useDebug({
    componentName: 'MyComponent'
  })
  
  debug.trackRender(props)
  
  return <div>...</div>
}
```

3. **Wrap error-prone components:**
```typescript
import { ErrorBoundary } from '@/lib/debug'

<ErrorBoundary componentName="MyComponent">
  <MyComponent />
</ErrorBoundary>
```

## 🎯 Debug Panel Controls

The debug panel provides several controls:

- **Level Filter**: Show only logs of a certain level or higher
- **Component Filter**: Show only logs from specific components
- **Auto-scroll**: Automatically scroll to new logs
- **Clear**: Clear all logs
- **Export**: Download logs as JSON file

## 📊 Log Levels

- **DEBUG**: Detailed information for debugging
- **INFO**: General information about component lifecycle
- **WARN**: Warning messages for potential issues
- **ERROR**: Error messages for actual problems
- **CRITICAL**: Critical errors that need immediate attention

## 🔧 Configuration

The debug tools are automatically enabled in development mode (`NODE_ENV === 'development'`). You can manually control logging:

```typescript
import { logger } from '@/lib/debug'

// Enable/disable logging
logger.setEnabled(true)

// Set log level
logger.setLogLevel(LogLevel.INFO)
```

## 📈 Performance Monitoring

The performance monitor tracks:

- **Load Time**: Total time from start to end
- **Render Time**: Time spent rendering components
- **Memory Usage**: JavaScript heap usage (if available)
- **Network Requests**: Number of network requests made
- **Errors**: Number of errors encountered

## 🐛 Troubleshooting

### Common Issues:

1. **Logs not appearing**: Check if logging is enabled and log level is set correctly
2. **Performance issues**: Monitor render times and memory usage
3. **Component errors**: Use ErrorBoundary to catch and display errors
4. **Network issues**: Check network request tracking in performance monitor

### Debug Tips:

1. Use the debug panel to filter logs by component or level
2. Export logs for offline analysis
3. Monitor performance metrics for bottlenecks
4. Use ErrorBoundary to prevent app crashes
5. Track component lifecycle to identify memory leaks

## 📝 Best Practices

1. **Component Naming**: Use descriptive component names for better log filtering
2. **Log Levels**: Use appropriate log levels (don't log everything as ERROR)
3. **Performance**: Monitor render times and optimize slow components
4. **Error Handling**: Always wrap error-prone components in ErrorBoundary
5. **Memory**: Monitor memory usage to prevent leaks

## 🔄 Updates

The debug tools are designed to be lightweight and non-intrusive. They automatically disable in production builds and can be easily removed if needed. 