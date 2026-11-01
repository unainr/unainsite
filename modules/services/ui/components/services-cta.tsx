"use client";

import { MotionConfig, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

const EMAIL = "unainworks@protonmail.com";

const nextSteps = [
	{
		title: "Free call",
		text: "You tell me what you're building and what success looks like.",
	},
	{
		title: "Fixed quote",
		text: "I send a written scope, price, and timeline. No surprises later.",
	},
	{
		title: "Build and delivery",
		text: "50% to start, 50% on delivery. Two revision rounds are included.",
	},
];

export default function ServicesCTA() {
	return (
		<MotionConfig reducedMotion="user">
			<section className="bg-linear-to-br from-blue-600 to-cyan-700 px-4 py-24 dark:from-blue-700 dark:to-cyan-800">
				<div className="mx-auto max-w-5xl">
					<div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
						{/* Left: the ask */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5 }}>
							<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
								Have an idea? Let's scope it on a free call.
							</h2>
							<p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
								Tell me what you're building. You'll leave with a clear plan
								and a fixed price, with no obligation.
							</p>

							<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
								<a
									href="https://cal.com/unain/meeting"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg shadow-black/20 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
									<CalendarCheck className="size-5" />
									Book a Free Call
								</a>
								<a
									href={`mailto:${EMAIL}`}
									className="font-medium text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
									Or email me
								</a>
							</div>
						</motion.div>

						{/* Right: what happens next */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: 0.15 }}>
							<h3 className="text-sm font-semibold text-white/80">
								What happens next
							</h3>
							<ol className="mt-5 space-y-6">
								{nextSteps.map((step, i) => (
									<li key={step.title} className="flex gap-5">
										<span
											aria-hidden="true"
											className="w-6 shrink-0 text-2xl font-semibold leading-7 tabular-nums text-white/60">
											{i + 1}
										</span>
										<div>
											<p className="text-lg font-semibold leading-7 text-white">
												{step.title}
											</p>
											<p className="mt-1 leading-relaxed text-white/85">
												{step.text}
											</p>
										</div>
									</li>
								))}
							</ol>
						</motion.div>
					</div>

					{/* Contact details */}
					<dl className="mt-16 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
						<div>
							<dt className="text-sm text-white/80">Email</dt>
							<dd className="mt-1 font-semibold text-white">
								<a
									href={`mailto:${EMAIL}`}
									className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
									{EMAIL}
								</a>
							</dd>
						</div>
						
						<div>
							<dt className="text-sm text-white/80">Reply time</dt>
							<dd className="mt-1 font-semibold text-white">
								Within 24 hours
							</dd>
						</div>
					</dl>
				</div>
			</section>
		</MotionConfig>
	);
}