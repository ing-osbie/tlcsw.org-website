"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, HeartHandshake, Compass } from "lucide-react";
import { missionContent } from "@/data/churchData";
import { Button } from "@/components/ui/Button";

interface MissionProps {
  onLearnMoreClick?: () => void;
}

export const Mission: React.FC<MissionProps> = () => {
  return (
    <section
      id="mission"
      aria-label="Mission"
      className="py-20 sm:py-28 lg:py-32 bg-cream-surface relative overflow-hidden border-t border-cream-border"
    >
      {/* Decorative architectural background line art */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full border border-sand-border/50 pointer-events-none opacity-40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[380px] h-[380px] rounded-full border border-sand-border/30 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-4xl space-y-4"
        >
          {/* Kicker */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-terracotta" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
              {missionContent.kicker}
            </span>
          </div>

          {/* Main Statement */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-espresso leading-[1.2]">
            {missionContent.headline}
          </h2>
        </motion.div>

        {/* Editorial Pillars Grid */}
        {missionContent.pillars && missionContent.pillars.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-16 mt-16 border-t border-cream-border">
            {missionContent.pillars.map((pillar, idx) => {
              const icons = [BookOpen, HeartHandshake, Compass];
              const Icon = icons[idx] || Compass;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                  className="group p-6 sm:p-8 rounded-2xl bg-cream border border-cream-border hover:border-sand hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out relative space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-2xl sm:text-3xl text-sand/80 font-medium transition-colors duration-300 group-hover:text-terracotta">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso group-hover:text-terracotta transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
