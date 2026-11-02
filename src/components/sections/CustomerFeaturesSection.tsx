"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Wrench,
  Crosshair,
  Activity,
  FileText,
  Clock,
  Bell,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { customerFeatures } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Wrench,
  Crosshair,
  Activity,
  FileText,
  Clock,
  Bell,
  Headphones,
};

export function CustomerFeaturesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E6E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              For Drivers & Riders
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
              Customer Features
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-2 max-w-xl">
              Reliable tools designed to get your vehicle inspected, diagnosed, and repaired on the roadside.
            </p>
          </div>

          <Link
            href="/customers"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#142235] hover:text-[#D6A84F] transition-colors"
          >
            <span>Explore Customer Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerFeatures.map((item) => {
            const Icon = iconMap[item.iconName] || Wrench;
            return (
              <div
                key={item.id}
                className="bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E9EF] flex items-center justify-center text-[#142235] group-hover:bg-[#142235] group-hover:text-white transition-colors shadow-2xs">
                    <Icon className="w-5 h-5 text-[#D6A84F]" />
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
                <p className="text-xs text-[#667085] leading-relaxed">
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
