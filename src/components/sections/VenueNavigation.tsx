"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock,
  ExternalLink,
} from "lucide-react";

interface VenueNavigationProps {
  onPlanVisitClick?: () => void;
}

export const VenueNavigation: React.FC<VenueNavigationProps> = () => {
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Hidden+Treasures+Events+Center%2C+East+Legon%2C+Accra%2C+Ghana";

  return (
    <section
      id="venue"
      aria-label="Find The Venue: Hidden Treasures Events Center"
      className="py-16 sm:py-24 lg:py-28 bg-cream relative overflow-hidden border-b border-cream-border/70"
    >
      {/* Anchor identifier for internal links or legacy navigation */}
      <span id="service-info" className="absolute -top-24 pointer-events-none" />

      {/* Subtle architectural background texture matching the warm church theme */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A1412 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/*
          Venue Navigation Section:
          - Desktop (lg+): Polished horizontal split layout (Venue info on left, Location Card & Navigation CTA on right)
          - Tablet (md): 2-column or structured stack
          - Mobile (<md): Clean vertical stack with 44px+ touch targets
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl bg-cream-surface border border-cream-border p-6 sm:p-10 lg:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Venue & Event Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow / Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-cream-border text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                <span>FIND THE VENUE</span>
              </div>

              {/* Venue Name & Area */}
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-espresso leading-[1.12]">
                  Hidden Treasures Events Center
                </h2>
                <p className="text-base sm:text-lg text-warm-gray font-normal flex items-center gap-2">
                  <span>East Legon, Accra, Ghana</span>
                </p>
              </div>

              {/* Gathering Times Info Cards */}
              <div className="pt-2 border-t border-cream-border/70 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta block pt-1">
                  GATHERING TIMES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Thursday Gathering Card */}
                  <div className="group/vitem p-4 rounded-2xl bg-cream/90 border border-cream-border flex items-start gap-3.5 transition-all duration-300 hover:border-sand hover:-translate-y-0.5 hover:shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-cream-surface border border-cream-border text-terracotta flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover/vitem:scale-105">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-lg sm:text-xl font-medium text-espresso leading-snug">
                        9:00 AM
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-terracotta mt-0.5">
                        Thursday · Prophetic Feast
                      </div>
                      <p className="text-xs text-warm-gray mt-1 leading-relaxed">
                        Prophetic worship, scripture teaching, prayer, and ministry.
                      </p>
                    </div>
                  </div>

                  {/* Sunday Transformation Service Card */}
                  <div className="group/vitem p-4 rounded-2xl bg-cream/90 border border-cream-border flex items-start gap-3.5 transition-all duration-300 hover:border-sand hover:-translate-y-0.5 hover:shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-cream-surface border border-cream-border text-olive flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover/vitem:scale-105">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-lg sm:text-xl font-medium text-espresso leading-snug">
                        6:00 PM
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-espresso mt-0.5">
                        Sunday · The Transformation Service
                      </div>
                      <p className="text-xs text-warm-gray mt-1 leading-relaxed">
                        In-person worship encounter and transformative teaching.
                      </p>
                    </div>
                  </div>

                  {/* Sunday Live Streaming Card */}
                  <div className="group/vitem sm:col-span-2 p-4 rounded-2xl bg-cream/90 border border-cream-border flex items-start gap-3.5 transition-all duration-300 hover:border-sand hover:-translate-y-0.5 hover:shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-cream-surface border border-cream-border text-sand flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover/vitem:scale-105">
                      <Clock className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                      <div className="font-serif text-lg sm:text-xl font-medium text-espresso leading-snug">
                        6:30 PM
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-terracotta mt-0.5">
                        Sunday · Live Streaming
                      </div>
                      <p className="text-xs text-warm-gray mt-1 leading-relaxed">
                        Live streaming available every Sunday at 6:30 PM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Location Card & Prominent Navigation CTA */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl sm:rounded-3xl bg-cream border border-cream-border p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-sand/80 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                {/* Decorative Accent Ribbon */}
                <div className="h-1 w-full bg-gradient-to-r from-terracotta via-sand to-olive absolute top-0 left-0 right-0" />

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-cream-border/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-espresso">
                        Venue Location
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-warm-gray tracking-wider uppercase">
                      Google Maps
                    </span>
                  </div>

                  {/* Location Details Card */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-start gap-2.5">
                      <span className="text-lg leading-none mt-0.5 select-none" role="img" aria-label="Location pin">
                        📍
                      </span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso leading-snug">
                          Hidden Treasures Events Center
                        </h3>
                        <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mt-0.5">
                          East Legon, Accra, Ghana
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-warm-gray/90 leading-relaxed pt-1">
                    Tap below for turn-by-turn navigation. Opens Google Maps app on mobile or in your browser on desktop.
                  </p>
                </div>

                {/* Prominent GET DIRECTIONS CTA Button */}
                <div className="pt-6 mt-4 border-t border-cream-border/70">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full min-h-[50px] sm:min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-terracotta text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:bg-terracotta-hover hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                    aria-label="Get directions to Hidden Treasures Events Center in Google Maps (opens in new tab)"
                  >
                    <Navigation className="w-4 h-4 fill-current shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                    <span>GET DIRECTIONS</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
