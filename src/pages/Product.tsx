import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ProductImageCarousel from '@/components/ProductImageCarousel';
import { Separator } from "@/components/ui/separator";

interface ProductCommon {
  id: string;
  name: string;
  description: string;
  longDescription: {
    fr: string;
    en: string;
    zh: string;
  };
  scientificInfo: {
    fr: string;
    en: string;
    zh: string;
  };
  production: {
    fr: string;
    en: string;
    zh: string;
  };
  storage: {
    fr: string;
    en: string;
    zh: string;
  };
  benefits: {
    fr: string[];
    en: string[];
    zh: string[];
  };
  applications: {
    fr: string[];
    en: string[];
    zh: string[];
  };
  images: string[];
}

interface OnionProduct extends ProductCommon {
  varieties: {
    fr: string[];
    en: string[];
    zh: string[];
  };
}

interface OrangeProduct extends ProductCommon {
  varieties: {
    fr: string[];
    en: string[];
    zh: string[];
  };
}

interface MangoProduct extends ProductCommon {
  varieties: {
    fr: string[];
    en: string[];
    zh: string[];
  };
}

type ProductType = ProductCommon | OnionProduct | OrangeProduct | MangoProduct;

const hasVarieties = (product: ProductType): product is OnionProduct | OrangeProduct | MangoProduct => {
  return 'varieties' in product;
};

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const products: Record<string, ProductType> = {
    'sesame': {
      id: 'sesame',
      name: t('sesame'),
      description: t('sesameDesc'),
      longDescription: {
        fr: "Le sésame du Niger est reconnu pour sa qualité exceptionnelle. Cultivé dans des conditions idéales, notre sésame est riche en nutriments, notamment en calcium, fer, magnésium et zinc. Sa saveur douce et son arôme distinctif en font un ingrédient de choix pour diverses applications culinaires, ainsi que pour l'extraction d'huile. Notre sésame est récolté et traité selon des normes strictes pour garantir sa pureté et sa fraîcheur. Disponible en graines blanches et noires, il se prête aussi bien à l'usage alimentaire qu'industriel.",
        en: "Niger's sesame is recognized for its exceptional quality. Grown in ideal conditions, our sesame is rich in nutrients, particularly calcium, iron, magnesium, and zinc. Its mild flavor and distinctive aroma make it a choice ingredient for various culinary applications, as well as for oil extraction. Our sesame is harvested and processed according to strict standards to ensure its purity and freshness. Available in white and black seeds, it is suitable for both food and industrial use.",
        zh: "尼日尔的芝麻以其卓越的品质而闻名。在理想条件下种植，我们的芝麻富含营养物质，特别是钙、铁、镁和锌。其温和的味道和独特的香气使其成为各种烹饪应用以及榨油的首选原料。我们的芝麻按照严格的标准收获和加工，以确保其纯度和新鲜度。有白色和黑色两种芝麻籽，适合食品和工业用途。"
      },
      scientificInfo: {
        fr: "Nom scientifique : Sesamum indicum. Principales variétés : sésame blanc, sésame brun, sésame bigaré. C'est une plante annuelle pouvant mesurer jusqu'à un mètre de hauteur avec un système racinaire tolérant à la sécheresse. Les sols limoneux acides sont ceux qui conviennent le mieux à sa culture, tandis que les sols alcalins et sableux lui sont impropres.",
        en: "Scientific name: Sesamum indicum. Main varieties: white sesame, brown sesame, variegated sesame. It is an annual plant that can measure up to one meter in height with a drought-tolerant root system. Acidic loamy soils are best suited for its cultivation, while alkaline and sandy soils are unsuitable.",
        zh: "科学名称：芝麻属。主要品种：白芝麻、棕色芝麻、杂色芝麻。它是一种��年生植物，高度可达一米，根系耐旱。酸性壤土最适合其种植，而碱性和沙质土壤则不适合。"
      },
      production: {
        fr: "La production est concentrée dans les régions de Maradi (principalement dans les départements de Tessaoua, Aguié et Gazaoua) et de Zinder (Magaria). Le potentiel exportable de sésame est estimé à une moyenne de 41.730 tonnes par an.",
        en: "Production is concentrated in the regions of Maradi (mainly in the departments of Tessaoua, Aguié and Gazaoua) and Zinder (Magaria). The exportable potential of sesame is estimated at an average of 41,730 tons per year.",
        zh: "生产主要集中在马拉迪地区（主要在特萨瓦、阿吉埃和加扎瓦部门）和津德尔地区（马加里亚）。芝麻的出口潜力估计每年平均为41,730吨。"
      },
      storage: {
        fr: "Au Niger, les moyens de stockage du sésame sont généralement les magasins. Le produit est conditionné dans des sacs en polypropylène ou en jute de 100Kg. Le stockage du sésame ne pose pas de problème dans les conditions sahéliennes.",
        en: "In Niger, sesame is generally stored in warehouses. The product is packaged in 100Kg polypropylene or jute bags. Storing sesame is not a problem in Sahelian conditions.",
        zh: "在尼日尔，芝麻通常存放在仓库中。产品包装在100公斤的聚丙烯或黄麻袋中。在撒哈勒条件下存储芝麻不是问题。"
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
      images: [
        'https://nairametrics.com/wp-content/uploads/2018/07/sesame-seeds.jpg'
      ]
    },
    'peanuts': {
      id: 'peanuts',
      name: t('peanuts'),
      description: t('peanutsDesc'),
      longDescription: {
        fr: "Les arachides du Niger sont cultivées dans les zones fertiles du pays et se distinguent par leur saveur riche et leur texture croquante. Notre processus de récolte et de séchage soigneux préserve leur qualité naturelle et leur valeur nutritionnelle. Nos arachides sont disponibles sous différentes formes : en coque, décortiquées, ou transformées en huile ou en pâte. Elles constituent une excellente source de protéines, de fibres et de graisses saines, ce qui en fait un aliment nutritif et polyvalent. Nous garantissons des produits exempts de contaminants et conformes aux normes internationales de sécurité alimentaire.",
        en: "Niger's peanuts are grown in the country's fertile areas and stand out for their rich flavor and crunchy texture. Our careful harvesting and drying process preserves their natural quality and nutritional value. Our peanuts are available in various forms: in-shell, shelled, or processed into oil or paste. They are an excellent source of protein, fiber, and healthy fats, making them a nutritious and versatile food. We guarantee products free from contaminants and compliant with international food safety standards.",
        zh: "尼日尔的花生在该国肥沃的地区种植，以其丰富的味道和脆脆的质地而脱颖而出。我们精心的收获和干燥过程保留了它们的天然品质���营养价值。我们的花生有多种形式：带壳、去壳或加工成油或糊状。它们是蛋白质、纤维和健康脂肪的优秀来源，使其成为营养丰富且多用途的食品。我们保证产品不含污染物，符合国际食品安全标准。"
      },
      scientificInfo: {
        fr: "L'arachide est une plante de la famille des légumineuses, originaire d'Amérique du Sud, adaptée aux climats chauds. Elle produit des gousses souterraines contenant des graines comestibles riches en huile.",
        en: "The peanut is a plant of the legume family, native to South America, adapted to hot climates. It produces underground pods containing edible seeds rich in oil.",
        zh: "花生是豆科植物，原产于南美，适应炎热气候。它产生含有富含油的可食用种子的地下荚。"
      },
      production: {
        fr: "Au Niger, la production d'arachides est importante dans les régions de Maradi, Zinder et Dosso. Le pays produit environ 500 000 tonnes d'arachides par an, dont une partie significative est destinée à l'exportation.",
        en: "In Niger, peanut production is significant in the regions of Maradi, Zinder, and Dosso. The country produces about 500,000 tons of peanuts per year, a significant portion of which is destined for export.",
        zh: "在尼日尔，马拉迪、津德尔和多索地区的花生产量很大。该国每年生产约50万吨花生，其中相当一部分用于出口。"
      },
      storage: {
        fr: "Les arachides sont généralement stockées dans des entrepôts secs à température contrôlée pour éviter le développement d'aflatoxines. Elles sont conditionnées dans des sacs en jute ou en polypropylène de 50 à 100 kg.",
        en: "Peanuts are generally stored in dry, temperature-controlled warehouses to prevent the development of aflatoxins. They are packaged in jute or polypropylene bags of 50 to 100 kg.",
        zh: "花生通常存放在干燥、温度受控的仓库中，以防止黄曲霉毒素的发展。它们包装在50至100公斤的黄麻或聚丙烯袋中。"
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
      images: [
        'https://www.planetesante.ch/var/ezdemo_site/storage/images/media/images/00-rubriques/nutrition-alimentation/allergies_arachide/33161-1-eng-GB/allergies_arachide_gallerylarge.jpg'
      ]
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
      scientificInfo: {
        fr: "La gomme arabique est la résine de l'Acacia Sénégal (90% - gomme dure) et de l'Acacia Seyal (10% - gomme friable). Son code est SH130120. Elle se présente sous forme de nodules solides de couleur ambre à brun rougeâtre.",
        en: "Gum arabic is the resin of Acacia Senegal (90% - hard gum) and Acacia Seyal (10% - friable gum). Its code is SH130120. It comes in the form of solid nodules ranging from amber to reddish-brown in color.",
        zh: "阿拉伯胶是阿拉伯金合欢（90% - 硬质胶）和赛亚金合欢（10% - 易碎胶）的树脂。它的代码是SH130120。它呈现为从琥珀色到红棕色的固体结节形式。"
      },
      production: {
        fr: "La production de gomme arabique au Niger se situe à environ 200 tonnes par an. Les régions de Diffa et de Zinder, en particulier le département de Gouré, restent les principales zones de production. Le programme de reboisement gouvernemental contribue à généraliser les plantations de gommiers dans la plupart des régions du pays.",
        en: "Gum arabic production in Niger is around 200 tons per year. The regions of Diffa and Zinder, particularly the department of Gouré, remain the main production areas. The government's reforestation program is helping to spread gum acacia plantations to most regions of the country.",
        zh: "尼日尔的阿拉伯胶产量约为每年200吨。迪法和津德尔地区，特别是古尔部门，仍然是主要的生产区域。政府的重新造林计划正在帮助将阿拉伯胶金合欢种植扩展到该国大多数地区。"
      },
      storage: {
        fr: "La gomme arabique est conditionnée et stockée dans des sacs en polypropylène de 50 à 100 kg. Elle doit être conservée dans un endroit sec et frais pour préserver ses propriétés fonctionnelles.",
        en: "Gum arabic is packaged and stored in polypropylene bags of 50 to 100 kg. It should be kept in a dry, cool place to preserve its functional properties.",
        zh: "阿拉伯胶包装并存放在50至100公斤的聚丙烯袋中。它应保存在干燥、凉爽的地方，以保持其功能特性。"
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
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDIWYyb2pQUo1G0SqUPXwzY6dAIspa74ZIw&s'
      ]
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
      scientificInfo: {
        fr: "Nom scientifique : Allium cepa. Code : HS0703100000. Trois catégories de bulbes sont produites : gros (teneur en eau élevée), moyens et petits. Les principales variétés sont le Violet de Galmi, le Blanc de Galmi et le Blanc de Soumarana.",
        en: "Scientific name: Allium cepa. Code: HS0703100000. Three categories of bulbs are produced: large (high water content), medium, and small. The main varieties are Violet de Galmi, Blanc de Galmi, and Blanc de Soumarana.",
        zh: "科学名称：洋葱。代码：HS0703100000。生产三类鳞茎：大（高含水量）、中和小。主要品种是加尔米紫洋葱、加尔米白洋葱和苏马拉纳白洋葱。"
      },
      varieties: {
        fr: [
          "Violet de Galmi: excellente pour le stockage et la déshydratation (8-10% de matière sèche), forme épaisse et aplatie, peau et chair violettes, poids moyen de 150g.",
          "Blanc de Galmi: excellente pour le stockage et la consommation fraîche (9-10% de matière sèche), forme aplatie, chair et peau blanches, poids moyen de 150-175g.",
          "Blanc de Soumarana: bonne pour le stockage et la déshydratation (plus de 10% de matière sèche), forme aplatie, chair et peau blanches, poids de 100-200g."
        ],
        en: [
          "Violet de Galmi: excellent for storage and dehydration (8-10% dry matter), thick, flattened shape, purple skin and flesh, average weight 150g.",
          "Blanc de Galmi: excellent for storage and fresh consumption (9-10% dry matter), flattened shape, white flesh and skin, average weight 150-175g.",
          "Blanc de Soumarana: good for storage and dehydration (over 10% dry matter), flattened shape, white flesh and skin, weight 100-200g."
        ],
        zh: [
          "加尔米紫洋葱：适合储存和脱水（8-10%干物质），形状厚实扁平，皮和肉呈紫色，平均重量150克。",
          "加尔米白洋葱：适合储存和新鲜食用（9-10%干物质），形状扁平，肉和皮呈白色，平均重量150-175克。",
          "苏马拉纳白洋葱：适合储存和脱水（超过10%干物质），形状扁平，肉和皮呈白色，重量100-200克。"
        ]
      },
      storage: {
        fr: "Les équipements utilisés pour le stockage sont le « Rudu » en chaume (capacité 2,5 tonnes, durée 4-6 mois) et le « Docks » ou Adobe (capacité 12 tonnes, durée 4-6 mois). Le produit est conditionné dans des sacs recyclés de 100 à 120 kg en jute.",
        en: "The equipment used for storage includes the thatched \"Rudu\" (capacity 2.5 tons, duration 4-6 months) and the \"Docks\" or Adobe (capacity 12 tons, duration 4-6 months). The product is packaged in recycled jute bags of 100 to 120 kg.",
        zh: "用于储存的设备包括茅草\"Rudu\"（容量2.5吨，时间4-6个月）和\"Docks\"或Adobe（容量12吨，时间4-6个月）。产品包装在100至120公斤的回收黄麻袋中。"
      },
      production: {
        fr: "La production d'oignon au Niger est estimée à environ 750 000 tonnes par an, ce qui place le pays parmi les plus grands producteurs d'Afrique de l'Ouest. Les principales zones de production sont les régions de Tahoua, Agadez et Tillabéri.",
        en: "Onion production in Niger is estimated at around 750,000 tons per year, making the country one of the largest producers in West Africa. The main production areas are the regions of Tahoua, Agadez, and Tillabéri.",
        zh: "尼日尔的洋葱产量估计每年约为75万吨，使该国成为西非最大的生产国之一。主要产区是塔瓦、阿加德兹和蒂拉贝里地区。"
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
      images: [
        'https://www.investirauburkina.net/images/articles/culture-maraichere-oignon-rentable.jpg'
      ]
    },
    'marrakech-orange': {
      id: 'marrakech-orange',
      name: t('marrakechOrange'),
      description: t('marrakechOrangeDesc'),
      longDescription: {
        fr: "L'orange de Marrakech, cultivée sous le soleil généreux du Maroc, est une variété prisée pour son goût intensément sucré, son arôme floral unique et sa chair juteuse. Issues des vergers fertiles de la région de Marrakech, ces oranges bénéficient d'un terroir exceptionnel, où climat et sol s'allient pour offrir un fruit d'une qualité remarquable. Douces, peu acides, et naturellement parfumées, elles sont parfaites aussi bien en jus qu'à croquer à pleines dents. Grâce à notre partenariat direct avec des agriculteurs locaux, nous garantissons des oranges fraîchement récoltées à maturité optimale, manipulées avec soin pour préserver toutes leurs qualités gustatives et nutritionnelles.",
        en: "Marrakech orange, grown under Morocco's generous sun, is a prized variety known for its intensely sweet taste, unique floral aroma, and juicy flesh. From the fertile orchards of the Marrakech region, these oranges benefit from an exceptional terroir, where climate and soil combine to offer a fruit of remarkable quality. Sweet, low in acidity, and naturally fragrant, they are perfect for juicing or eating fresh. Thanks to our direct partnership with local farmers, we guarantee oranges freshly harvested at optimal maturity, handled with care to preserve all their taste and nutritional qualities.",
        zh: "摩洛哥马拉喀什橙子，在摩洛哥慷慨的阳光下种植，以其浓郁甜美的口感、独特的花香和多汁的果肉而备受推崇。来自马拉喀什地区肥沃的果园，这些橙子得益于卓越的风土条件，气候和土壤结合提供了品质非凡的水果。甜美、低酸度、自然芳香，无论是榨汁还是新鲜食用都是完美的选择。得益于我们与当地农民的直接合作，我们保证橙子在最佳成熟度时新鲜采摘，精心处理以保留所有味道和营养品质。"
      },
      scientificInfo: {
        fr: "Nom scientifique : Citrus sinensis. Code douanier : HS0805102200. Variétés principales : Maroc Late (idéale pour le jus), Navel (à chair fondante), Salustiana (très sucrée, sans pépins). Poids moyen : 150–250 g selon la variété. Teneur en jus : entre 45 et 55 %.",
        en: "Scientific name: Citrus sinensis. Customs code: HS0805102200. Main varieties: Maroc Late (ideal for juice), Navel (with melting flesh), Salustiana (very sweet, seedless). Average weight: 150–250 g depending on the variety. Juice content: between 45 and 55%.",
        zh: "科学名称：甜橙。海关编码：HS0805102200。主要品种：摩洛哥晚熟（适合榨汁），纳维尔（肉质软），萨鲁斯蒂亚娜（非常甜，无籽）。平均重量：根据品种150-250克。果汁含量：45-55%之间。"
      },
      varieties: {
        fr: [
          "Maroc Late : excellente pour le jus, récoltée de février à mai, fruit sphérique, peau fine, chair très juteuse.",
          "Navel de Marrakech : idéale pour la consommation fraîche, récoltée de novembre à février, chair douce et fondante, sans pépins.",
          "Salustiana : à la fois juteuse et sucrée, récoltée de décembre à mars, peau fine, peu d'acidité."
        ],
        en: [
          "Maroc Late: excellent for juice, harvested from February to May, spherical fruit, thin skin, very juicy flesh.",
          "Marrakech Navel: ideal for fresh consumption, harvested from November to February, sweet and melting flesh, seedless.",
          "Salustiana: both juicy and sweet, harvested from December to March, thin skin, low acidity."
        ],
        zh: [
          "摩洛哥晚熟：适合榨汁，2月至5月收获，球形水果，皮薄，果肉多汁。",
          "马拉喀什纳维尔：适合新鲜食用，11月至2月收获，甜美软嫩的果肉，无籽。",
          "萨鲁斯蒂亚娜：既多汁又甜美，12月至3月收获，皮薄，酸度低。"
        ]
      },
      production: {
        fr: "La région de Marrakech est l'une des zones agrumicoles les plus importantes du Maroc. La récolte est réalisée manuellement pour éviter d'abîmer les fruits. Les oranges sont ensuite stockées dans des chambres froides pour préserver leur fraîcheur.",
        en: "The Marrakech region is one of the most important citrus areas in Morocco. Harvesting is done manually to avoid damaging the fruits. The oranges are then stored in cold rooms to preserve their freshness.",
        zh: "马拉喀什地区是摩洛哥最重要的柑橘产区之一。收获是手工完成的，以避免损坏水果。然后将橙子存放在冷藏室中以保持新鲜度。"
      },
      storage: {
        fr: "Les oranges sont conditionnées en caisses ou en filets de 10 à 15 kg. Elles sont stockées dans des chambres froides à une température de 4-7°C et une humidité relative de 90-95% pour une durée de conservation optimale.",
        en: "Oranges are packaged in crates or nets of 10 to 15 kg. They are stored in cold rooms at a temperature of 4-7°C and relative humidity of 90-95% for optimal shelf life.",
        zh: "橙子包装在10至15公斤的箱子或网袋中。它们存放在4-7°C温度和90-95%相对湿度的冷藏室中，以获得最佳保存期。"
      },
      benefits: {
        fr: ["Riche en vitamine C et en antioxydants", "Renforce le système immunitaire", "Favorise une peau saine", "Aide à la digestion", "Faible en calories, hydratante et rafraîchissante"],
        en: ["Rich in vitamin C and antioxidants", "Strengthens the immune system", "Promotes healthy skin", "Aids digestion", "Low in calories, hydrating and refreshing"],
        zh: ["富含维生素C和抗氧化剂", "增强免疫系统", "促进健康的皮肤", "帮助消化", "低热量，补水和清爽"]
      },
      applications: {
        fr: ["Jus d'orange pressé", "Salades de fruits et desserts", "Cuisine marocaine (ex : tajines à l'orange)", "Zestes pour pâtisserie", "Marmelades et confitures artisanales"],
        en: ["Freshly squeezed orange juice", "Fruit salads and desserts", "Moroccan cuisine (e.g., orange tajines)", "Zest for pastry", "Artisanal marmalades and jams"],
        zh: ["鲜榨橙汁", "水果沙拉和甜点", "摩洛哥料理（如：橙子塔吉锅）", "用于糕点的橙皮", "手工橙子酱和果酱"]
      },
      images: [
        'https://img.freepik.com/free-photo/oranges-market-marrakech_23-2148129793.jpg'
      ]
    },
    'niger-mango': {
      id: 'niger-mango',
      name: t('nigerMango'),
      description: t('nigerMangoDesc'),
      longDescription: {
        fr: "La mangue du Niger, joyau tropical de l'Afrique de l'Ouest, séduit par sa chair fondante, son goût délicieusement sucré et son parfum envoûtant. Cultivée principalement dans les régions de Dosso, Tillabéri et Niamey, cette mangue bénéficie d'un climat chaud et sec favorable à sa maturation naturelle. Récoltée à la main à pleine maturité, elle est appréciée aussi bien en consommation fraîche qu'en transformation (jus, purée, séchage). Grâce à une filière de production en pleine structuration, la mangue nigérienne se distingue par sa qualité, sa traçabilité et son excellent potentiel d'exportation.",
        en: "Niger's mango, a tropical jewel of West Africa, captivates with its melting flesh, deliciously sweet taste, and enchanting fragrance. Cultivated mainly in the Dosso, Tillabéri, and Niamey regions, this mango benefits from a hot, dry climate favorable to its natural ripening. Hand-harvested at full maturity, it is appreciated both for fresh consumption and processing (juice, purée, drying). Thanks to a well-structured production chain, Nigerien mango stands out for its quality, traceability, and excellent export potential.",
        zh: "尼日尔芒果，西非的热带珍宝，以其软嫩的果肉、美味甜美的口感和迷人的香气吸引人。主要在多索、蒂拉贝里和尼亚美地区种植，这种芒果得益于有利于其自然成熟的炎热干燥气候。在完全成熟时手工采摘，既可新鲜食用，也可加工（果汁、果泥、干制）。得益于结构完善的生产链，尼日尔芒果以其质量、可追溯性和出色的出口潜力而脱颖而出。"
      },
      scientificInfo: {
        fr: "Nom scientifique : Mangifera indica. Code douanier : HS0804500000. Principales variétés : Kent, Keitt, Amélie. Poids moyen : entre 300 et 600 g. Saison : avril à juillet. Méthode de culture : agriculture conventionnelle ou biologique, sans traitements post-récolte chimiques pour l'export.",
        en: "Scientific name: Mangifera indica. Customs code: HS0804500000. Main varieties: Kent, Keitt, Amélie. Average weight: between 300 and 600 g. Season: April to July. Cultivation method: conventional or organic agriculture, without chemical post-harvest treatments for export.",
        zh: "科学名称：芒果。海关编码：HS0804500000。主要品种：肯特、凯特、阿梅利。平均重量：300至600克。季节：4月至7月。种植方法：传统或有机农业，出口无化学收后处理。"
      },
      varieties: {
        fr: [
          "Amélie : maturité précoce (avril-mai), peau verte, chair très juteuse, peu fibreuse, goût doux et parfumé.",
          "Kent : maturité intermédiaire (mai-juin), peau rougeâtre à maturité, chair onctueuse, très sucrée, peu fibreuse.",
          "Keitt : maturité tardive (juin-juillet), gros calibre, bonne tenue, parfaite pour le transport, goût équilibré."
        ],
        en: [
          "Amélie: early maturity (April-May), green skin, very juicy flesh, low fiber, mild and fragrant taste.",
          "Kent: intermediate maturity (May-June), reddish skin when ripe, creamy flesh, very sweet, low fiber.",
          "Keitt: late maturity (June-July), large size, good firmness, perfect for transport, balanced taste."
        ],
        zh: [
          "阿梅利：早熟（4月-5月），绿皮，果肉多汁，纤维少，味道温和芳香。",
          "肯特：中熟（5月-6月），成熟时呈红色皮，果肉柔滑，非常甜，纤维少。",
          "凯特：晚熟（6月-7月），大尺寸，硬度好，适合运输，味道平衡。"
        ]
      },
      production: {
        fr: "Le Niger produit environ 80 000 tonnes de mangues par an. La récolte est entièrement manuelle. Après tri et lavage, les mangues destinées à l'export sont stockées dans des chambres climatisées et conditionnées en cagettes de 4 à 6 kg. Des unités de transformation locales produisent également des mangues séchées, confitures et jus artisanaux.",
        en: "Niger produces about 80,000 tons of mangoes per year. Harvesting is entirely manual. After sorting and washing, mangoes for export are stored in air-conditioned rooms and packaged in 4 to 6 kg crates. Local processing units also produce dried mangoes, jams, and artisanal juices.",
        zh: "尼日尔每年生产约8万吨芒果。收获完全是手工的。分类和清洗后，出口芒果存放在空调室内，并包装在4至6公斤的木箱中。当地加工单位还生产干芒果、果酱和手工果汁。"
      },
      storage: {
        fr: "Les mangues sont conditionnées dans des cagettes de 4 à 6 kg. Pour l'exportation, elles sont stockées dans des chambres froides à une température de 8-10°C et 90-95% d'humidité relative pour préserver leur fraîcheur pendant le transport.",
        en: "Mangoes are packaged in 4 to 6 kg crates. For export, they are stored in cold rooms at a temperature of 8-10°C and 90-95% relative humidity to preserve their freshness during transport.",
        zh: "芒果包装在4至6公斤的木箱中。对于出口，它们存放在8-10°C温度和90-95%相对湿度的冷藏室中，以在运输过程中保持新鲜度。"
      },
      benefits: {
        fr: ["Riche en vitamines A, C et E", "Antioxydants naturels", "Bon pour la digestion (fibres douces)", "Renforce l'immunité", "Excellent en alimentation saine ou sportive"],
        en: ["Rich in vitamins A, C, and E", "Natural antioxidants", "Good for digestion (soft fibers)", "Strengthens immunity", "Excellent for healthy or sports nutrition"],
        zh: ["富含维生素A、C和E", "天然抗氧化剂", "有益消化（软纤维）", "增强免疫力", "适合健康或运动营养"]
      },
      applications: {
        fr: ["Consommation fraîche", "Jus, smoothies et nectar", "Salades tropicales", "Mangue séchée artisanale", "Confitures, chutneys et sauces"],
        en: ["Fresh consumption", "Juices, smoothies, and nectar", "Tropical salads", "Artisanal dried mango", "Jams, chutneys, and sauces"],
        zh: ["新鲜食��", "果汁、冰沙和花蜜", "热带沙拉", "手工干芒果", "果酱、酸辣酱和酱汁"]
      },
      images: [
        'https://nigerexpress.info/wp-content/uploads/2022/06/mangue-ingredients-mordu.webp'
      ]
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

  const renderAdditionalInfo = () => {
    if (hasVarieties(product)) {
      return (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-wolf-brown mb-3">
            {language === 'fr' ? 'Variétés' : language === 'en' ? 'Varieties' : '品种'}:
          </h2>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            {product.varieties[currentLang].map((variety, index) => (
              <li key={index} className="mb-3">{variety}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout>
      <div className="pt-16 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-[300px] md:h-full">
                  <ProductImageCarousel 
                    images={product.images} 
                    productName={product.name} 
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
                  
                  <div className="bg-wolf-beige/20 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                      {language === 'fr' ? 'Informations Scientifiques' : language === 'en' ? 'Scientific Information' : '科学信息'}:
                    </h2>
                    <p className="text-gray-600 mb-2">
                      {product.scientificInfo[currentLang]}
                    </p>
                  </div>
                  
                  {renderAdditionalInfo()}
                  
                  <Separator className="my-6" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                        {language === 'fr' ? 'Production' : language === 'en' ? 'Production' : '生产'}:
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {product.production[currentLang]}
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                        {language === 'fr' ? 'Stockage' : language === 'en' ? 'Storage' : '储存'}:
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {product.storage[currentLang]}
                      </p>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                        {language === 'fr' ? 'Bénéfices' : language === 'en' ? 'Benefits' : '好处'}:
                      </h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {product.benefits[currentLang].map((benefit, index) => (
                          <li key={index} className="mb-1">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold text-wolf-brown mb-3">
                        {language === 'fr' ? 'Applications' : language === 'en' ? 'Applications' : '应用'}:
                      </h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {product.applications[currentLang].map((application, index) => (
                          <li key={index} className="mb-1">{application}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
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
