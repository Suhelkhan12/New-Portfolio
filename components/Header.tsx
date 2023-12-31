"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[10px] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/10 dark:bg-opacity-40   "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0 ">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5  ">
            {links.map((link, ind) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={ind}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => setActiveSection(link.name)}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-100",
                    { "text-gray-950": activeSection === link.name }
                  )}
                  href={link.hash}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800 "
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 380,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
