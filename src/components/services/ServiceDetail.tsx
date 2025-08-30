
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ServiceTabContent from "./ServiceTabContent";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export interface ServiceDetailData {
  id: string;
  icon: keyof typeof Icons;
  title: string;
  subtitle: string;
  description: string;
  overview: React.ReactNode;
  process: React.ReactNode;
  benefits: React.ReactNode;
  results: React.ReactNode;
  tools: React.ReactNode;
  accentColor: string;
}

interface ServiceDetailProps {
  service: ServiceDetailData;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const Icon = Icons[service.icon];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className={`inline-block p-4 rounded-full mb-6 bg-${service.accentColor}/10`}>
              <Icon className={`w-12 h-12 text-${service.accentColor}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              {service.title}
            </h1>
            <p className="text-xl font-medium text-gradient mb-4">
              {service.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {service.description}
            </p>
          </motion.div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="w-full justify-center gap-2 bg-background p-1">
              {["Overview", "Process", "Benefits", "Results", "Tools"].map((tab) => (
                <TabsTrigger
                  key={tab.toLowerCase()}
                  value={tab.toLowerCase()}
                  className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-8">
              <AnimatePresence mode="wait">
                <TabsContent value="overview">
                  <ServiceTabContent>{service.overview}</ServiceTabContent>
                </TabsContent>
                <TabsContent value="process">
                  <ServiceTabContent>{service.process}</ServiceTabContent>
                </TabsContent>
                <TabsContent value="benefits">
                  <ServiceTabContent>{service.benefits}</ServiceTabContent>
                </TabsContent>
                <TabsContent value="results">
                  <ServiceTabContent>{service.results}</ServiceTabContent>
                </TabsContent>
                <TabsContent value="tools">
                  <ServiceTabContent>{service.tools}</ServiceTabContent>
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Ready to Build Something Unforgettable?
            </h3>
            <Button asChild size="lg" className="font-bold premium-button">
              <Link to="/book-a-call">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
