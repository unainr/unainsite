"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Code2, Rocket, HeadphonesIcon } from "lucide-react";

const processSteps = [
	{
		number: "01",
		title: "Discovery",
		description:
			"Understanding your vision, goals, and requirements through detailed consultation.",
		icon: <Search className="w-6 h-6" />,
		color: "from-blue-500 to-cyan-500",
	},
	{
		number: "02",
		title: "Design",
		description:
			"Creating wireframes, mockups, and interactive prototypes for your approval.",
		icon: <Pencil className="w-6 h-6" />,
		color: "from-purple-500 to-pink-500",
	},
	{
		number: "03",
		title: "Development",
		description:
			"Building your application with clean code, best practices, and modern technologies.",
		icon: <Code2 className="w-6 h-6" />,
		color: "from-orange-500 to-red-500",
	},
	{
		number: "04",
		title: "Deployment",
		description:
			"Launching your project with proper testing, optimization, and quality assurance.",
		icon: <Rocket className="w-6 h-6" />,
		color: "from-green-500 to-emerald-500",
	},
	{
		number: "05",
		title: "Support",
		description:
			"Providing ongoing maintenance, updates, and technical support as needed.",
		icon: <HeadphonesIcon className="w-6 h-6" />,
		color: "from-indigo-500 to-blue-500",
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
		transition: { duration: 0.5 },
	},
};

export default function ProcessSection() {
	return (
		<section className="py-20 px-4 bg-white dark:bg-zinc-950">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<h2 className="text-4xl tracking-tighter uppercase sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Development{" "}
						<span className="bg-clip-text italic text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
							Process
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						A streamlined workflow designed to deliver exceptional results
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
					{processSteps.map((step, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="relative group">
							<div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
								{/* Step number */}
								<div className="text-6xl font-bold text-zinc-200 dark:text-zinc-800 mb-4">
									{step.number}
								</div>

								{/* Icon */}
								<div
									className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-r ${step.color} text-white mb-4`}>
									{step.icon}
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
									{step.title}
								</h3>

								{/* Description */}
								<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
									{step.description}
								</p>

								{/* Connector line for desktop */}
								{index < processSteps.length - 1 && (
									<div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-linear-to-r from-zinc-300 to-transparent dark:from-zinc-700" />
								)}
							</div>
						</motion.div>
					))}
				</motion.div>

				
				
			</div>
		</section>
	);
}
