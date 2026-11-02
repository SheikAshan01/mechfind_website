"use client";

import React from "react";
import {
  Compass,
  MapPin,
  Wrench,
  ShieldCheck,
  FileText,
  Clock,
  Bell,
  Headphones,
} from "lucide-react";
import { platformBenefits } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  MapPin,
  Wrench,
  ShieldCheck,
  FileText,
  Clock,
  Bell,
  Headphones,
};

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E6E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Platform Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#142235] mt-3 font-heading">
            Designed for Dependable Vehicle Breakdown Support
          </h2>
          <p className="text-sm text-[#667085] mt-2">
            Every feature in MECHFIND is engineered to connect you with verified mechanics quickly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformBenefits.map((item) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E9EF] flex items-center justify-center text-[#142235] group-hover:bg-[#142235] group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-6 h-6 text-[#D6A84F]" />
                    </div>
                    {item.tag && (
                      <span className="text-[10px] uppercase font-bold text-[#667085] bg-white px-2 py-0.5 rounded border border-[#E6E9EF]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#142235] mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
