"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, Navigation, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventsData } from "@/data/churchData";

interface EventsProps {
  onPlanVisitClick?: () => void;
}

export const Events: React.FC<EventsProps> = ({ onPlanVisitClick }) => {
  const event = eventsData[0];
  const googleMapsDirectionsUrl =
    event?.href ||
    "https://www.google.com/maps/dir/?api=1&destination=Hidden+Treasures+Events+Center%2C+East+Legon%2C+Accra%2C+Ghana";

  return (
    <section
      id="events"
      aria-label="Upcoming Events"
      className="py-20 sm:py-28 lg:py-32 bg-cream relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            kicker="EVENTS"
            title="UPCOMING EVENT"
            subtitle="Join us for SHIFT · Prophetic Encounter with Joshua A. Ntim, Uncle Ato, and Becky Bonney."
            alignment="split"
            actionSlot={
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso/[0.04] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5 text-terracotta" />
                <span>Venue Directions</span>
              </a>
            }
            className="mb-14 sm:mb-18"
          />
        </motion.div>

        {/* Featured Upcoming Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl bg-cream-surface border border-cream-border p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Event Information (lg: 7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="px-3.5 py-1 rounded-full bg-cream border border-cream-border text-xs font-semibold uppercase tracking-wider text-terracotta shadow-2xs">
                  {event.month} {event.day}
                </div>
                <div className="px-3.5 py-1 rounded-full bg-olive-light border border-olive/20 text-xs font-semibold uppercase tracking-wider text-olive">
                  {event.category}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-espresso leading-[1.12]">
                  {event.title}
                </h3>
                <p className="text-base text-warm-gray leading-relaxed max-w-xl">
                  {event.description}
                </p>
              </div>

              {/* Ministers Badge List */}
              {event.ministers && event.ministers.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-warm-gray flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-terracotta" />
                    <span>Ministers:</span>
                  </span>
                  {event.ministers.map((minister) => (
                    <span
                      key={minister}
                      className="px-3 py-1 rounded-full bg-cream border border-cream-border text-xs font-semibold text-espresso shadow-2xs"
                    >
                      {minister}
                    </span>
                  ))}
                </div>
              )}

              {/* Structured Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-cream-border/80">
                <div className="p-3.5 rounded-2xl bg-cream border border-cream-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-surface border border-cream-border text-terracotta flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-warm-gray block">
                      Date
                    </span>
                    <p className="font-serif text-base font-medium text-espresso mt-0.5">
                      {event.date}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-cream border border-cream-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-surface border border-cream-border text-olive flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-warm-gray block">
                      Time
                    </span>
                    <p className="font-serif text-base font-medium text-espresso mt-0.5">
                      {event.time}
                    </p>
                    <span className="text-[11px] text-warm-gray block">Doors open at 4:30 PM</span>
                  </div>
                </div>

                <div className="sm:col-span-2 p-3.5 rounded-2xl bg-cream border border-cream-border flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream-surface border border-cream-border text-sand flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-terracotta" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-warm-gray block">
                      Location
                    </span>
                    <p className="font-serif text-base font-medium text-espresso mt-0.5">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <a
                  href="https://wa.me/233207018121?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20visit%20for%20the%20SHIFT%20Prophetic%20Encounter."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onPlanVisitClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:bg-terracotta-hover hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Plan Your Visit</span>
                </a>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso/[0.04] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <Navigation className="w-4 h-4 text-terracotta" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Flyer (lg: 5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-cream-border group/flyer">
                <Image
                  src={event.image || "/images/shift-web.jpg"}
                  alt={`${event.title} flyer - The Lord's Covenant Sanctuary`}
                  width={1200}
                  height={720}
                  priority
                  className="w-full h-auto object-cover group-hover/flyer:scale-103 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
