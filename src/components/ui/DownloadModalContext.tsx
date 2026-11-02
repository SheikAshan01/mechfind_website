"use client";

import React, { createContext, useContext, useState } from "react";
import { AppDownloadModal } from "./AppDownloadModal";

interface DownloadModalContextType {
  isOpen: boolean;
  activePlatform: "android" | "ios" | "all";
  openDownloadModal: (platform?: "android" | "ios" | "all") => void;
  closeDownloadModal: () => void;
}

const DownloadModalContext = createContext<DownloadModalContextType | undefined>(undefined);

export function DownloadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePlatform, setActivePlatform] = useState<"android" | "ios" | "all">("all");

  const openDownloadModal = (platform: "android" | "ios" | "all" = "all") => {
    setActivePlatform(platform);
    setIsOpen(true);
  };

  const closeDownloadModal = () => {
    setIsOpen(false);
  };

  return (
    <DownloadModalContext.Provider
      value={{
        isOpen,
        activePlatform,
        openDownloadModal,
        closeDownloadModal,
      }}
    >
      {children}
      <AppDownloadModal
        key={`${isOpen ? "open" : "closed"}-${activePlatform}`}
        isOpen={isOpen}
        activePlatform={activePlatform}
        onClose={closeDownloadModal}
      />
    </DownloadModalContext.Provider>
  );
}

export function useDownloadModal() {
  const context = useContext(DownloadModalContext);
  if (!context) {
    throw new Error("useDownloadModal must be used within a DownloadModalProvider");
  }
  return context;
}
