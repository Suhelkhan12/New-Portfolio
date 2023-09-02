"use client";

import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Project() {
  const { ref, inView } = useInView({
    threshold: 0.35,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section ref={ref} className="pb-4 scroll-mt-24" id="projects">
      <SectionHeading>My Projects</SectionHeading>

      <div className="grid xl:grid-cols-2 sm:gap-3 grid-cols-1 px-4 sm:px-0">
        {projectsData.map((project, ind) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
