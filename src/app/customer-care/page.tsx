import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  HelpCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
  LifeBuoy,
} from "lucide-react";
import { contactConfig } from "@/config/contact";
import { CustomerCareForm } from "@/components/forms/CustomerCareForm";

export const metadata: Metadata = {
  title: "Customer Care & Emergency Support | MECHFIND",
  description:
    "Dedicated 24/7 customer care for MECHFIND vehicle breakdown assistance. Direct hotline 1234567890, support ticket submission, and roadside assistance guidance.",
};

export default function CustomerCarePage() {
  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Dedicated Customer Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            We&apos;re Here When You Need Roadside Help
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Our customer care team is standing by to guide you through vehicle breakdown emergencies, app questions, and service inquiries.
          </p>
        </div>

        {/* Urgent Emergency Call Banner */}
        <div className="bg-gradient-to-r from-[#1E1908] via-[#241D09] to-[#171305] border border-[#FFD400]/40 rounded-3xl p-6 sm:p-8 mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FFD400] text-[#080808] flex items-center justify-center font-bold shrink-0 shadow-lg shadow-[#FFD400]/30">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-extrabold text-[#FFD400] tracking-wider block">
                Urgent Vehicle Emergency?
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Call Direct Customer Support Now
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                Toll-free 24/7 emergency dispatch line: <span className="font-mono font-bold text-white">{contactConfig.phone}</span>
              </p>
            </div>
          </div>

          <a
            href={contactConfig.telLink}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-black text-base px-8 py-4 rounded-2xl transition-all shadow-[0_4px_25px_-3px_rgba(255,212,0,0.4)] cursor-pointer shrink-0 active:scale-95"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Customer Support ({contactConfig.phone})</span>
          </a>
        </div>

        {/* Form & Support Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Form with Validation & Staging Notice */}
          <div className="lg:col-span-7">
            <CustomerCareForm />
          </div>

          {/* Right Column: Support Resources & FAQ Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#262626] rounded-3xl p-7 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-[#FFD400]" />
                Support Operating Standards
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FFD400] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">24/7 Hotline Availability</span>
                    <span>Our phone line ({contactConfig.phone}) is maintained 24 hours daily for stranded motorists.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#FFD400] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">Verified Mechanic Network</span>
                    <span>All roadside technicians dispatched carry identity authentication for your safety.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link to FAQs */}
            <div className="bg-[#121212] border border-[#242424] rounded-3xl p-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#FFD400]">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h3 className="text-base font-bold text-white">
                Have Quick Questions About How It Works?
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Check our extensive FAQ library for answers regarding tracking, vehicle types supported, and mechanic partner requirements.
              </p>
              <div className="pt-2">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD400] hover:underline"
                >
                  <span>Browse All FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pre-launch Staging Explanatory Note */}
            <div className="bg-[#101010] border border-[#202020] rounded-2xl p-5 text-xs text-neutral-400 space-y-2">
              <span className="font-bold text-neutral-300 block">
                Platform Transparency Policy:
              </span>
              <p>
                MECHFIND does not record false online submissions while our backend APIs are in private staging. For any urgent roadside breakdown, please utilize the phone hotline directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
