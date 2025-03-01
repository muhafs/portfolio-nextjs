import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/themeContext";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Muhamad | Personal Portfolio",
    description:
        "Muhamad is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
            >
                <div className="absolute -top-[6rem] right-[11rem] -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]" />

                <div className="absolute -left-[35rem] -top-[1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-[15rem] 2xl:-left-[5rem]" />

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
