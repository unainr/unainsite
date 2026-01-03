"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Warp } from "@paper-design/shaders-react";
import {
	Brain,
	Code,
	Palette,
	ShoppingCart,
	Workflow,
	Lightbulb,
} from "lucide-react";

interface Service {
	title: string;
	description: string;
	features: string[];
	icon: React.ReactNode;
}

const services: Service[] = [
	{
		title: "AI-Powered Web Development",
		description:
			"Integrate intelligent features into your web applications with Gemini AI, Vercel AI SDK, and advanced LLMs for chatbots, analyzers, and automation.",
		features: [
			"AI Chatbots",
			"Content Generation",
			"Smart Automation",
			"Voice AI",
		],
		icon: <Brain className="w-10 h-10 text-white" />,
	},
	{
		title: "Full-Stack Development",
		description:
			"End-to-end web application development using React, Next.js, Node.js, and modern databases for scalable, high-performance solutions.",
		features: [
			"React & Next.js",
			"Node.js & Express",
			"Database Design",
			"API Development",
		],
		icon: <Code className="w-10 h-10 text-white" />,
	},
	{
		title: "UI/UX Design & Development",
		description:
			"Beautiful, responsive interfaces crafted with Tailwind CSS, Shadcn UI, and Framer Motion for engaging user experiences.",
		features: [
			"Responsive Design",
			"Animation",
			"Design Systems",
			"Accessibility",
		],
		icon: <Palette className="w-10 h-10 text-white" />,
	},
	{
		title: "E-commerce Solutions",
		description:
			"Complete online store development with payment integration, inventory management, and optimized checkout experiences.",
		features: [
			"Payment Integration",
			"Product Management",
			"Cart Systems",
			"Analytics",
		],
		icon: <ShoppingCart className="w-10 h-10 text-white" />,
	},
	{
		title: "API Development & Integration",
		description:
			"RESTful APIs, TRPC endpoints, and third-party integrations for seamless data flow and system connectivity.",
		features: ["REST APIs", "TRPC", "Third-party APIs", "Webhooks"],
		icon: <Workflow className="w-10 h-10 text-white" />,
	},
	{
		title: "Consulting & Strategy",
		description:
			"Technical guidance, architecture planning, and technology stack recommendations for your next big project.",
		features: [
			"Tech Stack Selection",
			"Architecture Design",
			"Code Review",
			"Performance Optimization",
		],
		icon: <Lightbulb className="w-10 h-10 text-white" />,
	},
];

const getShaderConfig = (index: number) => {
	const configs: any = [
		{
			proportion: 0.3,
			softness: 0.8,
			distortion: 0.15,
			swirl: 0.6,
			swirlIterations: 8,
			shape: "checks" as const,
			shapeScale: 0.08,
			colors: [
				"hsl(220, 100%, 30%)",
				"hsl(240, 100%, 60%)",
				"hsl(260, 90%, 40%)",
				"hsl(230, 100%, 70%)",
			],
		},
		{
			proportion: 0.4,
			softness: 1.2,
			distortion: 0.2,
			swirl: 0.9,
			swirlIterations: 12,
			shape: "dots" as const,
			shapeScale: 0.12,
			colors: [
				"hsl(280, 100%, 30%)",
				"hsl(300, 100%, 65%)",
				"hsl(320, 90%, 35%)",
				"hsl(290, 100%, 75%)",
			],
		},
		{
			proportion: 0.35,
			softness: 0.9,
			distortion: 0.18,
			swirl: 0.7,
			swirlIterations: 10,
			shape: "checks" as const,
			shapeScale: 0.1,
			colors: [
				"hsl(340, 100%, 30%)",
				"hsl(350, 100%, 60%)",
				"hsl(0, 90%, 35%)",
				"hsl(345, 100%, 70%)",
			],
		},
		{
			proportion: 0.45,
			softness: 1.1,
			distortion: 0.22,
			swirl: 0.8,
			swirlIterations: 15,
			shape: "dots" as const,
			shapeScale: 0.09,
			colors: [
				"hsl(160, 100%, 25%)",
				"hsl(180, 100%, 65%)",
				"hsl(170, 90%, 30%)",
				"hsl(175, 100%, 75%)",
			],
		},
		{
			proportion: 0.38,
			softness: 0.95,
			distortion: 0.16,
			swirl: 0.85,
			swirlIterations: 11,
			shape: "checks" as const,
			shapeScale: 0.11,
			colors: [
				"hsl(30, 100%, 30%)",
				"hsl(50, 100%, 65%)",
				"hsl(40, 90%, 35%)",
				"hsl(45, 100%, 70%)",
			],
		},
		{
			proportion: 0.42,
			softness: 1.0,
			distortion: 0.19,
			swirl: 0.75,
			swirlIterations: 9,
			shape: "dots" as const,
			shapeScale: 0.13,
			colors: [
				"hsl(120, 100%, 25%)",
				"hsl(140, 100%, 60%)",
				"hsl(130, 90%, 30%)",
				"hsl(135, 100%, 70%)",
			],
		},
	];
	return configs[index % configs.length];
};

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
		transition: { duration: 0.5 },
	},
};

export default function ServiceCards() {
	return (
		<section
			id="services"
			className="min-h-screen py-20 px-4 bg-linear-to-br from-gray-50 to-gray-100 dark:from-background dark:to-background">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<h2 className="text-4xl tracking-tighter uppercase sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Professional{" "}
						<span className="bg-clip-text italic text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
							Services
						</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Comprehensive web development solutions tailored to your business
						needs
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const shaderConfig = getShaderConfig(index);
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								className="relative h-105 group">
								<div className="absolute inset-0 rounded-3xl overflow-hidden">
									<Warp
										style={{ height: "100%", width: "100%" }}
										proportion={shaderConfig.proportion}
										softness={shaderConfig.softness}
										distortion={shaderConfig.distortion}
										swirl={shaderConfig.swirl}
										swirlIterations={shaderConfig.swirlIterations}
										shape={shaderConfig.shape}
										shapeScale={shaderConfig.shapeScale}
										scale={1}
										rotation={0}
										speed={0.8}
										colors={shaderConfig.colors}
									/>
								</div>

								<div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/80 border border-white/20 dark:border-white/10 group-hover:bg-black/85 transition-all duration-300">
									<div className="mb-6 filter drop-shadow-lg">
										{service.icon}
									</div>

									<h3 className="text-2xl font-bold mb-4 text-white">
										{service.title}
									</h3>

									<p className="leading-relaxed text-gray-100 font-medium mb-6">
										{service.description}
									</p>

									<div className="mt-auto space-y-2">
										{service.features.map((feature, featureIndex) => (
											<div
												key={featureIndex}
												className="flex items-center gap-2 text-sm text-gray-200">
												<div className="w-1.5 h-1.5 rounded-full bg-white" />
												{feature}
											</div>
										))}
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
