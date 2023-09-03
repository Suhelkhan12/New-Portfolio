/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Suhel from "@/public/Suhel.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section
      id="home"
      ref={ref}
      className=" scroll-mt-32 mb-2 max-w-[50rem] text-center sm:mb-0 dark:text-gray-100 "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Suhel}
              alt="Suhel image"
              priority={true}
              className="object-cover w-24 h-24 rounded-full overflow-hidden border-[0.35rem] border-white shadow-xl "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-[24px] absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Suhel.</span> I'm a
        <span className="font-bold"> Low-Code Webflow</span> developer with 2
        years of experience, enroute to <span className="font-bold">MERN</span>{" "}
        stack mastery. I enjoy building beautiful{" "}
        <span className="italic">sites and apps</span>. Currently I'm focused on
        <span className="underline font-semibold"> React (Next.js) </span> and
        on my <span className="italic font-semibold">freelance</span> projects.
      </motion.h1>

      <motion.div
        className="sm:flex sm:justify-center sm:align-center sm:gap-2.5 grid grid-cols-1 gap-2 px-2 text-base font-medium
      "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
        }}
      >
        <Link
          href="mailto:suhelkhan9588321151@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-gray-950 active:scale-95
          "
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/SuhelCV.pdf"
          className="group bg-white  px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-gray-100
           active:scale-95 border border-black/20 dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition hover:text-gray-950" />
        </a>

        <a
          href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full transition hover:bg-gray-100
          active:scale-95 border border-black/20 dark:bg-white/10 dark:text-gray-100"
        >
          <BsLinkedin className="group-hover:scale-110 group-hover:text-gray-950 transition" />
        </a>
        <a
          href="https://github.com/Suhelkhan12"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full transition hover:bg-gray-100
          active:scale-95 border border-black/20 dark:bg-white/10 dark:text-gray-100"
        >
          <BsGithub className="group-hover:scale-110 group-hover:text-gray-950 transition" />
        </a>
      </motion.div>
    </section>
  );
}
