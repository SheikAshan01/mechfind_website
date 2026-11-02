"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, Sparkles } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export function FinalCtaSection() {
  const { openDownloadModal } = useDownloadModal();

  return (
    <section className="py-20 sm:py-24 bg-[#142235] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        <span className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#1D3048] px-4 py-1.5 rounded-full border border-[#2D4565]">
          <Sparkles className="w-3.5 h-3.5" />
          Roadside Support
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-heading">
          Don&apos;t Let a Breakdown
          <br />
          <span className="text-[#D6A84F]">Stop Your Journey.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
          MECHFIND helps connect you with nearby vehicle mechanics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-sm active:scale-98 cursor-pointer"
          >
            <span>Explore MECHFIND</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => openDownloadModal("all")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1D3048] hover:bg-[#253D5C] text-white border border-[#2D4565] font-semibold text-base px-7 py-3.5 rounded-xl transition-all active:scale-98 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-[#D6A84F]" />
            <span>Download Mobile App</span>
          </button>
        </div>

        {/* Support hotline notice */}
        <div className="pt-4">
          <p className="text-xs text-[#94A3B8]">
            Need roadside support right now? Reach our customer care line at{" "}
            <a
              href={contactConfig.telLink}
              className="text-[#D6A84F] font-bold hover:underline"
            >
              {contactConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
