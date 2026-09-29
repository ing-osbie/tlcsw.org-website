"use client";

import React, { useState } from "react";
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
import { churchInfo } from "@/data/churchData";

export default function Home() {
  const [isGiveOpen, setIsGiveOpen] = useState(false);

  const handlePlanVisit = () => {
    window.open(churchInfo.socials.whatsapp, "_blank", "noopener,noreferrer");
  };

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
    </div>
  );
}
