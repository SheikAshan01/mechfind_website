import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const metadata: Metadata = {
  title: "About Us | MECHFIND",
  description:
    "Learn about MECHFIND, our platform mission, and our commitment to making vehicle breakdown assistance fast, accessible, and dependable for every motorist.",
};

export default function AboutPage() {
  return (
    <div className="w-full py-12 sm:py-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/25">
            About Our Platform
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Connecting Stranded Motorists with Nearby Mechanics
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed">
            MECHFIND was created around a single, essential goal: ensuring that when a vehicle encounters unexpected trouble, getting qualified mechanical help is fast, straightforward, and transparent.
          </p>
        </div>

        {/* Brand Core Story & Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <div className="bg-[#121212] border border-[#242424] rounded-3xl p-8 space-y-5">
              <h2 className="text-2xl font-bold text-white">
                The Problem We Are Solving
              </h2>
              <p>
                A vehicle breakdown can happen anywhere—on a busy city bypass during rush hour, along an unfamiliar rural highway late at night, or in front of your own driveway.
              </p>
              <p>
                Historically, stranded drivers and motorcyclists have had to rely on uncertain web searches, arbitrary phone directories, or long waits for expensive flatbed towing services. Most minor breakdowns—such as punctures, depleted batteries, starter troubles, or loose mechanical components—can be resolved right where the vehicle stops if a qualified technician is nearby.
              </p>
              <p>
                MECHFIND bridges this divide through modern location technology, matching motorists in need directly with automotive technicians ready to provide assistance.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#242424] rounded-3xl p-8 space-y-5">
              <h2 className="text-2xl font-bold text-white">
                Our Commitment to Motorists and Mechanics
              </h2>
              <p>
                We believe in an ecosystem where both motorists and service providers thrive:
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                  <span>
                    <strong>For Drivers & Riders:</strong> Clear discovery of nearby workshops, verified mechanics, live en-route tracking, and direct communication without unnecessary middlemen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                  <span>
                    <strong>For Mechanics & Garages:</strong> Direct roadside job alerts, digital route guidance, schedule flexibility, and a modern platform to showcase skills and earn fair compensation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Values & Platform Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#2B2B2B] rounded-3xl p-8 space-y-6">
              <BrandLogo size="md" withLink={false} />

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] flex items-center justify-center text-[#FFD400] shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Location-Centric</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Priority dispatch based on spatial proximity to minimize roadside waiting time and hazard exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] flex items-center justify-center text-[#FFD400] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Verified Tradespeople</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Thorough validation of technician credentials and trade competencies for dependable service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] flex items-center justify-center text-[#FFD400] shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Open & Transparent</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Clear estimates, direct phone communication, and honest digital invoicing without surprise charges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222222]">
                <p className="text-xs text-neutral-400 italic">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 text-center space-y-3">
              <h3 className="text-base font-bold text-white">
                Have Inquiries or Suggestions?
              </h3>
              <p className="text-xs text-neutral-400">
                Reach our customer care team or connect with platform operations directly.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
