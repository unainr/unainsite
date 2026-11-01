"use client";

import { MotionConfig, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Only keep numbers you can back up. Edit these to match reality.
const stats = [
	{
		end: 2,
		suffix: " wks",
		label: "typical time from kickoff to a launched AI MVP",
		linkLabel: "Book a free call",
		href: "https://cal.com/unain/meeting",
		external: true,
	},
	{
		end: 19,
		suffix: "+",
		label: "tools my agents can use in Amanises",
		linkLabel: "Open Amanises",
		href: "https://amanises.vercel.app",
		external: true,
	},
	{
		end: 10,
		suffix: "",
		label: "landing page templates you can buy",
		linkLabel: "Browse templates",
		href: "/templates",
	},
];

const terms = [
	{
		title: "Fixed price, written scope",
		text: "You agree on the cost and what's included before any code is written.",
	},
	{
		title: "A direct line to the developer",
		text: "I work solo, so you talk to the person building your product.",
	},
	{
		title: "Two revision rounds included",
		text: "They're part of every plan, so there are no surprises on the invoice.",
	},
	{
		title: "You own the code",
		text: "After the final payment, the full source code and access are yours.",
	},
];

interface StatItemProps {
	end: number;
	suffix?: string;
	label: string;
	linkLabel: string;
	href: string;
	external?: boolean;
	duration?: number;
}

function StatItem({
	end,
	suffix = "",
	label,
	linkLabel,
	href,
	external,
	duration = 1.6,
}: StatItemProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const reduceMotion = useReducedMotion();
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!isInView) return;

		if (reduceMotion) {
			setCount(end);
			return;
		}

		let start: number | undefined;
		let frame = 0;

		const tick = (now: number) => {
			if (start === undefined) start = now;
			const progress = Math.min((now - start) / (duration * 1000), 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.round(end * eased));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [isInView, reduceMotion, end, duration]);

	const linkClass =
		"mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-blue-500";

	return (
		<div ref={ref}>
			<p className="text-6xl font-bold tracking-tight tabular-nums text-zinc-900 dark:text-zinc-50 sm:text-7xl">
				{/* Screen readers get the final number, not the counting animation */}
				<span aria-hidden="true">{count}</span>
				<span className="sr-only">{end}</span>
				<span className="text-blue-500">{suffix}</span>
			</p>
			<p className="mt-2 font-medium text-zinc-700 dark:text-zinc-300">
				{label}
			</p>
			{external ? (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={linkClass}>
					{linkLabel}
					<ArrowUpRight className="size-3.5" />
				</a>
			) : (
				<Link href={href} className={linkClass}>
					{linkLabel}
					<ArrowUpRight className="size-3.5" />
				</Link>
			)}
		</div>
	);
}

export default function StatsSection() {
	return (
		<MotionConfig reducedMotion="user">
			<section className="bg-zinc-50 px-4 py-24 dark:bg-zinc-900/50">
				<div className="mx-auto max-w-5xl">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}>
						<h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
							What I've shipped{" "}
							<span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
								so far
							</span>
						</h2>
						<p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
							Real products with live demos. Open any of them and see how
							they work.
						</p>
					</motion.div>

					<div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
						{stats.map((stat) => (
							<StatItem key={stat.label} {...stat} />
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}
						className="mt-20">
						<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
							How I work
						</h3>
						<dl className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
							{terms.map((term) => (
								<div key={term.title}>
									<dt className="font-semibold text-zinc-900 dark:text-zinc-50">
										{term.title}
									</dt>
									<dd className="mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
										{term.text}
									</dd>
								</div>
							))}
						</dl>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}