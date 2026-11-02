"use client";

import React from "react";
import Link from "next/link";
import {
  UserCheck,
  Briefcase,
  Power,
  Radio,
  CheckSquare,
  Navigation,
  ClipboardList,
  Star,
  ArrowRight,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { mechanicFeatures } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  UserCheck: UserCheck,
  Briefcase: Briefcase,
  Power: Power,
  Radio: Radio,
  CheckSquare: CheckSquare,
  Navigation: Navigation,
  ClipboardList: ClipboardList,
  Star: Star,
};

export function MechanicFeaturesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#080808] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
              For Auto Professionals & Garages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Mechanic Partner Features
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Powerful tools built for independent technicians and auto workshops to expand their reach and manage breakdown jobs efficiently.
            </p>
          </div>

          <Link
            href="/mechanics"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD400] hover:text-[#E5BE00] transition-colors"
          >
            <span>Learn More About Partnering</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {mechanicFeatures.map((item) => {
            const Icon = iconMap[item.iconName] || Wrench;
            return (
              <div
                key={item.id}
                className="bg-[#121212] border border-[#242424] hover:border-[#FFD400]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  {item.tag && (
                    <span className="text-[10px] uppercase font-bold text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dedicated Partner CTA Card */}
        <div className="bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#141414] border border-[#2E2E2E] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#FFD400]/[0.03] blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/25">
              <ShieldCheck className="w-3.5 h-3.5" />
              Grow Your Automotive Business
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Are You an Experienced Mechanic or Garage Owner?
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Join MECHFIND to receive direct breakdown requests from motorists in your vicinity. Set your own working hours, accept only the jobs you want, and build a stellar local reputation.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/mechanics"
                className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)]"
              >
                <Wrench className="w-4 h-4" />
                <span>Join as a Mechanic Partner</span>
              </Link>

              <Link
                href="/tutorials"
                className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#252525] text-white border border-[#333333] font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors"
              >
                <span>View Mechanic Tutorials</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
