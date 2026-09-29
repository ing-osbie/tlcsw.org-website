"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Heart, MapPin, Clock, ArrowRight } from "lucide-react";
import { churchInfo, navigationLinks } from "@/data/churchData";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onPlanVisitClick?: () => void;
  onGiveClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPlanVisitClick,
  onGiveClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const planVisitUrl =
    "https://wa.me/233207018121?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20visit%20to%20the%20church.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const sectionIds = ["hero", "about", "ministries", "sermons", "events"];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Global Reading Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-terracotta via-sand to-olive origin-left z-50 pointer-events-none"
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-in-out ${
          isScrolled
            ? "bg-cream-light/95 backdrop-blur-md border-b border-cream-border/80 py-3.5 shadow-xs"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Church Brand / Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg active:scale-[0.98] transition-transform duration-200"
            >
              {/* Official Church Logo Emblem */}
              <div className="w-12 h-12 rounded-full border border-espresso/15 flex items-center justify-center bg-cream-surface group-hover:border-terracotta transition-colors overflow-hidden p-1 shadow-2xs shrink-0">
                <Image
                  src="/logo-emblem-dark.png"
                  alt="The Lord's Covenant Sanctuary Logo"
                  width={44}
                  height={32}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-espresso leading-none group-hover:text-terracotta transition-colors duration-200">
                  The Lord&apos;s Covenant
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-terracotta mt-1">
                  Sanctuary
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-8 lg:gap-10"
            >
              {navigationLinks.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-wide font-medium transition-colors duration-200 relative py-1 group ${
                      isActive
                        ? "text-terracotta font-semibold"
                        : "text-espresso/80 hover:text-terracotta"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-terracotta"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-terracotta transition-all duration-300 ease-out group-hover:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={planVisitUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onPlanVisitClick}
                className="text-sm font-medium text-espresso/85 hover:text-terracotta transition-all duration-200 px-3.5 py-1.5 rounded-full hover:bg-espresso/[0.04] hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none"
              >
                Plan a Visit
              </a>

              <Button
                variant="primary"
                size="sm"
                onClick={onGiveClick}
                icon={<Heart className="w-3.5 h-3.5 fill-current" />}
                iconPosition="left"
              >
                Give
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="primary"
                size="sm"
                onClick={onGiveClick}
                className="px-3 py-1.5 text-xs"
              >
                Give
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-lg text-espresso hover:text-terracotta hover:bg-espresso/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-cream-light flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Mobile Top Bar */}
            <div className="flex items-center justify-between border-b border-cream-border pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-espresso/15 flex items-center justify-center bg-cream-surface overflow-hidden p-1 shrink-0">
                  <Image
                    src="/logo-emblem-dark.png"
                    alt="The Lord's Covenant Sanctuary Logo"
                    width={36}
                    height={26}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-semibold text-espresso leading-none">
                    The Lord&apos;s Covenant
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-terracotta mt-1">
                    Sanctuary
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
                className="p-2 rounded-full hover:bg-espresso/10 text-espresso transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="py-8 flex flex-col gap-6">
              {navigationLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl font-medium text-espresso hover:text-terracotta flex items-center justify-between transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-5 h-5 text-sand" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-cream-border flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href={planVisitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  Plan Your Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onGiveClick?.();
                  }}
                  className="w-full"
                  icon={<Heart className="w-4 h-4 text-terracotta fill-current" />}
                  iconPosition="left"
                >
                  Give Online
                </Button>
              </div>
            </nav>

            {/* Mobile Footer Info */}
            <div className="border-t border-cream-border pt-6 text-xs text-warm-gray space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-terracotta shrink-0" />
                <span>Thursday: 9:00 AM · Sunday: 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                <span>{churchInfo.address.street}, {churchInfo.address.cityStateZip}</span>
              </div>

              {/* Social Icons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={churchInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-espresso hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={churchInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-espresso hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={churchInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-espresso hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href={churchInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-cream-surface border border-cream-border flex items-center justify-center text-espresso hover:text-white hover:bg-terracotta hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.783-.88-2.06-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.3-.019-.463.132-.612.136-.134.301-.35.452-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.929-2.24-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.375s-1.054 1.03-1.054 2.515 1.08 2.915 1.23 3.115c.15.2 2.126 3.246 5.151 4.553.72.311 1.282.497 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.783-.73 2.034-1.435.251-.705.251-1.31.176-1.435-.076-.125-.276-.2-.577-.35zm-5.433 7.618c-1.921 0-3.806-.516-5.454-1.495l-.391-.232-4.053 1.063 1.082-3.952-.254-.405c-1.074-1.71-1.64-3.693-1.64-5.733 0-5.952 4.843-10.796 10.798-10.796 2.884 0 5.595 1.123 7.632 3.161 2.037 2.038 3.158 4.75 3.157 7.635 0 5.954-4.843 10.798-10.799 10.798zm8.975-18.435c-2.398-2.399-5.586-3.565-8.975-3.565-6.992 0-12.682 5.69-12.684 12.684 0 2.235.582 4.417 1.688 6.334l-1.793 6.551 6.702-1.758c1.847 1.008 3.927 1.54 6.084 1.541h.005c6.992 0 12.684-5.691 12.687-12.686 0-3.39-.1.319-1.32-6.577-3.714-8.977z" />
                    </svg>
                  </a>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
