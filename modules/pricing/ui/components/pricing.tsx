"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
	const plans = [
		{
			name: "Starter",
			price: "$49",
			description: "Perfect for small businesses needing an online presence",
			features: [
				"Up to 5 pages",
				"Mobile responsive design",
				"Contact form",
				"Modern animations",
				"Delivery in 5-7 days",
			],
			popular: false,
		},
		{
			name: "Growth",
			price: "$299",
			description: "For businesses ready to scale with a full web app",
			features: [
				"Full web app with dashboard",
				"Authentication & database",
				"API integrations",
				"Modern UI with Next.js",
				"Delivery in 14-21 days",
			],
			popular: true,
		},
		{
			name: "AI Plan",
			price: "$699",
			description: "For startups that want AI powered products",
			features: [
				"AI powered web app or SaaS",
				"LLM integration & chatbot",
				"Automation workflows",
				"Full stack Next.js + AI",
				"Delivery in 3-4 weeks",
			],
			popular: false,
		},
	];

	return (
		<section className="px-6 py-16">
			<div className="mx-auto max-w-7xl">
				<div className="mb-20 space-y-5 text-center">
					<h2 className="text-5xl font-bold tracking-tight md:text-6xl">
						Choose Your{" "}
						<span className=" italic bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
							Plan
						</span>
					</h2>
					<p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
						No hidden fees. Pick a plan and let's start building together.
					</p>
				</div>

				<div className="grid items-stretch gap-6 md:grid-cols-3">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`relative flex flex-col border p-8 transition-all duration-300 hover:-translate-y-1 ${
								plan.popular
									? "border-blue-500/50 bg-background shadow-xl shadow-blue-500/10"
									: "border-border/40 bg-background/60 hover:border-border/80 hover:bg-background/80"
							}`}>
							{/* Popular Badge */}
							{plan.popular && (
								<div className="absolute -top-3 left-1/2 -translate-x-1/2">
									<div className="rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold tracking-widest text-white uppercase">
										Most Popular
									</div>
								</div>
							)}

							{/* Plan Name */}
							<p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
								{plan.name}
							</p>

							{/* Price */}
							<div className="mb-1 flex items-end gap-1">
								<span className="text-5xl font-bold tracking-tight">
									{plan.price}
								</span>
								{plan.price !== "Let's Talk" && (
									<span className="mb-2 text-sm text-muted-foreground">
										/project
									</span>
								)}
							</div>

							{/* Description */}
							<p className="mb-6 text-sm leading-relaxed text-muted-foreground">
								{plan.description}
							</p>

							{/* Divider */}
							<div className="mb-6 h-px w-full bg-border/50" />

							{/* Features */}
							<ul className="mb-8 flex-1 space-y-3">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-start gap-3 text-sm">
										<div
											className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
												plan.popular
													? "bg-blue-500/15 text-blue-500"
													: "bg-foreground/8 text-foreground"
											}`}>
											<Check className="h-2.5 w-2.5" />
										</div>
										<span className="text-foreground/75 leading-snug">
											{feature}
										</span>
									</li>
								))}
							</ul>

							{/* Button */}
                            <Link href={'https://cal.com/unain/meeting'} target="_blank">
							<Button
								className={`h-11 w-full rounded-full text-sm font-medium transition-all duration-200 ${
                                    plan.popular
                                    ? "bg-blue-500 text-white hover:bg-blue-600 border-0"
                                    : "hover:bg-foreground/5"
								}`}
								variant={plan.popular ? "default" : "outline"}>
								Book a Free Call
							</Button>
                                    </Link>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
