
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[90px]">
        <SelectValue>
          {language === 'fr' ? '🇫🇷 FR' : language === 'en' ? '🇬🇧 EN' : '🇨🇳 ZH'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷 FR</SelectItem>
        <SelectItem value="en">🇬🇧 EN</SelectItem>
        <SelectItem value="zh">🇨🇳 ZH</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
