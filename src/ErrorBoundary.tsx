
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
          <button
            onClick={() => {
              // Clear cache and reload to fix potential dependency issues
              if ('caches' in window) {
                caches.keys().then(names => {
                  names.forEach(name => {
                    caches.delete(name);
                  });
                });
              }
              window.location.reload();
            }}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Reload Page (Clear Cache)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
