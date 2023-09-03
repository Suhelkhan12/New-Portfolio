"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContextProvider";
import DarkScrollLottie from "./DarkScrollLottie";

const Divider = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center flex-col py-2">
      <motion.div
        className="sm:block hidden"
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          ease: "easeIn",
        }}
      >
        {theme === "light" ? (
          <Player
            src="https://lottie.host/2a705cdf-9cbb-425b-87a4-692f34a10a9a/GgVIvQW9fg.json"
            loop
            autoplay
          />
        ) : (
          <DarkScrollLottie />
        )}
      </motion.div>
    </div>
  );
};

export default Divider;
