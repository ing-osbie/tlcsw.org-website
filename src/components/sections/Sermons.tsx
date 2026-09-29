"use client";

import React from "react";
import Image from "next/image";
import { Play, Calendar, ArrowRight, Video } from "lucide-react";
import { sermonsData, churchInfo } from "@/data/churchData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const Sermons: React.FC = () => {
  return (
    <section
      id="sermons"
      aria-label="Recent Sermons and Teachings"
      className="py-20 sm:py-28 lg:py-32 bg-cream-surface border-t border-b border-cream-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          kicker="Scripture & Teaching"
          title="Messages for Your Journey"
          subtitle="Explore recent biblical teachings that speak hope, wisdom, and challenge into everyday contemporary life."
          alignment="split"
          actionSlot={
            <Button
              variant="outline"
              size="md"
              href={churchInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Browse Full Archive
            </Button>
          }
          className="mb-14 sm:mb-18"
        />

        {/* 3 Featured Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermonsData.map((sermon) => (
            <div
              key={sermon.id}
              className="group bg-cream rounded-3xl overflow-hidden border border-cream-border hover:border-sand hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <a
                href={sermon.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${sermon.title} on YouTube (opens in new tab)`}
                className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-espresso block"
              >
                <Image
                  src={sermon.image}
                  alt={sermon.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-cream-light/90 text-espresso group-hover:bg-terracotta group-hover:text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Series Pill at bottom */}
                <div className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-sand">
                  {sermon.series}
                </div>
              </a>

              {/* Text Meta Container */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-warm-gray">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-terracotta" />
                      {sermon.date}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-olive">
                      {sermon.scripture}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso group-hover:text-terracotta transition-colors leading-snug">
                    <a
                      href={sermon.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {sermon.title}
                    </a>
                  </h3>
                </div>

                <div className="pt-4 border-t border-cream-border flex items-center justify-between text-xs text-warm-gray">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-espresso font-semibold text-[11px]">
                      {sermon.speaker.replace(/^Pastor\s+/i, "").charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-espresso">
                        {sermon.speaker}
                      </div>
                      <div className="text-[10px] text-warm-gray">
                        {sermon.speakerRole}
                      </div>
                    </div>
                  </div>

                  <a
                    href={sermon.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-terracotta group-hover:underline cursor-pointer flex items-center gap-1"
                    aria-label={`Watch ${sermon.title} on YouTube (opens in new tab)`}
                  >
                    Watch
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Broadcast Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-cream border border-cream-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-olive-light text-olive flex items-center justify-center shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-espresso">
                Live Online Gathering
              </h4>
              <p className="text-xs sm:text-sm text-warm-gray mt-0.5">
                Join our real-time interactive livestream every Sunday at 6:30 PM on YouTube & Facebook.
              </p>
            </div>
          </div>

          <Button
            variant="secondary"
            size="md"
            href={sermonsData[0].videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Play className="w-3.5 h-3.5 fill-current" />}
            iconPosition="left"
            className="shrink-0"
          >
            Watch Livestream
          </Button>
        </div>
      </div>
    </section>
  );
};
