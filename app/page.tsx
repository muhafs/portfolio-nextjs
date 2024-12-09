import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Hero />
			<SectionDivider />
			<About />
			<Projects />
		</main>
	)
}
