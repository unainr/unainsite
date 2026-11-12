"use client";

import { useRef, type MouseEvent, type RefObject } from "react";
import { Settings2, Sparkles, Zap, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "motion/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Fully Customizable",
    description:
      "Adapt workflows, branding, and AI capabilities to match your exact business needs.",
  },
  {
    icon: Settings2,
    title: "Total Control",
    description:
      "Easily manage every detail—from design to automation—without technical complexity.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Boost productivity with intelligent features built on the latest generative AI technology.",
  },
];

/* -------------------------------------------------------------------------- */
/* Motion variants (hover)                                                    */
/* -------------------------------------------------------------------------- */

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -6, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const iconTileVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -6,
    transition: { type: "spring", stiffness: 350, damping: 16 },
  },
};

const accentLineVariants: Variants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const watermarkVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 8, scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } },
};

/* -------------------------------------------------------------------------- */
/* Scroll animation (GSAP + ScrollTrigger)                                    */
/* -------------------------------------------------------------------------- */

function useFeaturesReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(scope);

        // 1. Heading + paragraph fade up once when they enter the screen
        gsap.from(".reveal-header", {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: { trigger: ".reveal-header", start: "top 88%", once: true },
        });

        // 2. Cards rise in one after another
        gsap.from(".reveal-card", {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: ".features-grid", start: "top 85%", once: true },
        });

        // 3. Big faint icons drift slowly as you scroll (tied to scroll position)
        q(".card-watermark").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -20 },
            {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest(".reveal-card"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function FeatureCard({ icon: Icon, title, description }: Feature) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);

  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, rgba(59,130,246,0.12), transparent 70%)`;

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div className="reveal-card h-full">
      <motion.article
        initial="rest"
        whileHover="hover"
        variants={cardVariants}
        onMouseMove={handleMove}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
      >
        {/* cursor spotlight */}
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* large faint icon in the corner */}
        <div
          aria-hidden
          className="card-watermark pointer-events-none absolute -right-6 -top-6"
        >
          <motion.div variants={watermarkVariants}>
            <Icon className="size-36 text-foreground/5" strokeWidth={1} />
          </motion.div>
        </div>

        {/* icon tile */}
        <motion.div
          variants={iconTileVariants}
          className="relative flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
        >
          <Icon className="size-6" aria-hidden />
        </motion.div>

        <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* accent line that draws in on hover */}
        <motion.span
          aria-hidden
          variants={accentLineVariants}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-blue-500 to-cyan-500"
        />
      </motion.article>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main                                                                       */
/* -------------------------------------------------------------------------- */

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  useFeaturesReveal(sectionRef);

  return (
    <section ref={sectionRef} className="relative isolate py-16 md:py-32">
      {/* soft blue light behind the heading */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(59,130,246,0.12),transparent)]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <h2 className="reveal-header my-4 text-5xl font-bold uppercase tracking-tighter">
            AI Features That{" "}
            <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text italic text-transparent">
              Drive Growth
            </span>
          </h2>
          <p className="reveal-header mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Customizable, secure, and built with the latest tech—so you can
            focus on results, not complexity.
          </p>
        </header>

        <div className="features-grid mx-auto mt-12 grid max-w-sm gap-6 md:mt-16 md:max-w-none md:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}