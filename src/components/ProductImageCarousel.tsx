import React from 'react';
import ProductImageCarousel from './ProductImageCarousel';

const ProductPage = () => {
  const products = [
    {
      name: 'Gomme arabique',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDIWYyb2pQUo1G0SqUPXwzY6dAIspa74ZIw&s'],
    },
    {
      name: 'Sésame',
      images: ['https://nairametrics.com/wp-content/uploads/2018/07/sesame-seeds.jpg'],
    },
    {
      name: 'Arachide',
      images: ['https://www.planetesante.ch/var/ezdemo_site/storage/images/media/images/00-rubriques/nutrition-alimentation/allergies_arachide/33161-1-eng-GB/allergies_arachide_gallerylarge.jpg'],
    },
    {
      name: 'Oignon',
      images: ['https://www.investirauburkina.net/images/articles/culture-maraichere-oignon-rentable.jpg'],
    }
  ];

  return (
    <div className="space-y-10">
      {products.map((product, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
          <ProductImageCarousel
            images={product.images}
            productName={product.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

