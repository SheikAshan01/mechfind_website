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
  Sparkles,
  LocateFixed,
  Truck,
  HeartHandshake,
  KeyRound,
};

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E6E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Platform Advantages
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
            Why Motorists and Mechanics Choose MECHFIND
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2 leading-relaxed">
            Eliminating guesswork when unexpected vehicle mechanical problems occur on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoosePoints.map((point) => {
            const Icon = iconMap[point.iconName] || Shield;
            return (
              <div
                key={point.id}
                className="bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#142235]/40 rounded-3xl p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6E9EF] flex items-center justify-center text-[#142235] mb-5 group-hover:bg-[#142235] group-hover:text-white transition-colors shadow-2xs">
                  <Icon className="w-6 h-6 text-[#D6A84F]" />
                </div>
                <h3 className="text-lg font-bold text-[#142235] mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
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
