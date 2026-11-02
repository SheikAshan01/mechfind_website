"use client";

import React from "react";
import { Smartphone, Apple, ArrowRight } from "lucide-react";
import { downloadsConfig } from "@/config/downloads";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export function DownloadSection() {
  const { openDownloadModal } = useDownloadModal();

  const handleDownloadClick = (platform: "android" | "ios") => {
    const config = downloadsConfig[platform];
    if (config.isAvailable && config.url) {
      window.open(config.url, "_blank", "noopener,noreferrer");
    } else {
      openDownloadModal(platform);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#080808] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFD400]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
            Available on Mobile
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Carry Roadside Peace of Mind in Your Pocket
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Install MECHFIND to access instant mechanic discovery, real-time arrival maps, and direct emergency dispatches anywhere your journey takes you.
          </p>
        </div>

        {/* Two Premium Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Android Card */}
          <div className="bg-[#121212] border border-[#262626] hover:border-[#FFD400]/50 rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/25">
                  Store Certification Pending
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Google Play Store
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Compatible with all modern Android smartphones and tablets (Android 8.0+). Features native background geolocation and sound alerts.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleDownloadClick("android")}
                className="w-full flex items-center justify-between bg-[#1C1C1C] hover:bg-[#FFD400] text-white hover:text-[#080808] border border-[#303030] hover:border-[#FFD400] font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 cursor-pointer shadow-md group-hover:shadow-[0_4px_20px_-3px_rgba(255,212,0,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider opacity-75">
                      {downloadsConfig.android.secondaryText}
                    </span>
                    <span className="text-sm font-extrabold">
                      {downloadsConfig.android.buttonLabel}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* iOS Card */}
          <div className="bg-[#121212] border border-[#262626] hover:border-[#FFD400]/50 rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                  <Apple className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/25">
                  App Store Review In Progress
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Apple App Store
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Optimized for iOS devices (iOS 15.0+). Smooth Apple Maps route visualization, rich push notifications, and fast booking flows.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleDownloadClick("ios")}
                className="w-full flex items-center justify-between bg-[#1C1C1C] hover:bg-[#FFD400] text-white hover:text-[#080808] border border-[#303030] hover:border-[#FFD400] font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 cursor-pointer shadow-md group-hover:shadow-[0_4px_20px_-3px_rgba(255,212,0,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <Apple className="w-5 h-5 shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider opacity-75">
                      {downloadsConfig.ios.secondaryText}
                    </span>
                    <span className="text-sm font-extrabold">
                      {downloadsConfig.ios.buttonLabel}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Centralized config reassurance */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          Clicking either store button triggers our pre-release notification registry. Official store links will activate upon marketplace publishing.
        </div>
      </div>
    </section>
  );
}
