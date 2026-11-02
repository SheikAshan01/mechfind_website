"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, CheckCircle, Bell, ArrowRight, Apple } from "lucide-react";
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
            className="fixed inset-0 bg-[#142235]/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-lg bg-white border border-[#E6E9EF] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D6A84F]" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#667085] hover:text-[#142235] rounded-xl hover:bg-[#F7F8FA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142235]"
              aria-label="Close download dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo size="sm" withLink={false} />
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D6A84F] bg-[#FBF4E7] px-2.5 py-1 rounded-full border border-[#D6A84F]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                Coming Soon
              </span>
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-[#142235] mb-2 font-heading">
              Roadside Assistance, Within Reach.
            </h3>

            <p className="text-sm text-[#667085] mb-6 leading-relaxed">
              The official MECHFIND mobile application is currently preparing for public launch. Submit your email or mobile number to receive an early access notification as soon as it is available in your region.
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
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                  selectedPlatform === "android"
                    ? "bg-[#142235] border-[#142235] text-white shadow-xs"
                    : "bg-[#F7F8FA] border-[#E6E9EF] text-[#667085] hover:text-[#142235] hover:bg-[#EEF1F5]"
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#D6A84F]" />
                Google Play (Android)
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedPlatform("ios");
                  setSubmitted(false);
                  setError("");
                }}
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                  selectedPlatform === "ios"
                    ? "bg-[#142235] border-[#142235] text-white shadow-xs"
                    : "bg-[#F7F8FA] border-[#E6E9EF] text-[#667085] hover:text-[#142235] hover:bg-[#EEF1F5]"
                }`}
              >
                <Apple className="w-4 h-4 text-[#D6A84F]" />
                App Store (iPhone)
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5 text-center mb-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center mx-auto mb-3 text-[#16A34A]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#142235] text-base mb-1 font-heading">
                  Thank You for Your Interest
                </h4>
                <p className="text-xs text-[#475467] leading-relaxed mb-4">
                  We have registered {contactInput} for early notification. You will be alerted when MECHFIND launches for {currentConfig.platformName}.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold bg-[#142235] hover:bg-[#1D3048] text-white rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="early-access-contact" className="block text-xs font-semibold text-[#142235] mb-2 uppercase tracking-wider">
                    Enter Email or Mobile for launch notification:
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
                      className="w-full bg-[#F7F8FA] border border-[#E6E9EF] focus:border-[#142235] focus:bg-white focus:ring-1 focus:ring-[#142235] rounded-xl py-3 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all"
                    />
                  </div>
                  {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all shadow-xs cursor-pointer"
                >
                  <Bell className="w-4 h-4 text-[#D6A84F]" />
                  <span>Notify Me at Launch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-[#E6E9EF] text-center">
              <p className="text-[11px] text-[#98A2B3]">
                Official store destinations will be dynamically enabled once published on Google Play and Apple App Store.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
