"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";

type ProjectCardProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  category,
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
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] relative mb-3 sm:mb-8 last:mb-0  rounded-[12px] hover:shadow-xl hover:bg-gray-200 group-even:pl-8 transition">
        <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 ">
            {tags.map((tag, ind) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={ind}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project img"
          quality={95}
          className="absolute top-8 -right-40 object-contain  w-[28.25rem] h-[100%] rounded-[24px] shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-3 group-hover:scale-[1.04] transition  group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-3"
        />
      </section>
    </motion.div>
  );
}
