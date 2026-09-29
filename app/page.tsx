"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeaturedEvent } from "@/components/sections/FeaturedEvent";
import { Welcome } from "@/components/sections/Welcome";
import { VenueNavigation } from "@/components/sections/VenueNavigation";
import { Mission } from "@/components/sections/Mission";
import { Ministries } from "@/components/sections/Ministries";
import { Sermons } from "@/components/sections/Sermons";
import { Events } from "@/components/sections/Events";
import { CallToAction } from "@/components/sections/CallToAction";
import { GiveModal } from "@/components/ui/GiveModal";

export default function Home() {
  const [isGiveOpen, setIsGiveOpen] = useState(false);
  const [showFloatingWhatsapp, setShowFloatingWhatsapp] = useState(false);

  const planVisitWhatsappUrl =
    "https://wa.me/233207018121?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20visit%20to%20the%20church.";

  const handlePlanVisit = () => {
    window.open(planVisitWhatsappUrl, "_blank", "noopener,noreferrer");
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowFloatingWhatsapp(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#give") {
        setIsGiveOpen(true);
      }
      if (window.location.hash === "#plan-visit") {
        handlePlanVisit();
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToEvents = () => {
    const el = document.getElementById("events");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-espresso">
      {/* Navigation */}
      <Navbar
        onPlanVisitClick={handlePlanVisit}
        onGiveClick={() => setIsGiveOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Primary Hero: 3 Days of Prophetic Service Featured Event */}
        <FeaturedEvent
          onPlanVisitClick={handlePlanVisit}
          onLearnMoreClick={handleScrollToEvents}
        />
        <Welcome />
        <VenueNavigation onPlanVisitClick={handlePlanVisit} />
        <Mission onLearnMoreClick={handleScrollToAbout} />
        <Ministries onPlanVisitClick={handlePlanVisit} />
        <Sermons />
        <Events onPlanVisitClick={handlePlanVisit} />
        <CallToAction onPlanVisitClick={handlePlanVisit} />
      </main>

      {/* Footer */}
      <Footer onGiveClick={() => setIsGiveOpen(true)} />

      {/* Interactive Give Online Modal */}
      <GiveModal
        isOpen={isGiveOpen}
        onClose={() => setIsGiveOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <AnimatePresence>
        {showFloatingWhatsapp && (
          <motion.aside
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-40"
            aria-label="WhatsApp quick chat"
          >
            <a
              href="https://wa.me/233207018121"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-108 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              aria-label="Chat with The Lord's Covenant Sanctuary on WhatsApp"
            >
              {/* Subtle ambient pulse ring */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 duration-1000" />
              <svg
                className="w-7 h-7 fill-current transform group-hover:scale-105 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.301-.15-1.783-.88-2.06-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.3-.019-.463.132-.612.136-.134.301-.35.452-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.929-2.24-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.375s-1.054 1.03-1.054 2.515 1.08 2.915 1.23 3.115c.15.2 2.126 3.246 5.151 4.553.72.311 1.282.497 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.783-.73 2.034-1.435.251-.705.251-1.31.176-1.435-.076-.125-.276-.2-.577-.35zm-5.433 7.618c-1.921 0-3.806-.516-5.454-1.495l-.391-.232-4.053 1.063 1.082-3.952-.254-.405c-1.074-1.71-1.64-3.693-1.64-5.733 0-5.952 4.843-10.796 10.798-10.796 2.884 0 5.595 1.123 7.632 3.161 2.037 2.038 3.158 4.75 3.157 7.635 0 5.954-4.843 10.798-10.799 10.798zm8.975-18.435c-2.398-2.399-5.586-3.565-8.975-3.565-6.992 0-12.682 5.69-12.684 12.684 0 2.235.582 4.417 1.688 6.334l-1.793 6.551 6.702-1.758c1.847 1.008 3.927 1.54 6.084 1.541h.005c6.992 0 12.684-5.691 12.687-12.686 0-3.39-.1.319-1.32-6.577-3.714-8.977z" />
              </svg>
            </a>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
