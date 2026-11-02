import React from "react";
import Link from "next/link";
import { AlertCircle, Home, PhoneCall } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-[#121212] border border-[#262626] rounded-3xl p-8 text-center space-y-6 shadow-2xl">
        <BrandLogo size="md" withLink={false} />

        <div className="w-14 h-14 rounded-2xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center mx-auto">
          <AlertCircle className="w-7 h-7" />
        </div>

        <div>
          <span className="text-4xl font-black text-white font-mono block mb-1">
            404
          </span>
          <h1 className="text-xl font-bold text-white mb-2">
            Page Not Found
          </h1>
          <p className="text-xs text-neutral-400 leading-relaxed">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to MECHFIND Home</span>
          </Link>

          <a
            href={contactConfig.telLink}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#181818] hover:bg-[#222222] text-neutral-200 border border-[#2B2B2B] font-semibold py-3 px-5 rounded-xl text-xs transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>Need Help? Call Customer Care ({contactConfig.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
