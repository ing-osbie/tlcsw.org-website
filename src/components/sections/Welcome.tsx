"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { welcomeContent } from "@/data/churchData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Welcome: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Welcome and Introduction"
      className="py-20 sm:py-28 lg:py-32 bg-cream-surface border-t border-b border-cream-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 sm:mb-18"
        >
          <SectionHeading
            kicker={welcomeContent.badge}
            title={welcomeContent.headline}
            alignment="left"
            className="max-w-3xl"
          />
        </motion.div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story narrative & quote */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <p className="text-lg sm:text-xl text-espresso font-normal leading-relaxed">
              {welcomeContent.leadParagraph}
            </p>

            <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
              {welcomeContent.bodyParagraph}
            </p>

            {/* Editorial Scripture Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-cream border border-cream-border relative transition-all duration-300 hover:border-sand hover:shadow-md hover:-translate-y-0.5">
              <span className="font-serif text-4xl text-sand/60 select-none absolute top-3 left-4">
                “
              </span>
              <div className="relative z-10 pl-4 space-y-2">
                <blockquote className="font-serif italic text-lg sm:text-xl text-espresso leading-snug">
                  {welcomeContent.quote}
                </blockquote>
                <cite className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta not-italic block">
                  — {welcomeContent.quoteReference}
                </cite>
              </div>
            </div>

            {/* Stats Row with interactive hover & staggered reveal */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cream-border">
              {welcomeContent.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.45 }}
                  className="group/stat space-y-1 p-2 -m-2 rounded-xl transition-all duration-300 hover:bg-cream/70 hover:-translate-y-0.5"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-medium text-espresso group-hover/stat:text-terracotta transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-warm-gray hidden sm:block leading-tight">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Editorial Multi-Image Composition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Primary Image */}
              <div className="col-span-8 sm:col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-cream-border group/mainimg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <Image
                  src={welcomeContent.mainImage}
                  alt={welcomeContent.mainImageAlt}
                  fill
                  className="object-cover group-hover/mainimg:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 70vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
              </div>

              {/* Offset Secondary Image & Badge */}
              <div className="col-span-4 sm:col-span-4 space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-cream-border group/subimg transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5">
                  <Image
                    src={welcomeContent.secondaryImage}
                    alt={welcomeContent.secondaryImageAlt}
                    fill
                    className="object-cover group-hover/subimg:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 30vw, 200px"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-cream border border-cream-border space-y-2 transition-all duration-300 hover:border-sand hover:shadow-xs">
                  <div className="w-10 h-7 relative">
                    <Image
                      src="/logo-emblem-dark.png"
                      alt="The Lord's Covenant Sanctuary Mark"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-olive block">
                      Our Ethos
                    </span>
                    <p className="font-serif text-sm font-medium text-espresso leading-snug">
                      Rooted in grace, open to all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
