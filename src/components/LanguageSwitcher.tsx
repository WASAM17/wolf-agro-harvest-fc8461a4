
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
          {language === 'fr' ? '🇫🇷 FR' : language === 'en' ? '🇬🇧 EN' : language === 'zh' ? '🇨🇳 ZH' : '🇩🇪 DE'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷 Frainçais</SelectItem>
        <SelectItem value="en">🇬🇧 English</SelectItem>
        <SelectItem value="zh">🇨🇳 中文</SelectItem>
        <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
