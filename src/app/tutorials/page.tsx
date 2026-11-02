"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Video,
  X,
  Info,
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
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-3.5 py-1 rounded-full border border-[#FFD400]/25">
            Knowledge Base & Walkthroughs
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            MECHFIND Platform Tutorials
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Step-by-step instructions designed to help motorists request quick roadside help and enable mechanic partners to navigate dispatches effortlessly.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-10 border-b border-[#222222] pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("customer")}
            className={`text-sm sm:text-base font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer ${
              activeTab === "customer"
                ? "bg-[#FFD400] text-[#080808] shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)]"
                : "bg-[#141414] text-neutral-400 hover:text-white border border-[#262626]"
            }`}
          >
            Customer Tutorials ({customerTutorials.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mechanic")}
            className={`text-sm sm:text-base font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer ${
              activeTab === "mechanic"
                ? "bg-[#FFD400] text-[#080808] shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)]"
                : "bg-[#141414] text-neutral-400 hover:text-white border border-[#262626]"
            }`}
          >
            Mechanic Partner Tutorials ({mechanicTutorials.length})
          </button>
        </div>

        {/* Video readiness note */}
        <div className="bg-[#141414] border border-[#262626] rounded-2xl p-4 mb-10 flex items-center gap-3 text-xs text-neutral-300">
          <Info className="w-4 h-4 text-[#FFD400] shrink-0" />
          <span>
            <strong>Video Integration Ready:</strong> All tutorial modules support embedded YouTube and video walkthrough configurations. Video players will automatically stream as official platform recordings are released.
          </span>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {activeTutorials.map((tut) => (
            <div
              key={tut.id}
              className="bg-[#121212] border border-[#242424] hover:border-[#FFD400]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-2.5 py-1 rounded border border-[#FFD400]/20">
                    {tut.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tut.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#FFD400] transition-colors">
                  {tut.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {tut.summary}
                </p>

                {/* Steps Mini Preview */}
                <div className="bg-[#161616] rounded-xl p-3 border border-[#222222] mb-6 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {tut.steps.length} Key Steps Included:
                  </span>
                  {tut.steps.slice(0, 2).map((s) => (
                    <div key={s.stepNumber} className="flex items-center gap-2 text-xs text-neutral-300 truncate">
                      <span className="w-4 h-4 rounded-full bg-[#202020] text-[#FFD400] text-[10px] font-bold flex items-center justify-center shrink-0">
                        {s.stepNumber}
                      </span>
                      <span className="truncate">{s.title}</span>
                    </div>
                  ))}
                  {tut.steps.length > 2 && (
                    <span className="text-[11px] text-neutral-500 block pl-6">
                      + {tut.steps.length - 2} more steps...
                    </span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(tut)}
                  className="w-full flex items-center justify-center gap-2 bg-[#1C1C1C] hover:bg-[#FFD400] text-neutral-200 hover:text-[#080808] border border-[#2E2E2E] hover:border-[#FFD400] font-bold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedTutorial(null)}
            />

            <div className="relative w-full max-w-2xl bg-[#121212] border border-[#292929] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#222222] mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-bold text-[#FFD400] bg-[#FFD400]/10 px-2.5 py-0.5 rounded border border-[#FFD400]/25">
                      {selectedTutorial.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {selectedTutorial.duration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedTutorial.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedTutorial(null)}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
                  aria-label="Close tutorial"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Placeholder Container (Centrally Configurable) */}
              <div className="bg-[#171717] border border-[#282828] rounded-2xl p-6 mb-6 text-center">
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
                  <div className="space-y-3 py-4">
                    <div className="w-12 h-12 rounded-full bg-[#202020] text-[#FFD400] flex items-center justify-center mx-auto border border-[#303030]">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Official Video Walkthrough Pending
                      </h4>
                      <p className="text-xs text-neutral-400 max-w-md mx-auto mt-1">
                        A detailed video demo for this tutorial is scheduled for production. Follow the comprehensive step-by-step documentation below.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Steps List */}
              <div className="space-y-5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#FFD400]">
                  Step-by-Step Instructions:
                </h4>
                {selectedTutorial.steps.map((st) => (
                  <div
                    key={st.stepNumber}
                    className="bg-[#181818] border border-[#262626] rounded-2xl p-5 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#FFD400] text-[#080808] font-bold text-xs flex items-center justify-center shrink-0">
                        {st.stepNumber}
                      </span>
                      <h5 className="font-bold text-white text-base">
                        {st.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-9">
                      {st.description}
                    </p>
                    {st.tip && (
                      <div className="ml-9 mt-2 p-2.5 rounded-xl bg-[#202020] border border-[#2c2c2c] text-xs text-[#FFD400]">
                        <strong>Helpful Tip:</strong> {st.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-white text-xs font-bold transition-colors"
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
