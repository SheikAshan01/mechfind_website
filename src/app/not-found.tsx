import React from "react";
import Link from "next/link";
import { AlertCircle, Home, PhoneCall } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#F7F8FA]">
      <div className="max-w-md w-full bg-white border border-[#E6E9EF] rounded-3xl p-8 text-center space-y-6 shadow-sm">
        <BrandLogo size="md" withLink={false} />

        <div className="w-14 h-14 rounded-2xl bg-[#FBF4E7] border border-[#D6A84F]/30 text-[#D6A84F] flex items-center justify-center mx-auto">
          <AlertCircle className="w-7 h-7" />
        </div>

        <div>
          <span className="text-4xl font-black text-[#142235] font-mono block mb-1">
            404
          </span>
          <h1 className="text-xl font-bold text-[#142235] mb-2 font-heading">
            Page Not Found
          </h1>
          <p className="text-xs text-[#667085] leading-relaxed">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to MECHFIND Home</span>
          </Link>

          <a
            href={contactConfig.telLink}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F7F8FA] hover:bg-[#EEF1F5] text-[#142235] border border-[#E6E9EF] font-semibold py-3 px-5 rounded-xl text-xs transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span>Need Help? Call Customer Care ({contactConfig.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
