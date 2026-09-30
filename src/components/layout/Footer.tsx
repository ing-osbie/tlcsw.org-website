"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { churchInfo, navigationLinks } from "@/data/churchData";
import { Button } from "@/components/ui/Button";

interface FooterProps {
  onGiveClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGiveClick }) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-espresso text-cream border-t border-espresso-border pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Weekly Bulletin Row */}
        <div className="bg-espresso-surface border border-espresso-border rounded-2xl p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sand">
                Weekly Reflection & News
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-light font-medium">
                Stay Rooted in What Matters
              </h3>
              <p className="text-sm text-cream/70 max-w-xl leading-relaxed">
                Receive Joshua Addai Ntim’s weekly encouragement, scripture reading guides, and community updates delivered to your inbox every Friday.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubscribed ? (
                <div className="flex items-center gap-3 bg-olive-dark/40 border border-olive-surface p-4 rounded-xl text-sand">
                  <CheckCircle className="w-5 h-5 text-olive-light shrink-0" />
                  <span className="text-sm">
                    Thank you! You are now subscribed to The Lord&apos;s Covenant Sanctuary Weekly.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-espresso-muted/60 border border-espresso-border rounded-full text-cream placeholder-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                  <Button type="submit" variant="primary" size="md">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-espresso-border">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border border-sand/30 flex items-center justify-center bg-espresso-surface p-1 overflow-hidden shrink-0 shadow-xs">
                <Image
                  src="/logo-emblem-white.png"
                  alt="The Lord's Covenant Sanctuary Logo"
                  width={46}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-semibold text-cream-light block leading-none">
                  The Lord&apos;s Covenant
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-sand block mt-1">
                  Sanctuary
                </span>
              </div>
            </div>

            <p className="text-sm text-cream/70 leading-relaxed max-w-sm pt-2">
              {churchInfo.description}
            </p>

            <div className="pt-2 text-xs text-cream/50">
              The Lord&apos;s Covenant Sanctuary · East Legon, Accra, Ghana.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sand">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-terracotta transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onGiveClick}
                  className="hover:text-terracotta transition-colors text-terracotta font-medium text-left cursor-pointer"
                >
                  KINGDOM GIVING &amp; PARTNERSHIP
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Times */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sand">
              Gathering Times
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              {churchInfo.serviceTimes.map((service) => (
                <li key={service.name} className="border-l-2 border-terracotta/60 pl-3">
                  <div className="font-semibold text-cream-light">
                    {service.time}
                  </div>
                  <div className="text-xs text-cream/60">{service.name}</div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-sand pt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              Live streaming available every Sunday at 6:30 PM
            </p>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sand">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-sm text-cream/80">
              <a
                href={churchInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-sand transition-colors group"
                aria-label="Directions to Hidden Treasures Events Center in Google Maps (opens in new tab)"
              >
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <span>
                  {churchInfo.address.street}
                  <br />
                  {churchInfo.address.cityStateZip}
                </span>
              </a>

              <a
                href={`tel:${churchInfo.contact.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2.5 hover:text-sand transition-colors"
                aria-label={`Call ${churchInfo.contact.phone}`}
              >
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <span>{churchInfo.contact.phone}</span>
              </a>

              <a
                href={`mailto:${churchInfo.contact.email}`}
                className="flex items-center gap-2.5 hover:text-sand transition-colors"
                aria-label={`Email ${churchInfo.contact.email}`}
              >
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <span>{churchInfo.contact.email}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={churchInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-espresso-surface border border-espresso-border flex items-center justify-center text-cream/80 hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-espresso-surface border border-espresso-border flex items-center justify-center text-cream/80 hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-espresso-surface border border-espresso-border flex items-center justify-center text-cream/80 hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href={churchInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-espresso-surface border border-espresso-border flex items-center justify-center text-cream/80 hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.783-.88-2.06-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.3-.019-.463.132-.612.136-.134.301-.35.452-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.929-2.24-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.375s-1.054 1.03-1.054 2.515 1.08 2.915 1.23 3.115c.15.2 2.126 3.246 5.151 4.553.72.311 1.282.497 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.783-.73 2.034-1.435.251-.705.251-1.31.176-1.435-.076-.125-.276-.2-.577-.35zm-5.433 7.618c-1.921 0-3.806-.516-5.454-1.495l-.391-.232-4.053 1.063 1.082-3.952-.254-.405c-1.074-1.71-1.64-3.693-1.64-5.733 0-5.952 4.843-10.796 10.798-10.796 2.884 0 5.595 1.123 7.632 3.161 2.037 2.038 3.158 4.75 3.157 7.635 0 5.954-4.843 10.798-10.799 10.798zm8.975-18.435c-2.398-2.399-5.586-3.565-8.975-3.565-6.992 0-12.682 5.69-12.684 12.684 0 2.235.582 4.417 1.688 6.334l-1.793 6.551 6.702-1.758c1.847 1.008 3.927 1.54 6.084 1.541h.005c6.992 0 12.684-5.691 12.687-12.686 0-3.39-.1.319-1.32-6.577-3.714-8.977z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <div>
            © {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-cream transition-colors">
              Terms of Use
            </a>
            <span>•</span>
            <a href="#statement" className="hover:text-cream transition-colors">
              Statement of Faith
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
