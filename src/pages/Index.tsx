
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
