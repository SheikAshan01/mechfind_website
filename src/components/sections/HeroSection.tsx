"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Smartphone,
  Navigation2,
  Car,
  Bike,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";

export function HeroSection() {
  const { openDownloadModal } = useDownloadModal();

  return (
    <section className="relative pt-8 sm:pt-14 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#080808] via-[#0D0D0D] to-[#080808]">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-[#FFD400]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Tagline / Category pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2B2B2B] text-xs font-semibold text-neutral-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              <span className="text-[#FFD400] font-bold">MECHFIND</span>
              <span className="text-neutral-500">•</span>
              <span>Your Mechanic, Just Around the Corner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Vehicle Breakdown?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                  Find Your Mechanic.
                </span>
                <br />
                <span className="text-[#FFD400] inline-block mt-1">
                  Get Back on the Road.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Find nearby mechanics, request vehicle assistance and track your service in real time with MECHFIND. Fast roadside assistance for bikes and cars.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
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
                leftIcon={<Wrench className="w-4 h-4 text-[#FFD400]" />}
                className="w-full sm:w-auto"
              >
                Become a Mechanic
              </Button>
            </motion.div>

            {/* Supported Vehicles & Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-[#1F1F1F] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#FFD400]" />
                <span className="text-neutral-200 font-medium">Cars & SUVs</span>
              </div>
              <div className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-[#FFD400]" />
                <span className="text-neutral-200 font-medium">Bikes & Scooters</span>
              </div>
              <div className="flex items-center gap-2">
                <Navigation2 className="w-4 h-4 text-[#FFD400]" />
                <span className="text-neutral-200 font-medium">GPS Geolocation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
                <span className="text-neutral-200 font-medium">Verified Mechanics</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column: Premium Brand Automotive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-[#2B2B2B] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Subtle top yellow accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-80" />

              {/* Exact Brand Logo Showcase preserving proportions */}
              <div className="relative flex flex-col items-center justify-center py-6 sm:py-8">
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-[1024/781] transition-transform duration-300 group-hover:scale-102">
                  <Image
                    src="/images/mechfind-logo.png"
                    alt="MECHFIND Official Brand Badge"
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    priority
                    className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* HUD Badge: Live Breakdown Status Simulation */}
              <div className="bg-[#121212]/95 border border-[#2B2B2B] rounded-2xl p-4 space-y-3 mt-2 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD400] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD400]" />
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Nearby Mechanic Ready
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FFD400] bg-[#FFD400]/10 px-2 py-0.5 rounded border border-[#FFD400]/20 font-bold">
                    ~1.2 km away
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-300 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    Instant Geolocation Matching
                  </span>
                  <span className="text-white font-semibold">Bikes & Cars</span>
                </div>

                <div className="pt-2 border-t border-[#222222] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openDownloadModal("all")}
                    className="w-full flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Get App for Roadside Emergencies</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
