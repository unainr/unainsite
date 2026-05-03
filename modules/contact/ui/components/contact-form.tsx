"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Calendar,
  Clock,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "unain.dev@outlook.com",
    href: "mailto:unain.dev@outlook.com",
    gradient: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/30 hover:shadow-blue-500/50",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 308 9469544",
    href: "tel:+923089469544",
    gradient: "from-cyan-500 to-cyan-600",
    shadow: "shadow-cyan-500/30 hover:shadow-cyan-500/50",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    gradient: "from-teal-500 to-teal-600",
    shadow: "shadow-teal-500/30 hover:shadow-teal-500/50",
  },
];

const perks = [
  "Free 30-minute discovery call",
  "No commitment required",
  "Get a project estimate",
  "Available for remote work worldwide",
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-white dark:bg-zinc-950">
      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-125 h-125 bg-blue-500/8 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-125 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl tracking-tighter uppercase sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Get In{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #06b6d4, #14b8a6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ── Left: contact info cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactCards.map(({ icon: Icon, label, value, href, gradient, shadow }) => (
              <div
                key={label}
                className={`group relative bg-linear-to-br ${gradient} rounded-2xl p-5 text-white overflow-hidden shadow-lg ${shadow} transition-all duration-300`}
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500" />
              </span>
              <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                Available for new projects
              </p>
            </div>
          </motion.div>

          {/* ── Right: Book a Call CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-8 sm:p-10">

              {/* Inner glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative">
                {/* Top label */}
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule a Meeting
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-3">
                  Book a Free{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Discovery Call
                  </span>
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8 max-w-lg">
                  Skip the back-and-forth emails. Pick a time that works for you
                  and let's have a focused 30-minute conversation about your
                  project, goals, and how I can help.
                </p>

                {/* Perks */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href="https://cal.com/unain/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Book a Call — It's Free
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Subtext below button */}
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    30 minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Google Meet / Zoom
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}