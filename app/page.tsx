import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Hero />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    );
}
