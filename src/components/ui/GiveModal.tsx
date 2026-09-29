"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  Smartphone,
  Landmark,
  Copy,
  Check,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { givingDetails } from "@/data/churchData";

export interface GiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiveModal: React.FC<GiveModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setCopiedField(null);
    onClose();
  }, [onClose]);

  // Prevent background scroll when modal is open
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

  const copyToClipboard = async (text: string, fieldId: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopiedField(fieldId);
      setTimeout(() => {
        setCopiedField((curr) => (curr === fieldId ? null : curr));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="give-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-espresso/75 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-cream-light rounded-2xl sm:rounded-3xl shadow-2xl border border-cream-border overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-espresso px-6 py-6 sm:px-8 sm:py-7 text-cream-light relative shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-light/10 border border-cream-light/15 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              <Heart className="w-3.5 h-3.5 text-terracotta fill-current" />
              <span>Kingdom Giving</span>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close giving dialog"
              className="p-2 rounded-full text-sand hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2
            id="give-modal-title"
            className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-cream-light mt-3"
          >
            {givingDetails.heading}
          </h2>

          <p className="text-sm sm:text-base text-cream/80 mt-2 max-w-xl leading-relaxed">
            {givingDetails.subheading}
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Payment Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Card 1: Mobile Money */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-border shadow-xs hover:border-terracotta/40 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-terracotta-soft text-terracotta flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-espresso">
                      {givingDetails.mobileMoney.title}
                    </h3>
                    <p className="text-xs text-warm-gray">MTN · Telecel · AT</p>
                  </div>
                </div>

                {/* MoMo Number */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-medium text-warm-gray uppercase tracking-wider block">
                    MoMo Number
                  </label>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-cream-surface/60 border border-cream-border">
                    <span className="font-mono text-base font-semibold text-espresso tracking-wider select-all pl-1">
                      {givingDetails.mobileMoney.number}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          givingDetails.mobileMoney.number,
                          "momo-number"
                        )
                      }
                      aria-label={`Copy MoMo Number ${givingDetails.mobileMoney.number}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        copiedField === "momo-number"
                          ? "bg-olive text-white shadow-xs"
                          : "bg-white hover:bg-espresso hover:text-white text-espresso border border-cream-border"
                      }`}
                    >
                      {copiedField === "momo-number" ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-warm-gray group-hover:text-white" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Merchant ID */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-warm-gray uppercase tracking-wider block">
                    Merchant ID
                  </label>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-cream-surface/60 border border-cream-border">
                    <span className="font-mono text-base font-semibold text-espresso tracking-wider select-all pl-1">
                      {givingDetails.mobileMoney.merchantId || givingDetails.mobileMoney.reference}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          givingDetails.mobileMoney.merchantId || givingDetails.mobileMoney.reference,
                          "momo-merchant-id"
                        )
                      }
                      aria-label={`Copy Merchant ID ${givingDetails.mobileMoney.merchantId || givingDetails.mobileMoney.reference}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        copiedField === "momo-merchant-id"
                          ? "bg-olive text-white shadow-xs"
                          : "bg-white hover:bg-espresso hover:text-white text-espresso border border-cream-border"
                      }`}
                    >
                      {copiedField === "momo-merchant-id" ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-warm-gray group-hover:text-white" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-cream-border/60">
                <p className="text-xs text-warm-gray leading-normal flex items-start gap-1.5">
                  <span className="text-terracotta font-bold">•</span>
                  <span>Please enter Merchant ID <strong>948221</strong> when completing payment.</span>
                </p>
              </div>
            </div>

            {/* Card 2: Bank Transfer */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-border shadow-xs hover:border-terracotta/40 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-olive-light text-olive flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-espresso">
                      {givingDetails.bank.title}
                    </h3>
                    <p className="text-xs text-warm-gray">Local & International</p>
                  </div>
                </div>

                {/* Bank Name */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-medium text-warm-gray uppercase tracking-wider block">
                    Bank
                  </label>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-cream-surface/60 border border-cream-border">
                    <span className="font-mono text-base font-semibold text-espresso tracking-wider select-all pl-1">
                      {givingDetails.bank.name}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(givingDetails.bank.name, "bank-name")
                      }
                      aria-label={`Copy Bank Name ${givingDetails.bank.name}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        copiedField === "bank-name"
                          ? "bg-olive text-white shadow-xs"
                          : "bg-white hover:bg-espresso hover:text-white text-espresso border border-cream-border"
                      }`}
                    >
                      {copiedField === "bank-name" ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-warm-gray group-hover:text-white" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Account Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-warm-gray uppercase tracking-wider block">
                    Account Number
                  </label>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-cream-surface/60 border border-cream-border">
                    <span className="font-mono text-base font-semibold text-espresso tracking-wider select-all pl-1">
                      {givingDetails.bank.accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          givingDetails.bank.accountNumber,
                          "bank-account"
                        )
                      }
                      aria-label={`Copy Account Number ${givingDetails.bank.accountNumber}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        copiedField === "bank-account"
                          ? "bg-olive text-white shadow-xs"
                          : "bg-white hover:bg-espresso hover:text-white text-espresso border border-cream-border"
                      }`}
                    >
                      {copiedField === "bank-account" ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-warm-gray group-hover:text-white" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* SWIFT Code */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-warm-gray uppercase tracking-wider block">
                    SWIFT Code
                  </label>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-cream-surface/60 border border-cream-border">
                    <span className="font-mono text-base font-semibold text-espresso tracking-wider select-all pl-1">
                      {givingDetails.bank.swiftCode}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          givingDetails.bank.swiftCode,
                          "bank-swift"
                        )
                      }
                      aria-label={`Copy SWIFT Code ${givingDetails.bank.swiftCode}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        copiedField === "bank-swift"
                          ? "bg-olive text-white shadow-xs"
                          : "bg-white hover:bg-espresso hover:text-white text-espresso border border-cream-border"
                      }`}
                    >
                      {copiedField === "bank-swift" ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-warm-gray group-hover:text-white" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-cream-border/60">
                <p className="text-xs text-warm-gray leading-normal flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                  <span>Secure direct bank wire and inter-bank clearance.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Scripture Encouragement Banner */}
          <div className="bg-cream-surface/80 rounded-xl p-4 border border-cream-border text-center">
            <p className="text-xs italic text-warm-gray leading-relaxed max-w-xl mx-auto">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            </p>
            <p className="text-[11px] font-semibold tracking-wider text-sand uppercase mt-1">
              — 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
