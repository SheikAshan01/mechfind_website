"use client";

import React from "react";
import { Compass, Navigation2, ShieldCheck, Zap } from "lucide-react";
import { trustValues } from "@/data/features";

const iconMap = {
  Compass: Compass,
  Navigation2: Navigation2,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#0A0A0A] border-y border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
            Platform Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            Designed for Reliable Vehicle Breakdown Assistance
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Every feature in MECHFIND is engineered to get you connected to verified mechanics quickly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustValues.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-[#121212] border border-[#242424] hover:border-[#FFD400]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#FFD400] mb-5 group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
