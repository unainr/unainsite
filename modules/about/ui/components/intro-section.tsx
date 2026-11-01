"use client";

import { MotionConfig, motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const projects = [
	{
		name: "Seerforge",
		href: "https://seerforge.vercel.app",
		desc: "Multi-tenant AI workflow builder. Teams edit the same canvas live and test agents right inside it.",
		tags: ["React Flow", "Liveblocks", "Multi-tenant"],
	},
	{
		name: "Clario AI",
		href: "https://clario-sh.vercel.app",
		desc: "AI interview coach with voice conversations, credit-based billing, and shareable agents.",
		tags: ["Vapi", "Billing", "Next.js"],
	},
	{
		name: "Amanises",
		href: "https://amanises.vercel.app",
		desc: "Agent platform where agents use 19+ connected tools to get real work done.",
		tags: ["Hono", "Composio", "AI SDK","Next.js"],
	},
];

export default function IntroSection() {
	return (
		<MotionConfig reducedMotion="user">
			<section className="py-20 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
				{/* Decorative background elements */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

				<div className="max-w-5xl mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left: Text Content */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5 }}>
							<div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
								<Sparkles className="w-4 h-4" />
								Full-Stack Developer & AI Specialist
							</div>

							<h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
								I turn AI ideas into products people{" "}
								<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
									actually use
								</span>
							</h2>

							<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
								I'm Muhammad Unain, a full-stack developer based in Karachi
								who builds AI-powered SaaS. I work solo, so you talk directly
								to the person writing your code, with no handoffs and no
								account managers.
							</p>

							<p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
								I handle the whole build: product thinking, UI, backend, AI
								features, payments, and deployment. You get a working product
								you can put in front of users, not a prototype.
							</p>

							<div className="flex flex-wrap items-center gap-4">
								<a
									href="https://cal.com/unain/meeting"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
									Book a Free Call
									<CalendarCheck className="w-4 h-4" />
								</a>
								<Link
									href="/project"
									className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all">
									View My Work
								</Link>
								<Link
									href="/UNAIN_FullStack_AI_Developer_Resume.pdf"
									target="_blank"
									className="text-sm font-medium text-zinc-600 dark:text-zinc-400 underline-offset-4 hover:underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
									Resume
								</Link>
							</div>
						</motion.div>

						{/* Right: Live products */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="space-y-4">
							<p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
								Live products you can try today
							</p>

							{projects.map((project) => (
								<a
									key={project.name}
									href={project.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 transition-all hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
									<div className="flex items-start justify-between gap-4">
										<h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
											{project.name}
										</h3>
										<ArrowUpRight className="w-5 h-5 shrink-0 text-zinc-400 transition-all group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</div>
									<p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
										{project.desc}
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300">
												{tag}
											</span>
										))}
									</div>
								</a>
							))}
						</motion.div>
					</div>
				</div>
			</section>
		</MotionConfig>
	);
}