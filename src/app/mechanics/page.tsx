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
      title: "Reduced Idle Waiting Time",
      desc: "Turn your workshop's quiet hours into profitable roadside dispatches by receiving live requests from motorists stalled nearby.",
      icon: Power,
    },
    {
      title: "Schedule Autonomy",
      desc: "Work strictly when it suits you. Flip your toggle to 'Online' when ready, and 'Offline' when busy or closed.",
      icon: Calendar,
    },
    {
      title: "Direct Map Turn Guidance",
      desc: "Integrated routing coordinates guide you straight to the driver's location without confusion.",
      icon: Navigation,
    },
    {
      title: "Build Verified Reputation",
      desc: "Collect verified reviews from motorists you help, establishing your shop or mobile unit as a reliable specialist.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Mechanic & Garage Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            Grow Your Automotive Business with MECHFIND.
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Whether you run a brick-and-mortar automotive workshop or operate a mobile roadside service vehicle, MECHFIND connects you directly with customers experiencing vehicle troubles in your immediate area.
          </p>
        </div>

        {/* Form & Benefits Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <MechanicPartnerForm />
          </div>

          {/* Right Column: Key Partner Perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#142235] font-heading">
                Why Partner with MECHFIND?
              </h2>

              <div className="space-y-5">
                {partnerPerks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-[#D6A84F]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#142235] mb-1 font-heading">
                          {perk.title}
                        </h3>
                        <p className="text-xs text-[#667085] leading-relaxed">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Requirements Box */}
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-6 space-y-3 shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D6A84F]">
                Partner Requirements
              </h3>
              <ul className="text-xs text-[#475467] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                  Practical mechanical experience with two-wheelers or four-wheelers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                  Proper automotive diagnostic tools & mobile roadside equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                  Valid government identity / business registration credentials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A84F] shrink-0" />
                  Smartphone with location capabilities for partner dispatch
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mechanic Features Matrix */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              Partner Suite
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#142235] mt-3 font-heading">
              Features Built for Mechanics & Garages
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Everything you need to accept dispatches, navigate to stranded vehicles, and finalize jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanicFeatures.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 space-y-2 transition-all shadow-2xs"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6A84F] bg-[#FBF4E7] px-2 py-0.5 rounded">
                  {item.tag || "Feature"}
                </span>
                <h3 className="text-base font-bold text-[#142235] pt-1 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials Link Card */}
        <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-heading">
              Want to See How the Partner Workflow Functions?
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-xl">
              Check out our Mechanic Tutorials covering registration, going online, accepting incoming jobs, and on-site invoicing.
            </p>
          </div>

          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>View Mechanic Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
