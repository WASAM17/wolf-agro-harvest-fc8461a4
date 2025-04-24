import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'zh';

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

const translations: Translations = {
  // Navigation
  home: { fr: 'Accueil', en: 'Home', zh: '首页' },
  about: { fr: 'À Propos', en: 'About', zh: '关于我们' },
  products: { fr: 'Produits', en: 'Products', zh: '产品' },
  contact: { fr: 'Contact', en: 'Contact', zh: '联系' },
  
  // Hero Section
  heroTitle: { 
    fr: 'Exportateur de Produits Agricoles du Niger', 
    en: 'Niger Agricultural Products Exporter', 
    zh: '尼日尔农产品出口商' 
  },
  heroSubtitle: { 
    fr: 'La puissance du loup au service de l\'agriculture nigérienne', 
    en: 'The power of the wolf at the service of Nigerien agriculture', 
    zh: '狼的力量服务于尼日尔农业' 
  },
  discoverProducts: { fr: 'Découvrir nos produits', en: 'Discover our products', zh: '发现我们的产品' },
  contactUs: { fr: 'Nous contacter', en: 'Contact us', zh: '联系我们' },
  
  // About Section
  aboutTitle: { fr: 'À Propos de Wolf Agro Services', en: 'About Wolf Agro Services', zh: '关于Wolf Agro Services' },
  aboutDescription: { 
    fr: 'Wolf Agro Services est une entreprise spécialisée dans l\'exportation de produits agricoles bruts nigériens. Notre mission est de promouvoir la qualité exceptionnelle des produits agricoles du Niger sur le marché international.', 
    en: 'Wolf Agro Services is a company specialized in the export of raw Nigerien agricultural products. Our mission is to promote the exceptional quality of Niger\'s agricultural products on the international market.', 
    zh: 'Wolf Agro Services是一家专门从事尼日尔原始农产品出口的公司。我们的使命是在国际市场上推广尼日尔农产品的卓越品质。' 
  },
  ourMission: { fr: 'Notre Mission', en: 'Our Mission', zh: '我们的使命' },
  missionDescription: { 
    fr: 'Connecter les agriculteurs nigériens aux marchés internationaux et promouvoir la qualité exceptionnelle de nos produits agricoles.', 
    en: 'Connect Nigerien farmers to international markets and promote the exceptional quality of our agricultural products.', 
    zh: '将尼日尔农民与国际市场联系起来，推广我们农产品的卓越品质。' 
  },
  ourVision: { fr: 'Notre Vision', en: 'Our Vision', zh: '我们的愿景' },
  visionDescription: { 
    fr: 'Devenir le leader de l\'exportation agricole en Afrique de l\'Ouest, reconnu pour notre qualité et notre fiabilité.', 
    en: 'Become the leader in agricultural exports in West Africa, recognized for our quality and reliability.', 
    zh: '成为西非农产品出口的领导者，以我们的质量和可靠性而闻名。' 
  },
  ourValues: { fr: 'Nos Valeurs', en: 'Our Values', zh: '我们的价值观' },
  valuesDescription: { 
    fr: 'Intégrité, excellence, durabilité et partenariats équitables avec les agriculteurs locaux.', 
    en: 'Integrity, excellence, sustainability, and fair partnerships with local farmers.', 
    zh: '诚信、卓越、可持续性以及与当地农民的公平合作。' 
  },
  
  // Products Section
  productsTitle: { fr: 'Nos Produits d\'Exportation', en: 'Our Export Products', zh: '我们的出口产品' },
  productsSub: { 
    fr: 'Découvrez nos produits agricoles d\'exception du Niger', 
    en: 'Discover our exceptional agricultural products from Niger', 
    zh: '发现我们来自尼日尔的优质农产品' 
  },
  learnMore: { fr: 'En savoir plus', en: 'Learn more', zh: '了解更多' },
  
  // Individual Products
  sesame: { fr: 'Sésame', en: 'Sesame', zh: '芝麻' },
  sesameDesc: { 
    fr: 'Sésame de haute qualité, riche en nutriments et idéal pour diverses applications culinaires et industrielles.', 
    en: 'High-quality sesame, rich in nutrients and ideal for various culinary and industrial applications.', 
    zh: '优质芝麻，富含营养，适用于各种烹饪和工业应用。' 
  },
  peanuts: { fr: 'Arachides', en: 'Peanuts', zh: '花生' },
  peanutsDesc: { 
    fr: 'Arachides fraîches et savoureuses, cultivées dans les sols fertiles du Niger et disponibles en différentes variétés.', 
    en: 'Fresh and tasty peanuts, grown in the fertile soils of Niger and available in different varieties.', 
    zh: '新鲜美味的花生，种植在尼日尔肥沃的土壤中，有多种品种可供选择。' 
  },
  gumArabic: { fr: 'Gomme Arabique', en: 'Gum Arabic', zh: '阿拉伯胶' },
  gumArabicDesc: { 
    fr: 'Gomme arabique de première qualité, utilisée dans l\'industrie alimentaire, pharmaceutique et cosmétique.', 
    en: 'Premium gum arabic, used in the food, pharmaceutical, and cosmetic industries.', 
    zh: '优质阿拉伯胶，用于食品、制药和化妆品行业。' 
  },
  onion: { fr: 'Oignon Violet de Galmi', en: 'Purple Galmi Onion', zh: '加尔米紫洋葱' },
  onionDesc: { 
    fr: 'L\'oignon violet de Galmi, réputé pour sa saveur distinctive et sa longue durée de conservation.', 
    en: 'The purple Galmi onion, renowned for its distinctive flavor and long shelf life.', 
    zh: '加尔米紫洋葱，以其独特的风味和长久的保存期而闻名。' 
  },
  
  // New product - Navel Orange (changed from Marrakech Orange)
  marrakechOrange: { 
    fr: 'Orange de Navel', 
    en: 'Navel Orange', 
    zh: '脐橙' 
  },
  marrakechOrangeDesc: { 
    fr: 'Oranges juteuses et sucrées de Navel, cultivées sous le soleil avec un arôme floral unique.', 
    en: 'Sweet and juicy Navel oranges, grown under the sun with a unique floral aroma.', 
    zh: '甜美多汁的脐橙，在阳光下种植，具有独特的花香。' 
  },
  
  // New product - Niger Mango
  nigerMango: { 
    fr: 'Mangue du Niger', 
    en: 'Niger Mango', 
    zh: '尼日尔芒果' 
  },
  nigerMangoDesc: { 
    fr: 'Mangues juteuses et sucrées du Niger, récoltées à maturité optimale, avec une chair fondante et un parfum envoûtant.', 
    en: 'Sweet and juicy mangoes from Niger, harvested at optimal maturity, with melting flesh and captivating aroma.', 
    zh: '来自尼日尔的甜美多汁芒果，在最佳成熟度收获，果肉软嫩，香气迷人。' 
  },
  
  // New product - West African Plantain
  westAfricanPlantain: { 
    fr: 'Banane Plantain d\'Afrique de l\'Ouest', 
    en: 'West African Plantain', 
    zh: '西非大蕉' 
  },
  westAfricanPlantainDesc: { 
    fr: 'Banane plantain de qualité premium, polyvalente et nutritive, récoltée à maturité optimale en Afrique de l\'Ouest.', 
    en: 'Premium quality plantain, versatile and nutritious, harvested at optimal maturity in West Africa.', 
    zh: '优质大蕉，用途广泛且营养丰富，在西非以最佳成熟度收获。' 
  },
  
  // Contact Section
  contactTitle: { fr: 'Contactez-Nous', en: 'Contact Us', zh: '联系我们' },
  contactSub: { 
    fr: 'Intéressé par nos produits ? Contactez-nous dès aujourd\'hui !', 
    en: 'Interested in our products? Contact us today!', 
    zh: '对我们的产品感兴趣？立即联系我们！' 
  },
  name: { fr: 'Nom', en: 'Name', zh: '姓名' },
  email: { fr: 'Email', en: 'Email', zh: '电子邮件' },
  message: { fr: 'Message', en: 'Message', zh: '留言' },
  send: { fr: 'Envoyer', en: 'Send', zh: '发送' },
  phone: { fr: 'Téléphone', en: 'Phone', zh: '电话' },
  phoneValue: { 
    fr: '+227 98 08 35 77', 
    en: '+227 98 08 35 77', 
    zh: '+227 98 08 35 77' 
  },
  address: { fr: 'Adresse', en: 'Address', zh: '地址' },
  addressValue: { 
    fr: '334 avenue du Mounia, Niamey, Niger', 
    en: '334 avenue du Mounia, Niamey, Niger', 
    zh: '尼日尔尼亚美穆尼亚大道334号' 
  },
  followUs: { fr: 'Suivez-nous', en: 'Follow us', zh: '关注我们' },
  
  // Footer
  copyright: { 
    fr: '© 2023 Wolf Agro Services. Tous droits réservés.', 
    en: '© 2023 Wolf Agro Services. All rights reserved.', 
    zh: '© 2023 Wolf Agro Services。保留所有权利。' 
  },
  
  // Admin
  adminTitle: { fr: 'Administration', en: 'Administration', zh: '管理' },
  login: { fr: 'Connexion', en: 'Login', zh: '登录' },
  username: { fr: 'Nom d\'utilisateur', en: 'Username', zh: '用户名' },
  password: { fr: 'Mot de passe', en: 'Password', zh: '密码' },
  loginBtn: { fr: 'Se connecter', en: 'Login', zh: '登录' },
  
  // Contact Section
  contactEmail: { 
    fr: 'contact@wolfagroservices.com', 
    en: 'contact@wolfagroservices.com', 
    zh: 'contact@wolfagroservices.com' 
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
