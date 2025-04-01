
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-cover bg-center relative" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=90')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'crisp-edges',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm bg-black/10 p-8 rounded-lg">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
              Wolf Agro Services
            </h1>
            <p className="text-xl md:text-2xl text-white mb-2 text-shadow">
              {t('heroTitle')}
            </p>
            <p className="text-lg text-white italic text-shadow">
              {t('heroSubtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
            <Button 
              size="lg" 
              className="bg-wolf-green hover:bg-wolf-green/90 text-white"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('discoverProducts')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
