"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import FixedLottie from "./FixedLottie";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const [skillsInView, setSkillsInView] = useState(false);

  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section
      ref={ref}
      id="skills"
      className="mt-[5rem] mb-[5rem] max-w-[45rem] scroll-mt-28 text-center relative"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg test-gray-800">
        {skillsData.map((skill, ind) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={ind}
            onAnimationComplete={() => setSkillsInView(true)}
            key={ind}
            className="bg-white border border-black/[0.2] px-5 py-2 rounded dark:bg-white/10 dark:text-white/80"
          >
            {" "}
            {skill}
          </motion.li>
        ))}
      </ul>

      {skillsInView && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            type: "spring",
          }}
          className="flex justify-center items-center"
        >
          <FixedLottie />
        </motion.div>
      )}
    </section>
  );
}
