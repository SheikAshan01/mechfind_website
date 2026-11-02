"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Navigation2,
  Car,
  Bike,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 bg-[#F7F8FA] border-b border-[#E6E9EF] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E9EF] text-xs font-semibold text-[#142235] shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
              <span className="font-bold text-[#142235]">MECHFIND</span>
              <span className="text-[#98A2B3]">•</span>
              <span className="text-[#667085]">Your Mechanic, Just Around the Corner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#142235] tracking-tight leading-[1.15] font-heading">
                Vehicle Breakdown?
                <br />
                Find Your Mechanic.
                <br />
                <span className="text-[#D6A84F]">Get Back on the Road.</span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Find nearby mechanics, request vehicle assistance and get help when your bike or car breaks down.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Button
                size="lg"
                variant="primary"
                href="/customers"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Find a Mechanic
              </Button>

              <Button
                size="lg"
                variant="secondary"
                href="/mechanics"
                leftIcon={<Wrench className="w-4 h-4 text-[#D6A84F]" />}
                className="w-full sm:w-auto"
              >
                Become a Mechanic
              </Button>
            </motion.div>

            {/* Supported Vehicles & Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-[#E6E9EF] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#667085]"
            >
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#142235]" />
                <span className="text-[#142235] font-medium">Cars & SUVs</span>
              </div>
              <div className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-[#142235]" />
                <span className="text-[#142235] font-medium">Bikes & Scooters</span>
              </div>
              <div className="flex items-center gap-2">
                <Navigation2 className="w-4 h-4 text-[#142235]" />
                <span className="text-[#142235] font-medium">Location Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
                <span className="text-[#142235] font-medium">Verified Mechanics</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column: Premium Automotive Service Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white border border-[#E6E9EF] rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden group">
              {/* Top Muted Gold Border Accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#D6A84F]" />

              {/* Exact Brand Logo Showcase */}
              <div className="relative flex flex-col items-center justify-center py-6 sm:py-8">
                <div className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[1024/781] transition-transform duration-300 group-hover:scale-102">
                  <Image
                    src="/images/mechfind-logo.png"
                    alt="MECHFIND Official Brand Badge"
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Assistance Status Card */}
              <div className="bg-[#F7F8FA] border border-[#E6E9EF] rounded-2xl p-4 space-y-3 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6A84F] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D6A84F]" />
                    </span>
                    <span className="text-xs font-bold text-[#142235] uppercase tracking-wider">
                      Nearby Mechanic Discovery
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#142235] bg-white px-2.5 py-0.5 rounded-full border border-[#E6E9EF]">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#667085] pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#142235]" />
                    Location-Based Matching
                  </span>
                  <span className="text-[#142235] font-semibold">Bikes & Cars</span>
                </div>

                <div className="pt-2 border-t border-[#E6E9EF]">
                  <p className="text-[11px] text-[#667085] leading-relaxed">
                    Connect directly with mechanics in your vicinity whenever unexpected mechanical issues arise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
