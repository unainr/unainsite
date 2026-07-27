"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────
   Testimonials — CSS-driven marquee, no external avatar
   images, no JS-driven per-frame animation for the scroll.
   Swap in real client photos via the `image` field if you
   have them; otherwise the initials avatar stays.
────────────────────────────────────────────────────── */

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image?: string; // optional — omit to use initials avatar
}

const testimonials: Testimonial[] = [
  {
    text: "Unain built our business website in under a week. Clean, fast, and exactly what we envisioned.",
    name: "Ahmed Raza",
    role: "Restaurant Owner",
  },
  {
    text: "Viocodes delivered our web app on time with great attention to detail. The performance blew us away.",
    name: "Sara Malik",
    role: "Startup Founder",
  },
  {
    text: "We needed an AI chatbot integrated into our platform. Unain got it done in days.",
    name: "Bilal Chaudhry",
    role: "SaaS Product Manager",
  },
  {
    text: "The demo he built for us was so good we hired him on the spot. Best decision for our online presence.",
    name: "Fatima Sheikh",
    role: "Boutique Owner",
  },
  {
    text: "Viocodes understood our vision immediately. The AI features they built saved us hours every week.",
    name: "Tariq Mahmood",
    role: "Agency Director",
  },
  {
    text: "Unain thinks like a product person, not just a developer. He suggested features we hadn't thought of.",
    name: "Nadia Qureshi",
    role: "E-commerce Founder",
  },
  {
    text: "Fast delivery, clean code, great communication throughout. Will work with Viocodes again.",
    name: "Danish Karimi",
    role: "Tech Startup CEO",
  },
  {
    text: "Our landing page conversions improved significantly after the redesign. The UI is stunning.",
    name: "Hira Baig",
    role: "Marketing Manager",
  },
  {
    text: "Professional, skilled, and delivers on time. Unain built our full stack app exactly to spec.",
    name: "Faisal Nawaz",
    role: "Business Owner",
  },
];

const AVATAR_GRADIENTS = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-fuchsia-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-400",
  "from-cyan-500 to-blue-400",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto">
        {t.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.image}
            alt={t.name}
            width={36}
            height={36}
            loading="lazy"
            className="w-9 h-9 rounded-full object-cover shrink-0"
          />
        ) : (
          <div
            className={cn(
              "w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-semibold bg-linear-to-br",
              gradient
            )}
          >
            {getInitials(t.name)}
          </div>
        )}
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-foreground truncate">{t.name}</span>
          <span className="text-xs text-muted-foreground truncate">{t.role}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Pure-CSS vertical marquee. The column's content is rendered twice back to
 * back and translated by exactly -50% over the animation duration, which is
 * what makes the loop seamless. Animation runs on `transform` only (GPU
 * compositor, no layout/paint per frame) and is driven entirely by CSS —
 * nothing re-renders or ticks in JS while it scrolls.
 */
function TestimonialsColumn({
  items,
  duration,
  reverse = false,
  className,
}: {
  items: Testimonial[];
  duration: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6 overflow-hidden", className)}>
      <div
        className="flex flex-col gap-6 shrink-0 animate-testimonial-scroll motion-reduce:animate-none"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`a-${i}`} t={t} index={i} />
        ))}
        {items.map((t, i) => (
          <TestimonialCard key={`b-${i}`} t={t} index={i} />
        ))}
      </div>
    </div>
  );
}

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-background my-16 relative">
      {/* scoped keyframes — only shipped once, used by every column */}
      <style>{`
        @keyframes testimonial-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-testimonial-scroll {
          animation-name: testimonial-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .group:hover .animate-testimonial-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-135 mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our{" "}
            <span className="italic bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
              users say
            </span>
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="group flex justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-185 overflow-hidden">
          <TestimonialsColumn items={firstColumn} duration={26} />
          <TestimonialsColumn items={secondColumn} duration={32} reverse className="hidden md:flex" />
          <TestimonialsColumn items={thirdColumn} duration={29} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
}