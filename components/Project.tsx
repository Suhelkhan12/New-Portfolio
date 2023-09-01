import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section className="pb-4">
      <SectionHeading>My Projects</SectionHeading>

      <div className="grid sm:grid-cols-2 sm:gap-3 grid-cols-1 px-4 sm:px-0">
        {projectsData.map((project, ind) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
