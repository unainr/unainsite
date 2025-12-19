"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket } from "lucide-react";

export default function IntroSection() {
	return (
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
							Transforming Ideas into{" "}
							<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
								Digital Excellence
							</span>
						</h2>

						<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
							I'm Muhammad Unain, a passionate developer specializing in
							building scalable web applications powered by AI. With expertise
							in modern frameworks and cutting-edge technologies, I create
							solutions that drive real business value.
						</p>

						<p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
							From concept to deployment, I bring a unique blend of technical
							expertise and creative problem-solving to every project. My focus
							is on delivering high-quality, maintainable code that exceeds
							expectations.
						</p>

						<div className="flex flex-wrap gap-4">
							<a
								href="/project"
								className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
								View My Work
								<Rocket className="w-4 h-4" />
							</a>
							<a
								href="/contact"
								className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all">
								Get In Touch
							</a>
						</div>
					</motion.div>

					{/* Right: Feature Cards */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-4">
						{/* Card 1 */}
						<div className="group relative bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
							<div className="relative flex items-start gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
									<Code2 className="w-6 h-6" />
								</div>
								<div>
									<h3 className="font-bold text-lg mb-2">Modern Tech Stack</h3>
									<p className="text-blue-100 text-sm">
										React, Next.js, TypeScript, Node.js, and the latest AI
										frameworks
									</p>
								</div>
							</div>
						</div>

						{/* Card 2 */}
						<div className="group relative bg-linear-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
							<div className="relative flex items-start gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
									<Sparkles className="w-6 h-6" />
								</div>
								<div>
									<h3 className="font-bold text-lg mb-2">
										AI-Powered Solutions
									</h3>
									<p className="text-cyan-100 text-sm">
										Integrating Gemini AI, LLMs, and intelligent automation into
										web apps
									</p>
								</div>
							</div>
						</div>

						{/* Card 3 */}
						<div className="group relative bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
							<div className="relative flex items-start gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
									<Rocket className="w-6 h-6" />
								</div>
								<div>
									<h3 className="font-bold text-lg mb-2">Fast & Scalable</h3>
									<p className="text-blue-100 text-sm">
										Performance-optimized applications built for growth and
										reliability
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
