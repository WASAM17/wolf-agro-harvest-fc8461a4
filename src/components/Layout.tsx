
import React, { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from '../ErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main className="flex-grow w-full pt-16 md:pt-20">
        <div className="w-full">
          <ErrorBoundary>
            <Suspense fallback={<div className="p-4 text-center">Loading content...</div>}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Layout;
