"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./testimonials-card";

const testimonials = [
  {
    text: "Unain built our business website in under a week. Clean, fast, and exactly what we envisioned. Very professional to work with.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ahmed Raza",
    role: "Restaurant Owner",
  },
  {
    text: "Viocodes delivered our web app on time with great attention to detail. The Next.js performance blew us away.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Sara Malik",
    role: "Startup Founder",
  },
  {
    text: "We needed an AI chatbot integrated into our platform. Unain got it done in days. Highly recommend Viocodes.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Bilal Chaudhry",
    role: "SaaS Product Manager",
  },
  {
    text: "The free demo he built for us was so good we hired him on the spot. Best decision we made for our online presence.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Fatima Sheikh",
    role: "Boutique Owner",
  },
  {
    text: "Viocodes understood our vision immediately. The AI powered features they built saved us hours every week.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Tariq Mahmood",
    role: "Agency Director",
  },
  {
    text: "Unain thinks like a product person not just a developer. He suggested features we hadn't even thought of.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Nadia Qureshi",
    role: "E-commerce Founder",
  },
  {
    text: "Fast delivery, clean code, and great communication throughout. Will definitely work with Viocodes again.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Danish Karimi",
    role: "Tech Startup CEO",
  },
  {
    text: "Our landing page conversions improved significantly after Viocodes redesigned it. The animations and UI are stunning.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Hira Baig",
    role: "Marketing Manager",
  },
  {
    text: "Professional, skilled, and delivers on time. Unain built our full stack app exactly to spec. 10/10.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Faisal Nawaz",
    role: "Business Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
	return (
		<section className="bg-background my-16 relative">
			<div className="container z-10 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center max-w-135 mx-auto">
					<div className="flex justify-center">
						<div className="border py-1 px-4 rounded-lg">Testimonials</div>
					</div>

					<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
						What our{" "}
						<span className=" italic bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
							users say
						</span>
					</h2>
					<p className="text-center mt-5 opacity-75">
						See what our customers have to say about us.
					</p>
				</motion.div>

				<div className="flex justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-185 overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={15} />
					<TestimonialsColumn
						testimonials={secondColumn}
						className="hidden md:block"
						duration={19}
					/>
					<TestimonialsColumn
						testimonials={thirdColumn}
						className="hidden lg:block"
						duration={17}
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
