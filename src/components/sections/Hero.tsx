"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Calendar, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { heroContent, churchInfo } from "@/data/churchData";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onPlanVisitClick?: () => void;
  onWatchLatestClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlanVisitClick,
  onWatchLatestClick,
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
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center bg-cream overflow-hidden"
    >
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

      {/* Subtle architectural background grid / watermark pattern */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A1412 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Kicker Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-surface border border-cream-border text-xs font-semibold uppercase tracking-[0.2em] text-terracotta"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{heroContent.kicker}</span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-medium tracking-tight text-espresso leading-[1.08]">
                Faith. <br />
                <span className="italic font-normal text-terracotta">
                  Community.
                </span>{" "}
                <br />
                Purpose.
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-xl text-warm-gray leading-relaxed max-w-xl font-normal"
            >
              {heroContent.supportingCopy}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onPlanVisitClick}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {heroContent.primaryCta.label}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onWatchLatestClick}
                icon={<Play className="w-4 h-4 fill-current text-terracotta" />}
                iconPosition="left"
              >
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Small Service Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="pt-4 sm:pt-6 border-t border-cream-border flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm text-warm-gray"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
                <span className="font-semibold text-espresso">
                  {heroContent.serviceHighlight}
                </span>
              </div>
              <span className="hidden sm:inline text-cream-border">•</span>
              <span className="text-warm-gray">
                {heroContent.serviceNote}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Cinematic Photography Presentation */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Asymmetric Outer Frame with editorial border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-espresso aspect-[4/5] sm:aspect-[5/6] max-h-[580px] w-full border border-cream-border">
                <Image
                  src={heroContent.heroImage}
                  alt={heroContent.heroImageAlt}
                  fill
                  priority
                  className="object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                {/* Subtle warm gradient vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/10" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-cream-light/95 backdrop-blur-md border border-cream-border shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-terracotta block">
                        Sunday Gathering
                      </span>
                      <p className="font-serif text-lg sm:text-xl font-medium text-espresso mt-0.5">
                        Sunday at 6:00 PM
                      </p>
                      <p className="text-xs text-warm-gray flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-olive" />
                        <span>{churchInfo.address.street}, East Legon</span>
                      </p>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={onPlanVisitClick}
                      className="shrink-0 text-xs px-3.5 py-1.5"
                    >
                      Plan Visit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden sm:flex absolute -top-5 -right-5 bg-sand-light border border-sand-border rounded-2xl p-4 shadow-xl items-center gap-3 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-full bg-olive-light text-olive flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-warm-gray font-semibold block">
                    All Are Welcome
                  </span>
                  <span className="text-xs font-serif font-medium text-espresso block">
                    Multi-Generational Community
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
