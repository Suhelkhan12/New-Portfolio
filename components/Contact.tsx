/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import Suhel from "@/public/Suhel.jpg";
import Image from "next/image";
import { BsLinkedin, BsGithub, BsArrowRight } from "react-icons/bs";
import ContactLottie from "./ContactLottie";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { motion } from "framer-motion";

const contactVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "spring",
    damping: 30,
  },
};

export default function Contact() {
  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.section
      variants={contactVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className="my-[5rem] w-full sm:max-w-[45rem] max-w-[20rem]"
    >
      <SectionHeading>Contact</SectionHeading>

      <div className="mt-[3.5rem] sm:p-[1.75rem] p-[1.5rem] flex justify-between items-start gap-5 rounded-lg bg-gray-100 border border-black/10 backdrop-blur-md dark:bg-gray-950 ">
        <div className="h-full flex flex-col justify-between">
          <div className=" flex justify-start items-center gap-4 ">
            <Image
              src={Suhel}
              alt="Suhel"
              priority={true}
              className=" object-cover w-14 h-14 rounded-full "
            ></Image>

            <div
              className="flex justify-center items-center gap-2 border border-black/10 px-[1.25rem] py-[0.75rem] rounded-full bg-slate-300 bg-opacity-40 backdrop-blur-lg dark:text-gray-100 dark:bg-gray-800
          "
            >
              <div className=" rounded-full w-[8px] h-[8px] bg-green-500  "></div>
              <p className="text-[14px] font-medium">Available to work</p>
            </div>
          </div>
          <div className="mt-[1rem] flex justify-start items-center gap-4 dark:text-gray-100 ">
            <p>Drop me a line or say 👋 on social networks</p>

            <div className="flex justify-start items-center gap-3">
              <a
                href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
                target="_blank"
              >
                <BsLinkedin className="text-[1.25rem] " />
              </a>
              <a href="https://github.com/Suhelkhan12" target="_blank">
                <BsGithub className="text-[1.25rem] " />
              </a>
            </div>
          </div>

          <div className="sm:max-w-[15rem] w-full mt-[1rem]">
            <Link
              href="mailto:suhelkhan9588321151@gmail.com"
              className="group  bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-[0.5rem] outline-none transition hover:bg-gray-950 active:scale-95 dark:hover:bg-gray-800
          "
            >
              Let's talk work{" "}
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
        <div className="sm:block hidden">
          <ContactLottie />
        </div>
      </div>
    </motion.section>
  );
}
