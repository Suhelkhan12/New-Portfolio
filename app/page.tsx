"use client";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Intro />
      <Divider />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
