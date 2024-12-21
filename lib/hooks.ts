"use client";

import { useActiveContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

type useActiveViewProps = { sectionName: SectionName; threshold?: number };

export function useActiveView({
    sectionName,
    threshold = 0.5,
}: useActiveViewProps) {
    const { ref, inView } = useInView({
        threshold: threshold,
    });
    const { setActive, lastClick } = useActiveContext();

    useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) {
            setActive(sectionName);
        }
    }, [setActive, inView, lastClick, sectionName, threshold]);

    return { ref };
}
