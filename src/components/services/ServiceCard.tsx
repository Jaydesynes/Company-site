
import React from "react";
import { LucideIcon } from "lucide-react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: keyof typeof Icons;
  title: string;
  summary: string;
  learnMore: string;
  open: boolean;
  onLearnMore: () => void;
}

const ServiceCard = ({
  icon,
  title,
  summary,
  learnMore,
  open,
  onLearnMore,
}: ServiceCardProps) => {
  const Icon = Icons[icon];
  // Ensure consistent ID generation that matches servicesData
  const serviceId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Card className="overflow-hidden glass-morphism border-white/10 p-6 h-full flex flex-col hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start mb-4">
        <div className="bg-primary/10 text-primary p-2 rounded-md mr-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-white/70 mb-4">{summary}</p>
      <div className="mt-auto">
        <Link 
          to={`/services/${serviceId}`}
          className="text-primary hover:text-primary/80 flex items-center group"
        >
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
