import { projectsData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import Project from './Project'

export default function Projects() {
	return (
		<section>
			<SectionHeading>My projects</SectionHeading>

			<div>
				{projectsData.map((p, idx) => (
					<Project key={idx} {...p} />
				))}
			</div>
		</section>
	)
}
