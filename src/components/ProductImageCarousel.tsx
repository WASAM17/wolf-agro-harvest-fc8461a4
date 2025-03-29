
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Pour le débogage
  console.log("Images à afficher dans le carousel:", images);

  return (
    <div className="relative">
      <Carousel 
        className="w-full" 
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent ref={emblaRef}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-[300px] md:h-[400px] w-full relative">
                <img
                  src={image}
                  alt={`${productName} - image ${index + 1}`}
                  className="absolute w-full h-full object-contain"
                  onError={(e) => {
                    console.error(`Erreur de chargement de l'image: ${image}`);
                    e.currentTarget.src = '/placeholder.svg'; // Image de substitution en cas d'erreur
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-wolf-green' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;
