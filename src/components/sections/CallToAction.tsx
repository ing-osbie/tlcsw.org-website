"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { callToActionContent, churchInfo } from "@/data/churchData";
import { Button } from "@/components/ui/Button";

interface CallToActionProps {
  onPlanVisitClick?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onPlanVisitClick,
}) => {
  return (
    <section
      id="community"
      aria-label="Community Call to Action"
      className="relative py-28 sm:py-36 bg-espresso text-cream overflow-hidden"
    >
      {/* Background Photography with Warm Espresso Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src={callToActionContent.backgroundImage}
          alt="Warm light on church community"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Editorial Gradients for Flawless Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8"
      >
        {/* Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-[0.2em] text-sand hover:bg-cream/15 transition-colors duration-300">
          <Sparkles className="w-3.5 h-3.5 text-sand" />
          <span>{callToActionContent.kicker}</span>
        </div>

        {/* Major Editorial Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-cream-light leading-[1.08] max-w-3xl mx-auto">
          {callToActionContent.headline}
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed font-normal">
          {callToActionContent.supportingCopy}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            href="https://wa.me/233207018121?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20visit%20to%20the%20church."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onPlanVisitClick}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {callToActionContent.primaryButtonText}
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            href={`mailto:${churchInfo.contact.email}`}
            icon={<Mail className="w-4 h-4" />}
            iconPosition="left"
          >
            {callToActionContent.secondaryButtonText}
          </Button>
        </div>

        {/* Scripture / Community Subtitle */}
        <div className="pt-8 text-xs uppercase tracking-[0.25em] text-sand/80 font-medium">
          Thursday at 9:00 AM · Sunday at 6:00 PM · East Legon, Accra, Ghana
        </div>
      </motion.div>
    </section>
  );
};
