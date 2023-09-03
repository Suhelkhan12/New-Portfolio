"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "@/context/ThemeContextProvider";

export default function DarkScrollLottie() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "mt-[3rem]" : "mt-0"}`}>
      <Player
        src="https://lottie.host/e742c794-70cb-4ef5-832d-6366e52fdaed/4AD1GCr5wh.json"
        loop
        autoplay
      />
    </div>
  );
}
