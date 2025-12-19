"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServicesCTA() {
	return (
		<section className="py-20 px-4 bg-linear-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

			<div className="max-w-4xl mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="space-y-6">
					<div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
						<Sparkles className="w-4 h-4" />
						Let's Work Together
					</div>

					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						Ready to Start Your Project?
					</h2>
					<p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
						Let's discuss how I can help bring your vision to life with
						cutting-edge web development and AI integration.
					</p>

					<div className="flex flex-wrap gap-4 justify-center mt-8">
						<Link
							href="mailto:unain.dev@outlook.com"
							className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg shadow-black/20">
							<Mail className="w-5 h-5" />
							Email Me
							<ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href="/project"
							className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
							<MessageSquare className="w-5 h-5" />
							View My Work
						</Link>
					</div>

					{/* Contact info */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="mt-12 pt-8 border-t border-white/20">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
							<div>
								<div className="text-sm text-blue-100 mb-1">Email</div>
								<a
									href="mailto:unain.dev@outlook.com"
									className="font-semibold hover:text-blue-100 transition-colors">
									unain.dev@outlook.com
								</a>
							</div>
							<div>
								<div className="text-sm text-blue-100 mb-1">Location</div>
								<div className="font-semibold">Pakistan</div>
							</div>
							<div>
								<div className="text-sm text-blue-100 mb-1">Response Time</div>
								<div className="font-semibold">Within 24 hours</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
