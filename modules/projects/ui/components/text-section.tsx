import { motion } from "motion/react";
import Link from "next/link";

export const TextSection = () => {
	return (
		<div className="max-w-7xl relative mx-auto z-10 py-10 md:py-20 px-4 w-full left-0 top-0 text-center">
			<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-white">
				Our <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-400 animate-gradient">Project</span>
				
			</h1>
			{/* <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mx-auto">
			Full-Stack Developer GenAI & SaaS Innovator Building Scalable, High-Performance Web Apps with Next.js & React
			</p> */}

			{/* <motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7, duration: 0.8 }}
				className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
				<Link href="/project">
					<Button
					size={'lg'}
						className="w-full bg-gradient-to-b cursor-pointer from-rose-600 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
						Explore My Work
					</Button>
				</Link>

				<Link href={"/resume.pdf"} target="_blank">
					<Button
  size="lg"
  className="w-full cursor-pointer rounded-full bg-transparent text-black dark:text-white  border border-rose-600 hover:bg-rose-600 transition-colors duration-300 ease-in"
>
  Download CV
</Button>

				</Link>
			</motion.div> */}
		</div>
	);
};