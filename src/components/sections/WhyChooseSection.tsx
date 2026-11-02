"use client";

import React from "react";
import {
  Sparkles,
  LocateFixed,
  Truck,
  HeartHandshake,
  KeyRound,
  Shield,
} from "lucide-react";
import { whyChoosePoints } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  Sparkles: Sparkles,
  LocateFixed: LocateFixed,
  Truck: Truck,
  HeartHandshake: HeartHandshake,
  KeyRound: KeyRound,
};

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
            Why Choose MECHFIND
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Built from the Ground Up for Seamless Roadside Help
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            We focus on reducing breakdown anxiety and eliminating guesswork when unexpected mechanical failures happen on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoosePoints.map((point) => {
            const Icon = iconMap[point.iconName] || Shield;
            return (
              <div
                key={point.id}
                className="bg-[#131313] border border-[#242424] hover:border-[#FFD400]/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-center text-[#FFD400] mb-5 group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#FFD400] transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

