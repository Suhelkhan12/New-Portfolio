import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiFreelancer } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import cybertruck from "@/public/cybertruck.png";
import Ecars from "@/public/Ecars.png";
import Shineagro from "@/public/shineagro.png";
import Greatlart from "@/public/greatlark.png";
import Hoobank from "@/public/hoobank.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI Engineer Intern",
    location: "Banglore, India",
    description:
      "I'm working as a UI Intern at ParallelHq. I am honing my frontend development skill, actively contributin to the creation of captivating websites that offer exceptional user experiences  ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Free lance webflow Developer",
    location: "Chandigarh, Haryana",
    description:
      "Side by Side with my college and ongoing internship I also decided to go into Freelancing and learn about how the freelance world works and it is going pretty smooth till now.",
    icon: React.createElement(SiFreelancer),
    date: "2023 - present",
  },
  {
    title: "Master's of computer applications",
    location: "Chandigarh, India",
    description:
      "Currently I'm in final year of my master's degree where I got to learn a lot of new technologies and made different projects with every semester",
    icon: React.createElement(LuGraduationCap),
    date: "2021-present",
  },
] as const;

export const projectsData = [
  {
    title: "Shine-agro-tech",
    description:
      "I worked as a freelancer on this project which was related to agricultural based company.",
    tags: ["Webflow", "Finsweet attrs", "Gsap"],
    // projectLink: ""
    imageUrl: Shineagro,
    category: "Freelance",
  },
  {
    title: "GreatLark",
    description:
      "I developed this website for client whose main work was related to business finance.",
    tags: ["Webflow", "Finsweet attrs", "Gsap", "Figma"],
    // projectLink: ""
    imageUrl: Greatlart,
    category: "Freelance",
  },
  {
    title: "Hoobank",
    description:
      "I was sharping my React, TailwindCss and Framer motion skills on this beautiful project of bank website.",
    tags: ["ReactJs", "Tainwind Css", "Framer Motion"],
    // projectLink: ""
    imageUrl: Hoobank,
    category: "Frontend",
  },
  {
    title: "Cybertruck clone",
    description:
      "Just when I was starting my journey with freelancing and low-code webflow development I built this clone of Tesla Cybertruck website",
    tags: ["Webflow", "Finsweet attrs"],
    // projectLink: ""
    imageUrl: cybertruck,
    category: "Frontend",
  },
  {
    title: "E-Cars",
    description:
      "My first ever project when I was starting my journey of development.",
    tags: ["HTML", "CSS", "JS", "Splide.js"],
    // projectLink: ""
    imageUrl: Ecars,
    category: "Frontend",
  },
] as const;

export const skillsData = [
  "Webflow",
  "Finsweet attributes",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Framer Motion",
  "Figma",
  "Tailwind",
  "Gsap",
  "Node.js",
  "Express",
  "Git",
  "C++ (For LeetCode)",
] as const;
