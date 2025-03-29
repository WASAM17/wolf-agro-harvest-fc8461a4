
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Wolf Agro Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              {t('heroTitle')}
            </p>
            <p className="text-lg text-white/80 italic">
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
