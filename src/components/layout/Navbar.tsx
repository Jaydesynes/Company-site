
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleBookCall = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/book-a-call");
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/90 backdrop-blur-lg border-b border-border"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/2490cde1-f80e-4b95-b9fa-2e5b57176d6b.png" alt="Infisane" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Contact
          </Link>
          <ThemeToggle />
          <Button size="sm" className="ml-4" onClick={handleBookCall}>
            Book a Call
          </Button>
        </nav>

        {/* Mobile Menu and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background pt-20 px-6">
            {/* Exit button in the top right */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
            
            <nav className="flex flex-col space-y-8 text-center">
              <Link
                to="/about"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Contact
              </Link>
              <Button className="mt-8 w-full" onClick={handleBookCall}>
                Book a Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
