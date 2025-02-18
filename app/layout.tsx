import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";

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
                className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
            >
                <div className="absolute -top-[6rem] right-[11rem] -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]" />

                <div className="absolute -left-[35rem] -top-[1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-[15rem] 2xl:-left-[5rem]" />

                <ActiveSectionContextProvider>
                    <Header />
                    {children}

                    <Toaster position="top-right" />
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
