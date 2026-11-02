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
      desc: "Heavy-duty booster cables and portable battery power packs to jumpstart depleted vehicle batteries.",
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
      desc: "Stranded with an empty tank? Receive emergency fuel delivery to get you to the nearest service station.",
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
      desc: "Starter motor issues, spark plug failures, clutch cable snaps, alternator faults, and electronic scans.",
      icon: Car,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            For Drivers & Riders
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            Roadside Assistance Whenever and Wherever Trouble Strikes
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            From daily commuters to weekend road-trippers, MECHFIND ensures that unexpected mechanical issues never leave you stranded without help.
          </p>
        </div>

        {/* Two Vehicle Categories Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Cars & SUVs */}
          <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 space-y-4 shadow-sm hover:border-[#142235]/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235]">
              <Car className="w-7 h-7 text-[#D6A84F]" />
            </div>
            <h2 className="text-2xl font-bold text-[#142235] font-heading">Car & SUV Assistance</h2>
            <p className="text-sm text-[#475467] leading-relaxed">
              Tailored roadside assistance for passenger sedans, hatchbacks, SUVs, and electric vehicles. Technicians arrive equipped with automotive hydraulic jacks, wheel braces, battery boosters, and electronic diagnostic scan tools.
            </p>
            <ul className="text-xs text-[#667085] space-y-2 pt-2 border-t border-[#E6E9EF]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                Four-wheel puncture assistance & wheel changes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                12V battery jumpstart & charging checks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                Engine overheat inspection & fluid diagnostics
              </li>
            </ul>
          </div>

          {/* Bikes & Scooters */}
          <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 space-y-4 shadow-sm hover:border-[#142235]/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235]">
              <Bike className="w-7 h-7 text-[#D6A84F]" />
            </div>
            <h2 className="text-2xl font-bold text-[#142235] font-heading">Motorcycle & Scooter Assistance</h2>
            <p className="text-sm text-[#475467] leading-relaxed">
              Two-wheelers have unique roadside vulnerabilities. MECHFIND matches riders with specialized two-wheeler mechanics who arrive on mobile service units carrying puncture kits, spark plugs, clutch cables, and chain repair tools.
            </p>
            <ul className="text-xs text-[#667085] space-y-2 pt-2 border-t border-[#E6E9EF]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                Tubed & tubeless tyre puncture repairs on site
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                Clutch / throttle cable replacements
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                Spark plug, carburetor & fuel line checks
              </li>
            </ul>
          </div>
        </div>

        {/* Common Breakdown Situations Handled */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              Roadside Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#142235] mt-3 font-heading">
              Common Breakdown Situations We Address
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Our registered technicians are prepared to tackle frequent roadside mechanical problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencySituations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-2xl p-6 transition-all shadow-2xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] mb-4 group-hover:bg-[#142235] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#D6A84F]" />
                  </div>
                  <h3 className="text-base font-bold text-[#142235] mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking Process Card */}
        <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 sm:p-12 mb-16 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-black text-[#142235] mb-6 font-heading">
            Simple 3-Step Request Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-[#E6E9EF]">
              <span className="text-2xl font-mono font-bold text-[#D6A84F] block mb-2">01</span>
              <h3 className="font-bold text-[#142235] text-base mb-1 font-heading">Detect Location</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Share your location coordinates with one tap so nearby technicians know where your vehicle is stopped.
              </p>
            </div>

            <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-[#E6E9EF]">
              <span className="text-2xl font-mono font-bold text-[#D6A84F] block mb-2">02</span>
              <h3 className="font-bold text-[#142235] text-base mb-1 font-heading">Select Issue</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Choose the vehicle problem and model. We broadcast to mechanics equipped with appropriate parts.
              </p>
            </div>

            <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-[#E6E9EF]">
              <span className="text-2xl font-mono font-bold text-[#D6A84F] block mb-2">03</span>
              <h3 className="font-bold text-[#142235] text-base mb-1 font-heading">Track & Resolve</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Follow your mechanic’s arrival live on the map, receive diagnosis, and get your vehicle operational again.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Need Immediate Breakdown Assistance?
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-xl mx-auto">
            Call our direct customer care line or register for instant app launch notification.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={contactConfig.telLink}
              className="inline-flex items-center gap-2 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Hotline: {contactConfig.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => openDownloadModal("all")}
              className="inline-flex items-center gap-2 bg-[#1D3048] hover:bg-[#253D5C] text-white border border-[#2D4565] font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-[#D6A84F]" />
              <span>Download MECHFIND App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
