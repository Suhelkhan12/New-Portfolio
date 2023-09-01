"use client";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Intro />
      <Divider />
      <About />
      <Project />
    </main>
  );
}
