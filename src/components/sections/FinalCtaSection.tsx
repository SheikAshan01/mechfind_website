"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, Sparkles } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export function FinalCtaSection() {
  const { openDownloadModal } = useDownloadModal();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#080808] to-[#0D0D0D] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Background yellow accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#FFD400]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <span className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-4 py-1.5 rounded-full border border-[#FFD400]/25">
          <Sparkles className="w-3.5 h-3.5" />
          Always Ready on the Road
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Don&apos;t Let a Breakdown
          <br />
          <span className="text-[#FFD400]">Stop Your Journey.</span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          MECHFIND helps connect you with nearby vehicle mechanics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-base px-8 py-4 rounded-2xl transition-all shadow-[0_2px_20px_-3px_rgba(255,212,0,0.4)] hover:shadow-[0_4px_25px_-3px_rgba(255,212,0,0.55)] cursor-pointer active:scale-98"
          >
            <span>Explore MECHFIND</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => openDownloadModal("all")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#161616] hover:bg-[#202020] text-white border border-[#2F2F2F] hover:border-neutral-500 font-bold text-base px-7 py-4 rounded-2xl transition-all cursor-pointer active:scale-98"
          >
            <Smartphone className="w-5 h-5 text-[#FFD400]" />
            <span>Download Mobile App</span>
          </button>
        </div>

        {/* Emergency phone reminder */}
        <div className="pt-6">
          <p className="text-xs text-neutral-400">
            Stranded right now? Call our 24/7 emergency customer care line at{" "}
            <a
              href={contactConfig.telLink}
              className="text-[#FFD400] font-bold hover:underline"
            >
              {contactConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
