"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, ArrowUpRight, Smartphone, Shield, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export function Footer() {
  const { openDownloadModal } = useDownloadModal();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#222222] text-neutral-300">
      {/* Upper Footer: Brand & Link Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info Column (2 columns wide on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo size="lg" priority />
            <p className="text-sm text-[#FFD400] font-semibold tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              MECHFIND connects drivers and riders with certified nearby mechanics during unexpected vehicle breakdowns. Simple discovery, fast roadside dispatch, and transparent service.
            </p>

            {/* Direct hotline pill */}
            <div className="pt-2">
              <a
                href={contactConfig.telLink}
                className="inline-flex items-center gap-2.5 bg-[#141414] hover:bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#FFD400]/50 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white font-semibold transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FFD400] text-[#080808] flex items-center justify-center font-bold">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#FFD400] leading-none mb-0.5">
                    24/7 Breakdown Hotline
                  </span>
                  <span className="font-mono text-white group-hover:text-[#FFD400] transition-colors">
                    {contactConfig.phone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  Platform Features
                </Link>
              </li>
              <li>
                <Link
                  href="/customers"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  For Customers
                </Link>
              </li>
              <li>
                <Link
                  href="/mechanics"
                  className="hover:text-[#FFD400] transition-colors text-white font-medium"
                >
                  For Mechanics (Join Us)
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  About MECHFIND
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Care */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/customer-care"
                  className="hover:text-[#FFD400] transition-colors font-medium text-white flex items-center gap-1.5"
                >
                  <span>Customer Care</span>
                  <span className="text-[10px] bg-[#FFD400] text-[#080808] px-1.5 py-0.2 rounded font-bold">
                    24/7
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FFD400] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="hover:text-[#FFD400] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{contactConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Mobile App */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Mobile App
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get rapid roadside mechanic access in your pocket.
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => openDownloadModal("android")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1B1B1B] border border-[#2B2B2B] hover:border-[#FFD400]/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-[#FFD400]" />
                  <div>
                    <span className="block text-[10px] text-neutral-400">Download for</span>
                    <span className="text-xs font-bold text-white">Android</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </button>

              <button
                type="button"
                onClick={() => openDownloadModal("ios")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1B1B1B] border border-[#2B2B2B] hover:border-[#FFD400]/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-[#FFD400]" />
                  <div>
                    <span className="block text-[10px] text-neutral-400">Download for</span>
                    <span className="text-xs font-bold text-white">iOS (iPhone)</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#1C1C1C] bg-[#070707] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 {siteConfig.name}. All rights reserved. Your Mechanic, Just Around the Corner.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-neutral-300 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              href="/terms"
              className="hover:text-neutral-300 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
