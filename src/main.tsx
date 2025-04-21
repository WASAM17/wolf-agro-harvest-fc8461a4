
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './ErrorBoundary';

// Function to initialize the app with proper error handling
const initializeApp = () => {
  try {
    // Make sure we have the root element
    const rootElement = document.getElementById('root');

    if (!rootElement) {
      throw new Error('Failed to find the root element');
    }

    // Create a root with React 18's createRoot
    const root = createRoot(rootElement);
    
    // Render the app with error boundary
    root.render(
      <StrictMode>
        <ErrorBoundary
          onError={(error) => {
            console.error('Application error caught by ErrorBoundary:', error);
          }}
        >
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to initialize the application:', error);
    
    // Fallback UI if React fails to initialize
    const rootElement = document.getElementById('root') || document.body;
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h2>Unable to load the application</h2>
        <p>Please try refreshing the page. If the problem persists, contact support.</p>
        <pre style="background: #f0f0f0; padding: 10px; border-radius: 5px; text-align: left; margin-top: 20px; overflow: auto;">
          ${error instanceof Error ? error.message : 'Unknown error'}
        </pre>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 8px 16px; background: #e53e3e; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `;
  }
};

// Initialize the application
initializeApp();
