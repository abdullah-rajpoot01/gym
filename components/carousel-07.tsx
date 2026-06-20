"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/gym/pexels-mamadvali-17706037.jpg",
  "/gym/pexels-foadshariyati-31849591.jpg",
  "/gym/pexels-foadshariyati-30283461.jpg",
  "/gym/pexels-foadshariyati-29773892.jpg",
];
export default function CarouselWithFooter() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // go back to first slide
      }
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="mx-auto max-w-full relative">
      <Carousel className="w-full max-w-full aspect p-0" setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <img
                alt="dddepth-248"
                className="size-full rounded-xl object-cover"
                src={image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
