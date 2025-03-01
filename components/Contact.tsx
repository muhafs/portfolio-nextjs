"use client";

import { useActiveView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { snedMail } from "@/actions/sendMail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useActiveView({
        sectionName: "Contact",
    });

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="-mt-6 text-gray-700 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:muhamadhaspin@gmail.com">
                    muhamadhaspin@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                action={async (formData) => {
                    const { data, error } = await snedMail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
                className="mt-10 flex flex-col dark:text-black"
            >
                <input
                    type="email"
                    name="sender"
                    className="h-14 rounded-lg border border-black/10 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
                    placeholder="Your email"
                    required
                    maxLength={256}
                />

                <textarea
                    className="my-3 h-52 rounded-lg border border-black/10 p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={512}
                />

                <SubmitBtn />
            </form>
        </motion.section>
    );
}
