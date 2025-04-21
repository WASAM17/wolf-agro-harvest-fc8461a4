
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './ErrorBoundary';

// Function to initialize the app with proper error handling
const initializeApp = () => {
  try {
    const rootElement = document.getElementById('root');

    if (!rootElement) {
      throw new Error('Failed to find the root element');
    }

    const root = createRoot(rootElement);
    
    root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to initialize the application:', error);
    
    // Display a user-friendly error message in case of critical initialization failure
    const rootElement = document.getElementById('root') || document.body;
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h2>Unable to load the application</h2>
        <p>Please try refreshing the page. If the problem persists, contact support.</p>
        <pre style="background: #f0f0f0; padding: 10px; border-radius: 5px; text-align: left; margin-top: 20px; overflow: auto;">
          ${error instanceof Error ? error.message : 'Unknown error'}
        </pre>
      </div>
    `;
  }
};

// Initialize the application
initializeApp();
