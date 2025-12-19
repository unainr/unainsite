"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Sparkles } from "lucide-react";

const socialLinks = [
	{
		name: "GitHub",
		icon: <Github className="w-6 h-6" />,
		href: "https://github.com/unainr",
		color: "from-gray-700 to-gray-900",
		hoverColor: "hover:border-gray-500",
		shadowColor: "shadow-gray-500/20",
	},
	{
		name: "LinkedIn",
		icon: <Linkedin className="w-6 h-6" />,
		href: "https://linkedin.com/in/unainr",
		color: "from-blue-600 to-blue-800",
		hoverColor: "hover:border-blue-500",
		shadowColor: "shadow-blue-500/30",
	},
	{
		name: "Twitter",
		icon: <Twitter className="w-6 h-6" />,
		href: "https://twitter.com/unainr",
		color: "from-sky-500 to-sky-700",
		hoverColor: "hover:border-sky-500",
		shadowColor: "shadow-sky-500/30",
	},
	{
		name: "Instagram",
		icon: <Instagram className="w-6 h-6" />,
		href: "https://instagram.com/unainr",
		color: "from-pink-500 to-purple-600",
		hoverColor: "hover:border-pink-500",
		shadowColor: "shadow-pink-500/30",
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

export default function SocialLinks() {
	return (
		<section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12">
					<div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<Sparkles className="w-4 h-4" />
						Social Media
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Connect With{" "}
						<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500">
							Me
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400">
						Follow me on social media for updates and insights
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{socialLinks.map((social, index) => (
						<motion.a
							key={index}
							variants={itemVariants}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className={`group relative bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border-2 border-zinc-200 dark:border-zinc-700 ${social.hoverColor} transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden shadow-lg ${social.shadowColor} hover:shadow-xl hover:-translate-y-1`}>
							{/* Gradient background on hover */}
							<div
								className={`absolute inset-0 bg-linear-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
							/>

							<div className="relative">
								<div className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors mb-3 group-hover:scale-110 duration-300">
									{social.icon}
								</div>
								<div className="font-semibold text-zinc-900 dark:text-zinc-50">
									{social.name}
								</div>
							</div>
						</motion.a>
					))}
				</motion.div>

				{/* Enhanced CTA with consistent button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 text-center">
					<p className="text-zinc-600 dark:text-zinc-400 mb-4">
						Prefer email? Drop me a message anytime
					</p>
					<a
						href="mailto:unain.dev@outlook.com"
						className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all group">
						<span className="group-hover:scale-105 transition-transform">
							unain.dev@outlook.com
						</span>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
