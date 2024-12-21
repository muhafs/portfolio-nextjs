"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useActiveView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useActiveView({
        sectionName: "Projects",
    });

    return (
        <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>

            <div>
                {projectsData.map((p, idx) => (
                    <Project key={idx} {...p} />
                ))}
            </div>
        </section>
    );
}
