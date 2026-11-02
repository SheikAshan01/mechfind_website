import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  withLink?: boolean;
  showText?: boolean;
  container?: "none" | "light" | "navy";
}

const sizeMap = {
  sm: { height: 36, textClass: "text-lg" },
  md: { height: 44, textClass: "text-xl" },
  lg: { height: 56, textClass: "text-2xl" },
  xl: { height: 76, textClass: "text-3xl" },
};

export function BrandLogo({
  className,
  size = "md",
  priority = false,
  withLink = true,
  showText = false,
  container = "none",
}: BrandLogoProps) {
  const { height, textClass } = sizeMap[size];

  const containerClasses = {
    none: "",
    light: "bg-white p-1.5 rounded-xl border border-[#E6E9EF] shadow-2xs",
    navy: "bg-[#142235] p-2 rounded-xl border border-[#1D3048] shadow-sm",
  };

  const content = (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <div className={cn("relative flex items-center justify-center transition-transform duration-200", containerClasses[container])}>
        {/* Exact uploaded logo strictly preserving proportions (1024x781) */}
        <Image
          src="/images/mechfind-logo.png"
          alt="MECHFIND - Your Mechanic, Just Around the Corner"
          width={1024}
          height={781}
          priority={priority}
          style={{
            height: `${height}px`,
            width: "auto",
            aspectRatio: "1024 / 781",
          }}
          className="object-contain drop-shadow-xs"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-extrabold tracking-tight text-[#142235] leading-none", textClass)}>
            MECH<span className="text-[#D6A84F]">FIND</span>
          </span>
          <span className="text-[10px] tracking-wider uppercase text-[#667085] mt-1 font-semibold">
            Automotive Assistance
          </span>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142235] rounded-xl transition-opacity hover:opacity-95"
        aria-label="MECHFIND Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
