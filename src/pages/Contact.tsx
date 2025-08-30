
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const INITIAL = { name: "", email: "", type: "", message: "" };
const PROJECT_TYPES = [
  "Website",
  "App",
  "Branding",
  "Marketing",
  "Consultation",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // This simulates sending an email - in production, you would integrate with a service like EmailJS or Formspree
      console.log("Sending form to infisaneltd@gmail.com", form);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      toast({
        title: "Message sent",
        description: "We'll be in touch with you shortly.",
        variant: "default",
      });
      
      setTimeout(() => {
        setForm(INITIAL);
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient">
          Let's Build Something That Lasts.
        </h1>
        <p className="text-lg text-white/70 mb-10 max-w-xl">Reach out to share your vision, project idea, or partnership goals. We'll reply lightning fast.</p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="space-y-6 glass-morphism p-8 rounded-xl shadow-xl" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white/70 mb-1" htmlFor="name">Name</label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-white/70 mb-1" htmlFor="email">Email</label>
              <Input id="email" name="email" value={form.email} onChange={handleChange} type="email" required placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-white/70 mb-1" htmlFor="type">Project Type</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-base w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                style={{ background: 'hsl(var(--background))' }}
              >
                <option value="" disabled>Select type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/70 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="rounded-md border border-input bg-background px-3 py-2 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button 
              size="lg" 
              className="w-full font-bold text-lg py-3 mt-2" 
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Let's Talk"}
            </Button>
            {submitted && (
              <div className="text-green-500 text-center pt-2 animate-fade-in">
                Thank you! We'll be in touch soon.
              </div>
            )}
          </form>
          {/* Contact details + Virtual presence */}
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Contact</h3>
              <div className="flex items-center gap-3 mb-1 text-white/80">
                <Mail className="text-primary" size={20} />
                <span>infisaneltd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mb-1 text-white/80">
                <Phone className="text-primary" size={20} />
                <span>+2348142551455</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Virtual Presence / HQ</h3>
              <div className="bg-secondary rounded-lg p-4 text-white/70">
                Manhattan NY, Lagos, Abuja Nigeria<br />
                Remote-First Global Team<br />
                <span className="text-xs italic">Map integration coming soon</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <a href="https://www.instagram.com/infisane.ltd" className="text-primary hover:underline" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com/infisane" className="text-primary hover:underline" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gradient">Ready to take the next step?</h2>
          <Button 
            size="lg" 
            className="font-bold px-8 py-4 text-lg mt-2" 
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

export default Contact;
