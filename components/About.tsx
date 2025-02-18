"use client";

import joinWithAnd from "@/helpers/joinWithAnd";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveView } from "@/lib/hooks";
import { aboutData } from "@/lib/data";

export default function About() {
    const { ref } = useActiveView({ sectionName: "About", threshold: 0.75 });

    return (
        <motion.section
            ref={ref}
            id="about"
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>About me</SectionHeading>

            <p className="mb-3">
                After earning a degree in{" "}
                <span className="font-medium">Sharia specialty</span>, I
                discovered my passion for programming and pursued it through a
                coding bootcamp, where I mastered{" "}
                <span className="font-medium">full-stack web development</span>.
                Problem-solving is{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                —I thrive on finding creative solutions. My core stack includes{" "}
                <span className="font-medium">
                    {joinWithAnd(aboutData.core)}
                </span>
                , and I'm also experienced with {joinWithAnd(aboutData.other)}.
                Always eager to learn, I'm now seeking a{" "}
                <span className="font-medium">full-time position</span> as a
                software developer to grow and contribute my skills.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy{" "}
                {joinWithAnd(aboutData.hobby)}. I have a passion for learning
                and am currently exploring{" "}
                <span className="font-medium">
                    {joinWithAnd(aboutData.interest)}
                </span>
                , and teaching myself to {joinWithAnd(aboutData.current)}.
            </p>
        </motion.section>
    );
}
