
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductsSection = () => {
  const { t, language } = useLanguage();

  const products: Product[] = [
    {
      id: 'sesame',
      name: t('sesame'),
      description: t('sesameDesc'),
      image: 'https://nairametrics.com/wp-content/uploads/2018/07/sesame-seeds.jpg'
    },
    {
      id: 'peanuts',
      name: t('peanuts'),
      description: t('peanutsDesc'),
      image: 'https://www.planetesante.ch/var/ezdemo_site/storage/images/media/images/00-rubriques/nutrition-alimentation/allergies_arachide/33161-1-eng-GB/allergies_arachide_gallerylarge.jpg'
    },
    {
      id: 'gum-arabic',
      name: t('gumArabic'),
      description: t('gumArabicDesc'),
      image: 'https://www.anipex.org/images/gum-arabic-1.jpg'
    },
    {
      id: 'purple-onion',
      name: t('onion'),
      description: t('onionDesc'),
      image: 'https://www.investirauburkina.net/images/articles/culture-maraichere-oignon-rentable.jpg'
    }
  ];

  return (
    <section id="products" className="py-20 bg-wolf-beige/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {t('productsTitle')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6">
            {t('productsSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-lg hover:translate-y-[-5px]"
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 z-10"
                  onLoad={(e) => {
                    (e.target as HTMLElement).classList.remove('opacity-0');
                    (e.target as HTMLElement).classList.add('opacity-100');
                    (e.target as HTMLElement).parentElement?.querySelector('.bg-gray-200')?.classList.add('opacity-0');
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 z-30 relative">
                <h3 className="text-xl font-bold text-wolf-brown mb-2 group-hover:text-wolf-green transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0">
                <Link to={`/product/${product.id}`} className="w-full">
                  <Button 
                    variant="outline" 
                    className="border-wolf-green text-wolf-green hover:bg-wolf-green hover:text-white transition-colors w-full group-hover:bg-wolf-green group-hover:text-white"
                  >
                    {t('learnMore')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
