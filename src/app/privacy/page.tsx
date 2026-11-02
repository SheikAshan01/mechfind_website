import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, ArrowLeft } from "lucide-react";
import { contactConfig } from "@/config/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | MECHFIND",
  description:
    "Privacy policy for the MECHFIND vehicle breakdown and mechanic discovery platform. Explaining data collection, GPS location usage, and privacy protections.",
};

export default function PrivacyPolicyPage() {
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
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-400">
            Last Updated: November 2026 • Effective Date: Platform Public Release
          </p>
        </div>

        {/* Policy Body */}
        <div className="bg-[#121212] border border-[#242424] rounded-3xl p-6 sm:p-10 space-y-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#FFD400]" />
              1. Introduction
            </h2>
            <p>
              MECHFIND (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;platform&rdquo;) operates a digital roadside mechanic discovery service connecting motorists experiencing vehicle difficulties with independent automotive mechanics and workshops.
            </p>
            <p>
              This Privacy Policy explains how personal and technical information is collected, used, disclosed, and secured when you access our website or utilize our upcoming mobile applications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#FFD400]" />
              2. Information We Collect
            </h2>
            <p>
              In order to provide rapid vehicle assistance and dispatch coordination, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-xs sm:text-sm">
              <li>
                <strong>Precise Geolocation Data:</strong> With your explicit device permission, we access your device&apos;s GPS coordinates to display your breakdown location to nearby mechanics and facilitate en-route navigation.
              </li>
              <li>
                <strong>Account & Contact Information:</strong> Your name, mobile phone number, and optional email address provided during account registration or emergency booking.
              </li>
              <li>
                <strong>Vehicle Specifications:</strong> Vehicle category (two-wheeler or four-wheeler), make, model, and fuel type to ensure compatible roadside assistance.
              </li>
              <li>
                <strong>Mechanic Partner Information:</strong> For automotive technicians, proof of identification, workshop credentials, mechanical specialties, and operating coordinates.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#FFD400]" />
              3. How We Use Your Information
            </h2>
            <p>We use collected data solely for the following operational purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>Matching stranded drivers with nearest available mechanics</li>
              <li>Calculating accurate estimated arrival times (ETA) and route telemetry</li>
              <li>Facilitating direct communication between motorists and assigned technicians</li>
              <li>Maintaining service repair history for user reference</li>
              <li>Customer care response and roadside safety verification</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              4. Location Privacy & Foreground Tracking
            </h2>
            <p>
              Your location is accessed only when you actively trigger an assistance request or search for nearby providers. Customer location sharing is terminated once the roadside service job is marked as completed by both parties.
            </p>
            <p>
              Mechanic partners agree to background location sharing only while their availability switch is toggled to &ldquo;Online&rdquo; to facilitate live dispatches.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security protocols, encrypted transit channels (HTTPS/TLS), and restricted access controls to protect personal and location records against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              6. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions or requests regarding your personal data or location privacy, please reach out to our privacy desk at{" "}
              <a href={`mailto:${contactConfig.email}`} className="text-[#FFD400] underline font-mono">
                {contactConfig.email}
              </a>{" "}
              or call our support desk at{" "}
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
