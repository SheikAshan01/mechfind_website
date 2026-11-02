"use client";

import React from "react";
import {
  Car,
  Bike,
  Wrench,
  BatteryCharging,
  Fuel,
  Disc,
  Flame,
  PhoneCall,
  Smartphone,
} from "lucide-react";
import { contactConfig } from "@/config/contact";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export default function CustomersPage() {
  const { openDownloadModal } = useDownloadModal();

  const emergencySituations = [
    {
      id: "flat-tyre",
      title: "Flat Tyre & Puncture Repair",
      desc: "Fast tyre changing, tube repairs, tubeless plugging, or spare tyre mounting for motorcycles and cars.",
      icon: Disc,
    },
    {
      id: "battery-jumpstart",
      title: "Dead Battery Jumpstart",
      desc: "Instant heavy-duty booster cables and portable battery power packs to jumpstart depleted vehicle batteries.",
      icon: BatteryCharging,
    },
    {
      id: "engine-overheating",
      title: "Engine Overheating & Coolant",
      desc: "Coolant top-ups, radiator leak inspection, fan belt checks, and thermal recovery guidance.",
      icon: Flame,
    },
    {
      id: "fuel-emergency",
      title: "Emergency Fuel Delivery",
      desc: "Stranded with an empty tank? Receive safe emergency fuel delivery to get you to the nearest service station.",
      icon: Fuel,
    },
    {
      id: "brake-issues",
      title: "Brake & Fluid Inspection",
      desc: "Brake pad inspection, hydraulic fluid top-up, and pedal diagnosis for safe stopping capability.",
      icon: Wrench,
    },
    {
      id: "mechanical-stalling",
      title: "Mechanical Stalling & Diagnostics",
      desc: "Starter motor issues, spark plug failures, clutch wire snaps, alternator faults, and OBD-II electronic scans.",
      icon: Car,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            For Drivers & Riders
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Roadside Assistance Whenever and Wherever Trouble Strikes
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            From daily commuters to weekend road-trippers, MECHFIND ensures that unexpected mechanical issues never leave you stranded without help.
          </p>
        </div>

        {/* Two Vehicle Categories Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Cars & SUVs */}
          <div className="bg-[#121212] border border-[#262626] rounded-3xl p-8 space-y-5 relative overflow-hidden group hover:border-[#FFD400]/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#1C1C1C] border border-[#2C2C2C] flex items-center justify-center text-[#FFD400]">
              <Car className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white">Car & SUV Assistance</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Tailored roadside assistance for passenger sedans, hatchbacks, SUVs, and electric vehicles. Technicians arrive equipped with automotive hydraulic jacks, wheel braces, battery boosters, and electronic diagnostic scan tools.
            </p>
            <ul className="text-xs text-neutral-400 space-y-2 pt-2 border-t border-[#222222]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Four-wheel puncture assistance & wheel changes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                12V battery jumpstart & charging checks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Engine overheat inspection & fluid diagnostics
              </li>
            </ul>
          </div>

          {/* Bikes & Scooters */}
          <div className="bg-[#121212] border border-[#262626] rounded-3xl p-8 space-y-5 relative overflow-hidden group hover:border-[#FFD400]/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#1C1C1C] border border-[#2C2C2C] flex items-center justify-center text-[#FFD400]">
              <Bike className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white">Motorcycle & Scooter Assistance</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Two-wheelers have unique roadside vulnerabilities. MECHFIND matches riders with specialized two-wheeler mechanics who arrive on mobile service bikes carrying puncture kits, spark plugs, clutch cables, and chain repair tools.
            </p>
            <ul className="text-xs text-neutral-400 space-y-2 pt-2 border-t border-[#222222]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Tubed & tubeless tyre puncture repairs on site
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Snapping clutch / throttle cable replacements
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Spark plug, carburetor & fuel line unclogging
              </li>
            </ul>
          </div>
        </div>

        {/* Common Breakdown Situations Handled */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
              Roadside Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Common Breakdown Situations We Address
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Our registered technicians are prepared to tackle high-frequency roadside problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencySituations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-[#121212] border border-[#242424] hover:border-[#FFD400]/40 rounded-2xl p-6 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-center text-[#FFD400] mb-4 group-hover:bg-[#FFD400] group-hover:text-[#080808] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking Process Card */}
        <div className="bg-[#141414] border border-[#2B2B2B] rounded-3xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Simple 3-Step Request Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#181818] p-5 rounded-2xl border border-[#262626]">
              <span className="text-2xl font-mono font-bold text-[#FFD400] block mb-2">01</span>
              <h3 className="font-bold text-white text-base mb-1">Detect Location</h3>
              <p className="text-xs text-neutral-400">
                Share your GPS coordinates with one tap so nearby technicians know exactly where your vehicle is stopped.
              </p>
            </div>

            <div className="bg-[#181818] p-5 rounded-2xl border border-[#262626]">
              <span className="text-2xl font-mono font-bold text-[#FFD400] block mb-2">02</span>
              <h3 className="font-bold text-white text-base mb-1">Select Issue</h3>
              <p className="text-xs text-neutral-400">
                Choose the vehicle problem and model. We broadcast to mechanics equipped with appropriate parts.
              </p>
            </div>

            <div className="bg-[#181818] p-5 rounded-2xl border border-[#262626]">
              <span className="text-2xl font-mono font-bold text-[#FFD400] block mb-2">03</span>
              <h3 className="font-bold text-white text-base mb-1">Track & Resolve</h3>
              <p className="text-xs text-neutral-400">
                Follow your mechanic’s arrival live on the map, receive diagnosis, and get your vehicle operational again.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#141414] via-[#1C1C1C] to-[#141414] border border-[#292929] rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need Immediate Breakdown Assistance?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
            Call our direct 24/7 customer care line or register for instant app download notification.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contactConfig.telLink}
              className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Hotline: {contactConfig.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => openDownloadModal("all")}
              className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#252525] text-white border border-[#333333] font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              <Smartphone className="w-4 h-4 text-[#FFD400]" />
              <span>Download MECHFIND App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
