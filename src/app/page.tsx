import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CustomerFeaturesSection } from "@/components/sections/CustomerFeaturesSection";
import { MechanicFeaturesSection } from "@/components/sections/MechanicFeaturesSection";
import { LiveTrackingShowcase } from "@/components/ui/LiveTrackingShowcase";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { HomeFaqSection } from "@/components/sections/HomeFaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Your Mechanic, Just Around the Corner`,
  description:
    "Vehicle breakdown? Find nearby mechanics, request vehicle assistance and track your service in real time with MECHFIND. Fast roadside assistance for cars and bikes.",
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust / Value Section */}
      <TrustSection />

      {/* 3. How It Works Section */}
      <HowItWorksSection />

      {/* 4. Customer Features Section */}
      <CustomerFeaturesSection />

      {/* 5. Mechanic Features Section */}
      <MechanicFeaturesSection />

      {/* 6. Live Tracking Section */}
      <section className="py-20 sm:py-28 bg-[#0B0B0B] border-t border-[#1C1C1C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
              Interactive Showcase
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Real-Time Mechanic Tracking Showcase
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
              Experience the clarity of live map tracking. Know exactly who is coming, their route, and their live ETA before they arrive.
            </p>
          </div>

          <LiveTrackingShowcase />
        </div>
      </section>

      {/* 7. Why Choose MECHFIND */}
      <WhyChooseSection />

      {/* 8. App Download Section */}
      <DownloadSection />

      {/* 9. FAQ Section */}
      <HomeFaqSection />

      {/* 10. Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
