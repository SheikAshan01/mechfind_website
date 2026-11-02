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
    "Find nearby mechanics, request vehicle assistance and get help when your bike or car breaks down. Location-based breakdown assistance with MECHFIND.",
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-[#F7F8FA]">
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

      {/* 6. Tracking Showcase Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E6E9EF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
              Interface Preview
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
              Tracking & Dispatch Interface
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-2 leading-relaxed">
              Illustrating the mobile map interface: discover who is approaching, follow simulated route progress, and monitor estimated arrival times.
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
