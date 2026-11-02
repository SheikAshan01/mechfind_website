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
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Help & Knowledge
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions regarding MECHFIND roadside assistance, mechanic matching, live tracking, and support.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. tracking, bikes, mechanics, support)..."
            className="w-full bg-[#121212] border border-[#2B2B2B] focus:border-[#FFD400] rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
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
                  ? "bg-[#FFD400] text-[#080808] shadow-[0_2px_12px_-2px_rgba(255,212,0,0.35)]"
                  : "bg-[#141414] text-neutral-400 hover:text-white border border-[#242424]"
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
          <div className="bg-[#121212] border border-[#242424] rounded-2xl p-8 text-center space-y-3">
            <HelpCircle className="w-8 h-8 text-neutral-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No Matching Questions Found</h3>
            <p className="text-xs text-neutral-400">
              Try refining your search keyword or selecting a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-bold text-[#FFD400] underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="mt-16 bg-[#141414] border border-[#262626] rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Reach out to our dedicated Customer Care team or connect via our direct assistance hotline.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/customer-care"
              className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md"
            >
              <Headphones className="w-4 h-4" />
              <span>Visit Customer Care</span>
            </Link>

            <a
              href={contactConfig.telLink}
              className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#252525] text-white border border-[#303030] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#FFD400]" />
              <span>Call Hotline: {contactConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
