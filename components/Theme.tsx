"use client";
import React, { useContext } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useTheme } from "@/context/ThemeContextProvider";

export default function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed z-50 bottom-16 sm:right-16 right-10 w-[3rem] h-[3rem]  bg-black  text-white backdrop-blur-[0.5rem] border border-black border-opacity-10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition dark:bg-white dark:text-gray-900 dark:border dark:border-black/30"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
}
