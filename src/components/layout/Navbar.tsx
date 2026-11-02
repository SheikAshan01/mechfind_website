"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Smartphone, PhoneCall, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useDownloadModal } from "@/components/ui/DownloadModalContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { openDownloadModal } = useDownloadModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#292929] shadow-lg shadow-black/40 py-3"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo strictly preserving uploaded appearance */}
            <div className="flex items-center">
              <BrandLogo size="md" priority />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#121212]/80 px-4 py-1.5 rounded-full border border-[#252525] backdrop-blur-sm"
            >
              {siteConfig.mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-xs xl:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 relative",
                      isActive
                        ? "text-[#FFD400] bg-white/5 font-bold"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFD400] rounded-full"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Hotline + Download App */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={contactConfig.telLink}
                className="hidden xl:flex items-center gap-1.5 text-xs text-neutral-300 hover:text-[#FFD400] font-semibold px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-[#2b2b2b]"
                title="Call 24/7 Roadside Assistance"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FFD400]" />
                <span>Hotline: {contactConfig.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openDownloadModal("all")}
                className="flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-150 shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)] hover:shadow-[0_4px_20px_-3px_rgba(255,212,0,0.5)] active:scale-95 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => openDownloadModal("all")}
                className="bg-[#FFD400] text-[#080808] font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
                aria-label="Download App"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>App</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white rounded-xl bg-[#141414] border border-[#252525] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#101010] border-l border-[#262626] p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-[#222222] mb-6">
                  <BrandLogo size="sm" withLink={false} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg bg-[#181818] border border-[#262626]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="space-y-1">
                  {siteConfig.mainNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                          isActive
                            ? "bg-[#1C1C1C] text-[#FFD400] font-bold border-l-4 border-[#FFD400]"
                            : "text-neutral-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-neutral-500" />
                      </Link>
                    );
                  })}
                </div>

                {/* Additional quick routes */}
                <div className="mt-6 pt-6 border-t border-[#222222] space-y-2">
                  <Link
                    href="/customers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-neutral-400 hover:text-white"
                  >
                    <span>For Customers</span>
                    <ChevronRight className="w-4 h-4 text-neutral-600" />
                  </Link>
                  <Link
                    href="/customer-care"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-neutral-400 hover:text-white"
                  >
                    <span>Customer Care Hotline</span>
                    <span className="text-xs text-[#FFD400] font-bold">24/7</span>
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-neutral-400 hover:text-white"
                  >
                    <span>Help & FAQ</span>
                    <ChevronRight className="w-4 h-4 text-neutral-600" />
                  </Link>
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-[#222222] space-y-3">
                <a
                  href={contactConfig.telLink}
                  className="w-full flex items-center justify-center gap-2 bg-[#181818] border border-[#2b2b2b] text-neutral-200 hover:text-white py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#FFD400]" />
                  <span>Call {contactConfig.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openDownloadModal("all");
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] py-3 rounded-xl text-sm font-bold transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)] cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download MECHFIND App</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
