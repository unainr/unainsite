"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Battery, Check, Signal, Wifi } from "lucide-react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* Brand colors are written inline as Tailwind arbitrary values,
   so nothing needs to be added to globals.css:
   #2B7FFF = color1, #0085FF = color3 */

const SPRING = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─────────────────────────────────────────────
   Phone mockup
───────────────────────────────────────────── */

type PhoneItem = {
  badge: string;
  variant: "default" | "popular";
  price: string;
  title: string;
  desc: string;
};

const PHONE_ITEMS: PhoneItem[] = [
  {
    badge: "Launch",
    variant: "default",
    price: "$450",
    title: "Online in 5–7 days",
    desc: "5-page site, contact form & basic SEO",
  },
  {
    badge: "Web App",
    variant: "default",
    price: "$1,200",
    title: "Full-stack web app",
    desc: "Dashboard, auth, database, API integrations",
  },
  {
    badge: "AI Product",
    variant: "popular",
    price: "From $2,500",
    title: "AI-powered SaaS",
    desc: "LLM features, chatbot, billing, automation",
  },
];

function BadgeChip({
  variant,
  label,
}: {
  variant: PhoneItem["variant"];
  label: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        variant === "popular"
          ? "bg-[#2B7FFF] text-white"
          : "bg-[#2B7FFF]/10 text-[#2B7FFF]",
      )}
    >
      {label}
    </span>
  );
}

function SheetCardContent({ item }: { item: PhoneItem }) {
  return (
    <>
      <div className="mx-auto h-0.75 w-9 rounded-full bg-foreground/15" />
      <div className="mt-2.5 flex justify-center">
        <BadgeChip variant={item.variant} label={item.badge} />
      </div>
      <div className="mt-2 text-center text-[30px] font-bold leading-none tracking-tight text-foreground">
        {item.price}
      </div>
      <div className="mt-1.5 text-center text-[13px] font-medium text-foreground/70">
        {item.title}
      </div>
      <div className="mx-auto mt-1 max-w-60 text-center text-[10.5px] leading-snug text-foreground/40">
        {item.desc}
      </div>
    </>
  );
}

function IncomingSheetCard({ item }: { item: PhoneItem }) {
  const [raised, setRaised] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      if (cancelled) return;
      raf2 = requestAnimationFrame(() => {
        if (!cancelled) setRaised(true);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 bg-background px-5 pt-3.5"
      style={{
        zIndex: 20,
        transform: raised ? "translateY(0)" : "translateY(100%)",
        transition: `transform 0.9s ${SPRING}`,
        willChange: "transform",
      }}
    >
      <SheetCardContent item={item} />
    </div>
  );
}

function PhoneMockup() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();

  const [idx, setIdx] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Only cycle while the phone is on screen (and motion is allowed).
  React.useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % PHONE_ITEMS.length),
      2800,
    );
    return () => clearInterval(id);
  }, [inView, reduce]);

  const prevIdx = idx === 0 ? PHONE_ITEMS.length - 1 : idx - 1;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto w-[320px] max-w-full px-4 pt-2 mask-[linear-gradient(to_bottom,black_82%,transparent)]"
    >
      {/* Outer bezel */}
      <div className="mx-auto overflow-hidden rounded-t-[2.5rem] border border-transparent bg-background/80 px-2 pt-2 ring-1 ring-foreground/10">
        {/* Screen */}
        <div className="overflow-hidden rounded-t-[2.05rem] bg-foreground/3 ring-1 ring-foreground/10 dark:bg-black">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-3 text-[13px]">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="size-3.5" />
              <Wifi className="size-4" />
              <Battery className="size-4.5" />
            </div>
          </div>

          {/* Mini app bar */}
          <div className="flex items-center justify-between border-b border-foreground/8 px-5 pb-2.5">
            <div>
              <p className="text-[15px] font-medium text-foreground">UNAIN</p>
              <p className="text-[11px] text-foreground/50">Choose your plan</p>
            </div>
            <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-foreground/5">
              <div className="grid grid-cols-2 gap-0.75">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-0.75 w-0.75 rounded-[1px] bg-foreground/40"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sheet backdrop */}
          <div className="relative mt-1.5">
            <div
              className="relative overflow-hidden rounded-t-[1.4rem] bg-background"
              style={{
                transform: mounted ? "translateY(0)" : "translateY(38%)",
                opacity: mounted ? 1 : 0,
                transition: `transform 1.1s ${SPRING}, opacity 0.7s ease-out`,
              }}
            >
              {/* Stacked cards */}
              <div className="relative h-40 overflow-hidden">
                <div
                  className="absolute inset-0 bg-background px-5 pt-3.5"
                  style={{ zIndex: 10 }}
                >
                  <SheetCardContent item={PHONE_ITEMS[prevIdx]} />
                </div>
                <IncomingSheetCard key={idx} item={PHONE_ITEMS[idx]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Plans
───────────────────────────────────────────── */

type Plan = {
  name: string;
  price: string;
  from: boolean;
  description: string;
  features: string[];
  popular: boolean;
};

const plans: Plan[] = [
  {
    name: "Launch",
    price: "$450",
    from: false,
    description:
      "For small businesses that need a fast, professional online presence",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Delivery in 5-7 days",
    ],
    popular: false,
  },
  {
    name: "Web App",
    price: "$1,200",
    from: false,
    description: "For businesses ready to launch a full web app",
    features: [
      "Full web app with dashboard",
      "Authentication & database",
      "API integrations",
      "Modern UI with Next.js",
      "Delivery in 2-3 weeks",
    ],
    popular: false,
  },
  {
    name: "AI Product",
    price: "$2,500",
    from: true,
    description: "For startups building AI-powered products",
    features: [
      "AI-powered web app or SaaS",
      "LLM features & chatbot",
      "Automation workflows",
      "Billing & authentication",
      "Delivery in 3-4 weeks",
    ],
    popular: true,
  },
];

