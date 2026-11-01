"use client";

import { MotionConfig, motion } from "framer-motion";
import { Brain, Code2, Database, Layers, Sparkles } from "lucide-react";

const skillCategories = [
	{
		title: "Frontend",
		blurb: "Fast, type-safe interfaces that feel polished on every screen.",
		icon: <Code2 className="w-6 h-6" />,
		skills: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"Framer Motion",
			"TanStack Query",
		],
	},
	{
		title: "Backend & Data",
		blurb: "End-to-end typed APIs on top of a database that scales.",
		icon: <Database className="w-6 h-6" />,
		skills: [
			"Hono & Hono RPC",
			"Node.js",
			"PostgreSQL (Neon)",
			"Drizzle ORM",
			"Prisma",
			"Supabase",
			"Zod",
		],
	},
	{
		title: "AI & Agents",
		blurb: "AI features that do real work, from chat to tool-using agents.",
		icon: <Brain className="w-6 h-6" />,
		skills: [
			"Vercel AI SDK",
			"OpenRouter & Groq",
			"Gemini",
			"RAG & semantic search",
			"Agent tool calling",
			"Voice AI (Vapi)",
		],
	},
	{
		title: "Product Infrastructure",
		blurb: "Everything a real SaaS needs besides the core feature.",
		icon: <Layers className="w-6 h-6" />,
		skills: [
			"Clerk auth & billing",
			"Multi-tenant workspaces",
			"Liveblocks real-time",
			"Cloudflare Workers",
			"Vercel",
			"Cloudinary & ImageKit",
			"Sanity CMS",
		],
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
		<MotionConfig reducedMotion="user">
			<section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
				{/* Decorative elements */}
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

				<div className="max-w-6xl mx-auto relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}
						className="text-center mb-14">
						<div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
							<Sparkles className="w-4 h-4" />
							Tech stack
						</div>
						<h2 className="text-4xl tracking-tight sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
							The stack I{" "}
							<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
								ship with
							</span>
						</h2>
						<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
							Tools I use every day, chosen for speed, type safety, and code
							that stays easy to maintain.
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{skillCategories.map((category) => (
							<motion.div
								key={category.title}
								variants={itemVariants}
								className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-8 transition-colors duration-300 hover:border-blue-500 dark:hover:border-blue-500">
								<div className="flex items-center gap-4 mb-4">
									<div className="p-3 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
										{category.icon}
									</div>
									<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
										{category.title}
									</h3>
								</div>

								<p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
									{category.blurb}
								</p>

								<ul className="flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<li
											key={skill}
											className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300">
											{skill}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}