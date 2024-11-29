"use client";

import joinWithAnd from "@/helpers/joinWithAnd";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveView } from "@/lib/hooks";

export default function About() {
    const skill = {
        core: ["React", "Next.js", "Node", "MonggoDB"],
        other: ["Typescript", "Prisma"],
        hobby: [
            "playing video games",
            "watching movies",
            "spent some time with my family",
        ],
        interest: ["history", "philosophy"],
        current: ["play with guitar"],
    };

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
                {/* After graduating with a degree in <span className="font-medium">Sharia specialty</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned{' '}
				<span className="font-medium">full-stack web development</span>. <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the feeling of finally figuring
				out a solution to a problem. My core stack is <span className="font-medium">{joinWithAnd(skill.core)}</span>. I am also familiar with {joinWithAnd(skill.other)}. I am always looking to learn new technologies. I am currently looking
				for a <span className="font-medium">full-time position</span> as a software developer.
				<br /> */}
                After earning a degree in{" "}
                <span className="font-medium">Sharia specialty</span>, I
                discovered my passion for programming and pursued it through a
                coding bootcamp, where I mastered{" "}
                <span className="font-medium">full-stack web development</span>.
                Problem-solving is{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                —I thrive on finding creative solutions. My core stack includes{" "}
                <span className="font-medium">{joinWithAnd(skill.core)}</span>,
                and I'm also experienced with {joinWithAnd(skill.other)}. Always
                eager to learn, I'm now seeking a{" "}
                <span className="font-medium">full-time position</span> as a
                software developer to grow and contribute my skills.
            </p>

            <p>
                {/* <span className="italic">When I'm not coding</span>, I enjoy {joinWithAnd(skill.hobby)}. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about{' '}
				<span className="font-medium">{joinWithAnd(skill.interest)}</span>. I'm also learning how to {joinWithAnd(skill.current)}.
				<br /> */}
                <span className="italic">When I'm not coding</span>, I enjoy{" "}
                {joinWithAnd(skill.hobby)}. I have a passion for learning and am
                currently exploring{" "}
                <span className="font-medium">
                    {joinWithAnd(skill.interest)}
                </span>
                , and teaching myself to {joinWithAnd(skill.current)}.
            </p>
        </motion.section>
    );
}
