"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, CheckCircle, Clock } from "lucide-react";
import { Button } from "./Button";
import { churchInfo } from "@/data/churchData";

export interface PlanVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const PlanVisitModal: React.FC<PlanVisitModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Sunday 6:00 PM (The Transformation Service)",
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService,
    partySize: "1",
    hasKids: false,
    notes: "",
  });

  const handleClose = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-visit-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-espresso/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-cream-light rounded-2xl shadow-2xl border border-cream-border overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header decoration */}
        <div className="bg-espresso px-6 py-5 text-cream-light relative flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sand block">
              We Look Forward to Meeting You
            </span>
            <h3
              id="plan-visit-title"
              className="font-serif text-2xl sm:text-3xl text-cream-light font-medium"
            >
              Plan Your Visit
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close dialog"
            className="rounded-full p-2 text-cream/70 hover:text-cream hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-olive-light text-olive rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-espresso font-medium">
                We Can’t Wait to Welcome You, {formData.name || "Friend"}!
              </h4>
              <p className="text-sm text-warm-gray max-w-sm mx-auto leading-relaxed">
                Our hospitality host team has reserved parking and a warm cup of coffee for you. A welcome guide has been sent to your email.
              </p>
              <div className="pt-4 border-t border-cream-border text-xs text-warm-gray space-y-1">
                <p className="font-semibold text-espresso">
                  {churchInfo.name}
                </p>
                <p>{churchInfo.address.street}, {churchInfo.address.cityStateZip}</p>
              </div>
              <div className="pt-2">
                <Button variant="secondary" size="md" onClick={handleClose}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="guest-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Sarah Miller"
                    className="w-full px-3.5 py-2.5 bg-white border border-cream-border rounded-lg text-espresso placeholder-warm-gray-light text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guest-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-cream-border rounded-lg text-espresso placeholder-warm-gray-light text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="guest-service"
                  className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                >
                  Which Gathering Will You Attend?
                </label>
                <select
                  id="guest-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-cream-border rounded-lg text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-terracotta cursor-pointer"
                >
                  <option value="Thursday 9:00 AM (Prophetic Feast)">
                    Thursday 9:00 AM (Prophetic Feast)
                  </option>
                  <option value="Sunday 6:00 PM (The Transformation Service)">
                    Sunday 6:00 PM (The Transformation Service)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="guest-party"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                  >
                    Party Size
                  </label>
                  <select
                    id="guest-party"
                    value={formData.partySize}
                    onChange={(e) =>
                      setFormData({ ...formData, partySize: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-cream-border rounded-lg text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  >
                    <option value="1">Just Me (1)</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3 - 4 People</option>
                    <option value="5+">5+ Family/Friends</option>
                  </select>
                </div>

                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-espresso select-none">
                    <input
                      type="checkbox"
                      checked={formData.hasKids}
                      onChange={(e) =>
                        setFormData({ ...formData, hasKids: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-terracotta border-cream-border focus:ring-terracotta"
                    />
                    <span>Bringing Children</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="guest-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                >
                  Questions or Accessibility Needs
                </label>
                <textarea
                  id="guest-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Need wheelchair access, kids check-in info, etc."
                  className="w-full px-3.5 py-2 bg-white border border-cream-border rounded-lg text-espresso placeholder-warm-gray-light text-sm focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
                />
              </div>

              <div className="bg-cream-surface rounded-lg p-3 text-xs text-warm-gray flex items-center gap-2">
                <Clock className="w-4 h-4 text-terracotta shrink-0" />
                <span>We recommend arriving 10-15 minutes prior for parking & coffee.</span>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md">
                  Confirm Visit
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
