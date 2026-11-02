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
    <section className="py-20 sm:py-28 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              How MECHFIND Works
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              From the moment your vehicle stalls to getting back behind the wheel, getting roadside help is straightforward.
            </p>
          </div>

          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD400] hover:text-[#E5BE00] transition-colors self-start md:self-end"
          >
            <span>Read Complete Workflow Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.iconName as keyof typeof iconMap] || Smartphone;
            return (
              <div
                key={step.step}
                className="relative bg-[#111111] border border-[#242424] hover:border-[#FFD400]/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6)] group"
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-[#2B2B2B] group-hover:text-[#FFD400] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#2C2C2C] flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#FFD400] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for first 3 cards */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-neutral-500">
                    <ArrowRight className="w-3 h-3" />
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
