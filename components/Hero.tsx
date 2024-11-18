'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Hero() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: 0.2 }}>
						<Image src="/me.jpg" alt="personal image" width={192} height={192} priority={true} quality={95} className="rounded-full size-24 border-[0.35rem] border-white object-cover shadow-xl" />
					</motion.div>

					<motion.span className="absolute bottom-0 right-0 text-3xl" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
				<span className="font-bold">Hello, I'm Muhamad.</span> I'm a <span className="font-bold">full-stack developer</span> with <span className="font-bold">2 years</span> of experience. I enjoy building{' '}
				<span className="italic">sites & apps</span>. My focus is <span className="underline">React (Next.js)</span>.
			</motion.h1>

			<motion.div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
				<Link href="#contact" className="flex items-center gap-2 px-7 py-3 bg-gray-900 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group">
					Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a href="/muhamad_cv.pdf" download className="flex items-center gap-2 px-7 py-3 bg-white rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer border border-black/10">
					Download CV <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
				</a>

				<a
					href="https://www.linkedin.com/in/muhafs/"
					target="_blank"
					className="flex items-center gap-2 p-4 bg-white text-gray-700 rounded-full hover:text-gray-950 outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group cursor-pointer border border-black/10">
					<BsLinkedin />
				</a>

				<a
					href="https://github.com/muhafs"
					target="_blank"
					className="flex items-center gap-2 p-4 bg-white text-gray-700 rounded-full hover:text-gray-950 outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group cursor-pointer border border-black/10">
					<BsGithub />
				</a>
			</motion.div>
		</section>
	)
}
