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
    <section className="py-20 sm:py-24 bg-[#EEF1F5] border-b border-[#E6E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Mobile Applications
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
            Roadside Assistance, Within Reach.
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2 leading-relaxed">
            Discover nearby mechanics, follow simulated routes, and coordinate assistance directly from your mobile device.
          </p>
        </div>

        {/* Two Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Android Card */}
          <div className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] group-hover:bg-[#142235] group-hover:text-white transition-colors">
                  <Smartphone className="w-7 h-7 text-[#D6A84F]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A84F] bg-[#FBF4E7] px-3 py-1 rounded-full border border-[#D6A84F]/25">
                  Coming Soon
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#142235] mb-2 font-heading">
                Google Play
              </h3>
              <p className="text-xs text-[#667085] mb-6 leading-relaxed">
                Experience on-demand roadside assistance on your Android smartphone with instant location sharing and dispatch notifications.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleDownloadClick("android")}
                className="w-full flex items-center justify-between bg-[#142235] hover:bg-[#1D3048] text-white font-semibold py-3.5 px-6 rounded-2xl transition-all duration-150 cursor-pointer shadow-xs active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-[#D6A84F] shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-[#98A2B3]">
                      Google Play Store
                    </span>
                    <span className="text-sm font-bold">
                      Download for Android
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* iOS Card */}
          <div className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xs group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] group-hover:bg-[#142235] group-hover:text-white transition-colors">
                  <Apple className="w-7 h-7 text-[#D6A84F]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A84F] bg-[#FBF4E7] px-3 py-1 rounded-full border border-[#D6A84F]/25">
                  Coming Soon
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#142235] mb-2 font-heading">
                Apple App Store
              </h3>
              <p className="text-xs text-[#667085] mb-6 leading-relaxed">
                Connect with automotive mechanics across town with intuitive map navigation and transparent service status on iOS.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleDownloadClick("ios")}
                className="w-full flex items-center justify-between bg-[#142235] hover:bg-[#1D3048] text-white font-semibold py-3.5 px-6 rounded-2xl transition-all duration-150 cursor-pointer shadow-xs active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <Apple className="w-5 h-5 text-[#D6A84F] shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-[#98A2B3]">
                      Apple App Store
                    </span>
                    <span className="text-sm font-bold">
                      Download for iPhone
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[#667085]">
          Mobile store destinations will activate as public platform releases occur.
        </div>
      </div>
    </section>
  );
}
