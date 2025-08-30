
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BookACall = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
            Book Your Strategy Call
          </h1>
          <p className="text-lg text-white/70 mb-10">
            Pick a time that works for you. Let's talk about building something unforgettable.
          </p>
          <div className="glass-morphism rounded-xl p-8 shadow-xl">
            <div className="mb-6">
              <p className="text-white/70 mb-2">Expected duration: 15-30 minutes</p>
              <h2 className="text-2xl font-semibold text-primary">Strategy Call with Infisane</h2>
            </div>
            
            {/* Calendly inline widget */}
            <div 
              className="rounded-lg overflow-hidden bg-background/50 h-[600px] w-full"
              style={{ 
                height: "630px",
                border: "1px solid rgba(255, 255, 255, 0.1)" 
              }}
            >
              {/* Fallback message until Calendly is properly integrated */}
              <div className="flex flex-col items-center justify-center h-full p-8">
                <p className="text-xl text-white/70 mb-6">Our booking calendar will appear here. Until then, you can:</p>
                <a 
                  href="mailto:infisaneltd@gmail.com?subject=Strategy Call with Infisane" 
                  className="text-primary hover:underline text-lg"
                >
                  Email us to schedule your call
                </a>
                <p className="mt-12 text-white/50 text-sm">
                  When implemented, this will display a calendar widget where you can select an available time slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookACall;
