"use client";

import { useRef } from "react";
import {
	motion,
	useInView,
	useReducedMotion,
	useScroll,
	useSpring,
} from "framer-motion";
import { Search, Pencil, Code2, Rocket, Headphones } from "lucide-react";

const processSteps = [
	{
		number: "01",
		title: "Discovery",
		description:
			"We talk through your vision, goals, and constraints until the scope is clear to both of us.",
		deliverable: "Project brief and scope",
		icon: Search,
	},
	{
		number: "02",
		title: "Design",
		description:
			"Wireframes, mockups, and an interactive prototype you can click through before any code is written.",
		deliverable: "Approved prototype",
		icon: Pencil,
	},
	{
		number: "03",
		title: "Development",
		description:
			"Clean, tested code built with modern tools. You see working builds along the way, not just at the end.",
		deliverable: "Weekly working builds",
		icon: Code2,
	},
	{
		number: "04",
		title: "Deployment",
		description:
			"Final testing, performance tuning, and a careful launch so release day is uneventful.",
		deliverable: "Live, tested product",
		icon: Rocket,
	},
	{
		number: "05",
		title: "Support",
		description:
			"Updates, fixes, and technical help after launch, for as long as you need them.",
		deliverable: "Ongoing maintenance",
		icon: Headphones,
	},
];

function Step({
	step,
	isLast,
	reduceMotion,
}: {
	step: (typeof processSteps)[number];
	isLast: boolean;
	reduceMotion: boolean | null;
}) {
	const ref = useRef<HTMLLIElement>(null);
	// Becomes true once the step crosses the middle band of the viewport.
	const reached = useInView(ref, { margin: "-45% 0px -45% 0px", once: false });
	const Icon = step.icon;

	return (
		<li ref={ref} className={`relative pl-16 sm:pl-20 ${isLast ? "" : "pb-14"}`}>
			{/* Node on the timeline */}
			<span
				aria-hidden
				className={`absolute left-0 top-0 flex size-12 items-center justify-center rounded-full border-2 transition-colors ${
					reduceMotion ? "" : "duration-300"
				} ${
					reached
						? "border-blue-500 bg-blue-500 text-white"
						: "border-zinc-300 bg-white text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-500"
				}`}>
				<Icon className="size-5" />
			</span>

			<div className="flex items-baseline gap-3">
				<span className="font-mono text-sm tabular-nums text-zinc-400 dark:text-zinc-500">
					{step.number}
				</span>
				<h3
					className={`text-2xl font-semibold tracking-tight transition-colors ${
						reduceMotion ? "" : "duration-300"
					} ${
						reached
							? "text-zinc-900 dark:text-zinc-50"
							: "text-zinc-500 dark:text-zinc-500"
					}`}>
					{step.title}
				</h3>
			</div>

			<p className="mt-2 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
				{step.description}
			</p>

			<p className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
				<span className="text-zinc-500 dark:text-zinc-500">You get</span>
				<span className="font-medium">{step.deliverable}</span>
			</p>
		</li>
	);
}

export default function ProcessSection() {
	const reduceMotion = useReducedMotion();
	const listRef = useRef<HTMLOListElement>(null);

	// The one animated moment: the line fills as you scroll through the steps.
	const { scrollYProgress } = useScroll({
		target: listRef,
		offset: ["start 60%", "end 60%"],
	});
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: 0.3,
	});

	return (
		<section className="bg-white px-4 py-24 dark:bg-zinc-950">
			<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
				{/* Heading column, stays in view on desktop */}
				<div className="lg:sticky lg:top-24 lg:self-start">
					<h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
						From first call to long-term support
					</h2>
					<p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
						Five stages, each with something concrete you can review before we
						move on.
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Track */}
					<div
						aria-hidden
						className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"
					/>
					{/* Progress fill */}
					<motion.div
						aria-hidden
						style={{
							scaleY: reduceMotion ? 1 : progress,
							transformOrigin: "top",
						}}
						className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-blue-500"
					/>

					<ol ref={listRef} className="relative">
						{processSteps.map((step, index) => (
							<Step
								key={step.number}
								step={step}
								isLast={index === processSteps.length - 1}
								reduceMotion={reduceMotion}
							/>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}