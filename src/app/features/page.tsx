import React from "react";
import type { Metadata } from "next";
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
  UserCheck,
  Briefcase,
  Power,
  Radio,
  CheckSquare,
  Navigation,
  ClipboardList,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { customerFeatures, mechanicFeatures } from "@/data/features";

export const metadata: Metadata = {
  title: "Features Matrix | MECHFIND",
  description:
    "Explore the comprehensive features of the MECHFIND vehicle breakdown and mechanic discovery platform for customers and automotive professionals.",
};

const customerIconMap: Record<string, React.ElementType> = {
  MapPin,
  Wrench,
  Crosshair,
  Activity,
  FileText,
  Clock,
  Bell,
  Headphones,
};

const mechanicIconMap: Record<string, React.ElementType> = {
  UserCheck,
  Briefcase,
  Power,
  Radio,
  CheckSquare,
  Navigation,
  ClipboardList,
  Star,
};

export default function FeaturesPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Platform Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            Comprehensive Roadside Technology Suite
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            MECHFIND delivers an interconnected platform uniting stranded motorists, motorcycle riders, and skilled automotive technicians through modern geolocation and dispatch tools.
          </p>
        </div>

        {/* Section 1: Customer Features */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E6E9EF]">
            <div>
              <span className="text-xs uppercase font-bold text-[#D6A84F]">Suite 01</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#142235] font-heading">
                Features for Drivers & Motorists
              </h2>
            </div>
            <Link
              href="/customers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142235] hover:text-[#D6A84F] transition-colors"
            >
              <span>View Customer Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerFeatures.map((item) => {
              const Icon = customerIconMap[item.iconName] || Wrench;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] mb-4 group-hover:bg-[#142235] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#D6A84F]" />
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

        {/* Section 2: Mechanic Features */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E6E9EF]">
            <div>
              <span className="text-xs uppercase font-bold text-[#D6A84F]">Suite 02</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#142235] font-heading">
                Features for Mechanics & Workshops
              </h2>
            </div>
            <Link
              href="/mechanics"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142235] hover:text-[#D6A84F] transition-colors"
            >
              <span>View Mechanic Partner Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanicFeatures.map((item) => {
              const Icon = mechanicIconMap[item.iconName] || Wrench;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] mb-4 group-hover:bg-[#142235] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#D6A84F]" />
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

        {/* Platform Reliability & Safety Focus */}
        <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 sm:p-12 mb-14 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D6A84F]" />
              Safety & Verification Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#142235] font-heading">
              Built with Motorist Safety as Priority
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Breakdowns on public highways can be stressful situations. MECHFIND integrates digital identity verification, direct safety hotlines, and route coordination so you always know who is arriving to assist your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#E6E9EF]">
            <div className="space-y-2">
              <h4 className="font-bold text-[#142235] text-base font-heading">Direct Phone Hotline</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Emergency telephonic customer support is always available if battery runs low or mobile internet connectivity drops.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#142235] text-base font-heading">Transparent Estimates</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Review mechanic diagnosis, proposed parts, and estimated repair costs before authorizing roadside work.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#142235] text-base font-heading">Bikes & Cars Compatibility</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Dedicated category matching ensures technicians carry appropriate motorcycle stands, tyre plugs, or automotive diagnostic scanners.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-4">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <span>Explore Step-by-Step Platform Tutorials</span>
            <ArrowRight className="w-4 h-4 text-[#D6A84F]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
