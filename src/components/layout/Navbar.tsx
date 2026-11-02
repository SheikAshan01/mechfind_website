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
          "sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md",
          isScrolled
            ? "border-b border-[#E6E9EF] shadow-xs py-2.5"
            : "border-b border-[#EEF1F5] py-3.5"
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
              className="hidden lg:flex items-center gap-1 xl:gap-1.5"
            >
              {siteConfig.mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors relative",
                      isActive
                        ? "text-[#142235] bg-[#EEF1F5] font-bold"
                        : "text-[#667085] hover:text-[#142235] hover:bg-[#F7F8FA]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D6A84F] rounded-full"
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
                className="hidden xl:flex items-center gap-1.5 text-xs text-[#667085] hover:text-[#142235] font-semibold px-2.5 py-1.5 rounded-lg transition-colors"
                title="Call Roadside Assistance"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>Hotline: {contactConfig.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openDownloadModal("all")}
                className="flex items-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-150 shadow-xs hover:shadow-sm cursor-pointer active:scale-98"
              >
                <Smartphone className="w-4 h-4 text-[#D6A84F]" />
                <span>Download App</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => openDownloadModal("all")}
                className="bg-[#142235] text-white font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
                aria-label="Download App"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>App</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#172334] hover:text-[#142235] rounded-xl bg-[#F7F8FA] border border-[#E6E9EF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142235]"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-[#E6E9EF] p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E6E9EF] mb-5">
                  <BrandLogo size="sm" withLink={false} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#667085] hover:text-[#142235] rounded-lg bg-[#F7F8FA] border border-[#E6E9EF]"
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
                          "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                          isActive
                            ? "bg-[#EEF1F5] text-[#142235] font-bold border-l-4 border-[#142235]"
                            : "text-[#172334] hover:bg-[#F7F8FA]"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#667085]" />
                      </Link>
                    );
                  })}
                </div>

                {/* Additional quick routes */}
                <div className="mt-5 pt-5 border-t border-[#E6E9EF] space-y-1">
                  <Link
                    href="/customers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[#667085] hover:text-[#142235]"
                  >
                    <span>For Customers</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#98A2B3]" />
                  </Link>
                  <Link
                    href="/customer-care"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[#667085] hover:text-[#142235]"
                  >
                    <span>Customer Care Hotline</span>
                    <span className="text-[11px] font-bold text-[#D6A84F] bg-[#FBF4E7] px-2 py-0.5 rounded">
                      24/7
                    </span>
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[#667085] hover:text-[#142235]"
                  >
                    <span>Help & FAQ</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#98A2B3]" />
                  </Link>
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-5 border-t border-[#E6E9EF] space-y-2.5">
                <a
                  href={contactConfig.telLink}
                  className="w-full flex items-center justify-center gap-2 bg-[#F7F8FA] border border-[#E6E9EF] text-[#142235] hover:bg-[#EEF1F5] py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D6A84F]" />
                  <span>Call {contactConfig.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openDownloadModal("all");
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-[#D6A84F]" />
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
