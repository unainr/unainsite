"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
	end: number;
	label: string;
	suffix?: string;
	duration?: number;
}

function StatItem({ end, label, suffix = "", duration = 2 }: StatItemProps) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		let startTime: number;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min(
				(currentTime - startTime) / (duration * 1000),
				1
			);

			setCount(Math.floor(progress * end));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrame);
	}, [isInView, end, duration]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="text-center group">
			<div className="relative">
				{/* Glowing background effect */}
				<div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-xl rounded-full group-hover:blur-2xl transition-all duration-300" />

				<div className="relative text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500 mb-2">
					{count}
					{suffix}
				</div>
			</div>
			<div className="text-zinc-600 dark:text-zinc-400 font-medium">
				{label}
			</div>
		</motion.div>
	);
}

export default function StatsSection() {
	return (
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
					className="text-center mb-16">
					<h2 className="text-4xl tracking-tighter uppercase sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Achievements in{" "}
						<span className="bg-clip-text italic text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
							Numbers
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Delivering excellence through measurable results
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16">
					<StatItem end={30} label="Projects Completed" suffix="+" />
					<StatItem end={100} label="Client Satisfaction" suffix="%" />
					<StatItem end={3} label="Years Experience" suffix="+" />
				</div>

				{/* Enhanced highlights with icons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="relative group bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden">
						<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
						<div className="relative">
							<div className="text-4xl mb-4">🚀</div>
							<h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50 mb-2">
								Fast Delivery
							</h4>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">
								On-time project completion with agile methodology
							</p>
						</div>
					</div>

					<div className="relative group bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden">
						<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
						<div className="relative">
							<div className="text-4xl mb-4">🎯</div>
							<h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50 mb-2">
								Quality Focused
							</h4>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">
								Clean code, best practices, and thorough testing
							</p>
						</div>
					</div>

					<div className="relative group bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 overflow-hidden">
						<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
						<div className="relative">
							<div className="text-4xl mb-4">💡</div>
							<h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-50 mb-2">
								Innovation Driven
							</h4>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">
								Leveraging cutting-edge AI and modern technologies
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
