"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Brand colors are written inline as Tailwind arbitrary values,
   so nothing needs to be added to globals.css:
   #2B7FFF = color1, #0085FF = color3, #6FA8FF = lighter tint */

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image?: string; // optional: omit to use the initials avatar
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

// Avatars stay inside the brand blue family.
const AVATAR_GRADIENTS = [
  "from-[#2B7FFF] to-[#0085FF]",
  "from-[#6FA8FF] to-[#2B7FFF]",
  "from-[#0085FF] to-[#2B7FFF]",
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

  // pb-6 (not gap) so the two copies repeat at an exact period: seamless loop.
  return (
    <div className="pb-6">
      <figure className="relative flex flex-col gap-4 rounded-2xl border border-[#2B7FFF]/15 bg-linear-to-b from-[#2B7FFF]/6 via-card to-card p-5 shadow-sm transition-colors duration-300 hover:border-[#2B7FFF]/40">
        <Quote aria-hidden className="size-5 text-[#2B7FFF]/60" />

        <blockquote className="text-sm leading-relaxed text-foreground/90">
          {t.text}
        </blockquote>

        <figcaption className="mt-auto flex items-center gap-3">
          {t.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.image}
              alt={t.name}
              width={36}
              height={36}
              loading="lazy"
              className="size-9 shrink-0 rounded-full object-cover ring-2 ring-[#2B7FFF]/20"
            />
          ) : (
            <div
              aria-hidden
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br text-xs font-semibold text-white ring-2 ring-[#2B7FFF]/20",
                gradient,
              )}
            >
              {getInitials(t.name)}
            </div>
          )}
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-semibold text-foreground">
              {t.name}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {t.role}
            </span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

/**
 * One scrolling column. The cards are rendered twice; GSAP moves the track by
 * exactly -50% (one full copy) and repeats, which makes the loop seamless.
 * The second copy is aria-hidden and removed for reduced-motion users.
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
    <div
      className={cn(
        "tm-col flex w-80 max-w-full flex-col overflow-hidden",
        className,
      )}
    >
      <div
        className="tm-track flex flex-col will-change-transform"
        data-duration={duration}
        data-reverse={String(reverse)}
      >
        <div>
          {items.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
        <div aria-hidden className="motion-reduce:hidden">
          {items.map((t, i) => (
            <TestimonialCard key={`dup-${t.name}`} t={t} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Everything here is skipped for users who prefer reduced motion.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* 1) Entrance: label, heading words, subtitle, then columns */
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
          })
          .from(".tm-label", { y: 16, opacity: 0, duration: 0.6 })
          .from(".tm-word", { yPercent: 110, duration: 0.8, stagger: 0.1 }, "-=0.3")
          .from(".tm-sub", { y: 16, opacity: 0, duration: 0.6 }, "-=0.4")
          .from(".tm-col", { y: 64, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.4");

        /* 2) Marquee: one looping tween per column */
        const tls = gsap.utils.toArray<HTMLElement>(".tm-track").map((track) => {
          const duration = Number(track.dataset.duration);
          const reverse = track.dataset.reverse === "true";
          return gsap.fromTo(
            track,
            { yPercent: reverse ? -50 : 0 },
            { yPercent: reverse ? 0 : -50, duration, ease: "none", repeat: -1 },
          );
        });

        // Final speed = hover factor x scroll-boost factor.
        const speed = { hover: 1, boost: 1 };
        const apply = () => tls.forEach((t) => t.timeScale(speed.hover * speed.boost));

        // Only animate while the columns are on screen.
        const visibility = ScrollTrigger.create({
          trigger: grid.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => tls.forEach((t) => t.paused(!self.isActive)),
        });
        tls.forEach((t) => t.paused(!visibility.isActive));

        // Scrolling the page speeds the columns up, then they ease back.
        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            speed.boost = 1 + Math.min(Math.abs(self.getVelocity()) / 1000, 2.5);
            apply();
            gsap.to(speed, {
              boost: 1,
              duration: 0.9,
              ease: "power2.out",
              overwrite: "auto",
              onUpdate: apply,
            });
          },
        });

        // Hovering the columns eases them down to a crawl (not a hard stop).
        const el = grid.current;
        const enter = () =>
          gsap.to(speed, {
            hover: 0.15,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
            onUpdate: apply,
          });
        const leave = () =>
          gsap.to(speed, {
            hover: 1,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
            onUpdate: apply,
          });
        el?.addEventListener("mouseenter", enter);
        el?.addEventListener("mouseleave", leave);

        return () => {
          el?.removeEventListener("mouseenter", enter);
          el?.removeEventListener("mouseleave", leave);
        };
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative isolate my-16 overflow-hidden py-8">
      {/* soft brand glow behind the columns (no section background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-160 -translate-x-1/2 rounded-full bg-[#2B7FFF]/10 blur-3xl dark:bg-[#2B7FFF]/15"
      />

      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-135 flex-col items-center justify-center text-center">
          <div className="tm-label rounded-full border border-[#2B7FFF]/25 bg-[#2B7FFF]/10 px-3.5 py-1 text-xs font-medium text-[#2B7FFF]">
            Testimonials
          </div>

          <h2 className="mt-5 text-4xl font-bold uppercase tracking-tighter sm:text-5xl">
            <span className="inline-block overflow-hidden py-1 align-bottom">
              <span className="tm-word inline-block">What our</span>
            </span>{" "}
            <span className="inline-block overflow-hidden py-1 pr-2 align-bottom">
              <span className="tm-word inline-block bg-linear-to-r from-[#2B7FFF] to-[#0085FF] bg-clip-text pr-1 italic text-transparent">
                users say
              </span>
            </span>
          </h2>

          <p className="tm-sub mt-5 text-muted-foreground">
            See what our customers have to say about us.
          </p>
        </div>

        <div
          ref={grid}
          className="mx-auto mt-12 flex max-h-185 justify-center gap-6 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] motion-reduce:max-h-none motion-reduce:overflow-visible motion-reduce:mask-none"
        >
          <TestimonialsColumn items={firstColumn} duration={26} />
          <TestimonialsColumn
            items={secondColumn}
            duration={32}
            reverse
            className="hidden md:flex"
          />
          <TestimonialsColumn
            items={thirdColumn}
            duration={29}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}