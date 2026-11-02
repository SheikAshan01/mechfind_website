"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { LiveTrackingShowcase } from "@/components/ui/LiveTrackingShowcase";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"customer" | "mechanic">("customer");
  const { openDownloadModal } = useDownloadModal();

  const customerDetailedSteps = [
    {
      num: "01",
      title: "Open the Platform & Trigger Emergency Request",
      desc: "Whenever you experience a puncture, dead battery, engine cutoff, or unfamiliar mechanical noise, launch MECHFIND on your phone or web browser.",
      tip: "Ensure your phone's GPS location permission is granted for automatic pinpoint accuracy.",
    },
    {
      num: "02",
      title: "Select Your Vehicle & State Your Issue",
      desc: "Specify whether you ride a motorcycle or drive a car, choose your vehicle model, and select your primary issue from our quick-picker (e.g. Flat Tyre, Battery Jumpstart, Overheating, Mechanical).",
      tip: "You can add a brief text note regarding nearby landmarks.",
    },
    {
      num: "03",
      title: "Nearest Qualified Mechanics are Alerted",
      desc: "MECHFIND’s location algorithm broadcasts your request to registered mechanics operating within your immediate perimeter. Technicians evaluate your vehicle specifications and distance before accepting.",
      tip: "You receive the technician's identity, verification badge, and estimated travel time instantly upon acceptance.",
    },
    {
      num: "04",
      title: "Simulated Route Tracking & Direct Communication",
      desc: "Watch your mechanic’s approach live on the map. You have access to a direct calling button to relay specific safety or parking instructions.",
      tip: "Stay safely inside or behind the road barrier until the technician pulls up with hazard indicators on.",
    },
    {
      num: "05",
      title: "On-Site Diagnosis, Repair & Digital Summary",
      desc: "The technician inspects your vehicle, explains the work needed, and performs roadside repair. Once completed, you confirm the job and review your digital invoice.",
      tip: "Your repair history is stored in your MECHFIND log for future maintenance reference.",
    },
  ];

  const mechanicDetailedSteps = [
    {
      num: "01",
      title: "Register & Complete Verification",
      desc: "Sign up via the mechanic partner registration form. Submit your trade identity, proof of workshop or mobile equipment, and indicate your vehicle competencies (bikes, cars, or both).",
      tip: "Approved partners receive priority access to local dispatch broadcasts.",
    },
    {
      num: "02",
      title: "Toggle Online When Ready to Work",
      desc: "You maintain total control over your working schedule. Turn the toggle 'Online' whenever you are ready to receive service calls in your area, and 'Offline' when you are occupied.",
      tip: "Customize your preferred response radius to match your mobile unit's travel convenience.",
    },
    {
      num: "03",
      title: "Receive Audio Dispatch Alerts",
      desc: "When a driver requests assistance within your radius, you receive an instant dispatch banner with the vehicle model, reported issue, and roadside coordinates.",
      tip: "Review job details and tap 'Accept' to confirm dispatch.",
    },
    {
      num: "04",
      title: "Turn-by-Turn Navigation to the Breakdown Spot",
      desc: "Launch integrated turn-by-turn routing straight to the driver's pinned location. The motorist can track your arrival in real time.",
      tip: "Always park your mobile service unit in a safe, visible position with warning hazard lights.",
    },
    {
      num: "05",
      title: "Diagnose, Fix, and Mark Job Complete",
      desc: "Perform necessary mechanical diagnosis, provide an honest estimate, execute the roadside repair, and record completion in the app.",
      tip: "Earn genuine positive reviews that elevate your profile across the network.",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Step-by-Step Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            How MECHFIND Operates
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Whether you are a stranded driver waiting on the roadside or a skilled automotive technician ready to assist, our platform makes every step transparent and efficient.
          </p>
        </div>

        {/* Tab Switcher: For Customers vs For Mechanics */}
        <div className="flex items-center gap-3 mb-10 border-b border-[#E6E9EF] pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("customer")}
            className={`text-sm sm:text-base font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer ${
              activeTab === "customer"
                ? "bg-[#142235] text-white shadow-xs"
                : "bg-white text-[#667085] hover:text-[#142235] border border-[#E6E9EF]"
            }`}
          >
            For Drivers & Motorists
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mechanic")}
            className={`text-sm sm:text-base font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer ${
              activeTab === "mechanic"
                ? "bg-[#142235] text-white shadow-xs"
                : "bg-white text-[#667085] hover:text-[#142235] border border-[#E6E9EF]"
            }`}
          >
            For Mechanics & Garages
          </button>
        </div>

        {/* Detailed Timeline Steps */}
        <div className="space-y-5 mb-16">
          {(activeTab === "customer" ? customerDetailedSteps : mechanicDetailedSteps).map(
            (item) => (
              <div
                key={item.num}
                className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-3xl p-6 sm:p-8 transition-all shadow-xs group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center font-mono font-black text-xl text-[#D6A84F] shrink-0 group-hover:bg-[#142235] group-hover:text-white transition-colors">
                    {item.num}
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-[#142235] font-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#475467] leading-relaxed">
                      {item.desc}
                    </p>
                    {item.tip && (
                      <div className="mt-3 inline-flex items-start gap-2 bg-[#FBF4E7] border border-[#D6A84F]/30 px-3.5 py-2 rounded-xl text-xs text-[#142235]">
                        <span className="font-bold text-[#D6A84F] uppercase text-[10px] mt-0.5">
                          Helpful Tip:
                        </span>
                        <span>{item.tip}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Tracking Showcase Embed */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#142235] font-heading">
              Tracking & Dispatch Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1">
              See how route tracking coordinates assistance and informs the motorist.
            </p>
          </div>
          <LiveTrackingShowcase />
        </div>

        {/* Roadside Safety Protocol Card */}
        <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 mb-16 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6A84F] mb-2">
            <AlertTriangle className="w-4 h-4" />
            Safety Guidelines
          </div>
          <h3 className="text-xl font-bold text-[#142235] mb-4 font-heading">
            Roadside Safety While Awaiting Your Mechanic
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs sm:text-sm text-[#475467] leading-relaxed">
            <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-[#E6E9EF]">
              <span className="font-bold text-[#142235] block mb-1">1. Turn Hazard Lights On</span>
              Turn your vehicle hazard indicators on immediately to warn approaching traffic, especially at dusk or night.
            </div>
            <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-[#E6E9EF]">
              <span className="font-bold text-[#142235] block mb-1">2. Stay in a Safe Location</span>
              If on a high-speed motorway or highway, stand safely behind the metal safety barrier well away from travel lanes.
            </div>
            <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-[#E6E9EF]">
              <span className="font-bold text-[#142235] block mb-1">3. Verify Mechanic ID</span>
              Confirm the attending mechanic&apos;s credentials displayed on the MECHFIND application before handing over vehicle keys.
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xs">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
            Ready to Try MECHFIND?
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-xl mx-auto">
            Get breakdown support for your vehicle or register your skills as a mechanic partner today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openDownloadModal("all")}
              className="bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
            >
              Download Mobile App
            </button>
            <Link
              href="/mechanics"
              className="bg-[#1D3048] hover:bg-[#253D5C] text-white border border-[#2D4565] font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              Become a Mechanic Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
