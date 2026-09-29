"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ministriesData } from "@/data/churchData";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface MinistriesProps {
  onPlanVisitClick?: () => void;
}

export const Ministries: React.FC<MinistriesProps> = ({ onPlanVisitClick }) => {
  return (
    <section
      id="ministries"
      aria-label="Ministries and Communities"
      className="py-20 sm:py-28 lg:py-32 bg-cream relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 sm:mb-18"
        >
          <SectionHeading
            kicker="Life Together"
            title="Communities of Belonging"
            subtitle="Faith is not meant to be walked alone. Discover spaces crafted for friendship, honest conversations, and spiritual growth across every stage of life."
            alignment="split"
          />
        </motion.div>

        {/* Editorial Image Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ministriesData.map((ministry, idx) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
              onClick={onPlanVisitClick}
              className="group cursor-pointer relative rounded-3xl overflow-hidden bg-espresso shadow-md hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 ease-out flex flex-col justify-end min-h-[420px] border border-cream-border hover:border-sand"
            >
              {/* Background Photography with Slow Zoom */}
              <div className="absolute inset-0">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
                {/* Rich Gradient Vignette for Editorial Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
                {/* Top Badge & Age Group */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-cream-light/20 backdrop-blur-md text-cream-light border border-white/20 transition-colors group-hover:bg-cream-light/30">
                    {ministry.category}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-cream-light/10 group-hover:bg-terracotta border border-white/20 group-hover:border-terracotta flex items-center justify-center text-cream-light transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Title, Meeting Time & Summary */}
                <div className="space-y-3 pt-12">
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-sand">
                      {ministry.meetingTime}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-cream-light leading-snug group-hover:text-sand-light transition-colors">
                      {ministry.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-cream/80 line-clamp-3 leading-relaxed">
                    {ministry.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sand group-hover:text-white transition-colors">
                    <span>Explore Community</span>
                    <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
