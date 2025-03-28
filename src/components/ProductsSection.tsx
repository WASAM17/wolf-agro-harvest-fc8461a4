
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
      image: '/lovable-uploads/ecd82222-1aaa-4b71-807e-3ef18c6e8c95.png'
    },
    {
      id: 'peanuts',
      name: t('peanuts'),
      description: t('peanutsDesc'),
      image: '/lovable-uploads/15c30d2d-e7c7-4dbe-9d2a-85ea4c8387fb.png'
    },
    {
      id: 'gum-arabic',
      name: t('gumArabic'),
      description: t('gumArabicDesc'),
      image: '/lovable-uploads/bb41bd1e-21c2-421a-8ad2-8b25f0aa1686.png'
    },
    {
      id: 'purple-onion',
      name: t('onion'),
      description: t('onionDesc'),
      image: '/lovable-uploads/e84839e2-08d7-415b-be11-4d0e65a4b1a5.png'
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
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-wolf-brown mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <Link to={`/product/${product.id}`}>
                  <Button variant="outline" className="border-wolf-green text-wolf-green hover:bg-wolf-green hover:text-white transition-colors w-full">
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
