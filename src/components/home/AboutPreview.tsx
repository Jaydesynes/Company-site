
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 mix-blend-overlay"></div>
              <div className="absolute bg-primary/10 backdrop-blur-xl border border-white/10 rounded-xl p-8 -right-10 -bottom-10 max-w-xs">
                <p className="text-white/90 text-sm leading-relaxed italic">
                  "Working with Infisane was transformative for our brand. They didn't just build a website—they built a digital experience that captures our essence."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/30 mr-3"></div>
                  <div>
                    <p className="text-white text-sm font-medium">Sarah Johnson</p>
                    <p className="text-white/60 text-xs">CEO, TechVision</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-background/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">We don't just build websites.</h3>
                  <p className="text-white/70 text-sm md:text-base">We architect digital experiences that drive business growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Driving <span className="text-gradient">Innovation</span> Through Creative Excellence
            </h2>
            <p className="text-white/70 mb-6">
              At Infisane, we're more than just a digital agency. We're problem solvers, innovators, and visionaries dedicated to helping businesses thrive in the digital landscape.
            </p>
            <p className="text-white/70 mb-8">
              Our team combines technical expertise with creative thinking to deliver solutions that not only look stunning but also drive real business results. We're passionate about pushing boundaries and exceeding expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="border border-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">10+</h4>
                <p className="text-white/70 text-sm">Experts on our team</p>
              </div>
              <div className="border border-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">50+</h4>
                <p className="text-white/70 text-sm">Successful projects delivered</p>
              </div>
              <div className="border border-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">4+</h4>
                <p className="text-white/70 text-sm">Years of experience</p>
              </div>
              <div className="border border-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">95%</h4>
                <p className="text-white/70 text-sm">Client satisfaction rate</p>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
