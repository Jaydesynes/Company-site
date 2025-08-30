
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Briefcase, PenTool, Layout, BarChart, Settings, PenLine } from "lucide-react";

const services = [
  {
    icon: <Layout className="h-6 w-6 text-primary" />,
    title: "Digital Strategy",
    description: "We develop comprehensive strategies that align with your business goals and drive results."
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Web & App Development",
    description: "Custom websites and applications built with cutting-edge technology and stunning design."
  },
  {
    icon: <PenTool className="h-6 w-6 text-primary" />,
    title: "Branding & Identity",
    description: "Create a powerful brand identity that resonates with your audience and stands out."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Creative Content",
    description: "Engaging content that tells your story and connects with your customers on a deeper level."
  },
  {
    icon: <PenLine className="h-6 w-6 text-primary" />,
    title: "Copywriting",
    description: "Words that work. We write with clarity, purpose, and persuasion for resonance and conversion."
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Marketing & Analytics",
    description: "Data-driven marketing campaigns that reach your ideal audience and deliver measurable results."
  },
  {
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: "IT Problem Solving",
    description: "Practical solutions to complex technical challenges to keep your business running smoothly."
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Services That <span className="text-gradient">Transform</span> Businesses
          </h2>
          <p className="text-white/70">
            We offer a comprehensive suite of digital services that help businesses innovate, 
            inspire, and make a lasting impact in their industry.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(0, 6).map((service, index) => (
            <motion.div 
              key={index}
              className="bg-secondary border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              variants={item}
            >
              <div className="bg-background/40 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/70 mb-4">{service.description}</p>
              <Link to="/services" className="text-primary hover:text-primary/80 inline-flex items-center text-sm font-medium" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
