
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/button";

// Portfolio projects using client images and brands
const PROJECTS = [
  {
    id: 1,
    name: "GoGym Fitness App",
    img: "/lovable-uploads/92d16807-2a66-4e1d-ac0d-521296f44948.png",
    metric: "App store rating: 4.9/5",
    brand: "GoGym",
    summary: "Revolutionary fitness app connecting users with trainers.",
    details: "We developed a comprehensive fitness app with trainer matching, workout tracking, and social features that transformed how people approach fitness.",
    testimonial: "User engagement and retention skyrocketed. Best fitness app investment we've made. – David, GoGym CTO"
  },
  {
    id: 2,
    name: "Keyon Brand Identity",
    img: "/lovable-uploads/9e4d2aab-6069-44e7-8141-155052e5e243.png",
    metric: "500% brand recognition",
    brand: "Keyon",
    summary: "Complete brand identity transformation and visual system.",
    details: "Comprehensive brand identity redesign including logo, typography, color system, and brand guidelines that elevated Keyon's market presence.",
    testimonial: "The new brand identity exceeded all our growth projections. Incredible creative work. – Tom, Keyon Founder"
  },
  {
    id: 3,
    name: "Gantry UI/UX Design",
    img: "/lovable-uploads/03ff7b90-8d90-4342-93b4-b45e28702bf3.png",
    metric: "95% user satisfaction",
    brand: "Gantry",
    summary: "AI-powered platform with intuitive user experience.",
    details: "Complete UI/UX design for Gantry's AI application platform, focusing on user experience and interface design that helps teams build distinctive applications together.",
    testimonial: "User satisfaction has never been higher. Infisane delivers exceptional design. – Rachel, Gantry Director"
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient animate-fade-in">
          Our Work, Our Results
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-14">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              img={project.img}
              brand={project.brand}
              metric={project.metric}
              summary={project.summary}
              onClick={() => setActiveProject(i)}
            />
          ))}
        </div>
        {/* Modal for project details */}
        {activeProject !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-background border border-white/10 rounded-xl shadow-2xl p-10 max-w-xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              <img
                src={PROJECTS[activeProject].img}
                alt={PROJECTS[activeProject].brand}
                className="rounded mb-5 w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-semibold mb-2">{PROJECTS[activeProject].name}</h2>
              <div className="font-bold mb-2 text-primary">{PROJECTS[activeProject].metric}</div>
              <p className="mb-4">{PROJECTS[activeProject].details}</p>
              <blockquote className="text-white/70 italic border-l-4 border-primary pl-4">
                "{PROJECTS[activeProject].testimonial}"
              </blockquote>
            </div>
          </div>
        )}
        {/* Highlight reel */}
        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gradient">
            Brand Transformations in Motion
          </h2>
          <video
            className="w-full rounded-lg border border-white/10 shadow-xl"
            controls
            poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
            src=""
          >
            {/* No actual video source; placeholder for highlight reel */}
            Your browser does not support the video tag.
          </video>
        </section>
        {/* Client testimonials at the bottom */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <h3 className="text-xl font-semibold mb-4 text-gradient">Client Feedback</h3>
          <div className="flex flex-col md:flex-row gap-8">
            {PROJECTS.map((p) => (
              <blockquote key={p.id} className="text-white/70 italic border-l-4 border-primary pl-4">
                "{p.testimonial}"
              </blockquote>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
