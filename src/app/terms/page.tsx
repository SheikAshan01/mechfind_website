import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Scale, ArrowLeft } from "lucide-react";
import { contactConfig } from "@/config/contact";

export const metadata: Metadata = {
  title: "Terms & Conditions | MECHFIND",
  description:
    "Terms of service and user agreements governing the use of the MECHFIND vehicle breakdown assistance and mechanic discovery platform.",
};

export default function TermsPage() {
  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Legal Terms
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-neutral-400">
            Last Updated: November 2026 • Platform Terms of Service
          </p>
        </div>

        {/* Terms Body */}
        <div className="bg-[#121212] border border-[#242424] rounded-3xl p-6 sm:p-10 space-y-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#FFD400]" />
              1. Platform Nature & Scope
            </h2>
            <p>
              MECHFIND provides a technology platform that connects motorists experiencing vehicle difficulties with independent roadside automotive mechanics and workshop operators.
            </p>
            <p>
              MECHFIND acts as a discovery and dispatch coordination tool. Mechanics operating on the platform are independent service contractors and not employees of MECHFIND.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              2. User Obligations & Roadside Conduct
            </h2>
            <p>
              When requesting roadside assistance through MECHFIND, motorists agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>Provide accurate vehicle make, model, and breakdown symptoms</li>
              <li>Maintain vehicle hazard lights on and prioritize physical safety while awaiting technician arrival</li>
              <li>Verify the identity of the attending mechanic using the digital identification displayed on the application</li>
              <li>Treat service providers with respect and courtesy</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              3. Mechanic Partner Obligations
            </h2>
            <p>
              Technicians and workshop partners registered on MECHFIND agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>Operate in full compliance with local automotive licensing and trade standards</li>
              <li>Carry appropriate tools, diagnostic instruments, and safety gear suitable for roadside repairs</li>
              <li>Provide honest assessments and obtain motorist agreement before conducting mechanical interventions</li>
              <li>Maintain valid vehicle insurance and driver credentials for mobile service units</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#FFD400]" />
              4. Roadside Safety & Liability Disclaimers
            </h2>
            <p>
              While MECHFIND exercises reasonable due diligence in onboarding and verifying mechanics, the physical condition of vehicles, road surfaces, highway traffic conditions, and unforeseen mechanical failures remain external factors.
            </p>
            <p>
              In extreme emergencies involving imminent physical danger, high-speed collisions, or personal injury, users must immediately contact emergency police and medical services prior to arranging roadside mechanical assistance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              5. Intellectual Property
            </h2>
            <p>
              The MECHFIND name, logo, graphic designs, interfaces, and codebases are proprietary assets of MECHFIND. All rights are reserved. Unauthorized reproduction or reverse engineering is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              6. Contact & Legal Inquiries
            </h2>
            <p>
              For legal inquiries or questions concerning these Terms, contact our legal desk at{" "}
              <a href={`mailto:${contactConfig.contactEmail}`} className="text-[#FFD400] underline font-mono">
                {contactConfig.contactEmail}
              </a>{" "}
              or call Customer Care at{" "}
              <a href={contactConfig.telLink} className="text-[#FFD400] underline font-bold">
                {contactConfig.phone}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
