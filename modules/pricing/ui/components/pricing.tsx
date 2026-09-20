"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Battery, Check, Signal, Wifi } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const SPRING = "cubic-bezier(0.22, 1, 0.36, 1)";

const PHONE_ITEMS = [
  {
    badge: "Starter",
    variant: "default" as const,
    price: "$199",
    title: "Online in 5–7 days",
    desc: "5-page site, contact form & animations",
  },
  {
    badge: "Growth",
    variant: "popular" as const,
    price: "$299",
    title: "Full-stack web app",
    desc: "Auth, database, API integrations, modern UI",
  },
  {
    badge: "AI Plan",
    variant: "ai" as const,
    price: "$699",
    title: "AI-powered SaaS",
    desc: "LLM integration, chatbot, automation",
  },
];

type PhoneItem = (typeof PHONE_ITEMS)[0];

function BadgeChip({ variant, label }: { variant: PhoneItem["variant"]; label: string }) {
  const cls =
    variant === "popular"
      ? "bg-blue-500 text-white"
      : variant === "ai"
        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
        : "bg-blue-500/10 text-blue-600 dark:text-blue-400";

  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${cls}`}>
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
      <div className="mt-2 text-center text-[30px] font-bold tracking-tight text-foreground leading-none">
        {item.price}
      </div>
      <div className="mt-1.5 text-center text-[13px] font-medium text-foreground/70">
        {item.title}
      </div>
      <div className="mt-1 text-center text-[10.5px] leading-snug text-foreground/40 max-w-60 mx-auto">
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
  const [idx, setIdx] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % PHONE_ITEMS.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  const prevIdx = idx === 0 ? PHONE_ITEMS.length - 1 : idx - 1;

  return (
    <div
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
                  <div key={i} className="h-0.75 w-0.75 rounded-[1px] bg-foreground/40" />
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
              {/* Stacked cards — tight height, no dead space */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-background px-5 pt-3.5" style={{ zIndex: 10 }}>
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

const plans = [
  {
    name: "Starter",
    price: "$199",
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
    description: "For startups that want AI-powered products",
    features: [
      "AI-powered web app or SaaS",
      "LLM integration & chatbot",
      "Automation workflows",
      "Full stack Next.js + AI",
      "Delivery in 3-4 weeks",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Phone + headline */}
        <div className="mb-12 text-center">
          <div className="mb-5">
            <PhoneMockup />
          </div>

          <h2 className="mx-auto max-w-2xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl lg:leading-[1.05]">
            Your idea,{" "}
            <span className="italic bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
              live in weeks
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            No hidden fees. Pick a plan and let's start building together.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-blue-500/50 bg-background shadow-xl shadow-blue-500/10"
                  : "border-border/40 bg-background/60 hover:border-border/80 hover:bg-background/80"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold tracking-widest text-white uppercase">
                    Most Popular
                  </div>
                </div>
              )}

              <p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {plan.name}
              </p>

              <div className="mb-1 flex items-end gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="mb-2 text-sm text-muted-foreground">
                  /project
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <div className="mb-6 h-px w-full bg-border/50" />

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-blue-500/15 text-blue-500"
                          : "bg-foreground/8 text-foreground"
                      }`}
                    >
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-foreground/75 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="https://cal.com/unain/meeting" target="_blank">
                <Button
                  className={`h-11 w-full rounded-full text-sm font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-blue-500 text-white hover:bg-blue-600 border-0"
                      : "hover:bg-foreground/5"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
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