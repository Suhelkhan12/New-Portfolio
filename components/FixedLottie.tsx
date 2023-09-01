"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function FixedLottie() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        delay: 1,
        ease: "easeIn",
      }}
      className="w-[250px] h-[250px]  xl:block hidden z-999"
    >
      <Player
        src="https://lottie.host/51a7a190-1b8b-4494-be4c-69e070b91e0f/B5E4v3px7U.json"
        loop
        autoplay
      />
    </motion.div>
  );
}
