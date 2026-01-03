"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
	{
		quote:
			"Experience natural voice conversations with intelligent AI companions tailored to your needs. Build meaningful connections through advanced voice technology powered by VAPI.",
		name: "Wisera",
		designation: "AI Companion",
		src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/screencapture-wisera-vercel-app-2025-08-01-13_04_22.png?updatedAt=1754035533383",
	},
	{
		quote:
			"SwiftBuy provides a complete e-commerce solution with seamless payment integration and content management. The shopping experience is smooth and user-friendly.",
		name: "SwiftBuy",
		designation: "E-commerce Platform",
		src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/7.png?updatedAt=1754034870667",
	},
	{
		quote:
			"The headphone showcase website demonstrates excellent frontend development skills with stunning animations and responsive design.",
		name: "Sonic Blend",
		designation: "Product Showcase",
		src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/11.png?updatedAt=1754034871698",
	},
	{
		quote:
			"CloudHorizon is a powerful image manipulation platform. The integration with Cloudinary API enables real-time image effects and transformations. The UI is intuitive and processing speed is remarkable.",
		name: "CloudHorizon",
		designation: "Image Processing Platform",
		src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/cloudhorizon.png?updatedAt=1754036421041",
	},
];

type Testimonial = {
	quote: string;
	name: string;
	designation: string;
	src: string;
};

const AnimatedTestimonials = ({
	testimonials,
	autoplay = true,
}: {
	testimonials: Testimonial[];
	autoplay?: boolean;
}) => {
	const [active, setActive] = useState(0);

	const handleNext = React.useCallback(() => {
		setActive((prev) => (prev + 1) % testimonials.length);
	}, [testimonials.length]);

	const handlePrev = () => {
		setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	useEffect(() => {
		if (!autoplay) return;
		const interval = setInterval(handleNext, 5000);
		return () => clearInterval(interval);
	}, [autoplay, handleNext]);

	const isActive = (index: number) => index === active;
const randomRotate = () => `${(Math.floor(Math.random() * 16) - 8)}deg`;


	return (
		<div className="mx-auto px-4 py-20 font-sans antialiased max-w-6xl md:px-12">
			{/* Heading and Description */}
			<div className="mb-12 text-center">
				<div className="my-4 tracking-tighter uppercase text-5xl font-bold" >
					Project {" "}
					<span className="bg-clip-text text-transparent italic  bg-linear-to-r from-blue-500 to-blue-400">
						Gallery
					</span>
				</div>
			</div>

			<div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20 items-center">
				{/* Image Section */}
				<div className="flex items-center justify-center">
					<div className="relative h-104 w-full max-w-md">
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										y: 50,
										rotate: randomRotate(),
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.5,
										scale: isActive(index) ? 1 : 0.9,
										y: isActive(index) ? 0 : 20,
										zIndex: isActive(index)
											? testimonials.length
											: testimonials.length - Math.abs(index - active),
										rotate: isActive(index) ? "0deg" : randomRotate(),
									}}
									exit={{ opacity: 0, scale: 0.9, y: -50 }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									className="absolute inset-0 origin-bottom"
									style={{ perspective: "1000px" }}>
									<Image
										src={testimonial.src}
										alt={testimonial.name}
										width={700}
										height={700}
										draggable={false}
										className="h-full w-full rounded-3xl object-cover shadow-2xl"
										onError={(e) => {
											e.currentTarget.src = `https://placehold.co/700x700/e2e8f0/64748b?text=${testimonial.name.charAt(
												0
											)}`;
											e.currentTarget.onerror = null;
										}}
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>

				{/* Text Section */}
				<div className="flex flex-col justify-center py-4">
					<AnimatePresence mode="wait">
						<motion.div
							key={active}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="flex flex-col justify-between">
							<div>
								<h3 className="text-2xl font-bold text-blue-400 ">
									{testimonials[active].name}
								</h3>
								<p className="text-sm text-slate-600 dark:text-slate-400 italic ">
									{testimonials[active].designation}
								</p>
								<motion.p className="mt-8 text-lg text-slate-700 dark:text-slate-300">
									"{testimonials[active].quote}"
								</motion.p>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Navigation Controls */}
					<div className="flex gap-4 pt-12">
						<Button
							onClick={handlePrev}
							className="group flex h-10 w-10 items-center justify-center rounded-full  bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500">
							<ArrowLeft className="h-5 w-5 text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform duration-300" />
						</Button>
						<Button
							onClick={handleNext}
							className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500">
							<ArrowRight className="h-5 w-5 text-slate-800 dark:text-slate-300 group-hover:translate-x-1 transition-transform duration-300" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export  function TopProject() {

	return (
		<div className="relative flex my-10 w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
			<style>
				{`
        @keyframes animate-grid {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animated-grid {
          width: 200%;
          height: 200%;
          background-image: 
            linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
          background-size: 3rem 3rem;
          animation: animate-grid 40s linear infinite alternate;
        }
        .dark .animated-grid {
          background-image: 
            linear-gradient(to right, #1e293b 1px, transparent 1px), 
            linear-gradient(to bottom, #1e293b 1px, transparent 1px);
        }
      `}
			</style>
			<div className="animated-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
			<div className="z-10">
				<AnimatedTestimonials testimonials={testimonials} />
			</div>
		</div>
	);
}
