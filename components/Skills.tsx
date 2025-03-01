"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useActiveView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
    const { ref } = useActiveView({
        sectionName: "Skills",
    });

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (idx: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * idx,
            },
        }),
    };

    return (
        <section
            ref={ref}
            id="skills"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>

            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, idx) => (
                    <motion.li
                        key={idx}
                        className="rounded-xl border border-black/[0.1] bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={idx}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
