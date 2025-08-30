
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="block mb-4">
              <img src="/lovable-uploads/2490cde1-f80e-4b95-b9fa-2e5b57176d6b.png" alt="Infisane" className="h-10 w-auto" />
            </Link>
            <p className="text-white/60 text-sm max-w-xs">
              We build brands that break the internet. Digital strategy, development, and marketing that delivers results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/infisane.ltd" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/infisane" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-a-call" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Creative Content
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Copywriting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Marketing & Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">
                Email: <a href="mailto:infisaneltd@gmail.com" className="hover:text-primary transition-colors">infisaneltd@gmail.com</a>
              </li>
              <li className="text-white/60 text-sm">
                Phone: <a href="tel:+2348142551455" className="hover:text-primary transition-colors">+2348142551455</a>
              </li>
              <li className="text-white/60 text-sm">
                Address: Manhattan NY, Lagos, Abuja Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Infisane. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 flex">
            <Link to="/privacy" className="text-white/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
