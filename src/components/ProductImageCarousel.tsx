
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(
    Object.fromEntries(images.map((_, index) => [index, true]))
  );
  const [errorStates, setErrorStates] = useState<Record<number, boolean>>(
    Object.fromEntries(images.map((_, index) => [index, false]))
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
    setErrorStates(prev => ({ ...prev, [index]: true }));
  };

  // If there are no valid images, show a fallback
  const allImagesHaveErrors = images.length > 0 && 
    Object.values(errorStates).filter(Boolean).length === images.length;

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="h-[300px] md:h-[400px] w-full relative">
              {loadingStates[index] && !errorStates[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Skeleton className="h-full w-full absolute" />
                </div>
              )}
              
              <img
                src={image}
                alt={`${productName} - image ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity ${
                  loadingStates[index] ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                crossOrigin="anonymous"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && !allImagesHaveErrors && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
    </Carousel>
  );
};

export default ProductImageCarousel;
