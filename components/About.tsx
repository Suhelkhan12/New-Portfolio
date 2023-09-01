/* eslint-disable react/no-unescaped-entities */
"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
      }}
      className="mt-[5rem] mb-[5rem] max-w-[45rem] text-center leading-8 sm:mb-15 relative z-20"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 sm:px-0 px-5">
        After graduating with a degree{" "}
        <span className="font-medium"> in Mathematics</span>, I decided to
        pursue my passion for programming. I'm still a{" "}
        <span className="font-medium">
          student in my <span className="font-medium">master's</span> degree
        </span>{" "}
        still yeah I know it's a lot to take in how I'm managing my{" "}
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

      <p className="mb-3 sm:px-0 px-5">
        My core tech stack is
        <span className="font-medium">
          {" "}
          Webflow, Finsweet attributes, React.js, Node.js.
        </span>{" "}
        I'm also familiar with{" "}
        <span className="font-medium">MongoDb, TypeScript.</span> I am always
        looking to learn a new technology.
      </p>
    </motion.section>
  );
}
