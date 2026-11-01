"use client";

import { Warp } from "@paper-design/shaders-react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { Bot, Brain, Check, Globe, Layers, ShoppingCart } from "lucide-react";
import type { ReactNode } from "react";

interface Service {
	title: string;
	description: string;
	deliverables: string[];
	plan: string;
	price: string;
	icon: ReactNode;
	featured?: boolean;
}

// Plans and prices match the pricing section. Change them in both places.
const services: Service[] = [
	{
		title: "AI products and SaaS",
		description:
			"I build AI-powered products from idea to launch: the AI features, the app around them, and the auth and billing that turn it into a real business.",
		deliverables: [
			"LLM features and chatbots",
			"RAG over your own data",
			"Voice AI",
			"Auth, billing, and credits",
		],
		plan: "AI Product plan",
		price: "From $2,500",
		icon: <Brain className="size-6" />,
		featured: true,
	},
	{
		title: "AI agents and automation",
		description:
			"Agents that use your tools to get work done, like reading email, creating GitHub issues, or posting to Slack.",
		deliverables: [
			"Tool-using agents",
			"Gmail, Slack, GitHub, and more",
			"Custom workflows",
		],
		plan: "AI Product plan",
		price: "From $2,500",
		icon: <Bot className="size-6" />,
	},
	{
		title: "Full-stack web apps",
		description:
			"Dashboards, client portals, and internal tools with auth, a database, and clean APIs, built to be easy to extend.",
		deliverables: [
			"Next.js front end",
			"Typed APIs with Hono",
			"PostgreSQL database",
			"Auth and roles",
		],
		plan: "Web App plan",
		price: "$1,200",
		icon: <Layers className="size-6" />,
	},
	{
		title: "Websites and landing pages",
		description:
			"Fast, polished marketing sites that look right on every screen and turn visitors into leads.",
		deliverables: [
			"Up to 5 pages",
			"Smooth animations",
			"Contact form",
			"Basic SEO",
		],
		plan: "Launch plan",
		price: "$450",
		icon: <Globe className="size-6" />,
	},
	{
		title: "E-commerce stores",
		description:
			"Online stores with product management, secure checkout, and an admin dashboard you can run yourself.",
		deliverables: [
			"Product and order management",
			"Payment integration, including COD",
			"Admin dashboard",
		],
		plan: "Web App plan",
		price: "From $1,200",
		icon: <ShoppingCart className="size-6" />,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceCard({ service }: { service: Service }) {
	const reduceMotion = useReducedMotion();
	const { featured } = service;

	return (
		<motion.article
			variants={itemVariants}
			className={`relative overflow-hidden rounded-3xl ${
				featured
					? "md:col-span-2"
					: "border border-zinc-200 bg-white transition-colors hover:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-500"
			}`}>
			{/* The one shader on the page. It sits behind the content and is purely decorative. */}
			{featured && (
				<div aria-hidden="true" className="absolute inset-0">
					<Warp
						style={{ height: "100%", width: "100%" }}
						proportion={0.3}
						softness={0.8}
						distortion={0.15}
						swirl={0.6}
						swirlIterations={8}
						shape="checks"
						shapeScale={0.08}
						scale={1}
						rotation={0}
						speed={reduceMotion ? 0 : 0.6}
						colors={[
							"hsl(215, 100%, 25%)",
							"hsl(210, 100%, 50%)",
							"hsl(190, 100%, 45%)",
							"hsl(200, 100%, 65%)",
						]}
					/>
					<div className="absolute inset-0 bg-zinc-950/70" />
				</div>
			)}

			<div className="relative flex h-full flex-col p-8">
				<div
					className={`mb-6 flex size-12 items-center justify-center rounded-xl ${
						featured
							? "bg-white/15 text-white"
							: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
					}`}>
					{service.icon}
				</div>

				<h3
					className={`text-2xl font-bold ${
						featured ? "text-white" : "text-zinc-900 dark:text-zinc-50"
					}`}>
					{service.title}
				</h3>

				<p
					className={`mt-3 max-w-xl leading-relaxed ${
						featured ? "text-white/85" : "text-zinc-600 dark:text-zinc-400"
					}`}>
					{service.description}
				</p>

				<ul
					className={`mt-6 grid gap-2 ${featured ? "sm:grid-cols-2" : ""}`}>
					{service.deliverables.map((item) => (
						<li
							key={item}
							className={`flex items-start gap-2 text-sm ${
								featured
									? "text-white/90"
									: "text-zinc-700 dark:text-zinc-300"
							}`}>
							<Check
								className={`mt-0.5 size-4 shrink-0 ${
									featured ? "text-cyan-300" : "text-blue-500"
								}`}
							/>
							{item}
						</li>
					))}
				</ul>

				<div
					className={`mt-auto flex items-baseline justify-between gap-4 border-t pt-4 ${
						featured
							? "mt-8 border-white/20"
							: "mt-8 border-zinc-200 dark:border-zinc-800"
					}`}>
					<p
						className={`text-sm ${
							featured ? "text-white/80" : "text-zinc-500 dark:text-zinc-400"
						}`}>
						{service.plan}
					</p>
					<p
						className={`font-semibold ${
							featured ? "text-white" : "text-zinc-900 dark:text-zinc-50"
						}`}>
						{service.price}
					</p>
				</div>
			</div>
		</motion.article>
	);
}

export default function ServiceCards() {
	return (
		<MotionConfig reducedMotion="user">
			<section
				id="services"
				className="bg-zinc-50 px-4 py-24 dark:bg-zinc-900/50">
				<div className="mx-auto max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}
						className="mb-14">
						<h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
							What I can{" "}
							<span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
								build for you
							</span>
						</h2>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
							Fixed prices for every service. Pick the one closest to your
							project and we'll scope the details on a free call.
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{services.map((service) => (
							<ServiceCard key={service.title} service={service} />
						))}
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}