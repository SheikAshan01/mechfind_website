"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, MapPin, Search, CheckCircle2, ArrowRight } from "lucide-react";
import { howItWorksSteps } from "@/data/features";

const iconMap = {
  Smartphone: Smartphone,
  MapPin: MapPin,
  Search: Search,
  CheckCircle2: CheckCircle2,
};

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#EEF1F5] border-b border-[#E6E9EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
              How MECHFIND Works
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-2 max-w-xl">
              From roadside stall to getting back on your journey, assistance is arranged in four straightforward steps.
            </p>
          </div>

          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#142235] hover:text-[#D6A84F] transition-colors self-start md:self-end"
          >
            <span>Read Complete Workflow Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.iconName as keyof typeof iconMap] || Smartphone;
            return (
              <div
                key={step.step}
                className="relative bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-sm group"
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-[#D6A84F]">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] group-hover:bg-[#142235] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-[#D6A84F]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#142235] mb-2 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for first 3 cards on desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#E6E9EF] flex items-center justify-center text-[#667085] shadow-2xs">
                    <ArrowRight className="w-3 h-3 text-[#142235]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
