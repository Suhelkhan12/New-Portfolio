"use client";
import { links } from "@/lib/data";
import React, { useState, createContext, useContext } from "react";

type SectionNames = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionNames;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNames>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionNames>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// custorm hook for useContext

export function useActiveSectionContext() {
  const ctx = useContext(ActiveSectionContext);

  if (ctx === null) {
    throw new Error("Use active section context must be used in a provider");
  }
  return ctx;
}
