/* eslint-disable react/no-unescaped-entities */
"use client";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Bg from "@/public/vsBg.svg";

export default function About() {
  const imageRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (theme === "dark") {
      // Hide the image by setting its style display property to 'none'
      if (imageRef.current) {
        imageRef.current.style.display = "none";
      }
    }
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
      }}
      id="about"
      className="mt-[5rem] mb-[5rem]  text-center leading-8 sm:mb-15 relative scroll-mt-28 dark:text-white/70"
    >
      <SectionHeading>About Me</SectionHeading>
      {/* <p className="mb-3 sm:px-0 px-5">
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
      </p> */}

      <div className="mx-auto lg:w-[50rem] w-[90%]  bg-gray-800 rounded-md overflow-hidden shadow-xl">
        <div className="w-full h-6 bg-[#e1e0e2] flex justify-start items-center gap-2 pl-2">
          <div className="w-[16px] h-[16px] rounded-full bg-[#f96256]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#fdbc3d]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#33c948]"></div>
          <p className="font-mono text-sm text-black font-bold ">About.js</p>
        </div>

        <div className="md:px-6 md:py-6 p-4 bg-[#5a5d7a] text-left flex flex-col md:gap-6 gap-4">
          <div className="detail-row w-full  ">
            <p className=" font-mono md:text-base text-sm text-green-400">
              &frasl;&frasl; here I am just trying to be creative😁😁😁
            </p>
          </div>
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">const Education = &#123;</span>{" "}
              <br />
              <span className="px-4">
                'gratuation': 'Mathematics hons', 'currently': 'MCA'
              </span>
              <br />
              <span className="text-yellow-200">&#125;</span> <br />
            </p>
          </div>
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">const Passion = &#123;</span>{" "}
              <br />
              <span className="px-4">
                'first': 'Problem solving', 'second': 'Beautiful UI
                development',
                <span className="text-green-400">
                  &frasl;&frasl;developing some backend skills also🤞🤞🤞
                </span>
              </span>
              <br />
              <span className="text-yellow-200">&#125;</span> <br />
            </p>
          </div>
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">
                const Multitasking = &#91;
              </span>
              <span className="px-2">'Freelancing' ,'College study'</span>
              <span className="text-yellow-200">&#93;</span> <br />
            </p>
          </div>
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">const TechStack = &#91;</span>{" "}
              <br />
              'Webflow', 'Finsweet elements', 'ReactJs', 'Redux' , 'React
              router', 'Java script', 'GSAP', 'Framer motion',
              <span className="text-green-400 mt-1">
                {" "}
                <br /> &frasl;* I'm also familiar with Nodejs, Typescript, SQL ,
                Mongodb and always learning new tech. *&frasl;
              </span>
              <br />
              <span className="text-yellow-200">&#93;</span> <br />
            </p>
          </div>
          <div className="w-2 h-4 bg-blue-500 animate-blink"></div>
        </div>
      </div>
    </motion.section>
  );
}
