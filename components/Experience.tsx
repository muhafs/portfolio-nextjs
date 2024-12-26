"use client";

import React from "react";
import { useActiveView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
    const { ref } = useActiveView({
        sectionName: "Experience",
    });

    return (
        <section
            ref={ref}
            id="experience"
            className="mb-28 scroll-mt-28 sm:mb-40"
        >
            <SectionHeading>My experience</SectionHeading>

            <VerticalTimeline lineColor="">
                {experiencesData.map((e, idx) => (
                    <React.Fragment key={idx}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af",
                            }}
                            date={e.date}
                            icon={e.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {e.title}
                            </h3>
                            <p className="!mt-0 font-normal">{e.location}</p>

                            <p className="!mt-1 !font-normal text-gray-700">
                                {e.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
