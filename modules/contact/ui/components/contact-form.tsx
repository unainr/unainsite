"use client";

import { motion } from "framer-motion";
import {
	Mail,
	MapPin,
	Phone,
	Send,
	MessageSquare,
	User,
	Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
	const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
		"idle"
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormState("submitting");
		// Simulate API call
		setTimeout(() => {
			setFormState("success");
			setTimeout(() => setFormState("idle"), 3000);
		}, 1500);
	};

	return (
		<section className="py-20 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
			{/* Enhanced decorative background */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<Sparkles className="w-4 h-4" />
						Let's Connect
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
						Get In{" "}
						<span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500">
							Touch
						</span>
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Have a project in mind? Let's discuss how I can help bring your
						vision to life
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Enhanced Contact Info Cards */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}
						className="space-y-6">
						{/* Email Card - Vibrant Blue */}
						<div className="group relative bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
							<div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative">
								<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<Mail className="w-7 h-7" />
								</div>
								<h3 className="font-bold text-xl mb-2">Email</h3>
								<a
									href="mailto:unain.dev@outlook.com"
									className="text-blue-100 hover:text-white transition-colors text-sm">
									unain.dev@outlook.com
								</a>
							</div>
						</div>

						{/* Phone Card - Vibrant Cyan */}
						<div className="group relative bg-linear-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
							<div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative">
								<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<Phone className="w-7 h-7" />
								</div>
								<h3 className="font-bold text-xl mb-2">Phone</h3>
								<a
									href="tel:+923089469544"
									className="block text-cyan-100 hover:text-white transition-colors text-sm">
									+92 308 9469544
								</a>
							</div>
						</div>

						{/* Location Card - Vibrant Teal */}
						<div className="group relative bg-linear-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white overflow-hidden shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
							<div className="absolute inset-0 bg-linear-to-br from-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative">
								<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<MapPin className="w-7 h-7" />
								</div>
								<h3 className="font-bold text-xl mb-2">Location</h3>
								<p className="text-teal-100 text-sm">Pakistan</p>
								<p className="text-sm text-teal-200 mt-2">
									Available for remote work worldwide
								</p>
							</div>
						</div>
					</motion.div>

					{/* Enhanced Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="lg:col-span-2">
						<div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8 border-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
							{formState === "success" ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="flex flex-col items-center justify-center py-12 text-center">
									<div className="w-20 h-20 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
										<Send className="w-10 h-10 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
										Message Sent!
									</h3>
									<p className="text-zinc-600 dark:text-zinc-400">
										Thank you for reaching out. I'll get back to you within 24
										hours.
									</p>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* Name Input */}
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
												Your Name
											</label>
											<div className="relative group">
												<div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
													<User className="w-5 h-5" />
												</div>
												<input
													type="text"
													id="name"
													required
													className="w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
													placeholder="John Doe"
												/>
											</div>
										</div>

										{/* Email Input */}
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
												Email Address
											</label>
											<div className="relative group">
												<div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
													<Mail className="w-5 h-5" />
												</div>
												<input
													type="email"
													id="email"
													required
													className="w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
													placeholder="john@example.com"
												/>
											</div>
										</div>
									</div>

									{/* Subject Input */}
									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
											Subject
										</label>
										<input
											type="text"
											id="subject"
											required
											className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
											placeholder="Project Inquiry"
										/>
									</div>

									{/* Message Input */}
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
											Message
										</label>
										<div className="relative group">
											<div className="absolute left-3 top-3 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
												<MessageSquare className="w-5 h-5" />
											</div>
											<textarea
												id="message"
												required
												rows={6}
												className="w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-zinc-900 dark:text-zinc-100"
												placeholder="Tell me about your project..."
											/>
										</div>
									</div>

									{/* Submit Button - Consistent Gradient */}
									<button
										type="submit"
										disabled={formState === "submitting"}
										className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 focus:ring-4 focus:ring-blue-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group">
										{formState === "submitting" ? (
											<>
												<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
												Sending...
											</>
										) : (
											<>
												<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
												Send Message
											</>
										)}
									</button>
								</form>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
