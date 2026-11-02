import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { contactConfig } from "@/config/contact";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MECHFIND",
  description:
    "Get in touch with the MECHFIND team. Inquiries for partnerships, customer support, media, and general platform questions.",
};

export default function ContactPage() {
  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            We&apos;re Here to Assist You
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Have questions about our roadside breakdown network, technical integrations, or fleet partnerships? Send us a message or call our direct line.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Hotline */}
            <div className="bg-[#141414] border border-[#2B2B2B] rounded-3xl p-7 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD400] text-[#080808] flex items-center justify-center font-bold">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#FFD400] tracking-wider block mb-1">
                  Phone Assistance
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  24/7 Breakdown Hotline
                </h3>
                <p className="text-xs text-neutral-400 mt-1 mb-4 leading-relaxed">
                  Call directly for urgent roadside assistance guidance or active dispatch inquiries.
                </p>
                <a
                  href={contactConfig.telLink}
                  className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#2A2A2A] text-white border border-[#333333] hover:border-[#FFD400] px-4 py-2.5 rounded-xl text-sm font-mono font-bold transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#FFD400]" />
                  <span>{contactConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-[#121212] border border-[#242424] rounded-3xl p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center text-[#FFD400]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Email Channels</h3>
              <div className="space-y-2 text-xs text-neutral-300">
                <p>
                  <span className="text-neutral-500 block">General Support:</span>
                  <a href={`mailto:${contactConfig.email}`} className="text-[#FFD400] hover:underline font-mono">
                    {contactConfig.email}
                  </a>
                </p>
                <p>
                  <span className="text-neutral-500 block">Business & Operations:</span>
                  <a href={`mailto:${contactConfig.contactEmail}`} className="text-[#FFD400] hover:underline font-mono">
                    {contactConfig.contactEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Customer Care Dedicated Link Card */}
            <div className="bg-[#121212] border border-[#242424] rounded-3xl p-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#FFD400]">
                <Headphones className="w-4 h-4" />
                Customer Care Desk
              </div>
              <h3 className="text-base font-bold text-white">
                Looking for Emergency Customer Care?
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Visit our dedicated Customer Care page for emergency ticket filing and direct support resolution.
              </p>
              <div className="pt-2">
                <Link
                  href="/customer-care"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD400] hover:underline"
                >
                  <span>Go to Customer Care Page</span>
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
