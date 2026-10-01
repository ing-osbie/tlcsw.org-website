"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { featuredEvent as defaultFeaturedEvent } from "@/data/churchData";
import { FeaturedEventData } from "@/types";
import { Button } from "@/components/ui/Button";

interface FeaturedEventProps {
  event?: FeaturedEventData;
  onPlanVisitClick?: () => void;
  onLearnMoreClick?: () => void;
}

export const FeaturedEvent: React.FC<FeaturedEventProps> = ({
  event = defaultFeaturedEvent,
  onPlanVisitClick,
  onLearnMoreClick,
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay prevented by browser policy, poster shown
          });
        }
      };
      playVideo();
      video.addEventListener("loadedmetadata", playVideo);
      video.addEventListener("canplay", playVideo);
      return () => {
        video.removeEventListener("loadedmetadata", playVideo);
        video.removeEventListener("canplay", playVideo);
      };
    }
  }, []);

  return (
    <section
      id="hero"
      aria-label="Featured Event: 3 Days of Prophetic Service"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex items-center bg-cream overflow-hidden border-b border-cream-border/60"
    >
      {/* Anchor identifier for internal links */}
      <span id="featured-event" className="absolute -top-24 pointer-events-none" />

      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          src="/videos/about-background.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/about-background-poster.jpg"
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/about-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle Dark Overlay */}
      <div
        className="absolute inset-0 z-[1] bg-black/35 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle architectural background texture matching the warm church theme */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A1412 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/*
          Two-column featured event layout:
          - Desktop (lg+): Left 45%, Right 55% with generous gap
          - Tablet (md): 2 columns maintained
          - Mobile (<md): Clean vertical stack (Info on top, full flyer below)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[45fr_55fr] gap-10 md:gap-8 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Event Information (approx. 45%) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 sm:space-y-7 text-left order-1"
          >
            {/* Eyebrow Label & Theme */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-surface border border-cream-border text-xs font-semibold uppercase tracking-[0.2em] text-terracotta shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{event.eyebrow}</span>
              </div>
              {event.theme && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-light border border-olive/20 text-xs font-bold uppercase tracking-wider text-olive shadow-2xs">
                  <span>Theme: {event.theme}</span>
                </div>
              )}
            </div>

            {/* Large Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-espresso leading-[1.08]">
              {event.title}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-warm-gray leading-relaxed max-w-xl font-normal font-sans">
              {event.description}
            </p>

            {/* Structured Event Details Panel */}
            <div className="pt-2 border-t border-cream-border/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {/* Date & Schedule Card */}
                <div className="group/item p-4 rounded-2xl bg-cream-surface/70 border border-cream-border/80 flex items-start gap-3.5 transition-all duration-300 hover:border-sand hover:-translate-y-0.5 hover:shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-cream border border-cream-border text-terracotta flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover/item:scale-105">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-warm-gray block">
                      Date & Schedule
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-medium text-espresso mt-0.5 leading-snug">
                      {event.date}
                    </p>
                    <p className="text-xs sm:text-sm text-warm-gray font-sans mt-0.5">
                      {event.days}
                    </p>
                  </div>
                </div>

                {/* Service Time Card */}
                <div className="group/item p-4 rounded-2xl bg-cream-surface/70 border border-cream-border/80 flex items-start gap-3.5 transition-all duration-300 hover:border-sand hover:-translate-y-0.5 hover:shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-cream border border-cream-border text-olive flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover/item:scale-105">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-warm-gray block">
                      Service Time
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-medium text-espresso mt-0.5 leading-snug">
                      {event.time}
                    </p>
                    <p className="text-xs sm:text-sm text-warm-gray font-sans mt-0.5">
                      Doors open at 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Venue Location Card */}
                <div className="group/item sm:col-span-2 p-4 rounded-2xl bg-cream-surface/70 border border-cream-border/80 flex items-start gap-3.5 transition-all duration-300 hover:border-sand hover:-translate-y-0.5 hover:shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-cream border border-cream-border text-sand flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover/item:scale-105">
                    <MapPin className="w-5 h-5 text-terracotta" />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-warm-gray block">
                        Venue Location
                      </span>
                      <p className="font-serif text-lg sm:text-xl font-medium text-espresso mt-0.5 leading-snug">
                        {event.location}
                      </p>
                      <p className="text-xs sm:text-sm text-warm-gray font-sans mt-0.5">
                        {event.area}
                      </p>
                    </div>
                    {event.ministers && event.ministers.length > 0 && (
                      <div className="sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-cream-border/80">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-warm-gray block">
                          Ministering
                        </span>
                        <p className="font-serif text-base sm:text-lg font-medium text-espresso mt-0.5">
                          {event.ministers.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="https://wa.me/233207018121?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20visit%20for%20the%203%20Days%20Prophetic%20Service."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onPlanVisitClick}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="uppercase tracking-wider font-semibold text-xs sm:text-sm"
              >
                PLAN YOUR VISIT
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onLearnMoreClick}
                className="uppercase tracking-wider font-semibold text-xs sm:text-sm"
              >
                LEARN MORE
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Actual Prophetic Service Flyer (approx. 55%) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end order-2"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] xl:max-w-[520px] group/flyer">
              {/* Subtle ambient warm backlight glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-terracotta/15 via-sand/20 to-olive/10 rounded-3xl blur-2xl -z-10 opacity-60 group-hover/flyer:opacity-85 transition-opacity duration-500 pointer-events-none" />

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-espresso/[0.08] border border-cream-border/80 bg-cream-surface/20 transition-all duration-500 group-hover/flyer:shadow-2xl group-hover/flyer:-translate-y-1">
                <Image
                  src={event.image}
                  alt={`${event.title} flyer - The Lord's Covenant Sanctuary`}
                  width={6248}
                  height={7620}
                  priority
                  style={{ objectFit: "contain" }}
                  className="w-full h-auto object-contain block select-none"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 520px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 cursor-pointer select-none group/scroll"
        onClick={onLearnMoreClick}
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-cream-light/85 font-medium group-hover/scroll:text-sand transition-colors drop-shadow-xs">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-cream-light/60 flex items-start justify-center p-1 group-hover/scroll:border-sand transition-colors shadow-2xs"
        >
          <div className="w-1 h-1.5 rounded-full bg-cream-light group-hover/scroll:bg-sand transition-colors" />
        </motion.div>
      </motion.div>

      {/* Gentle transition gradient into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-surface via-cream-surface/40 to-transparent pointer-events-none z-[3]"
        aria-hidden="true"
      />
    </section>
  );
};
