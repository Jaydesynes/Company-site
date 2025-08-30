
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/70 mb-8">
              Please read these terms and conditions carefully before using our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-white/70 mb-6">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not use our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
            <p className="text-white/70 mb-6">
              Infisane provides digital agency services including but not limited to web development, design, marketing, and consulting. The scope of each service will be defined in a separate agreement or statement of work.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-white/70 mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of Infisane and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express consent.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>
            <p className="text-white/70 mb-6">
              When using our services, you agree to provide accurate information, comply with all applicable laws, and not engage in any activity that may harm our systems or interfere with other users.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-white/70 mb-6">
              Infisane is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability for any claims shall not exceed the amount paid by you for the services in question.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <p className="text-white/70 mb-6">
              These terms are governed by the laws of our jurisdiction without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            <p className="text-white/70 mb-6">
              We reserve the right to modify these terms at any time. Your continued use of our services after such changes constitutes your acceptance of the new terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-white/70 mb-6">
              If you have any questions about our Terms of Service, please contact us at <a href="mailto:legal@infisane.com" className="text-primary hover:underline">legal@infisane.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
