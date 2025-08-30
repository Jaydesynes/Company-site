
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative min-h-screen flex items-center py-20" ref={containerRef}>
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/c7be9a95-5ac5-4e31-9e26-5d497627ed44.png"
          alt="Elegant blue smoke on black background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> {/* Overlay for better text readability */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We Build Brands That <span className="text-gradient">Break the Internet</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Infisane is a creative digital agency that transforms businesses through 
            innovative strategy, cutting-edge development, and impactful marketing.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link to="/book-a-call" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Book a Call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
