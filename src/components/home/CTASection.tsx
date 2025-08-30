
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/4252999c-e569-447a-9af9-15e2bb56af6a.png"
          alt="Abstract flowing red and white background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div> {/* Overlay for better text readability */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to <span className="text-gradient">Break Barriers</span><br /> With Your Digital Presence?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Schedule a free strategy call with our team and discover how we can transform your digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="premium-button" asChild>
              <Link to="/book-a-call" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Book a Call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
