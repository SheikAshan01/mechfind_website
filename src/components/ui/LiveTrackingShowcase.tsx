"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Navigation,
  Clock,
  Wrench,
  Info,
  Car,
  Compass,
  PhoneCall,
} from "lucide-react";
import { contactConfig } from "@/config/contact";

export function LiveTrackingShowcase() {
  const [etaDisplay, setEtaDisplay] = useState("12");

  useEffect(() => {
    const timer = setInterval(() => {
      setEtaDisplay((prev) => (prev === "12" ? "10" : prev === "10" ? "8" : "12"));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white border border-[#E6E9EF] rounded-3xl overflow-hidden shadow-sm">
      {/* Top Header Bar */}
      <div className="bg-[#142235] text-white px-5 sm:px-7 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6A84F] animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6A84F] relative" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#D6A84F]">
                Illustrative Product Preview
              </span>
            </div>
            <p className="text-xs text-[#CBD5E1]">
              Simulated Roadside Dispatch Interface
            </p>
          </div>
        </div>

        {/* Service Status Pill */}
        <div className="flex items-center gap-2 bg-[#1D3048] px-3.5 py-1.5 rounded-full border border-[#2D4565] text-xs">
          <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          <span className="font-semibold text-white">Status: Mechanic Dispatched</span>
        </div>
      </div>

      {/* Main Map View Area */}
      <div className="relative h-[380px] sm:h-[450px] bg-[#EEF2F6] overflow-hidden select-none">
        {/* Clean Light Map Road Texture */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lightRoadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>
            <filter id="navyRouteGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#142235" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background Map Blocks */}
          <rect x="20" y="20" width="180" height="140" rx="12" fill="#E2E8F0" opacity="0.6" />
          <rect x="240" y="30" width="220" height="100" rx="12" fill="#E2E8F0" opacity="0.6" />
          <rect x="500" y="20" width="300" height="130" rx="12" fill="#E2E8F0" opacity="0.6" />
          <rect x="80" y="260" width="220" height="150" rx="12" fill="#E2E8F0" opacity="0.6" />
          <rect x="360" y="280" width="260" height="140" rx="12" fill="#E2E8F0" opacity="0.6" />
          <rect x="680" y="220" width="320" height="200" rx="12" fill="#E2E8F0" opacity="0.6" />

          {/* Road Grid */}
          <path d="M -50,180 Q 250,190 480,180 T 1200,190" stroke="#FFFFFF" strokeWidth="32" fill="none" />
          <path d="M -50,180 Q 250,190 480,180 T 1200,190" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="6 6" fill="none" />

          <path d="M 220,-30 Q 230,220 230,500" stroke="#FFFFFF" strokeWidth="28" fill="none" />
          <path d="M 220,-30 Q 230,220 230,500" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="6 6" fill="none" />

          <path d="M 640,-30 Q 640,240 640,500" stroke="#FFFFFF" strokeWidth="28" fill="none" />
          <path d="M 640,-30 Q 640,240 640,500" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="6 6" fill="none" />

          {/* Simulated Route connecting Mechanic to Customer */}
          <path
            d="M 180,120 Q 230,180 380,180 T 640,280"
            stroke="#142235"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            filter="url(#navyRouteGlow)"
          />
          <path
            d="M 180,120 Q 230,180 380,180 T 640,280"
            stroke="#D6A84F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 10"
            fill="none"
            className="animate-pulse"
          />
        </svg>

        {/* Customer Location Marker (End of Route) */}
        <div className="absolute top-[260px] left-[60%] sm:left-[64%] -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative flex flex-col items-center"
          >
            <span className="w-12 h-12 rounded-full bg-red-500/20 absolute -top-2.5 animate-ping" />
            <div className="w-9 h-9 rounded-full bg-red-600 border-2 border-white flex items-center justify-center shadow-md">
              <Car className="w-4 h-4 text-white" />
            </div>

            {/* Label Card */}
            <div className="mt-2 bg-white border border-[#E6E9EF] rounded-xl px-3 py-1.5 shadow-md whitespace-nowrap text-center">
              <span className="block text-[10px] uppercase font-bold text-red-600">
                Customer Location
              </span>
              <span className="text-xs font-semibold text-[#142235]">
                Vehicle Breakdown Point
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mechanic Marker (Moving along route) */}
        <div className="absolute top-[140px] left-[32%] sm:left-[36%] -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            animate={{ x: [0, 8, 0], y: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#142235] text-white border-2 border-white flex items-center justify-center shadow-md">
              <Wrench className="w-4 h-4 text-[#D6A84F]" />
            </div>

            {/* Mechanic ETA Banner */}
            <div className="mt-2 bg-white border border-[#142235]/30 rounded-xl px-3 py-1.5 shadow-md whitespace-nowrap text-center">
              <div className="flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
                <span className="text-xs font-bold text-[#142235]">
                  Assigned Service Professional
                </span>
              </div>
              <span className="text-[11px] text-[#667085]">
                En Route to Vehicle
              </span>
            </div>
          </motion.div>
        </div>

        {/* Compass & Map Controls (HUD) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <div className="w-8 h-8 rounded-xl bg-white border border-[#E6E9EF] flex items-center justify-center text-[#142235] shadow-xs">
            <Compass className="w-4 h-4 text-[#142235]" />
          </div>
          <div className="px-2 py-0.5 rounded-lg bg-white border border-[#E6E9EF] text-[10px] font-semibold text-[#667085] shadow-xs">
            Map Mode
          </div>
        </div>

        {/* Floating ETA & Service Status Panel */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[360px] z-30">
          <div className="bg-white/95 border border-[#E6E9EF] rounded-2xl p-4 shadow-lg backdrop-blur-xs">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-center text-[#142235]">
                  <Wrench className="w-5 h-5 text-[#D6A84F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#142235] text-sm">Roadside Unit En Route</h4>
                  <p className="text-xs text-[#667085]">
                    Equipped for Diagnostics & Repairs
                  </p>
                </div>
              </div>

              <a
                href={contactConfig.telLink}
                className="p-2.5 bg-[#142235] hover:bg-[#1D3048] text-white rounded-xl font-semibold transition-transform active:scale-95 shadow-xs flex items-center gap-1.5 text-xs cursor-pointer"
                title="Call Support Hotline"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span className="hidden sm:inline">Support</span>
              </a>
            </div>

            {/* ETA Panel */}
            <div className="grid grid-cols-2 gap-2 bg-[#F7F8FA] rounded-xl p-2.5 border border-[#E6E9EF] text-center">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#667085] block">
                  Simulated ETA
                </span>
                <span className="text-sm font-bold text-[#142235] flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D6A84F]" /> ~{etaDisplay} Mins
                </span>
              </div>
              <div className="border-l border-[#E6E9EF]">
                <span className="text-[10px] uppercase font-semibold text-[#667085] block">
                  Service Tracking
                </span>
                <span className="text-sm font-bold text-[#142235] flex items-center justify-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#34A853]" /> Active Route
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Illustrative Preview Disclaimer */}
      <div className="bg-[#F7F8FA] border-t border-[#E6E9EF] px-5 py-3 flex items-center gap-2.5 text-xs text-[#667085]">
        <Info className="w-4 h-4 text-[#D6A84F] shrink-0" />
        <span>
          <strong>Product Illustration:</strong> This preview visualizes the live mechanic routing and estimated arrival interface featured in the MECHFIND mobile application.
        </span>
      </div>
    </div>
  );
}
