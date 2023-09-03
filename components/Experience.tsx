"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import React, { Fragment, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/ThemeContextProvider";

export default function Experience() {
  const { theme } = useTheme();

  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section ref={ref} id="experience" className=" scroll-mt-24">
      <SectionHeading>MY Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, ind) => (
          <Fragment key={ind}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor:
                  theme === "light" ? "#f3f4f6" : "rgba(288,255,255,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255,255,255,1)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize  dark:text-white/70">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0  dark:text-white/70">
                {experience.location}
              </p>
              <p
                className="!mt-1 !font-normal text-gray-700
              dark:text-white/70
              "
              >
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