function PlanCard({ plan, variants }: { plan: Plan; variants: Variants }) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const glow = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgba(43,127,255,0.14), transparent 70%)`;

  return (
    <motion.div
      variants={variants}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className={cn(
        // 1px padding + gradient/solid background = gradient border
        "group relative flex rounded-3xl p-px transition-all duration-300 hover:-translate-y-1 motion-reduce:transform-none",
        plan.popular
          ? "bg-linear-to-b from-[#2B7FFF] via-[#0085FF]/40 to-[#2B7FFF]/10 shadow-[0_30px_80px_-30px_rgba(43,127,255,0.55)] md:-my-3"
          : "bg-border/60 hover:bg-[#2B7FFF]/35",
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-linear-to-r from-[#2B7FFF] to-[#0085FF] px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-[#2B7FFF]/30">
          Most Popular
        </div>
      )}

      <div className="relative flex flex-1 flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-card p-8">
        {/* top tint on the featured plan */}
        {plan.popular && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-linear-to-b from-[#2B7FFF]/12 to-transparent"
          />
        )}

        {/* cursor-follow glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />

        <div className="relative flex flex-1 flex-col">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {plan.name}
          </p>

          <div className="mb-2 flex items-end gap-1.5">
            {plan.from && (
              <span className="mb-2 text-sm text-muted-foreground">From</span>
            )}
            <span className="text-5xl font-bold tracking-tight text-foreground">
              {plan.price}
            </span>
            <span className="mb-2 text-sm text-muted-foreground">/project</span>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {plan.description}
          </p>

          <div className="mb-6 h-px w-full bg-border/60" />

          <ul className="mb-8 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span
                  className={cn(
                    "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                    plan.popular
                      ? "bg-[#2B7FFF]/15 text-[#2B7FFF]"
                      : "bg-foreground/8 text-foreground",
                  )}
                >
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                <span className="leading-snug text-foreground/75">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className={cn(
              "group/cta h-11 w-full rounded-full text-sm font-medium transition-all duration-200",
              plan.popular
                ? "border border-[#0085FF] bg-linear-to-b from-[#2B7FFF] to-[#0085FF] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_10px_24px_-10px_rgba(43,127,255,0.8)] hover:brightness-110"
                : "border border-border bg-transparent shadow-none text-white hover:border-[#2B7FFF]/50 hover:bg-[#2B7FFF]/5 hover:text-foreground",
            )}
          >
            <Link
              href="https://cal.com/unain/meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Call
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */

export function Pricing() {
  const reduce = useReducedMotion();
  const offset = reduce ? 0 : 24;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: offset },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="relative isolate overflow-hidden px-6 py-16 md:py-24">
      {/* soft brand glow behind the headline (no section background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-2xl -translate-x-1/2 rounded-full bg-[#2B7FFF]/10 blur-3xl dark:bg-[#2B7FFF]/15"
      />

      <div className="mx-auto max-w-5xl">
        {/* Phone + headline */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="mb-5">
            <PhoneMockup />
          </div>

          <h2 className="mx-auto max-w-2xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl lg:leading-[1.05]">
            Your idea,{" "}
            <span className="bg-linear-to-r from-[#2B7FFF] to-[#0085FF] bg-clip-text pr-1 italic text-transparent">
              live in weeks
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            Fixed prices and a clear scope. Pick a plan and book a call to get
            started.
          </p>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          className="grid items-stretch gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} variants={item} />
          ))}
        </motion.div>

        {/* Terms */}
        <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-sm leading-relaxed text-muted-foreground">
          Pay 50% to start and 50% on delivery. Two revision rounds are
          included. Monthly support for fixes and small updates is available
          from $150.
        </p>
      </div>
    </section>
  );
}