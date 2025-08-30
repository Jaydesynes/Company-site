
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ServiceDetail from "@/components/services/ServiceDetail";
import { servicesData } from "@/data/services";
import { useToast } from "@/hooks/use-toast";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const { toast } = useToast();
  console.log('Current Service ID:', serviceId);
  console.log('Available Services:', Object.keys(servicesData));
  
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    console.warn(`No service found for ID: ${serviceId}`);
    
    // Show a toast for better UX
    toast({
      title: "Service not found",
      description: "The requested service could not be found.",
      variant: "destructive"
    });
    
    return <Navigate to="/services" replace />;
  }

  return (
    <ServiceDetail service={service} />
  );
};

export default ServiceDetailPage;
