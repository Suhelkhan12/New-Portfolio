"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function FixedLottie() {
  return (
    <div className=" w-[300px] h-[300px] mt-4">
      <Player
        src="https://lottie.host/51a7a190-1b8b-4494-be4c-69e070b91e0f/B5E4v3px7U.json"
        loop
        autoplay
      />
    </div>
  );
}
