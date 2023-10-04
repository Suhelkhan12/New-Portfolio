"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type ProjectCardProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  projectLink,
  imageUrl,
}: ProjectCardProps) {
  // useRef for targeting the element in react
  const ref = useRef<HTMLDivElement>(null);

  // for scroll animations in framer motions
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-2 last:mb-0 "
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] relative z-20 mb-3 sm:mb-8 last:mb-0  rounded-[12px] hover:shadow-xl hover:bg-gray-200 sm:group-even:pl-8 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:backdrop:10 ">
        <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem] h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 ">
            {tags.map((tag, ind) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={ind}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="sm:mt-auto  mt-[20px] ">
            <a
              href={`${projectLink}`}
              target="_blank"
              className="group w-[100px] bg-gray-900 text-white flex justify-center items-center gap-2 py-1 rounded-full 
          "
            >
              See{" "}
              <BsArrowRight className="transition group-hover:translate-x-[8px] duration-300" />
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project img"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 object-contain  w-[28.25rem] h-[100%] rounded-[24px] shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-3 group-hover:scale-[1.04] transition  group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-3  "
        />

        <Image
          src={imageUrl}
          alt="Project img"
          className="block md:hidden group-hover:scale-105 transition-transform duration-1000"
        />
      </section>
    </motion.div>
  );
}
