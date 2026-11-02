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
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#667085] hover:text-[#142235] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Legal Terms
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#667085]">
            Last Updated: November 2026 • Platform Terms of Service
          </p>
        </div>

        {/* Terms Body */}
        <div className="bg-white border border-[#E6E9EF] rounded-3xl p-6 sm:p-10 space-y-8 text-[#475467] text-sm sm:text-base leading-relaxed shadow-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#142235] flex items-center gap-2 font-heading">
              <Scale className="w-5 h-5 text-[#D6A84F]" />
              1. Platform Nature & Scope
            </h2>
            <p>
              MECHFIND provides a technology platform that connects motorists experiencing vehicle difficulties with independent roadside automotive mechanics and workshop operators.
            </p>
            <p>
              MECHFIND acts as a discovery and dispatch coordination tool. Mechanics operating on the platform are independent service contractors and not direct employees of MECHFIND.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#142235] font-heading">
              2. User Obligations & Roadside Conduct
            </h2>
            <p>
              When requesting roadside assistance through MECHFIND, motorists agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#667085] text-xs sm:text-sm">
              <li>Provide accurate vehicle make, model, and breakdown symptoms</li>
              <li>Maintain vehicle hazard lights on and prioritize physical safety while awaiting technician arrival</li>
              <li>Verify the identity of the attending mechanic using the credentials displayed on the application</li>
              <li>Treat service providers with respect and courtesy</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#142235] font-heading">
              3. Mechanic Partner Obligations
            </h2>
            <p>
              Technicians and workshop partners registered on MECHFIND agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#667085] text-xs sm:text-sm">
              <li>Operate in full compliance with local automotive licensing and trade standards</li>
              <li>Carry appropriate tools, diagnostic instruments, and safety gear suitable for roadside repairs</li>
              <li>Provide honest assessments and obtain motorist agreement before conducting mechanical interventions</li>
              <li>Maintain valid vehicle insurance and driver credentials for mobile service units</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#142235] flex items-center gap-2 font-heading">
              <ShieldAlert className="w-5 h-5 text-[#D6A84F]" />
              4. Roadside Safety & Liability Disclaimers
            </h2>
            <p>
              While MECHFIND exercises reasonable due diligence in onboarding and verifying mechanics, the physical condition of vehicles, road surfaces, highway traffic conditions, and unforeseen mechanical failures remain external factors.
            </p>
            <p>
              In extreme emergencies involving physical danger, high-speed collisions, or personal injury, users must contact emergency police and medical services prior to arranging roadside mechanical assistance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#142235] font-heading">
              5. Intellectual Property
            </h2>
            <p>
              The MECHFIND name, logo, graphic designs, interfaces, and codebases are proprietary assets of MECHFIND. All rights are reserved. Unauthorized reproduction or reverse engineering is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#142235] font-heading">
              6. Contact & Legal Inquiries
            </h2>
            <p>
              For legal inquiries or questions concerning these Terms, contact our legal desk at{" "}
              <a href={`mailto:${contactConfig.contactEmail}`} className="text-[#142235] underline font-mono font-semibold">
                {contactConfig.contactEmail}
              </a>{" "}
              or call Customer Care at{" "}
              <a href={contactConfig.telLink} className="text-[#142235] underline font-bold">
                {contactConfig.phone}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
