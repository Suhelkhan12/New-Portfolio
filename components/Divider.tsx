"use client";
import React from "react";
import Image from "next/image";
import Bg from "@/public/vsBg.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const imgVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const Divider = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col py-2">
      <motion.div
        className="sm:block hidden"
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          ease: "easeIn",
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <Player
          src="https://lottie.host/2a705cdf-9cbb-425b-87a4-692f34a10a9a/GgVIvQW9fg.json"
          loop
          autoplay
        />
      </motion.div>

      {/* <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={imgVariants}
        className={`${animationComplete ? "block" : "hidden"} rounded-full`}
      >
        <Image
          src={Bg}
          alt="backgroundImg"
          priority={true}
          className="px-3 py-2 sm:py-0 opacity-50 object-cover"
        />
      </motion.div> */}
    </div>
  );
};

export default Divider;
