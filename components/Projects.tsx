"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useActiveView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useActiveView({
        sectionName: "Projects",
        threshold: 0.5,
    });

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>

            <div>
                {projectsData.map((p, idx) => (
                    <Project key={idx} {...p} />
                ))}
            </div>
        </section>
    );
}
