import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

// Gallery data: keep easily extendable
const gallerySlides = [
  {
    src: "/lovable-uploads/929ca2ea-f310-4b79-a6ce-d33a990ad8f5.png",
    title: "Ecommerce Redefined",
    description: "Platform overhaul for viral growth.",
  },
  {
    src: "/lovable-uploads/7ac4b576-997c-46f8-9b52-2862b10b3b3e.png",
    title: "Startup Surge",
    description: "450% traffic spike for SaaS client.",
  },
  {
    src: "/lovable-uploads/1a34f38f-d927-4262-b3f9-afb87fd54c72.png",
    title: "UI/UX Excellence",
    description: "Distinctive applications built together.",
  },
  {
    src: "/lovable-uploads/1a58184d-cc3b-41c1-8139-f5da6a6619f5.png",
    title: "Design Process",
    description: "Pictorial representation of our methodology.",
  },
];

const GallerySection = () => (
  <section className="py-20 md:py-28 bg-background relative z-10">
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center flex flex-col items-center">
        <div className="flex items-center mb-2">
          <Image className="text-primary mr-2" size={28} />
          <span className="uppercase tracking-widest text-xs text-primary font-bold">
            Gallery
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-balance mb-2">
          Our Work in Focus
        </h2>
        <p className="text-white/70 md:text-lg">
          A taste of campaigns, launches, and branding that turned heads.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {gallerySlides.map((item, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2">
                <Card className="bg-card/80 glass-morphism shadow-xl">
                  <CardContent className="flex flex-col items-center p-4">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg mb-4 border border-primary/20"
                      loading="lazy"
                    />
                    <div className="text-left w-full">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default GallerySection;
