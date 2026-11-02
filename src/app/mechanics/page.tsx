import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Power,
  Navigation,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { mechanicFeatures } from "@/data/features";
import { MechanicPartnerForm } from "@/components/forms/MechanicPartnerForm";

export const metadata: Metadata = {
  title: "For Mechanics & Workshops | MECHFIND Partner Portal",
  description:
    "Join the MECHFIND partner network. Receive direct roadside breakdown requests from nearby motorists, maintain full schedule flexibility, and grow your automotive repair business.",
};

export default function MechanicsPage() {
  const partnerPerks = [
    {
      title: "Zero Idle Waiting Time",
      desc: "Turn your workshop's quiet hours into profitable roadside dispatches by receiving live requests from motorists stalled nearby.",
      icon: Power,
    },
    {
      title: "100% Schedule Autonomy",
      desc: "Work strictly when it suits you. Flip your toggle to 'Online' when ready, and 'Offline' when busy or closed.",
      icon: Calendar,
    },
    {
      title: "Direct GPS Turn Guidance",
      desc: "No more getting lost trying to find stranded vehicles. Integrated map routing leads you straight to the driver's exact coordinates.",
      icon: Navigation,
    },
    {
      title: "Build Verified Reputation",
      desc: "Collect verified reviews from motorists you help, establishing your shop or mobile van as the go-to specialist in your area.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Mechanic & Garage Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Grow Your Automotive Business with MECHFIND
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Whether you run a brick-and-mortar automotive workshop or operate a mobile roadside service vehicle, MECHFIND connects you directly with customers experiencing vehicle troubles in your immediate area.
          </p>
        </div>

        {/* Form & Benefits Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <MechanicPartnerForm />
          </div>

          {/* Right Column: Key Partner Perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">
                Why Partner with MECHFIND?
              </h2>

              <div className="space-y-5">
                {partnerPerks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] border border-[#2D2D2D] flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">
                          {perk.title}
                        </h3>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Requirements Box */}
            <div className="bg-[#121212] border border-[#242424] rounded-3xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#FFD400]">
                Partner Requirements
              </h3>
              <ul className="text-xs text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                  Practical mechanical experience with two-wheelers or four-wheelers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                  Proper automotive diagnostic tools & mobile roadside equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                  Valid government identity / business registration credentials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                  Smartphone with active GPS connectivity for partner dispatch
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mechanic Features Matrix */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
              Partner Suite
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Features Built Exclusively for Mechanics
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Everything you need to accept dispatches, navigate to stranded vehicles, and finalize jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanicFeatures.map((item) => (
              <div
                key={item.id}
                className="bg-[#121212] border border-[#242424] rounded-2xl p-6 space-y-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-2 py-0.5 rounded">
                  {item.tag || "Feature"}
                </span>
                <h3 className="text-base font-bold text-white pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials Link Card */}
        <div className="bg-[#161616] border border-[#292929] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              Want to See How the Partner App Functions?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Check out our Mechanic Tutorials covering registration, going online, accepting incoming jobs, and on-site invoicing.
            </p>
          </div>

          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0"
          >
            <span>View Mechanic Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
