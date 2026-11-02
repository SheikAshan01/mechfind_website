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
    <footer className="w-full bg-[#142235] text-white border-t border-[#1D3048]">
      {/* Upper Footer: Brand & Link Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info Column (2 columns wide on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo size="lg" container="navy" priority />
            <p className="text-sm text-[#D6A84F] font-semibold tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#B8C4D5] max-w-sm leading-relaxed">
              MECHFIND connects motorists facing vehicle troubles with nearby automotive mechanics. Rapid discovery, transparent communication, and location-based roadside assistance.
            </p>

            {/* Direct hotline pill */}
            <div className="pt-2">
              <a
                href={contactConfig.telLink}
                className="inline-flex items-center gap-3 bg-[#1D3048] hover:bg-[#253D5C] border border-[#2D4565] hover:border-[#D6A84F]/50 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white font-semibold transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#D6A84F] text-[#142235] flex items-center justify-center font-bold">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#D6A84F] leading-none mb-0.5">
                    Roadside Assistance Hotline
                  </span>
                  <span className="font-mono text-white group-hover:text-[#D6A84F] transition-colors">
                    {contactConfig.phone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6A84F]">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-white transition-colors"
                >
                  Platform Features
                </Link>
              </li>
              <li>
                <Link
                  href="/customers"
                  className="hover:text-white transition-colors"
                >
                  For Customers
                </Link>
              </li>
              <li>
                <Link
                  href="/mechanics"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  For Mechanics (Join Us)
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="hover:text-white transition-colors"
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About MECHFIND
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Care */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6A84F]">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link
                  href="/customer-care"
                  className="hover:text-white transition-colors font-medium text-white flex items-center gap-1.5"
                >
                  <span>Customer Care</span>
                  <span className="text-[10px] bg-[#D6A84F] text-[#142235] px-1.5 py-0.2 rounded font-bold">
                    Hotline
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B8C4D5]" />
                  <span>{contactConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Mobile App */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6A84F]">
              Mobile App
            </h4>
            <p className="text-xs text-[#B8C4D5] leading-relaxed">
              Find qualified assistance quickly from your smartphone.
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => openDownloadModal("android")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1D3048] hover:bg-[#253D5C] border border-[#2D4565] hover:border-[#D6A84F]/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-[#D6A84F]" />
                  <div>
                    <span className="block text-[10px] text-[#94A3B8]">Android App</span>
                    <span className="text-xs font-semibold text-white">Google Play</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </button>

              <button
                type="button"
                onClick={() => openDownloadModal("ios")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1D3048] hover:bg-[#253D5C] border border-[#2D4565] hover:border-[#D6A84F]/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-[#D6A84F]" />
                  <div>
                    <span className="block text-[10px] text-[#94A3B8]">iOS App</span>
                    <span className="text-xs font-semibold text-white">Apple App Store</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#1D3048] bg-[#0E1826] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>
            © 2026 {siteConfig.name}. All rights reserved. Your Mechanic, Just Around the Corner.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-[#D6A84F]" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-[#D6A84F]" />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
