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
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            About Our Platform
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            Connecting Stranded Motorists with Nearby Mechanics
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            MECHFIND was created around a single, essential goal: ensuring that when a vehicle encounters unexpected trouble, getting qualified mechanical help is fast, straightforward, and transparent.
          </p>
        </div>

        {/* Brand Core Story & Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#475467] leading-relaxed">
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 space-y-4 shadow-sm">
              <h2 className="text-2xl font-bold text-[#142235] font-heading">
                The Problem We Are Addressing
              </h2>
              <p>
                A vehicle breakdown can happen anywhere—on a busy city bypass during rush hour, along an unfamiliar highway late at night, or in front of your own driveway.
              </p>
              <p>
                Historically, stranded drivers and motorcyclists have had to rely on uncertain web searches, arbitrary phone directories, or long waits for expensive towing services. Many common roadside issues—such as punctures, depleted batteries, starter troubles, or loose mechanical components—can be resolved right where the vehicle stops if a qualified technician is nearby.
              </p>
              <p>
                MECHFIND bridges this divide through modern location technology, matching motorists in need directly with automotive technicians ready to provide assistance.
              </p>
            </div>

            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 space-y-4 shadow-sm">
              <h2 className="text-2xl font-bold text-[#142235] font-heading">
                Our Commitment to Motorists and Mechanics
              </h2>
              <p>
                We believe in an ecosystem where both motorists and service providers thrive:
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A84F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#142235]">For Drivers & Riders:</strong> Clear discovery of nearby workshops, verified mechanics, live routing interfaces, and direct communication without unnecessary middlemen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D6A84F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#142235]">For Mechanics & Garages:</strong> Direct roadside job alerts, digital route guidance, schedule flexibility, and a modern platform to showcase skills and earn fair compensation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Values & Platform Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-8 space-y-6 shadow-sm">
              <BrandLogo size="md" withLink={false} />

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] shrink-0">
                    <Compass className="w-5 h-5 text-[#D6A84F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#142235] text-base font-heading">Location-Centric</h3>
                    <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                      Priority matching based on proximity to minimize roadside waiting time and hazard exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#D6A84F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#142235] text-base font-heading">Verified Tradespeople</h3>
                    <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                      Validation of technician credentials and trade competencies for dependable service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235] shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#D6A84F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#142235] text-base font-heading">Open & Transparent</h3>
                    <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                      Clear estimates, direct phone communication, and honest digital invoicing without surprise charges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E9EF]">
                <p className="text-xs text-[#667085] italic">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-6 text-center space-y-3 shadow-xs">
              <h3 className="text-base font-bold text-white font-heading">
                Have Inquiries or Suggestions?
              </h3>
              <p className="text-xs text-[#CBD5E1]">
                Reach our customer care team or connect with platform operations directly.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-2xs"
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
