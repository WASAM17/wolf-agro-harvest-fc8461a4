
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const products = {
    'sesame': {
      id: 'sesame',
      name: t('sesame'),
      description: t('sesameDesc'),
      longDescription: {
        fr: "Le sésame du Niger est reconnu pour sa qualité exceptionnelle. Cultivé dans des conditions idéales, notre sésame est riche en nutriments, notamment en calcium, fer, magnésium et zinc. Sa saveur douce et son arôme distinctif en font un ingrédient de choix pour diverses applications culinaires, ainsi que pour l'extraction d'huile. Notre sésame est récolté et traité selon des normes strictes pour garantir sa pureté et sa fraîcheur. Disponible en graines blanches et noires, il se prête aussi bien à l'usage alimentaire qu'industriel.",
        en: "Niger's sesame is recognized for its exceptional quality. Grown in ideal conditions, our sesame is rich in nutrients, particularly calcium, iron, magnesium, and zinc. Its mild flavor and distinctive aroma make it a choice ingredient for various culinary applications, as well as for oil extraction. Our sesame is harvested and processed according to strict standards to ensure its purity and freshness. Available in white and black seeds, it is suitable for both food and industrial use.",
        zh: "尼日尔的芝麻以其卓越的品质而闻名。在理想条件下种植，我们的芝麻富含营养物质，特别是钙、铁、镁和锌。其温和的味道和独特的香气使其成为各种烹饪应用以及榨油的首选原料。我们的芝麻按照严格的标准收获和加工，以确保其纯度和新鲜度。有白色和黑色两种芝麻籽，适合食品和工业用途。"
      },
      benefits: {
        fr: ["Riche en antioxydants", "Source de protéines végétales", "Contient des acides gras essentiels", "Améliore la santé cardiovasculaire", "Soutient la santé osseuse"],
        en: ["Rich in antioxidants", "Source of plant proteins", "Contains essential fatty acids", "Improves cardiovascular health", "Supports bone health"],
        zh: ["富含抗氧化剂", "植物蛋白质来源", "含有必需脂肪酸", "改善心血管健康", "支持骨骼健康"]
      },
      applications: {
        fr: ["Boulangerie et pâtisserie", "Huile de cuisson", "Tahini (pâte de sésame)", "Compléments alimentaires", "Cosmétiques naturels"],
        en: ["Bakery and pastry", "Cooking oil", "Tahini (sesame paste)", "Food supplements", "Natural cosmetics"],
        zh: ["烘焙和糕点", "烹饪油", "芝麻酱", "食品补充剂", "天然化妆品"]
      },
      image: '/lovable-uploads/fe7dec65-08c7-4fd1-bce7-4ecbb29ecf2e.png'
    },
    'peanuts': {
      id: 'peanuts',
      name: t('peanuts'),
      description: t('peanutsDesc'),
      longDescription: {
        fr: "Les arachides du Niger sont cultivées dans les zones fertiles du pays et se distinguent par leur saveur riche et leur texture croquante. Notre processus de récolte et de séchage soigneux préserve leur qualité naturelle et leur valeur nutritionnelle. Nos arachides sont disponibles sous différentes formes : en coque, décortiquées, ou transformées en huile ou en pâte. Elles constituent une excellente source de protéines, de fibres et de graisses saines, ce qui en fait un aliment nutritif et polyvalent. Nous garantissons des produits exempts de contaminants et conformes aux normes internationales de sécurité alimentaire.",
        en: "Niger's peanuts are grown in the country's fertile areas and stand out for their rich flavor and crunchy texture. Our careful harvesting and drying process preserves their natural quality and nutritional value. Our peanuts are available in various forms: in-shell, shelled, or processed into oil or paste. They are an excellent source of protein, fiber, and healthy fats, making them a nutritious and versatile food. We guarantee products free from contaminants and compliant with international food safety standards.",
        zh: "尼日尔的花生在该国肥沃的地区种植，以其丰富的味道和脆脆的质地而脱颖而出。我们精心的收获和干燥过程保留了它们的天然品质和营养价值。我们的花生有多种形式：带壳、去壳或加工成油或糊状。它们是蛋白质、纤维和健康脂肪的优秀来源，使其成为营养丰富且多用途的食品。我们保证产品不含污染物，符合国际食品安全标准。"
      },
      benefits: {
        fr: ["Source de protéines de haute qualité", "Riche en antioxydants", "Contient des graisses monoinsaturées saines", "Source de vitamines du groupe B", "Faible indice glycémique"],
        en: ["Source of high-quality proteins", "Rich in antioxidants", "Contains healthy monounsaturated fats", "Source of B vitamins", "Low glycemic index"],
        zh: ["优质蛋白质来源", "富含抗氧化剂", "含有健康的单不饱和脂肪", "B族维生素来源", "低血糖指数"]
      },
      applications: {
        fr: ["Consommation directe", "Huile d'arachide pour la cuisine", "Beurre d'arachide", "Ingrédient pour les industries alimentaires", "Alimentation animale"],
        en: ["Direct consumption", "Peanut oil for cooking", "Peanut butter", "Ingredient for food industries", "Animal feed"],
        zh: ["直接食用", "烹饪用花生油", "花生酱", "食品工业原料", "动物饲料"]
      },
      image: '/lovable-uploads/84682afe-e5c6-4c67-a269-b4747c9a057e.png'
    },
    'gum-arabic': {
      id: 'gum-arabic',
      name: t('gumArabic'),
      description: t('gumArabicDesc'),
      longDescription: {
        fr: "La gomme arabique du Niger est récoltée à partir des arbres d'acacia qui poussent dans les régions arides du pays. Notre gomme arabique se distingue par sa pureté et ses propriétés fonctionnelles exceptionnelles. Utilisée comme stabilisant, émulsifiant et agent d'encapsulation naturel, elle trouve des applications dans de nombreuses industries. Notre processus de collecte respecte l'environnement et contribue au développement durable des communautés locales. Nous proposons différentes qualités de gomme arabique pour répondre aux besoins spécifiques de nos clients dans les secteurs alimentaire, pharmaceutique et cosmétique.",
        en: "Niger's gum arabic is harvested from acacia trees that grow in the country's arid regions. Our gum arabic stands out for its purity and exceptional functional properties. Used as a stabilizer, emulsifier, and natural encapsulation agent, it finds applications in many industries. Our collection process respects the environment and contributes to the sustainable development of local communities. We offer different qualities of gum arabic to meet the specific needs of our customers in the food, pharmaceutical, and cosmetic sectors.",
        zh: "尼日尔的阿拉伯胶是从生长在该国干旱地区的金合欢树上收获的。我们的阿拉伯胶以其纯度和卓越的功能特性而脱颖而出。作为稳定剂、乳化剂和天然包覆剂，它在许多行业中都有应用。我们的采集过程尊重环境，并有助于当地社区的可持续发展。我们提供不同质量的阿拉伯胶，以满足食品、制药和化妆品行业客户的特定需求。"
      },
      benefits: {
        fr: ["100% naturel et sans OGM", "Hypoallergénique", "Riche en fibres solubles", "Propriétés prébiotiques", "Faible en calories"],
        en: ["100% natural and GMO-free", "Hypoallergenic", "Rich in soluble fiber", "Prebiotic properties", "Low in calories"],
        zh: ["100%天然，非转基因", "低过敏性", "富含可溶性纤维", "益生元特性", "低热量"]
      },
      applications: {
        fr: ["Stabilisant dans les boissons", "Agent d'enrobage dans les confiseries", "Liant dans les comprimés pharmaceutiques", "Émulsifiant dans les cosmétiques", "Encre d'imprimerie et adhésifs"],
        en: ["Stabilizer in beverages", "Coating agent in confectionery", "Binder in pharmaceutical tablets", "Emulsifier in cosmetics", "Printing ink and adhesives"],
        zh: ["饮料中的稳定剂", "糖果中的包衣剂", "药片中的粘合剂", "化妆品中的乳化剂", "印刷油墨和粘合剂"]
      },
      image: '/lovable-uploads/87e13f69-81a0-410c-a10f-e81eebc1b0d2.png'
    },
    'purple-onion': {
      id: 'purple-onion',
      name: t('onion'),
      description: t('onionDesc'),
      longDescription: {
        fr: "L'oignon violet de Galmi, originaire du Niger, est mondialement réputé pour sa saveur intense, sa couleur violette distinctive et sa longue durée de conservation. Cultivé dans la région de Galmi, où les conditions de sol et de climat sont idéales, cet oignon unique est moins piquant que d'autres variétés mais offre une saveur plus riche et plus sucrée. Sa texture ferme en fait un ingrédient polyvalent pour diverses cuisines. Grâce à notre réseau de producteurs locaux, nous garantissons des oignons de Galmi authentiques, récoltés à maturité optimale et manipulés avec soin pour préserver leur qualité exceptionnelle.",
        en: "The purple Galmi onion, native to Niger, is world-renowned for its intense flavor, distinctive purple color, and long shelf life. Grown in the Galmi region, where soil and climate conditions are ideal, this unique onion is less pungent than other varieties but offers a richer, sweeter flavor. Its firm texture makes it a versatile ingredient for various cuisines. Thanks to our network of local producers, we guarantee authentic Galmi onions, harvested at optimal maturity and handled with care to preserve their exceptional quality.",
        zh: "原产于尼日尔的加尔米紫洋葱，以其浓郁的风味、独特的紫色和长久的保存期而闻名于世。在土壤和气候条件理想的加尔米地区种植，这种独特的洋葱比其他品种辛辣感较低，但提供更丰富、更甜的味道。其坚实的质地使其成为各种烹饪的多功能成分。得益于我们的当地生产商网络，我们保证提供真正的加尔米洋葱，在最佳成熟度收获并精心处理，以保持其卓越品质。"
      },
      benefits: {
        fr: ["Riche en antioxydants", "Source de vitamines et minéraux", "Propriétés antibactériennes", "Aide à réguler la glycémie", "Favorise la digestion"],
        en: ["Rich in antioxidants", "Source of vitamins and minerals", "Antibacterial properties", "Helps regulate blood sugar", "Promotes digestion"],
        zh: ["富含抗氧化剂", "维生素和矿物质来源", "抗菌特性", "帮助调节血糖", "促进消化"]
      },
      applications: {
        fr: ["Cuisine méditerranéenne", "Plats africains traditionnels", "Salades et condiments", "Produits déshydratés", "Purées et sauces"],
        en: ["Mediterranean cuisine", "Traditional African dishes", "Salads and condiments", "Dehydrated products", "Purées and sauces"],
        zh: ["地中海料理", "传统非洲菜肴", "沙拉和调味品", "脱水产品", "果泥和酱汁"]
      },
      image: '/lovable-uploads/30909829-aabe-4778-90e3-1b25ddc09271.png'
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <Layout>
        <div className="py-20 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-wolf-brown mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/#products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleContact = () => {
    toast({
      title: "Contact Request",
      description: `Thank you for your interest in our ${product.name}. We'll get back to you soon!`,
    });
  };

  const currentLang = language as keyof typeof product.longDescription;

  return (
    <Layout>
      <div className="pt-16 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-full">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <Link to="/#products" className="text-wolf-green hover:text-wolf-brown mb-4 inline-block">
                    ← {t('products')}
                  </Link>
                  
                  <h1 className="text-3xl font-bold text-wolf-brown mb-3">
                    {product.name}
                  </h1>
                  
                  <p className="text-gray-600 mb-6">
                    {product.longDescription[currentLang]}
                  </p>
                  
                  <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                    Benefits:
                  </h2>
                  <ul className="list-disc list-inside mb-6 text-gray-600">
                    {product.benefits[currentLang].map((benefit, index) => (
                      <li key={index} className="mb-1">{benefit}</li>
                    ))}
                  </ul>
                  
                  <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                    Applications:
                  </h2>
                  <ul className="list-disc list-inside mb-8 text-gray-600">
                    {product.applications[currentLang].map((application, index) => (
                      <li key={index} className="mb-1">{application}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Button 
                      onClick={handleContact}
                      className="bg-wolf-green hover:bg-wolf-green/90 text-white"
                    >
                      {t('contactUs')}
                    </Button>
                    <a 
                      href="https://wa.me/22720170401" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full sm:w-auto">
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
