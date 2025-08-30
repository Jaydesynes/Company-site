
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import GallerySection from "@/components/home/GallerySection";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <ServicesPreview />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
