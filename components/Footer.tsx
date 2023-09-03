import React from "react";
import reactIcon from "@/public/react.png";
import framerIcons from "@/public/framer.png";
import typeScript from "@/public/typescript.png";
import IndiaFlagLottie from "./IndiaFlagLottie";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mb-4 flex justify-center items-center">
      <div className=" flex justify-start items-center gap-2 px-[1rem] py-[0.69rem] rounded-lg bg-gray-200 border border-black/10  max-w-[20rem] dark:bg-gray-950 dark:text-white/70 ">
        <p className="text-[14px]">Cooked with love in </p>
        <IndiaFlagLottie />
        <p className="text-[14px]"> with </p>
        <Image
          src={reactIcon}
          alt="reactIcon"
          className="w-[20px] h-[20px]"
        ></Image>
        <Image
          src={typeScript}
          alt="tsIcon"
          className="w-[20px] h-[20px]"
        ></Image>
        <Image
          src={framerIcons}
          alt="framerIcon"
          className="w-[20px] h-[20px]"
        ></Image>
      </div>
    </footer>
  );
}
