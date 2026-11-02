"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, PhoneCall, Headphones, HelpCircle } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";
import { contactConfig } from "@/config/contact";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "General",
    "Customers",
    "Mechanics",
    "App & Tracking",
    "Support",
  ];

  const filteredFaqs = faqsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Help & Knowledge
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions regarding MECHFIND roadside assistance, mechanic matching, location sharing, and support.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-[#667085] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. location, bikes, mechanics, support)..."
            className="w-full bg-white border border-[#E6E9EF] focus:border-[#142235] focus:ring-1 focus:ring-[#142235] rounded-2xl py-3.5 pl-12 pr-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-colors shadow-2xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#142235] text-white shadow-xs"
                  : "bg-white text-[#667085] hover:text-[#142235] border border-[#E6E9EF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        {filteredFaqs.length > 0 ? (
          <Accordion items={filteredFaqs} defaultOpenId={filteredFaqs[0].id} />
        ) : (
          <div className="bg-white border border-[#E6E9EF] rounded-2xl p-8 text-center space-y-3 shadow-2xs">
            <HelpCircle className="w-8 h-8 text-[#667085] mx-auto" />
            <h3 className="text-base font-bold text-[#142235] font-heading">No Matching Questions Found</h3>
            <p className="text-xs text-[#667085]">
              Try refining your search keyword or selecting a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-bold text-[#142235] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="mt-16 bg-[#142235] text-white border border-[#1D3048] rounded-3xl p-8 text-center space-y-4 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
            Still Have Questions?
          </h2>
          <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-lg mx-auto leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Reach out to our dedicated Customer Care team or connect via our direct assistance hotline.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/customer-care"
              className="inline-flex items-center gap-2 bg-[#D6A84F] hover:bg-[#C59840] text-[#142235] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <Headphones className="w-4 h-4" />
              <span>Visit Customer Care</span>
            </Link>

            <a
              href={contactConfig.telLink}
              className="inline-flex items-center gap-2 bg-[#1D3048] hover:bg-[#253D5C] text-white border border-[#2D4565] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#D6A84F]" />
              <span>Call Hotline: {contactConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
