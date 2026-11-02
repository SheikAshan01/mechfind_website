"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";

export function HomeFaqSection() {
  const homeFaqs = faqsData.slice(0, 7);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#E6E9EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#142235] mt-3 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2">
            Clear, factual answers regarding how MECHFIND connects you with nearby vehicle assistance.
          </p>
        </div>

        {/* Functional Accordion */}
        <Accordion items={homeFaqs} defaultOpenId="what-is-mechfind" />

        {/* More FAQs Link */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-[#667085]">Have more questions about MECHFIND?</span>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 font-bold text-[#142235] hover:text-[#D6A84F] transition-colors"
          >
            <span>View Full FAQ Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
