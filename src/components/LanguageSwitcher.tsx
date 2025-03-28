
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button
        variant={language === 'fr' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('fr')}
        className="text-xs font-medium"
      >
        🇫🇷 FR
      </Button>
      <Button
        variant={language === 'en' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs font-medium"
      >
        🇬🇧 EN
      </Button>
      <Button
        variant={language === 'zh' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('zh')}
        className="text-xs font-medium"
      >
        🇨🇳 ZH
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
