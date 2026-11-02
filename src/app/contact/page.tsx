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
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            We&apos;re Here to Assist You
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Have questions about our roadside breakdown network, technical integrations, or fleet partnerships? Send us a message or call our direct line.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Hotline */}
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-7 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center font-bold">
                <PhoneCall className="w-6 h-6 text-[#D6A84F]" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#D6A84F] tracking-wider block mb-1">
                  Phone Assistance
                </span>
                <h3 className="text-xl font-black text-[#142235] font-heading">
                  Roadside Support Hotline
                </h3>
                <p className="text-xs text-[#667085] mt-1 mb-4 leading-relaxed">
                  Call directly for urgent roadside assistance guidance or active dispatch inquiries.
                </p>
                <a
                  href={contactConfig.telLink}
                  className="inline-flex items-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white px-4 py-2.5 rounded-xl text-sm font-mono font-bold transition-all shadow-xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#D6A84F]" />
                  <span>{contactConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-7 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235]">
                <Mail className="w-5 h-5 text-[#D6A84F]" />
              </div>
              <h3 className="text-base font-bold text-[#142235] font-heading">Email Channels</h3>
              <div className="space-y-2 text-xs text-[#475467]">
                <p>
                  <span className="text-[#667085] block">General Support:</span>
                  <a href={`mailto:${contactConfig.email}`} className="text-[#142235] hover:underline font-mono font-semibold">
                    {contactConfig.email}
                  </a>
                </p>
                <p>
                  <span className="text-[#667085] block">Business & Operations:</span>
                  <a href={`mailto:${contactConfig.contactEmail}`} className="text-[#142235] hover:underline font-mono font-semibold">
                    {contactConfig.contactEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Customer Care Dedicated Link Card */}
            <div className="bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-7 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D6A84F]">
                <Headphones className="w-4 h-4" />
                Customer Care Desk
              </div>
              <h3 className="text-base font-bold text-white font-heading">
                Looking for Emergency Customer Care?
              </h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Visit our dedicated Customer Care page for emergency ticket filing and direct support resolution.
              </p>
              <div className="pt-1">
                <Link
                  href="/customer-care"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D6A84F] hover:underline"
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
