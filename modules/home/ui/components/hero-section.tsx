"use client";

import { useState, useEffect } from "react";
import { X, Check, ArrowRight, BarChart3, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GodRays, MeshGradient } from "@paper-design/shaders-react";
import { FlipWords } from "./flip-text";
import { words } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [formStep, setFormStep] = useState<"idle" | "submitting" | "success">(
		"idle"
	);
	const handleExpand = () => setIsExpanded(true);

	const handleClose = () => {
		setIsExpanded(false);
		// Reset form after a brief delay so the user doesn't see it reset while closing
		setTimeout(() => setFormStep("idle"), 500);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormStep("submitting");
		// Simulate API call
		setTimeout(() => {
			setFormStep("success");
		}, 1500);
	};

	// Lock body scroll when modal is open
	useEffect(() => {
		if (isExpanded) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isExpanded]);

	return (
		<>
			<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 px-4 sm:px-6 py-12 sm:py-20 transition-colors duration-300">
				{/* GodRays Background - Adjusted to be subtle in both modes */}
				<div className="absolute inset-0 pointer-events-none">
					<GodRays
						colorBack="#00000000"
						// Using slightly transparent grays/whites to work on both dark/light backgrounds
						colors={["#a1a1aa40", "#e4e4e740", "#71717a40", "#52525b40"]}
						colorBloom="#a1a1aa"
						offsetX={0.85}
						offsetY={-1}
						intensity={0.5}
						spotty={0.45}
						midSize={10}
						midIntensity={0}
						density={0.38}
						bloom={0.3}
						speed={0.5}
						scale={1.6}
						frame={3332042.8159981333}
						style={{
							height: "100%",
							width: "100%",
							position: "absolute",
							top: 0,
							left: 0,
						}}
					/>
				</div>

				<div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-3 py-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 backdrop-blur-sm">
						<span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
						Full-Stack Developer & AI Specialist
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl sm:text-5xl  lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl">
						We Build Scalable AI-Powered Web Apps for{" "}
						<FlipWords words={words} />
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl px-4 leading-relaxed">
						Smart Scalable Stunning We bring your ideas to life with AI-powered
						web experiences that stand out
					</motion.p>

					<AnimatePresence initial={false}>
						{!isExpanded && (
							<motion.div className="inline-block relative mt-4">
								{/* The expanding background element */}
								<motion.div
									style={{ borderRadius: "100px" }}
									layout
									layoutId="cta-card"
									className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500"
								/>
								<Link href={'/project'}>
								<Button
									
									className="relative rounded-full flex items-center gap-2 h-14 px-8 py-3 text-lg font-medium text-white tracking-wide hover:opacity-90 transition-opacity">
									Explore My Projects
									<ArrowRight className="w-5 h-5" />
								</Button>
										</Link>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			{/* 
        Expanded Modal Overlay 
      */}
			<AnimatePresence initial={false}>
				{isExpanded && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
						<motion.div
							layoutId="cta-card"
							transition={{ type: "spring", bounce: 0, duration: 0.4 }}
							style={{ borderRadius: "24px" }}
							layout
							className="relative flex h-full w-full overflow-hidden bg-blue-700 sm:rounded-[24px] shadow-2xl">
							{/* Mesh Gradient Background inside Modal */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="absolute inset-0 pointer-events-none">
								<MeshGradient
									speed={0.6}
									colors={["#1d4ed8", "#1e40af", "#172554", "#1e3a8a"]} // Blue palette
									distortion={0.8}
									swirl={0.1}
									grainMixer={0.15}
									grainOverlay={0}
									style={{ height: "100%", width: "100%" }}
								/>
							</motion.div>

							{/* Close Button */}
							<motion.button
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								onClick={handleClose}
								className="absolute right-4 top-4 sm:right-8 sm:top-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20">
								<X className="h-5 w-5" />
							</motion.button>

							{/* Modal Content */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2, duration: 0.4 }}
								className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden">
								{/* Left Side: Testimonials & Info */}
								<div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 gap-8 text-white">
									<div className="space-y-4">
										<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
											Ready to scale?
										</h2>
										<p className="text-blue-100 text-lg max-w-md">
											Join 4,000+ forward-thinking companies building the future
											with Nexus.
										</p>
									</div>

									<div className="space-y-6">
										<div className="flex gap-4 items-start">
											<div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
												<BarChart3 className="w-6 h-6 text-blue-200" />
											</div>
											<div>
												<h3 className="font-semibold text-lg">
													Analytics First
												</h3>
												<p className="text-blue-100/80 text-sm leading-relaxed mt-1">
													Real-time insights embedded directly into your
													deployment workflow.
												</p>
											</div>
										</div>
										<div className="flex gap-4 items-start">
											<div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
												<Globe2 className="w-6 h-6 text-blue-200" />
											</div>
											<div>
												<h3 className="font-semibold text-lg">Global Edge</h3>
												<p className="text-blue-100/80 text-sm leading-relaxed mt-1">
													Deploy to 35+ regions instantly with our automated
													edge network.
												</p>
											</div>
										</div>
									</div>

									<div className="mt-auto pt-8 border-t border-white/20">
										<figure>
											<blockquote className="text-xl font-medium leading-relaxed mb-6">
												"Nexus transformed how we ship software. We went from
												weekly releases to daily deployments with zero
												downtime."
											</blockquote>
											<figcaption className="flex items-center gap-4">
												<div className="h-12 w-12 rounded-full bg-linear-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-lg font-bold text-white">
													ER
												</div>
												<div>
													<div className="font-semibold">Elena Rodriguez</div>
													<div className="text-sm text-blue-200">
														VP of Engineering, Chrono
													</div>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>

								{/* Right Side: Form */}
								<div className="flex-1 flex items-center justify-center p-4 sm:p-12 lg:p-16 bg-black/10 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
									<div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
										{formStep === "success" ? (
											<motion.div
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												className="flex flex-col items-center justify-center text-center h-[400px] space-y-6">
												<div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
													<Check className="w-10 h-10 text-white" />
												</div>
												<div>
													<h3 className="text-2xl font-bold text-white mb-2">
														Request Received!
													</h3>
													<p className="text-blue-100">
														Our team will be in touch shortly to schedule your
														personalized demo.
													</p>
												</div>
												<button
													onClick={handleClose}
													className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-sm font-medium">
													Return to Homepage
												</button>
											</motion.div>
										) : (
											<form onSubmit={handleSubmit} className="space-y-5">
												<div className="space-y-1">
													<h3 className="text-xl font-semibold text-white">
														Get a Demo
													</h3>
													<p className="text-sm text-blue-200">
														Fill out the form below and we'll contact you.
													</p>
												</div>

												<div className="space-y-4">
													<div>
														<label
															htmlFor="name"
															className="block text-xs font-medium text-blue-200 mb-1.5 uppercase tracking-wider">
															Full Name
														</label>
														<input
															required
															type="text"
															id="name"
															placeholder="Jane Doe"
															className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-300/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
														/>
													</div>

													<div>
														<label
															htmlFor="email"
															className="block text-xs font-medium text-blue-200 mb-1.5 uppercase tracking-wider">
															Work Email
														</label>
														<input
															required
															type="email"
															id="email"
															placeholder="jane@company.com"
															className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-300/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
														/>
													</div>

													<div className="grid grid-cols-2 gap-4">
														<div>
															<label
																htmlFor="company"
																className="block text-xs font-medium text-blue-200 mb-1.5 uppercase tracking-wider">
																Company
															</label>
															<input
																type="text"
																id="company"
																placeholder="Acme Inc"
																className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-300/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
															/>
														</div>
														<div>
															<label
																htmlFor="size"
																className="block text-xs font-medium text-blue-200 mb-1.5 uppercase tracking-wider">
																Size
															</label>
															<select
																id="size"
																className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-300/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm appearance-none cursor-pointer">
																<option className="bg-blue-900">1-50</option>
																<option className="bg-blue-900">51-200</option>
																<option className="bg-blue-900">
																	201-1000
																</option>
																<option className="bg-blue-900">1000+</option>
															</select>
														</div>
													</div>

													<div>
														<label
															htmlFor="message"
															className="block text-xs font-medium text-blue-200 mb-1.5 uppercase tracking-wider">
															Needs
														</label>
														<textarea
															id="message"
															rows={3}
															placeholder="Tell us about your project..."
															className="w-full px-4 py-3 rounded-lg bg-blue-950/40 border border-blue-300/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none text-sm"
														/>
													</div>
												</div>

												<button
													disabled={formStep === "submitting"}
													type="submit"
													className="w-full flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 focus:ring-4 focus:ring-blue-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2">
													{formStep === "submitting" ? (
														<span className="flex items-center gap-2">
															<span className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
															Sending...
														</span>
													) : (
														"Submit Request"
													)}
												</button>

												<p className="text-xs text-center text-blue-200/60 mt-4">
													By submitting, you agree to our Terms of Service and
													Privacy Policy.
												</p>
											</form>
										)}
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
