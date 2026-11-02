"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-[#141414] border-[#FFD400]/40 shadow-[0_4px_20px_-4px_rgba(255,212,0,0.1)]"
                : "bg-[#121212] border-[#252525] hover:border-[#333333] hover:bg-[#151515]"
            )}
          >
            <button
              id={headerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
            >
              <div className="flex items-center gap-3">
                {item.category && (
                  <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-2 py-0.5 rounded border border-[#FFD400]/20">
                    {item.category}
                  </span>
                )}
                <span className="font-semibold text-white text-base sm:text-lg">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "p-1.5 rounded-lg shrink-0 transition-colors",
                  isOpen ? "bg-[#FFD400] text-[#080808]" : "text-neutral-400 bg-white/5"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-[#222222]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
