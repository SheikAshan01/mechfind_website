"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, CheckCircle, Bell, ArrowRight, ShieldCheck } from "lucide-react";
import { downloadsConfig } from "@/config/downloads";
import { BrandLogo } from "./BrandLogo";

interface AppDownloadModalProps {
  isOpen: boolean;
  activePlatform: "android" | "ios" | "all";
  onClose: () => void;
}

export function AppDownloadModal({
  isOpen,
  activePlatform,
  onClose,
}: AppDownloadModalProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios">(
    activePlatform === "ios" ? "ios" : "android"
  );
  const [contactInput, setContactInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) {
      setError("Please enter your email or mobile number.");
      return;
    }
    // Simple email or 10-digit phone verification
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInput.trim());
    const isPhone = /^[0-9+\s-]{8,15}$/.test(contactInput.trim());

    if (!isEmail && !isPhone) {
      setError("Please enter a valid email address or phone number.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const currentConfig = downloadsConfig[selectedPlatform];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-lg bg-[#121212] border border-[#292929] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Yellow accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD400] via-[#FFD400]/70 to-[#FFD400]" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
              aria-label="Close download dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo size="sm" withLink={false} />
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-2.5 py-1 rounded-full border border-[#FFD400]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                Coming Soon to Stores
              </span>
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white mb-2">
              MECHFIND Mobile App
            </h3>

            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Our official Android and iOS applications are currently undergoing final store certification.
              Pre-register now to receive direct access the minute MECHFIND launches in your area.
            </p>

            {/* Platform Selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => {
                  setSelectedPlatform("android");
                  setSubmitted(false);
                  setError("");
                }}
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  selectedPlatform === "android"
                    ? "bg-[#1E1E1E] border-[#FFD400] text-white shadow-[0_0_15px_-3px_rgba(255,212,0,0.25)]"
                    : "bg-[#161616] border-[#292929] text-neutral-400 hover:text-white hover:border-[#383838]"
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#FFD400]" />
                Google Play (Android)
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedPlatform("ios");
                  setSubmitted(false);
                  setError("");
                }}
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  selectedPlatform === "ios"
                    ? "bg-[#1E1E1E] border-[#FFD400] text-white shadow-[0_0_15px_-3px_rgba(255,212,0,0.25)]"
                    : "bg-[#161616] border-[#292929] text-neutral-400 hover:text-white hover:border-[#383838]"
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#FFD400]" />
                App Store (iOS)
              </button>
            </div>

            {/* Platform Spec Note */}
            <div className="bg-[#181818] border border-[#252525] rounded-xl p-3.5 mb-6 text-xs text-neutral-300 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">
                  {currentConfig.storeName} Certification
                </span>
                <span className="text-neutral-400">{currentConfig.versionNotice}</span>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#162016] border border-[#2e5932] rounded-xl p-5 text-center mb-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#34A853]/20 flex items-center justify-center mx-auto mb-3 text-[#4ade80]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base mb-1">
                  You are on the Priority Notification List!
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  We have recorded your details ({contactInput}). You will receive an immediate notification with direct download instructions as soon as the {currentConfig.storeName} release goes live.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold bg-[#292929] hover:bg-[#383838] text-white rounded-lg transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="early-access-contact" className="block text-xs font-medium text-neutral-300 mb-2">
                    Enter Email or Mobile Number to receive instant download alert:
                  </label>
                  <div className="relative">
                    <input
                      id="early-access-contact"
                      type="text"
                      value={contactInput}
                      onChange={(e) => {
                        setContactInput(e.target.value);
                        setError("");
                      }}
                      placeholder="e.g. driver@example.com or 1234567890"
                      className="w-full bg-[#181818] border border-[#292929] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] rounded-xl py-3 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                  {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)] cursor-pointer"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me at Launch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-[#222222] text-center">
              <p className="text-[11px] text-neutral-500">
                Official store destinations will be dynamically enabled once approved by Google Play and Apple.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
