
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('Error caught by ErrorBoundary:', error);
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  clearCachesAndReload = async () => {
    // Clear all browser caches
    if ('caches' in window) {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map(key => caches.delete(key)));
        console.log('Caches cleared successfully');
      } catch (err) {
        console.error('Failed to clear caches:', err);
      }
    }
    
    // Force reload the page with cache clear
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary-fallback p-4 bg-red-50 text-red-800 rounded-md">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <details className="text-sm">
            <summary>Error details</summary>
            <p className="mt-2 font-mono bg-red-100 p-2 rounded overflow-auto">
              {this.state.error?.toString()}
            </p>
          </details>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={this.clearCachesAndReload}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Reload Page (Clear Cache)
            </button>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Try to Recover
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
