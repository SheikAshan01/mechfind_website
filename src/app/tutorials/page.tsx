"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Video,
  X,
} from "lucide-react";
import {
  customerTutorials,
  mechanicTutorials,
  type TutorialItem,
} from "@/data/tutorials";

export default function TutorialsPage() {
  const [activeTab, setActiveTab] = useState<"customer" | "mechanic">("customer");
  const [selectedTutorial, setSelectedTutorial] = useState<TutorialItem | null>(null);

  const activeTutorials =
    activeTab === "customer" ? customerTutorials : mechanicTutorials;

  return (
    <div className="w-full py-12 sm:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D6A84F] bg-[#FBF4E7] px-3.5 py-1 rounded-full border border-[#D6A84F]/25">
            Knowledge Base & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142235] tracking-tight leading-tight font-heading">
            MECHFIND Platform Tutorials
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Step-by-step instructions designed to help motorists request quick roadside help and enable mechanic partners to navigate dispatches effortlessly.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-10 border-b border-[#E6E9EF] pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("customer")}
            className={`text-sm sm:text-base font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer ${
              activeTab === "customer"
                ? "bg-[#142235] text-white shadow-xs"
                : "bg-white text-[#667085] hover:text-[#142235] border border-[#E6E9EF]"
            }`}
          >
            Customer Tutorials ({customerTutorials.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mechanic")}
            className={`text-sm sm:text-base font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer ${
              activeTab === "mechanic"
                ? "bg-[#142235] text-white shadow-xs"
                : "bg-white text-[#667085] hover:text-[#142235] border border-[#E6E9EF]"
            }`}
          >
            Mechanic Partner Tutorials ({mechanicTutorials.length})
          </button>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activeTutorials.map((tut) => (
            <div
              key={tut.id}
              className="bg-white border border-[#E6E9EF] hover:border-[#142235]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D6A84F] bg-[#FBF4E7] px-2.5 py-1 rounded border border-[#D6A84F]/20">
                    {tut.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#667085] font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tut.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#142235] mb-2 font-heading">
                  {tut.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                  {tut.summary}
                </p>

                {/* Steps Mini Preview */}
                <div className="bg-[#F7F8FA] rounded-xl p-3 border border-[#E6E9EF] mb-6 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#667085] block">
                    {tut.steps.length} Key Steps Included:
                  </span>
                  {tut.steps.slice(0, 2).map((s) => (
                    <div key={s.stepNumber} className="flex items-center gap-2 text-xs text-[#475467] truncate">
                      <span className="w-4 h-4 rounded-full bg-white border border-[#E6E9EF] text-[#D6A84F] text-[10px] font-bold flex items-center justify-center shrink-0">
                        {s.stepNumber}
                      </span>
                      <span className="truncate">{s.title}</span>
                    </div>
                  ))}
                  {tut.steps.length > 2 && (
                    <span className="text-[11px] text-[#667085] block pl-6">
                      + {tut.steps.length - 2} more steps...
                    </span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(tut)}
                  className="w-full flex items-center justify-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#D6A84F]" />
                  <span>Read Step-by-Step Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing selected tutorial in full detail */}
        {selectedTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              className="fixed inset-0 bg-[#142235]/60 backdrop-blur-xs"
              onClick={() => setSelectedTutorial(null)}
            />

            <div className="relative w-full max-w-2xl bg-white border border-[#E6E9EF] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E6E9EF] mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-bold text-[#D6A84F] bg-[#FBF4E7] px-2.5 py-0.5 rounded border border-[#D6A84F]/25">
                      {selectedTutorial.badge}
                    </span>
                    <span className="text-xs text-[#667085] font-mono">
                      {selectedTutorial.duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#142235] font-heading">
                    {selectedTutorial.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedTutorial(null)}
                  className="p-2 text-[#667085] hover:text-[#142235] rounded-lg hover:bg-[#F7F8FA] transition-colors"
                  aria-label="Close tutorial"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Placeholder Container (Centrally Configurable) */}
              <div className="bg-[#F7F8FA] border border-[#E6E9EF] rounded-2xl p-6 mb-6 text-center">
                {selectedTutorial.videoPlaceholderUrl ? (
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                    <iframe
                      src={selectedTutorial.videoPlaceholderUrl}
                      title={selectedTutorial.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="space-y-3 py-2">
                    <div className="w-12 h-12 rounded-full bg-white text-[#D6A84F] flex items-center justify-center mx-auto border border-[#E6E9EF] shadow-2xs">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#142235] font-heading">
                        Video Demonstration Ready
                      </h4>
                      <p className="text-xs text-[#667085] max-w-md mx-auto mt-1 leading-relaxed">
                        A walkthrough video can be configured for this module. Follow the comprehensive documentation below.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-[#142235] uppercase tracking-wider">
                  Step-by-Step Instructions:
                </h4>
                {selectedTutorial.steps.map((st) => (
                  <div
                    key={st.stepNumber}
                    className="bg-[#F7F8FA] border border-[#E6E9EF] rounded-2xl p-5 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#142235] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {st.stepNumber}
                      </span>
                      <h5 className="font-bold text-[#142235] text-base font-heading">
                        {st.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475467] leading-relaxed pl-9">
                      {st.description}
                    </p>
                    {st.tip && (
                      <div className="ml-9 mt-2 p-2.5 rounded-xl bg-[#FBF4E7] border border-[#D6A84F]/30 text-xs text-[#142235]">
                        <strong className="text-[#D6A84F]">Pro Tip:</strong> {st.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6E9EF] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#142235] hover:bg-[#1D3048] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Tutorial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
