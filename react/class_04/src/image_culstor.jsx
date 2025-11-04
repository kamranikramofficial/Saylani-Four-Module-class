import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  // 5 different images
  const images = [
    "https://sindhpolice.gov.pk/storage/sliders/rwt8Yng0yY3X97mS3h13LPOoD5isoEnJavMv3oT4.jpg",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1600&q=80",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto scroll every 1 minute (60000ms)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 60000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[70vh] m-0">
      <Carousel
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        value={currentIndex}
        onValueChange={setCurrentIndex}
      >
        <CarouselContent>
          {images.map((url, index) => (
            <CarouselItem key={index}>
              <div className="p-0 w-full h-[70vh]">
                <Card className="w-full h-full overflow-hidden">
                  <CardContent className="w-full h-full p-0">
                    <img
                      src={url}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows on top of image */}
        <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center" />
        <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center" />
      </Carousel>
    </div>
  );
}
