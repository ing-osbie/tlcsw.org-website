"use client";

import React from "react";
import { Clock, Calendar, Navigation, ExternalLink, Video } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface EventsProps {
  onPlanVisitClick?: () => void;
}

export const Events: React.FC<EventsProps> = () => {
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Hidden+Treasures+Events+Center%2C+East+Legon%2C+Accra%2C+Ghana";

  return (
    <section
      id="events"
      aria-label="Upcoming Event and Gathering Times"
      className="py-20 sm:py-28 lg:py-32 bg-cream relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          kicker="EVENTS"
          title="UPCOMING EVENT"
          subtitle="Join us for three powerful days of worship, prayer, teaching and prophetic ministry."
          alignment="split"
          actionSlot={
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso/[0.04] text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            >
              <Navigation className="w-3.5 h-3.5 text-terracotta" />
              <span>Venue Directions</span>
            </a>
          }
          className="mb-14 sm:mb-18"
        />

        {/* Featured Real Event Card */}
        <div className="space-y-6">
          <div className="group bg-cream-surface hover:bg-cream-light border border-cream-border hover:border-sand rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Date Badge Column */}
              <div className="lg:col-span-3 flex items-center lg:flex-col lg:items-start gap-4 lg:gap-2">
                <div className="px-5 py-3 rounded-2xl bg-cream border border-cream-border text-center shadow-xs min-w-[90px]">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta block">
                    OCT
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-medium text-espresso block leading-tight">
                    1 — 4
                  </span>
                </div>

                <div className="lg:pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-olive bg-olive-light px-3 py-1 rounded-full inline-block">
                    Worship • Prayer • Teaching • Prophetic Ministry
                  </span>
                </div>
              </div>

              {/* Event Details Column */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso group-hover:text-terracotta transition-colors leading-snug">
                  3 DAYS OF PROPHETIC SERVICE
                </h3>

                <p className="text-sm text-warm-gray leading-relaxed max-w-xl">
                  Join us for three powerful days of worship, prayer, teaching and prophetic ministry.
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-warm-gray pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-espresso">
                    <Calendar className="w-3.5 h-3.5 text-terracotta" />
                    1st — 4th October · Thursday — Sunday
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-terracotta" />
                    6:30 PM each night (Doors open at 6:00 PM)
                  </span>

                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-espresso hover:text-terracotta transition-colors font-medium group/loc"
                  >
                    <span role="img" aria-label="Location pin" className="text-terracotta">
                      📍
                    </span>
                    <span>Hidden Treasures Events Center, East Legon, Accra, Ghana</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/loc:opacity-100" />
                  </a>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-3 flex lg:justify-end items-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-cream-border">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-terracotta text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:bg-terracotta-hover hover:shadow transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  aria-label="Get directions to Hidden Treasures Events Center in Google Maps (opens in new tab)"
                >
                  <Navigation className="w-4 h-4 fill-current shrink-0" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Weekly Gathering Times Section */}
        <div className="mt-12 rounded-3xl bg-cream-surface border border-cream-border p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cream-border">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta block">
                Weekly Services
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso mt-1">
                GATHERING TIMES
              </h3>
            </div>
            <a
              href="https://www.youtube.com/live/sc0q-iA1QW4?si=aNpYABMfwmuih_zb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-olive hover:text-terracotta bg-olive-light px-3.5 py-1.5 rounded-full w-fit transition-colors group/live"
              title="Watch Live on YouTube (opens in new tab)"
            >
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              <Video className="w-3.5 h-3.5" />
              <span>Live streaming available every Sunday at 6:30 PM</span>
              <span className="font-semibold underline ml-0.5 group-hover/live:text-terracotta">Watch Live</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Thursday Service Card */}
            <div className="p-5 rounded-2xl bg-cream border border-cream-border/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cream-surface border border-cream-border text-terracotta flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-serif text-2xl sm:text-3xl font-medium text-espresso">
                  9:00 AM
                </div>
                <div className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                  Thursday · Prophetic Feast
                </div>
                <p className="text-xs text-warm-gray leading-relaxed pt-0.5">
                  Prophetic worship, scripture teaching, prayer, and ministry.
                </p>
              </div>
            </div>

            {/* Sunday Service Card */}
            <div className="p-5 rounded-2xl bg-cream border border-cream-border/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cream-surface border border-cream-border text-olive flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-serif text-2xl sm:text-3xl font-medium text-espresso">
                  6:00 PM
                </div>
                <div className="text-sm font-semibold text-espresso uppercase tracking-wider">
                  Sunday · The Transformation Service
                </div>
                <p className="text-xs text-warm-gray leading-relaxed pt-0.5">
                  In-person worship encounter and transformative teaching.
                </p>
                <a
                  href="https://www.youtube.com/live/sc0q-iA1QW4?si=aNpYABMfwmuih_zb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-olive hover:text-terracotta font-medium pt-1 flex items-center gap-1.5 transition-colors group/liveSunday"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                  <span>Interactive livestream begins at 6:30 PM · <span className="underline group-hover/liveSunday:text-terracotta">Watch Live</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
