
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="h-[300px] md:h-[400px] w-full relative">
              <img
                src="https://media.istockphoto.com/id/1144293808/photo/two-african-men-shaking-hands-near-an-agricultural-area-on-the-fertile-banks-of-niger-river.jpg?s=612x612&w=0&k=20&c=Hb4hLbXuhCjM6fgJkrEahxx5R0uCKu_XrCz-VhPGgxk="
                alt={`${productName} - image ${index + 1}`}
                className="absolute w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ProductImageCarousel;
