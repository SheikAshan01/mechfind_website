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
  UserCheck,
  Briefcase,
  Power,
  Radio,
  CheckSquare,
  Navigation,
  ClipboardList,
  Star,
};

export function MechanicFeaturesSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#EEF1F5] border-b border-[#E6E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              For Technicians & Garages
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
              Grow Your Automotive Business with MECHFIND.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-2 max-w-xl">
              Dedicated partner capabilities built for workshops and mobile roadside mechanics to receive nearby service requests.
            </p>
          </div>

          <Link
            href="/mechanics"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#142235] hover:text-[#D6A84F] transition-colors"
          >
            <span>Learn More About Partnering</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mechanicFeatures.map((item) => {
            const Icon = iconMap[item.iconName] || Wrench;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] group-hover:bg-[#142235] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#D6A84F]" />
                  </div>
                  {item.tag && (
                    <span className="text-[10px] uppercase font-bold text-[#667085] bg-[#F7F8FA] px-2 py-0.5 rounded border border-[#E6E9EF]">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#142235] mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Distinct Partner CTA Card */}
        <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D6A84F] bg-[#1D3048] px-3.5 py-1 rounded-full border border-[#2D4565]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D6A84F]" />
              Partner Network
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              Ready to Expand Your Service Radius?
            </h3>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              Connect with stranded motorists in your immediate area. Set your availability switch online when ready, review request details, and navigate directly to jobs.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/mechanics"
                className="inline-flex items-center gap-2 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <Wrench className="w-4 h-4" />
                <span>Join as a Mechanic Partner</span>
              </Link>

              <Link
                href="/tutorials"
                className="inline-flex items-center gap-2 bg-[#1D3048] hover:bg-[#253D5C] text-white border border-[#2D4565] font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors"
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
