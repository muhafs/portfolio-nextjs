"use client";

import clsx from "clsx";
import Link from "next/link";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveContext } from "@/context/activeSectionContext";

export default function Header() {
    const { active, setActive, setLastClick } = useActiveContext();

    return (
        <header className="relative z-[999]">
            <motion.div
                className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            />

            <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[inital] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            key={link.hash}
                            className="relative flex h-3/4 items-center justify-center"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                className={clsx(
                                    "flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 dark:text-gray-300":
                                            active === link.name,
                                    },
                                )}
                                onClick={() => {
                                    setLastClick(Date.now());
                                    setActive(link.name);
                                }}
                            >
                                {link.name}

                                {link.name === active && (
                                    <motion.span
                                        className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                                        layoutId="active"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
