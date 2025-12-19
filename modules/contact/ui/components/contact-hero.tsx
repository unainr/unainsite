"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
	title: string;
	breadcrumbs: { label: string; href: string }[];
}

export default function PageHero({ title, breadcrumbs }: PageHeroProps) {
	return (
		<div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-zinc-900">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						"url('/banner.jpg')",
				}}>
				<div className="absolute inset-0 bg-black/60" />
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-4">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
					{title}
				</motion.h1>

				{/* Breadcrumb */}
				<motion.nav
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex items-center justify-center gap-2 text-sm text-white/80">
					{breadcrumbs.map((crumb, index) => (
						<div key={index} className="flex items-center gap-2">
							{index > 0 && <ChevronRight className="w-4 h-4" />}
							{index === breadcrumbs.length - 1 ? (
								<span className="text-white font-medium">{crumb.label}</span>
							) : (
								<Link
									href={crumb.href}
									className="hover:text-white transition-colors">
									{crumb.label}
								</Link>
							)}
						</div>
					))}
				</motion.nav>
			</div>
		</div>
	);
}
