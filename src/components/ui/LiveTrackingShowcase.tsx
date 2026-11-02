"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Navigation,
  Clock,
  PhoneCall,
  ShieldCheck,
  Wrench,
  Info,
  Car,
  Compass,
} from "lucide-react";
import { contactConfig } from "@/config/contact";

export function LiveTrackingShowcase() {
  const [etaMinutes, setEtaMinutes] = useState(6);

  // Simulated live progress tick for interactive feel
  useEffect(() => {
    const timer = setInterval(() => {
      setEtaMinutes((prev) => (prev > 2 ? prev - 1 : 6));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#101010] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl relative">
      {/* Top Header Bar */}
      <div className="bg-[#151515] border-b border-[#262626] px-5 sm:px-7 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-[#FFD400] animate-ping absolute" />
            <span className="w-3 h-3 rounded-full bg-[#FFD400] relative" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#FFD400]">
                Live Tracking Showcase
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">REQ-#MF-8492</span>
            </div>
            <p className="text-xs text-neutral-300">
              Assistance dispatched to Highway Sector 4, Northbound
            </p>
          </div>
        </div>

        {/* Status Stage Pill */}
        <div className="flex items-center gap-2 bg-[#1C1C1C] px-3 py-1.5 rounded-full border border-[#2B2B2B] text-xs">
          <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          <span className="font-semibold text-white">Technician En Route</span>
          <span className="text-neutral-500">•</span>
          <span className="text-[#FFD400] font-bold">{etaMinutes} mins away</span>
        </div>
      </div>

      {/* Main Map View Area */}
      <div className="relative h-[380px] sm:h-[460px] bg-[#0c0d10] overflow-hidden select-none">
        {/* Map Grid Texture */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(255, 212, 0, 0.08) 0%, transparent 60%),
              linear-gradient(to right, #1f2229 1px, transparent 1px),
              linear-gradient(to bottom, #1f2229 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 36px 36px, 36px 36px",
          }}
        />

        {/* Simulated Road Network (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD400" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFD400" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFD400" stopOpacity="0.9" />
            </linearGradient>
            <filter id="yellowGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Road Grid Layout */}
          <path
            d="M -50,140 Q 200,160 380,100 T 900,180"
            stroke="#212631"
            strokeWidth="28"
            fill="none"
          />
          <path
            d="M 120,-20 Q 180,240 280,320 T 700,500"
            stroke="#212631"
            strokeWidth="34"
            fill="none"
          />
          <path
            d="M 450,-50 Q 420,200 680,300 T 1200,340"
            stroke="#212631"
            strokeWidth="24"
            fill="none"
          />
          {/* Street markings */}
          <path
            d="M 120,-20 Q 180,240 280,320 T 700,500"
            stroke="#303848"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            fill="none"
          />

          {/* Active Dispatch Route from Mechanic to Customer */}
          <path
            d="M 180,90 Q 240,160 340,210 T 640,290"
            stroke="#FFD400"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            filter="url(#yellowGlow)"
          />
          {/* Animated dashed beam along route */}
          <path
            d="M 180,90 Q 240,160 340,210 T 640,290"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 12"
            fill="none"
            className="animate-pulse"
          />
        </svg>

        {/* Customer Location Marker (End of Route) */}
        <div className="absolute top-[270px] left-[58%] sm:left-[62%] -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative flex flex-col items-center"
          >
            {/* Pulse rings */}
            <span className="w-14 h-14 rounded-full bg-red-500/20 absolute -top-3 animate-ping" />
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-red-400 border-2 border-white flex items-center justify-center shadow-lg shadow-red-500/50">
              <Car className="w-4 h-4 text-white" />
            </div>

            {/* Label Card */}
            <div className="mt-2 bg-[#121212]/95 border border-[#333333] rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md whitespace-nowrap text-center">
              <span className="block text-[10px] uppercase font-bold text-red-400">
                Your Breakdown Spot
              </span>
              <span className="text-xs font-semibold text-white">
                Vehicle Stalled (Bypass Rd)
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mechanic Marker (Moving along route) */}
        <div className="absolute top-[160px] left-[32%] sm:left-[35%] -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            animate={{ x: [0, 8, 0], y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Glow ring */}
            <div className="w-12 h-12 rounded-full bg-[#FFD400]/25 flex items-center justify-center animate-pulse">
              <div className="w-9 h-9 rounded-full bg-[#FFD400] text-[#080808] border-2 border-white flex items-center justify-center shadow-lg shadow-[#FFD400]/50 font-bold">
                <Wrench className="w-4 h-4" />
              </div>
            </div>

            {/* Mechanic ETA Banner */}
            <div className="mt-2 bg-[#121212]/95 border border-[#FFD400]/60 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md whitespace-nowrap text-center">
              <div className="flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
                <span className="text-xs font-extrabold text-[#FFD400]">
                  Mechanic Approaching
                </span>
              </div>
              <span className="text-[11px] text-neutral-300">
                1.4 km • ETA ~{etaMinutes} min
              </span>
            </div>
          </motion.div>
        </div>

        {/* Compass & Map Controls (Cosmetic HUD) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <div className="w-9 h-9 rounded-xl bg-[#141414]/90 border border-[#2b2b2b] flex items-center justify-center text-neutral-300 backdrop-blur-md">
            <Compass className="w-4 h-4 text-[#FFD400]" />
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-[#141414]/90 border border-[#2b2b2b] text-[10px] font-mono text-neutral-400 backdrop-blur-md">
            GPS 3D
          </div>
        </div>

        {/* Floating Mechanic Detail Card (Bottom Overlay) */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[380px] z-30">
          <div className="bg-[#121212]/95 border border-[#2B2B2B] rounded-2xl p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#202020] border border-[#383838] flex items-center justify-center text-[#FFD400] font-extrabold text-base">
                  DK
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-sm">David K.</h4>
                    <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
                  </div>
                  <p className="text-xs text-neutral-400">
                    Master Technician • Mobile Repair Van
                  </p>
                </div>
              </div>

              <a
                href={contactConfig.telLink}
                className="p-2.5 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 text-xs"
                title="Call Customer Support / Dispatch"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call Dispatch</span>
              </a>
            </div>

            {/* Vehicle & Equipment Tags */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-300 mb-3 pt-2 border-t border-[#222222]">
              <span className="bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2c2c2c]">
                Air Compressor
              </span>
              <span className="bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2c2c2c]">
                OBD-II Diagnostic Scanner
              </span>
              <span className="bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2c2c2c]">
                Battery Booster Pack
              </span>
            </div>

            {/* ETA & Distance Mini Stats */}
            <div className="grid grid-cols-2 gap-2 bg-[#171717] rounded-xl p-2.5 border border-[#242424] text-center">
              <div>
                <span className="text-[10px] uppercase font-semibold text-neutral-400 block">
                  Estimated Arrival
                </span>
                <span className="text-sm font-bold text-[#FFD400] flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {etaMinutes} Minutes
                </span>
              </div>
              <div className="border-l border-[#262626]">
                <span className="text-[10px] uppercase font-semibold text-neutral-400 block">
                  Remaining Distance
                </span>
                <span className="text-sm font-bold text-white flex items-center justify-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#34A853]" /> 1.4 km
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Disclaimer Footer */}
      <div className="bg-[#141414] border-t border-[#262626] px-5 py-3 flex items-center gap-2.5 text-xs text-neutral-400">
        <Info className="w-4 h-4 text-[#FFD400] shrink-0" />
        <span>
          <strong>Website Feature Showcase:</strong> Real-time GPS tracking and live telemetry are
          enabled in the MECHFIND mobile application when connected to active breakdown assistance dispatches.
        </span>
      </div>
    </div>
  );
}
