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
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Platform Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Comprehensive Roadside Technology Suite
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            MECHFIND delivers an interconnected platform uniting stranded motorists, motorcycle riders, and skilled automotive technicians through modern geolocation and dispatch tools.
          </p>
        </div>

        {/* Section 1: Customer Features */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#222222]">
            <div>
              <span className="text-xs uppercase font-bold text-[#FFD400]">Suite 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Features for Drivers & Motorists
              </h2>
            </div>
            <Link
              href="/customers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD400] hover:text-[#E5BE00] transition-colors"
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
                  className="bg-[#121212] border border-[#242424] hover:border-[#FFD400]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-center text-[#FFD400] mb-4 group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                    <Icon className="w-5 h-5" />
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

        {/* Section 2: Mechanic Features */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#222222]">
            <div>
              <span className="text-xs uppercase font-bold text-[#FFD400]">Suite 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Features for Mechanics & Workshops
              </h2>
            </div>
            <Link
              href="/mechanics"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD400] hover:text-[#E5BE00] transition-colors"
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
                  className="bg-[#121212] border border-[#242424] hover:border-[#FFD400]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-center text-[#FFD400] mb-4 group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                    <Icon className="w-5 h-5" />
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

        {/* Platform Reliability & Safety Focus */}
        <div className="bg-[#141414] border border-[#292929] rounded-3xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/25">
              <ShieldCheck className="w-3.5 h-3.5" />
              Safety & Verification Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Built with Motorist Safety as Priority
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Breakdowns on public highways can be high-stress situations. MECHFIND integrates digital identity badges, direct safety hotlines, and route telemetry so you always know who is arriving to assist your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#242424]">
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base">Direct Hotline Backup</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                24/7 telephonic customer care is always available if your smartphone battery runs low or connectivity drops.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base">Transparent Estimates</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Inspect mechanic diagnostics, proposed parts, and labor estimates before authorizing roadside repair.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base">Two-Wheeler & Four-Wheeler Support</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Dedicated category matching ensures technicians carry appropriate motorcycle stands, tire plugs, or automotive OBD scanners.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-6">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)]"
          >
            <span>Explore Step-by-Step Platform Tutorials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
