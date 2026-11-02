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
}

const sizeMap = {
  sm: { height: 36, width: 47, textClass: "text-lg" },
  md: { height: 48, width: 63, textClass: "text-xl" },
  lg: { height: 60, width: 79, textClass: "text-2xl" },
  xl: { height: 84, width: 110, textClass: "text-3xl" },
};

export function BrandLogo({
  className,
  size = "md",
  priority = false,
  withLink = true,
  showText = false,
}: BrandLogoProps) {
  const { height, textClass } = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <div className="relative flex items-center justify-center">
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
          className="object-contain drop-shadow-sm transition-transform duration-200"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-extrabold tracking-tight text-white leading-none", textClass)}>
            MECH<span className="text-[#FFD400]">FIND</span>
          </span>
          <span className="text-[10px] tracking-wider uppercase text-neutral-400 mt-1 font-medium">
            Roadside Assistance
          </span>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] rounded-lg transition-opacity hover:opacity-95"
        aria-label="MECHFIND Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
