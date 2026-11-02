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
    "Dedicated customer care for MECHFIND vehicle breakdown assistance. Direct hotline 1234567890, support ticket submission, and roadside assistance guidance.",
};

export default function CustomerCarePage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Customer Care Hotline
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            We&apos;re Here When You Need Roadside Help
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Our customer care team is standing by to guide you through vehicle breakdown emergencies, app questions, and service inquiries.
          </p>
        </div>

        {/* Urgent Emergency Call Banner */}
        <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-6 sm:p-8 mb-14 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#D6A84F] text-[#142235] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-extrabold text-[#D6A84F] tracking-wider block">
                Urgent Vehicle Problem?
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
                Call Direct Customer Support Now
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                Roadside dispatch hotline: <span className="font-mono font-bold text-white">{contactConfig.phone}</span>
              </p>
            </div>
          </div>

          <a
            href={contactConfig.telLink}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 active:scale-98"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Support ({contactConfig.phone})</span>
          </a>
        </div>

        {/* Form & Support Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Form with Validation & Staging Notice */}
          <div className="lg:col-span-7">
            <CustomerCareForm />
          </div>

          {/* Right Column: Support Resources & FAQ Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-7 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#142235] flex items-center gap-2 font-heading">
                <LifeBuoy className="w-5 h-5 text-[#D6A84F]" />
                Support Operating Standards
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#475467]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D6A84F] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#142235] block">Hotline Assistance</span>
                    <span>Our phone line ({contactConfig.phone}) is maintained for stranded motorists during operating hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D6A84F] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#142235] block">Verified Mechanic Network</span>
                    <span>All roadside technicians dispatched carry identity authentication for your safety.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link to FAQs */}
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-7 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D6A84F]">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h3 className="text-base font-bold text-[#142235] font-heading">
                Have Quick Questions About How It Works?
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Check our extensive FAQ library for answers regarding location sharing, vehicle types supported, and mechanic partner requirements.
              </p>
              <div className="pt-1">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#142235] hover:text-[#D6A84F] transition-colors"
                >
                  <span>Browse All FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pre-launch Staging Explanatory Note */}
            <div className="bg-[#F7F8FA] border border-[#E6E9EF] rounded-2xl p-5 text-xs text-[#667085] space-y-2">
              <span className="font-bold text-[#142235] block">
                Platform Transparency Policy:
              </span>
              <p>
                MECHFIND does not display false submission claims while our backend APIs are in private staging. For any urgent roadside breakdown, please utilize the phone hotline directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
