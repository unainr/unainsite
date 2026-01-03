"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain, Wrench, Sparkles, Zap } from "lucide-react";

const skillCategories = [
	{
		title: "Frontend Development",
		icon: <Code2 className="w-6 h-6" />,
		skills: [
			"React & Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Shadcn UI",
			"Responsive Design",
		],
		color: "from-blue-500 to-cyan-500",
		iconBg: "bg-blue-500",
	},
	{
		title: "Backend Development",
		icon: <Database className="w-6 h-6" />,
		skills: [
			"Node.js & Express",
			"Laravel & PHP",
			"Prisma & Supabase",
			"Appwrite",
			"RESTful APIs",
			"Server Actions",
		],
		color: "from-cyan-500 to-blue-600",
		iconBg: "bg-cyan-500",
	},
	{
		title: "AI & Machine Learning",
		icon: <Brain className="w-6 h-6" />,
		skills: [
			"Gemini AI",
			"Vercel AI SDK",
			"LLM Integration",
			"Voice AI",
			"AI Assistants",
			"GenAI Tools",
		],
		color: "from-blue-600 to-indigo-600",
		iconBg: "bg-indigo-500",
	},
	{
		title: "Tools & Services",
		icon: <Wrench className="w-6 h-6" />,
		skills: [
			"Git & GitHub",
			"Sanity CMS",
			"ImageKit",
			"Cloudinary",
			"TRPC",
			"Web3 Integration",
		],
		color: "from-indigo-500 to-blue-500",
		iconBg: "bg-blue-600",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4 },
	},
};

export default function SkillsSection() {
	return (
		<section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<Sparkles className="w-4 h-4" />
						Technical Expertise
					</div>
					<h2 className="text-4xl tracking-tighter uppercase sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Skills &{" "}
						<span className="bg-clip-text italic text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
							Technologies
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						A comprehensive toolkit for building modern, scalable, and
						intelligent web applications
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group relative bg-white dark:bg-zinc-800/50 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden">
							{/* Gradient glow effect */}
							<div
								className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
							/>
							<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />

							<div className="relative">
								{/* Icon and Title */}
								<div className="flex items-center gap-4 mb-6">
									<div
										className={`p-4 rounded-2xl ${category.iconBg} text-white shadow-lg shadow-blue-500/20`}>
										{category.icon}
									</div>
									<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
										{category.title}
									</h3>
								</div>

								{/* Skills Grid */}
								<div className="grid grid-cols-2 gap-3">
									{category.skills.map((skill, skillIndex) => (
										<div
											key={skillIndex}
											className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/50 px-3 py-2 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
											<Zap className="w-3 h-3 text-blue-500" />
											{skill}
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
