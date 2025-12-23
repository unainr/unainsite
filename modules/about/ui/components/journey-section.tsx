"use client";

import { motion } from "framer-motion";
import { Rocket, Code, Sparkles, Trophy, Calendar } from "lucide-react";

const journeySteps = [
	{
		year: "2020",
		title: "Started Web Development Journey",
		description:
			"Began learning HTML, CSS, and JavaScript. Built first portfolio website and discovered passion for creating digital experiences.",
		icon: <Code className="w-5 h-5" />,
		color: "from-blue-500 to-blue-600",
		iconBg: "bg-blue-500",
	},
	{
		year: "2021",
		title: "Mastered Modern Frameworks",
		description:
			"Dove deep into React, Next.js, and TypeScript. Started building complex web applications with modern tech stacks.",
		icon: <Rocket className="w-5 h-5" />,
		color: "from-cyan-500 to-cyan-600",
		iconBg: "bg-cyan-500",
	},
	{
		year: "2022",
		title: "Full-Stack Development",
		description:
			"Expanded to backend development with Node.js, Laravel, and databases. Completed 20+ full-stack projects for clients worldwide.",
		icon: <Sparkles className="w-5 h-5" />,
		color: "from-teal-500 to-teal-600",
		iconBg: "bg-teal-500",
	},
	{
		year: "2023-Present",
		title: "AI Integration Specialist",
		description:
			"Pioneered AI-powered web solutions using Gemini, Vercel AI SDK, and LLMs. Building the future of intelligent web applications.",
		icon: <Trophy className="w-5 h-5" />,
		color: "from-indigo-500 to-indigo-600",
		iconBg: "bg-indigo-500",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5 },
	},
};

export default function JourneySection() {
	return (
		<section className="py-20 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

			<div className="max-w-5xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<Calendar className="w-4 h-4" />
						Professional Timeline
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						My{" "}
						<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500">
							Journey
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						From curious beginner to AI-powered web development specialist
					</p>
				</motion.div>

				<div className="relative">
					{/* Enhanced Timeline line with gradient */}
					<div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-cyan-500 to-teal-500 hidden md:block rounded-full" />

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="space-y-12">
						{journeySteps.map((step, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="relative flex gap-8 items-start">
								{/* Enhanced Timeline dot with glow */}
								<div
									className={`hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} text-white shrink-0 relative z-10 shadow-lg shadow-${step.iconBg}/30`}>
									<div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm" />
									<div className="relative">{step.icon}</div>
								</div>

								{/* Enhanced Content card */}
								<div
									className={`flex-1 group relative bg-white dark:bg-zinc-900/50 rounded-2xl p-6 md:p-8 border-2 border-zinc-200 dark:border-zinc-800 hover:border-transparent transition-all duration-300 overflow-hidden`}>
									{/* Gradient border on hover */}
									<div
										className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
									/>
									<div className="absolute inset-0.5 bg-white dark:bg-zinc-900/50 rounded-2xl -z-10" />

									{/* Decorative glow */}
									<div
										className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-2xl"
										style={{
											background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
										}}
									/>

									<div className="relative">
										<div className="flex items-center gap-3 mb-4">
											{/* Year badge with gradient */}
											<span
												className={`text-sm font-bold text-white bg-linear-to-r ${step.color} px-4 py-2 rounded-full shadow-lg`}>
												{step.year}
											</span>
											{/* Mobile icon */}
											<div
												className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${step.color} text-white shadow-lg`}>
												{step.icon}
											</div>
										</div>

										<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all">
											{step.title}
										</h3>

										<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Achievement summary */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="mt-16 text-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl p-8 text-white">
					<h3 className="text-2xl font-bold mb-3">
						Continuous Growth & Learning
					</h3>
					<p className="text-blue-100 max-w-2xl mx-auto">
						Every project is an opportunity to learn, innovate, and push the
						boundaries of what's possible with modern web technologies and AI.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
