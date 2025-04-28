
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductsSection = () => {
  const { t } = useLanguage();

  // Function to scroll to top when navigating to product detail
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // This ensures the page starts at the top when navigating directly to the page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <section id="products" className="py-12 md:py-20 bg-wolf-beige/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">
            {t('productsTitle')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4 md:mt-6 text-sm md:text-base">
            {t('productsSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-wolf-brown mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base">
                  {product.description}
                </p>
                <Link 
                  to={`/product/${product.id}`} 
                  className="block" 
                  onClick={scrollToTop}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-wolf-green text-wolf-green hover:bg-wolf-green hover:text-white transition-colors text-sm md:text-base"
                  >
                    {t('learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
