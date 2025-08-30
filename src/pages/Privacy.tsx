
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/70 mb-8">
              At Infisane, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-white/70 mb-4">
              We may collect personal information such as your name, email address, phone number, and company details when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-white/70">
              <li>Visit our website</li>
              <li>Contact us through our forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-white/70 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-white/70">
              <li>Provide and improve our services</li>
              <li>Communicate with you regarding your inquiries</li>
              <li>Send relevant marketing information (with your consent)</li>
              <li>Analyze website usage to enhance user experience</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection</h2>
            <p className="text-white/70 mb-6">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="text-white/70 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-white/70">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-white/70 mb-6">
              We may update this Privacy Policy periodically. The latest version will be posted on this page with the effective date.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-white/70 mb-6">
              If you have any questions about our Privacy Policy, please contact us at <a href="mailto:privacy@infisane.com" className="text-primary hover:underline">privacy@infisane.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
