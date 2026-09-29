"use client";

import React from "react";
import { ArrowRight, BookOpen, HeartHandshake, Compass } from "lucide-react";
import { missionContent } from "@/data/churchData";
import { Button } from "@/components/ui/Button";

interface MissionProps {
  onLearnMoreClick?: () => void;
}

export const Mission: React.FC<MissionProps> = ({ onLearnMoreClick }) => {
  return (
    <section
      id="mission"
      aria-label="Mission and Beliefs"
      className="py-20 sm:py-28 lg:py-32 bg-cream-surface relative overflow-hidden border-t border-cream-border"
    >
      {/* Decorative architectural background line art */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full border border-sand-border/50 pointer-events-none opacity-40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[380px] h-[380px] rounded-full border border-sand-border/30 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-cream-border">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-terracotta" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
                {missionContent.kicker}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-espresso leading-[1.12]">
              Knowing God. <br />
              <span className="italic font-normal text-terracotta">Loving</span>{" "}
              People. <br />
              Changing Lives.
            </h2>
          </div>

          {/* Right Column: Narrative & CTA */}
          <div className="lg:col-span-5 space-y-6 lg:pt-6">
            <p className="text-base sm:text-lg text-espresso/90 leading-relaxed font-normal">
              {missionContent.subheading}
            </p>

            <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
              {missionContent.description}
            </p>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="md"
                onClick={onLearnMoreClick}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Learn More About Our Beliefs
              </Button>
            </div>
          </div>
        </div>

        {/* Three Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-16">
          {missionContent.pillars.map((pillar, idx) => {
            const icons = [BookOpen, HeartHandshake, Compass];
            const Icon = icons[idx] || Compass;

            return (
              <div
                key={pillar.title}
                className="group p-6 sm:p-8 rounded-2xl bg-cream border border-cream-border hover:border-sand hover:shadow-lg transition-all duration-300 relative space-y-4"
              >
                {/* Pillar Header with Roman / Arabic Numeral */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl text-sand/80 font-medium">
                    {pillar.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso group-hover:text-terracotta transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
