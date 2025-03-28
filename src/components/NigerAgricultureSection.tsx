
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Separator } from "@/components/ui/separator";

const NigerAgricultureSection = () => {
  const { language } = useLanguage();
  
  const title = {
    fr: "L'agriculture au Niger",
    en: "Agriculture in Niger",
    zh: "尼日尔农业"
  };
  
  const description = {
    fr: "Le Niger, situé au cœur de l'Afrique de l'Ouest, possède un riche patrimoine agricole malgré ses défis climatiques. Notre pays est reconnu pour la qualité exceptionnelle de ses produits agricoles, cultivés selon des méthodes traditionnelles respectueuses de l'environnement.",
    en: "Niger, located in the heart of West Africa, has a rich agricultural heritage despite its climatic challenges. Our country is recognized for the exceptional quality of its agricultural products, grown using traditional environmentally friendly methods.",
    zh: "尼日尔位于西非中心，尽管面临气候挑战，但拥有丰富的农业遗产。我们的国家以其农产品的卓越品质而闻名，这些产品采用传统的环保方法种植。"
  };
  
  const farmingImages = [
    '/lovable-uploads/2e0386af-6715-4efe-8924-e7b9c47bd206.png'
  ];
  
  const agriculturalAdvantages = {
    fr: [
      "Sols fertiles dans les vallées et les oasis",
      "Diversité de zones agricoles adaptées à différentes cultures",
      "Savoir-faire traditionnel transmis de génération en génération",
      "Faible utilisation d'intrants chimiques, produisant des cultures naturelles",
      "Conditions climatiques idéales pour certaines cultures spécifiques"
    ],
    en: [
      "Fertile soils in valleys and oases",
      "Diversity of agricultural zones suited to different crops",
      "Traditional know-how passed down from generation to generation",
      "Low use of chemical inputs, producing natural crops",
      "Ideal climatic conditions for certain specific crops"
    ],
    zh: [
      "山谷和绿洲中的肥沃土壤",
      "适合不同作物的多样化农业区",
      "代代相传的传统知识",
      "低化学投入使用，生产天然作物",
      "某些特定作物的理想气候条件"
    ]
  };
  
  const currentLang = language as keyof typeof title;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {title[currentLang]}
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-6">
              {description[currentLang]}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-wolf-brown mb-4">
                {currentLang === 'fr' ? "Pourquoi choisir les produits agricoles du Niger ?" : 
                 currentLang === 'en' ? "Why choose agricultural products from Niger?" :
                 "为什么选择尼日尔的农产品？"}
              </h3>
              <ul className="space-y-3">
                {agriculturalAdvantages[currentLang].map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-wolf-green font-bold mr-2">✓</span>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={farmingImages[0]} 
                  alt="Niger Agriculture" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <Separator className="my-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-wolf-beige/30 p-6 rounded-lg">
              <div className="text-4xl font-bold text-wolf-green mb-2">80%</div>
              <p className="text-gray-700">
                {currentLang === 'fr' ? "de la population nigérienne travaille dans l'agriculture" : 
                 currentLang === 'en' ? "of Niger's population works in agriculture" :
                 "尼日尔人口在农业领域工作"}
              </p>
            </div>
            <div className="bg-wolf-beige/30 p-6 rounded-lg">
              <div className="text-4xl font-bold text-wolf-green mb-2">40%</div>
              <p className="text-gray-700">
                {currentLang === 'fr' ? "du PIB national provient du secteur agricole" : 
                 currentLang === 'en' ? "of national GDP comes from the agricultural sector" :
                 "国内生产总值来自农业部门"}
              </p>
            </div>
            <div className="bg-wolf-beige/30 p-6 rounded-lg">
              <div className="text-4xl font-bold text-wolf-green mb-2">15+</div>
              <p className="text-gray-700">
                {currentLang === 'fr' ? "pays importent des produits agricoles nigériens" : 
                 currentLang === 'en' ? "countries import Nigerien agricultural products" :
                 "国家进口尼日尔农产品"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NigerAgricultureSection;
