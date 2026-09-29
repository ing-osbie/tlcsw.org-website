"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Play, Volume2, Calendar, BookOpen, Share2 } from "lucide-react";
import { Sermon } from "@/types";
import { Button } from "./Button";

export interface SermonPlayerModalProps {
  sermon: Sermon | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SermonPlayerModal: React.FC<SermonPlayerModalProps> = ({
  sermon,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !sermon) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sermon-player-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-espresso/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-espresso-surface text-cream-light rounded-2xl shadow-2xl border border-espresso-border overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sermon player"
          className="absolute top-4 right-4 z-20 rounded-full p-2 bg-black/40 text-cream-light hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Player Simulation Canvas */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <Image
            src={sermon.image}
            alt={sermon.title}
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-black/30" />

          {/* Big Play Button */}
          <div className="relative z-10 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-terracotta text-white flex items-center justify-center shadow-2xl mx-auto transform transition-transform group-hover:scale-110">
              <Play className="w-9 h-9 fill-current ml-1" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-cream/80">
              Click to Stream ({sermon.duration})
            </p>
          </div>
        </div>

        {/* Sermon Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-sand">
              <span>{sermon.series}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {sermon.date}
              </span>
            </div>

            <h3
              id="sermon-player-title"
              className="font-serif text-2xl sm:text-3xl font-medium text-cream-light"
            >
              {sermon.title}
            </h3>

            <p className="text-sm text-cream/70 flex items-center gap-2">
              <span className="font-semibold text-cream">
                {sermon.speaker}
              </span>
              <span>({sermon.speakerRole})</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-sand">
                <BookOpen className="w-3.5 h-3.5" />
                {sermon.scripture}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-espresso-border">
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                icon={<Play className="w-3.5 h-3.5 fill-current" />}
                iconPosition="left"
                onClick={() => alert("Connecting to sermon video stream...")}
              >
                Watch Video
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                icon={<Volume2 className="w-3.5 h-3.5" />}
                iconPosition="left"
                onClick={() => alert("Opening sermon podcast audio...")}
              >
                Listen (Audio)
              </Button>
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Sermon link copied to clipboard!");
                }
              }}
              className="text-xs text-cream/70 hover:text-sand flex items-center gap-1.5 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
