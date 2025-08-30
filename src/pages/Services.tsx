
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: "briefcase",
    name: "Digital Strategy",
    summary:
      "Data-fueled, creative roadmaps that position you to dominate your digital space.",
    learnMore: `We develop custom digital strategies rooted in data and creativity. From audience insights and competitor audits to long-term digital roadmaps, we help brands define their voice, align their efforts, and dominate their niche with precision. Strategy isn't an afterthought — it's the architecture of your digital success.`,
  },
  {
    icon: "code",
    name: "Web & App Development",
    summary:
      "Blazing-fast web & mobile builds. Scalable, beautiful, and built for the future.",
    learnMore: `Our dev team builds sleek, fast, and scalable web and mobile applications that work seamlessly across all devices. Whether it's a dynamic website, an e-commerce system, or a custom app, we prioritize UX, performance, and future-proof tech that grows with your business.`,
  },
  {
    icon: "pen-tool",
    name: "Branding & Identity",
    summary:
      "Impactful identity and design that leaves a mark on every audience.",
    learnMore: `We craft compelling brand identities that leave a mark. From logo creation and typography systems to full brand guidelines, we ensure your brand speaks clearly, consistently, and confidently across all touchpoints. It's not just design — it's the essence of your business made visual.`,
  },
  {
    icon: "image",
    name: "Creative Content",
    summary:
      "Words and visuals that turn heads, connect hearts, and drive sales.",
    learnMore: `We don't just create — we captivate. Our content team crafts magnetic copy, scroll-stopping visuals, and immersive multimedia that connect emotionally and drive action. Whether it's for your socials, site, or campaigns, our work commands attention and converts.`,
  },
  {
    icon: "pen-line",
    name: "Copywriting",
    summary:
      "Words that work. We write with clarity, purpose, and persuasion.",
    learnMore: `Words that work. We write with clarity, purpose, and persuasion — whether it's brand messaging, website copy, ads, or campaign content. Every line we write is crafted to resonate, convert, and elevate your brand voice.`,
  },
  {
    icon: "trending-up",
    name: "Digital Marketing & Analytics",
    summary:
      "Scale fast with SEO, paid, email, and analytics that optimize ROI.",
    learnMore: `We blend art and algorithms. Our digital marketing services combine SEO, PPC, email marketing, and social strategies with deep analytics tracking. We don't guess — we test, optimize, and scale what works, turning attention into clicks and clicks into clients.`,
  },
  {
    icon: "wrench",
    name: "IT Problem Solving",
    summary: "Problems solved fast—so tech never slows you down.",
    learnMore: `Tech headaches? We fix them. From performance bottlenecks and integration issues to backend architecture audits, our IT team diagnoses and solves problems fast. We keep your systems running smooth, secure, and stress-free so you can focus on growing your business.`,
  },
  {
    icon: "laptop",
    name: "Supply of Digital Equipments",
    summary: "Premium digital hardware and equipment solutions for modern businesses.",
    learnMore: `Need cutting-edge digital equipment? We supply and integrate premium hardware solutions - from high-performance computers and servers to networking equipment and digital infrastructure. We ensure your team has the tools they need to perform at their best with reliable, future-ready technology.`,
  },
];

const Services = () => {
  const [visibleLearnMore, setVisibleLearnMore] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-40 pb-32 container mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">
            <strong>Digital Solutions</strong> Designed to Scale Bold Visions
          </h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">Everything you need to ignite your digital transformation—delivered by a team obsessed with result-driven creativity.</p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.name}
              icon={service.icon as any}
              title={service.name}
              summary={service.summary}
              learnMore={service.learnMore}
              open={visibleLearnMore === i}
              onLearnMore={() =>
                setVisibleLearnMore(visibleLearnMore === i ? null : i)
              }
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <Button 
            size="lg" 
            className="font-bold px-8 py-4 premium-button text-lg" 
            variant="secondary"
            onClick={() => window.location.href = "/book-a-call"}
          >
            Contact Us
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
