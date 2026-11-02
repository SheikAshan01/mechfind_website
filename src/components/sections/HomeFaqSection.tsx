"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";

export function HomeFaqSection() {
  // Take the 7 core prompt questions
  const homeFaqs = faqsData.slice(0, 7);

  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Clear, factual answers regarding how MECHFIND connects you with vehicle assistance.
          </p>
        </div>

        {/* Functional Accordion */}
        <Accordion items={homeFaqs} defaultOpenId="what-is-mechfind" />

        {/* More FAQs Link */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-neutral-400">Have more questions about MECHFIND?</span>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 font-bold text-[#FFD400] hover:text-[#E5BE00] transition-colors"
          >
            <span>View Full FAQ Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
