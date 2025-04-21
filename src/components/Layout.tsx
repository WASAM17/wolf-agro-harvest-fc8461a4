
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow w-full pt-16 md:pt-20">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
