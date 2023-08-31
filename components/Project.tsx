import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section className="pb-4">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project, ind) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
