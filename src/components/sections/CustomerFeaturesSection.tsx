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
  MapPin: MapPin,
  Wrench: Wrench,
  Crosshair: Crosshair,
  Activity: Activity,
  FileText: FileText,
  Clock: Clock,
  Bell: Bell,
  Headphones: Headphones,
};

export function CustomerFeaturesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
              For Drivers & Riders
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Customer Features
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Everything you need when your car or bike requires prompt, reliable roadside assistance.
            </p>
          </div>

          <Link
            href="/customers"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD400] hover:text-[#E5BE00] transition-colors"
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
                className="bg-[#131313] border border-[#242424] hover:border-[#FFD400]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B1B1B] border border-[#2D2D2D] flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
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
      </div>
    </section>
  );
}
