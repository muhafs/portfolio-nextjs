"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveContext } from "@/context/activeSectionContext";

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActive, lastClick } = useActiveContext();

    useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) {
            setActive("Projects");
        }
    }, [setActive, inView, lastClick]);

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
