"use client";
import React from "react";
import Image from "next/image";
import Bg from "@/public/vsBg.svg";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <motion.div
        className="bg-gray-200 my-24 h-16 w-1 rounder-full 
   hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          ease: "easeIn",
        }}
      ></motion.div>
      <div>
        <Image
          src={Bg}
          alt="backgroundImg"
          priority={true}
          className="px-3 py-2 sm:py-0 opacity-50 object-cover"
        />
      </div>
    </div>
  );
};

export default Divider;
