
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceTabContentProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ServiceTabContent = ({ title, children, className }: ServiceTabContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn("space-y-6", className)}
    >
      {title && (
        <h3 className="text-2xl font-semibold text-gradient">{title}</h3>
      )}
      {children}
    </motion.div>
  );
};

export default ServiceTabContent;
