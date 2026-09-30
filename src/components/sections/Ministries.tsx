"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ministriesData.map((ministry, idx) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
              onClick={onPlanVisitClick}
              className="group cursor-pointer relative rounded-3xl overflow-hidden bg-espresso shadow-md hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 ease-out flex flex-col justify-end min-h-[380px] sm:min-h-[420px] border border-cream-border hover:border-sand"
            >
              {/* Background Photography with Slow Zoom */}
              <div className="absolute inset-0">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                />
                {/* Rich Gradient Vignette for Editorial Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-cream-light leading-snug group-hover:text-sand-light transition-colors">
                    {ministry.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
                    {ministry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
