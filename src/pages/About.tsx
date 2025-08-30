
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Rocket, Globe, Briefcase } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 bg-primary/30 rounded-full filter blur-3xl -top-20 -right-20"></div>
            <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full filter blur-3xl bottom-0 left-20"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Who We <span className="text-gradient">Are</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-10">
                Infisane is a collective of digital craftspeople who build brands that break barriers. 
                We combine technical expertise, creative innovation, and strategic thinking to transform 
                digital experiences for forward-thinking businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Drives Us Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <Rocket className="text-primary mr-3" size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold font-display">What Drives Us</h2>
                </div>
                <p className="text-white/70 mb-6">
                  Our passion is creating digital experiences that not only look incredible 
                  but drive real, measurable results. We're motivated by seeing our clients succeed, 
                  watching their brands grow, and helping them connect with their audience in meaningful ways.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary text-sm font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Excellence Without Compromise</h3>
                      <p className="text-white/70">We never settle for "good enough." Every project gets our absolute best.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary text-sm font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Innovation at Heart</h3>
                      <p className="text-white/70">We're constantly exploring new technologies and creative approaches.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary text-sm font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Results-Driven Strategies</h3>
                      <p className="text-white/70">Everything we do is designed to move your business metrics.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-background/20 glass-morphism p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
                    <p className="text-white/70 text-sm">Projects Delivered</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">12+</h4>
                    <p className="text-white/70 text-sm">Industries Served</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">36%</h4>
                    <p className="text-white/70 text-sm">Average ROI Increase</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">4</h4>
                    <p className="text-white/70 text-sm">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Remote Work Culture Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Globe className="text-primary mr-3" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold font-display">Our Remote Work Culture</h2>
              </div>
              <div className="text-center mb-10">
                <p className="text-white/70 text-lg mb-6">
                  Infisane operates as a fully distributed team across multiple time zones. 
                  We believe talent isn't limited by geography, and our remote-first approach 
                  allows us to bring together the best minds regardless of location.
                </p>
                <p className="text-white/70 text-lg">
                  Working remotely isn't just a policy for us—it's a philosophy that enables 
                  diverse perspectives, flexible work-life balance, and a focus on results 
                  rather than hours spent in an office.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-secondary/30 glass-morphism p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Global Talent</h3>
                  <p className="text-white/70">Our team members bring diverse cultural perspectives and approaches.</p>
                </div>
                <div className="bg-secondary/30 glass-morphism p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Flexible Schedules</h3>
                  <p className="text-white/70">We focus on outcomes rather than rigid 9-to-5 availability.</p>
                </div>
                <div className="bg-secondary/30 glass-morphism p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Digital Collaboration</h3>
                  <p className="text-white/70">Seamless communication tools keep our team connected and aligned.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="text-primary mr-3" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold font-display">Our Clients</h2>
              </div>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                We partner with bold thinkers and ambitious brands across industries. 
                From startups looking to disrupt markets to established enterprises 
                seeking digital transformation, our clients share one trait: a commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/3e0ed28f-5d0b-4302-b7f2-3ea011204976.png" 
                  alt="Keyon" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/275a8010-7711-42fa-a539-9a7482cd8d9f.png" 
                  alt="Fitclub" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/7731a07b-6304-4c0c-bd3f-36e92909510e.png" 
                  alt="NAPEX" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/54a6fa78-85e6-477e-8dec-486fa61868ae.png" 
                  alt="Infinity Makeovers" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/d0b5c02c-db5e-4747-a5e9-86d27fba56a9.png" 
                  alt="Ecomove" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/45154026-3aef-43be-a4b9-eafcc8f5d6d0.png" 
                  alt="Neyle" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/a16f9f85-893c-4d1d-ab76-8c6c02c52598.png" 
                  alt="Quello" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="h-16 bg-white/5 glass-morphism rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/108cc8ab-aed0-4970-aca0-c0684df37300.png" 
                  alt="Labour Party" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Ready to <span className="text-gradient">Build</span> Something Great?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Let's start a conversation about your vision and how we can help bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
