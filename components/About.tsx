/* eslint-disable react/no-unescaped-entities */
"use client";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect } from "react";
import Image from "next/image";
import Bg from "@/public/vsBg.svg";

export default function About() {
  //IMP
  // react k intersection observer se hme ek useInview hooks milta h jo hme ek to ref return krta hai us section k liye and ek varriable retrn krta hai jis se hme pta chlta hai ki vo particular section view me aaya ya nahi aya
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
      }}
      id="about"
      className="mt-[5rem] mb-[5rem] max-w-[45rem] text-center leading-8 sm:mb-15 relative scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 sm:px-0 px-5">
        After graduating with a degree{" "}
        <span className="font-medium"> in Mathematics</span>, I decided to
        pursue my passion for programming. I'm still a{" "}
        <span className="font-medium">
          student in my <span className="font-medium">master's</span> degree,
        </span>{" "}
        yeah I know it's a lot to take in how I'm managing my{" "}
        <span className="italic"> studies</span> and all the
        <span className="underline"> commitments </span> with{" "}
        <span className="font-medium">frelance</span> projects. It is not very
        easy also <span className="italic">not that hard either</span>. My
        favorite part about <span className="font-medium">programming</span> is
        the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a{" "}
        <span className="italic">solution </span> to a problem and shouting out{" "}
        <span className="italic font-bold">'Eureka! Eureka!'</span>
      </p>

      <p className="mb-3 sm:px-0 px-5 relative z-5">
        My core tech stack is
        <span className="font-medium">
          {" "}
          Webflow, Finsweet attributes, React.js, Node.js, GSAP.
        </span>{" "}
        I'm also familiar with{" "}
        <span className="font-medium">MongoDb, TypeScript and Strapi.</span> I
        am always looking to learn a new technology.
      </p>

      <motion.div className="sm:flex sm:justify-center sm:items-center sm:-mt-4 sm:relative z-0 sm:opacity-50 hidden ">
        <Image
          src={Bg}
          alt="backgroundImg"
          priority={true}
          className="px-3 py-2 sm:py-0 opacity-50 object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
