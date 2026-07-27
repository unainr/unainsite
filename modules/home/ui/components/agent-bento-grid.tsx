"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Database,
  TerminalWindow,
  Code,
  FileText,
  SlackLogo,
  NotionLogo,
  Globe,
  Sparkle,
  Play,
  GitBranch,
  Flag,
  ShieldCheck,
  ChatCircle,
  CircleNotch,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

/* ──────────────────────────────────────────────────────
   Cards below map 1:1 to real shipped features:
   - Workflow Nodes      → seerforge's Start/Agent/Condition/HTTP/End graph
   - Live Canvas         → seerforge's real-time multiplayer cursors
   - Test-in-Canvas Chat → seerforge's live test panel with tool calls
   - Tenant Isolation    → seerforge's org-scoped, fail-closed data model
   - RAG Retrieval       → your retrieval-augmented chatbot project
   Swap the placeholder names/numbers for your real ones before shipping.
────────────────────────────────────────────────────── */

interface FeatCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function FeatCard({ title, description, children, className = "" }: FeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col gap-2 overflow-hidden rounded-2xl p-4",
        "bg-card border border-border shadow-sm",
        "hover:shadow-xl hover:-translate-y-1 hover:border-foreground/20",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      <div className="z-10 flex flex-col gap-1.5">
        <h3 className="font-semibold text-foreground text-sm tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed max-w-[90%]">{description}</p>
      </div>
      <div className="relative mt-2 flex-1 w-full rounded-[14px] overflow-hidden border border-border/50 bg-background/50">
        {children}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Card1 – Agent Workflow Graph
   Start → Agent → Condition → HTTP Request / End
   (matches seerforge's real six node types)
   ───────────────────────────────────────────── */

type ActiveStep = "start" | "agent" | "condition" | "http" | "end";

const VW = 320;
const VH = 240;

interface NodeConfig {
  id: string;
  x: number;
  y: number;
  icon: any;
  label: string;
}

const NODES: NodeConfig[] = [
  { id: "start", x: 50, y: 120, icon: Play, label: "START" },
  { id: "agent", x: 125, y: 120, icon: Brain, label: "AGENT" },
  { id: "condition", x: 200, y: 120, icon: GitBranch, label: "CONDITION" },
  { id: "http", x: 280, y: 50, icon: Globe, label: "HTTP" },
  { id: "end", x: 280, y: 190, icon: Flag, label: "END" },
];

const PATHS = [
  { id: "start-agent", d: "M 78 120 L 97 120", activeSteps: ["agent"], color: "text-cyan-500 dark:text-cyan-400" },
  { id: "agent-condition", d: "M 153 120 L 172 120", activeSteps: ["condition"], color: "text-blue-500 dark:text-blue-400" },
  { id: "condition-http", d: "M 200 92 L 200 50 L 252 50", activeSteps: ["http"], color: "text-cyan-500 dark:text-cyan-400" },
  { id: "condition-end", d: "M 200 148 L 200 190 L 252 190", activeSteps: ["end"], color: "text-blue-500 dark:text-blue-400" },
];

const NODE_COLORS: Record<string, { buttonBg: string; buttonBorder: string }> = {
  start: { buttonBg: "bg-linear-to-b from-cyan-400 to-cyan-600", buttonBorder: "border-cyan-600" },
  agent: { buttonBg: "bg-linear-to-b from-blue-500 to-cyan-500", buttonBorder: "border-blue-600" },
  condition: { buttonBg: "bg-linear-to-b from-blue-400 to-blue-600", buttonBorder: "border-blue-600" },
  http: { buttonBg: "bg-linear-to-b from-cyan-400 to-cyan-600", buttonBorder: "border-cyan-600" },
  end: { buttonBg: "bg-linear-to-b from-blue-400 to-blue-600", buttonBorder: "border-blue-600" },
};

export function WorkflowNodesCard() {
  const [step, setStep] = useState<ActiveStep>("start");

  useEffect(() => {
    const steps: ActiveStep[] = ["start", "agent", "condition", "http", "end"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % steps.length;
      setStep(steps[idx]);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  const isNodeActive = (nodeId: string) => nodeId === step;

  return (
    <div className="w-full h-full relative overflow-hidden select-none bg-muted/30 rounded-xl flex items-center justify-center p-2">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="wf-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.75" fill="currentColor" className="text-border/60" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wf-grid)" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <path d="M 78 120 L 97 120" fill="none" stroke="currentColor" className="text-border/80" strokeWidth="1" />
        <path d="M 153 120 L 172 120" fill="none" stroke="currentColor" className="text-border/80" strokeWidth="1" />
        <path d="M 200 92 L 200 50 L 252 50" fill="none" stroke="currentColor" className="text-border/80" strokeWidth="1" />
        <path d="M 200 148 L 200 190 L 252 190" fill="none" stroke="currentColor" className="text-border/80" strokeWidth="1" />

        {PATHS.map((p) => {
          const isActive = p.activeSteps.includes(step);
          if (!isActive) return null;
          return (
            <g key={p.id}>
              <motion.path
                d={p.d} fill="none" stroke="currentColor" className={p.color}
                strokeWidth="3.5" strokeOpacity="0.2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.path
                d={p.d} fill="none" stroke="currentColor" className={p.color}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </g>
          );
        })}

        {NODES.map((node) => {
          const isActive = isNodeActive(node.id);
          const c = NODE_COLORS[node.id];
          const w = 56, h = 56;
          return (
            <foreignObject
              key={node.id}
              x={node.x - w / 2} y={node.y - h / 2}
              width={w} height={h}
              className="overflow-visible"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className={cn(
                    "w-full h-full rounded-[14px] border flex flex-col items-center justify-center text-white transition-transform duration-300",
                    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_2px_4px_0_rgba(0,0,0,0.15)]",
                    c.buttonBg, c.buttonBorder,
                    isActive && "scale-110"
                  )}
                >
                  <node.icon className="w-5 h-5 mb-0.5" weight="fill" />
                  <span className="text-[8px] font-mono font-bold tracking-wider select-none">{node.label}</span>
                </div>
              </div>
            </foreignObject>
          );
        })}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card2 – Live Collaborative Canvas
   Real-time multiplayer cursors on the same graph
   ───────────────────────────────────────────── */

const COLLABORATORS = [
  { name: "Klein", color: "#22d3ee", path: [{ x: 20, y: 30 }, { x: 60, y: 55 }, { x: 40, y: 80 }, { x: 20, y: 30 }] },
  { name: "Theo", color: "#3b82f6", path: [{ x: 80, y: 70 }, { x: 55, y: 40 }, { x: 85, y: 20 }, { x: 80, y: 70 }] },
  { name: "Amanises", color: "#a78bfa", path: [{ x: 50, y: 15 }, { x: 25, y: 55 }, { x: 65, y: 65 }, { x: 50, y: 15 }] },
];

export function CollabCanvasCard() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-muted/30 rounded-xl">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="collab-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.75" fill="currentColor" className="text-border/60" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#collab-grid)" />
      </svg>

      {/* static workflow nodes in the background, dimmed */}
      <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-25">
        {[Play, Brain, GitBranch].map((Icon, i) => (
          <div key={i} className="w-9 h-9 rounded-[10px] border border-border bg-background flex items-center justify-center">
            <Icon className="w-4 h-4 text-muted-foreground" weight="fill" />
          </div>
        ))}
      </div>

      {/* animated collaborator cursors */}
      {COLLABORATORS.map((c, i) => (
        <motion.div
          key={c.name}
          className="absolute flex flex-col items-start gap-0.5"
          style={{ left: 0, top: 0 }}
          animate={{
            left: c.path.map((p) => `${p.x}%`),
            top: c.path.map((p) => `${p.y}%`),
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" style={{ color: c.color }}>
            <path d="M2 1 L2 14 L5.5 10.8 L7.8 15 L9.6 14 L7.3 9.8 L12 9.8 Z" fill="currentColor" />
          </svg>
          <span
            className="text-[8px] font-mono font-semibold px-1.5 py-0.5 rounded-md text-white whitespace-nowrap shadow-sm"
            style={{ backgroundColor: c.color }}
          >
            {c.name}
          </span>
        </motion.div>
      ))}

      <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
        <div className="relative flex items-center justify-center w-2 h-2">
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-400/40"
            animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </div>
        <span className="text-[8px] font-mono text-muted-foreground font-medium tracking-wide">3 editing now</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card3 – Test-in-Canvas Chat
   Live streamed test panel with visible tool calls
   ───────────────────────────────────────────── */

type ChatTurn =
  | { role: "user"; text: string }
  | { role: "tool"; text: string }
  | { role: "assistant"; text: string };

const CHAT_SCRIPT: ChatTurn[] = [
  { role: "user", text: "Where's my order #4021?" },
  { role: "tool", text: "http_request → orders/4021" },
  { role: "assistant", text: "Shipped yesterday, arriving Thursday." },
];

export function TestChatCard() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= CHAT_SCRIPT.length ? 0 : prev + 1));
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-end gap-2 p-3 bg-muted/20 rounded-xl">
      <AnimatePresence mode="popLayout">
        {CHAT_SCRIPT.slice(0, visibleCount).map((turn, i) => {
          if (turn.role === "tool") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="self-start flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/80 px-2 py-1"
              >
                <TerminalWindow className="w-3 h-3 text-cyan-500" weight="fill" />
                <span className="text-[8px] font-mono text-muted-foreground">{turn.text}</span>
              </motion.div>
            );
          }
          const isUser = turn.role === "user";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={cn(
                "max-w-[80%] rounded-2xl px-3 py-1.5 text-[10px] leading-snug",
                isUser
                  ? "self-end bg-linear-to-b from-blue-500 to-cyan-500 text-white"
                  : "self-start bg-background border border-border text-foreground"
              )}
            >
              {turn.text}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {visibleCount < CHAT_SCRIPT.length && (
        <div className="self-start flex items-center gap-1.5 text-muted-foreground/60 pl-1">
          <CircleNotch className="w-3 h-3 animate-spin" />
          <span className="text-[8px] font-mono">running workflow…</span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card4 – Tenant Isolation
   Every workspace scoped to its org, fails closed
   ───────────────────────────────────────────── */

const ORGS = [
  { name: "Org A", color: "text-cyan-500", ring: "border-cyan-500/50", bg: "bg-cyan-500/10" },
  { name: "Org B", color: "text-blue-500", ring: "border-blue-500/50", bg: "bg-blue-500/10" },
  { name: "Org C", color: "text-violet-500", ring: "border-violet-500/50", bg: "bg-violet-500/10" },
];

export function TenantIsolationCard() {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-3 p-3">
      <div className="grid grid-cols-3 gap-3 flex-1">
        {ORGS.map((org, i) => (
          <div
            key={org.name}
            className={cn(
              "relative rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 p-2",
              org.ring, org.bg
            )}
          >
            <ShieldCheck className={cn("w-5 h-5", org.color)} weight="fill" />
            <span className="text-[9px] font-mono font-semibold text-foreground">{org.name}</span>
            <div className="flex gap-1">
              {[0, 1].map((j) => (
                <motion.div
                  key={j}
                  className={cn("w-2 h-2 rounded-full", org.color.replace("text-", "bg-"))}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 + j * 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 justify-center border-t border-border/40 pt-2">
        <ShieldCheck className="w-3 h-3 text-muted-foreground" />
        <span className="text-[8px] font-mono text-muted-foreground tracking-wide">
          scoped at the database layer · fails closed
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card5 – RAG Retrieval
   Semantic search across your chatbot's sources
   (swap namespace names + hit counts for your real ones)
   ───────────────────────────────────────────── */

const NS_ICONS: Record<string, React.ElementType> = {
  codebase: Code,
  docs: FileText,
  slack: SlackLogo,
  notion: NotionLogo,
};

const NS_COLORS: Record<string, { bar: string; dot: string; badge: string; buttonBg: string; buttonBorder: string }> = {
  codebase: { bar: "from-blue-500 to-blue-400", dot: "bg-blue-500", badge: "bg-blue-500/15 text-blue-400", buttonBg: "bg-linear-to-b from-blue-400 to-blue-600", buttonBorder: "border-blue-600" },
  docs: { bar: "from-cyan-500 to-cyan-400", dot: "bg-cyan-500", badge: "bg-cyan-500/15 text-cyan-400", buttonBg: "bg-linear-to-b from-cyan-400 to-cyan-600", buttonBorder: "border-cyan-600" },
  slack: { bar: "from-blue-400 to-cyan-400", dot: "bg-cyan-400", badge: "bg-cyan-500/15 text-cyan-300", buttonBg: "bg-linear-to-b from-blue-400 to-cyan-500", buttonBorder: "border-cyan-600" },
  notion: { bar: "from-amber-500 to-amber-400", dot: "bg-amber-500", badge: "bg-amber-500/15 text-amber-400", buttonBg: "bg-linear-to-b from-amber-400 to-amber-600", buttonBorder: "border-amber-600" },
};

const RETRIEVAL_QUERIES = [
  { ns: "docs", q: "refund policy — 30 day window", t: "0.3s" },
  { ns: "codebase", q: "checkout flow error handling", t: "1.1s" },
  { ns: "slack", q: "#support pricing question thread", t: "2.4s" },
  { ns: "notion", q: "onboarding FAQ — page 2", t: "3.9s" },
];

export function RagRetrievalCard() {
  const namespaces = [
    { name: "docs", hits: 218, fill: 72 },
    { name: "codebase", hits: 96, fill: 34 },
    { name: "slack", hits: 61, fill: 22 },
    { name: "notion", hits: 40, fill: 15 },
  ];

  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick((p) => (p + 1) % RETRIEVAL_QUERIES.length), 2000);
    return () => clearInterval(interval);
  }, []);

  const activeNs = RETRIEVAL_QUERIES[tick].ns;
  const recentQueries = [0, 1, 2, 3].map(
    (offset) => RETRIEVAL_QUERIES[(tick - offset + RETRIEVAL_QUERIES.length) % RETRIEVAL_QUERIES.length]
  );

  return (
    <div className="w-full h-full flex gap-5 py-2 px-3">
      <div className="flex-1 flex flex-col gap-0 min-w-0 pr-2">
        <p className="text-[8px] font-mono uppercase tracking-widest text-muted-foreground mb-3">Sources</p>
        <div className="flex flex-col gap-3 flex-1">
          {namespaces.map((ns, i) => {
            const c = NS_COLORS[ns.name];
            const isActive = ns.name === activeNs;
            const Icon = (NS_ICONS[ns.name] || Database) as React.ComponentType<{ size?: number; weight?: string; className?: string }>;
            return (
              <div key={ns.name} className="flex items-center gap-3 group relative">
                <div
                  className={cn(
                    "relative flex shrink-0 items-center justify-center w-8 h-8 rounded-[10px] border transition-all duration-500",
                    isActive
                      ? `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_2px_4px_0_rgba(0,0,0,0.1)] text-white ${c.buttonBg} ${c.buttonBorder} scale-105`
                      : "bg-background border-border/50 text-muted-foreground shadow-sm"
                  )}
                >
                  <Icon size={14} weight={isActive ? "fill" : "regular"} className="relative z-10" />
                </div>
                <span className={cn("text-[9px] font-mono w-14 shrink-0 transition-colors duration-400", isActive ? "text-foreground font-semibold" : "text-muted-foreground")}>
                  {ns.name}
                </span>
                <div className="flex-1 h-1.5 bg-muted/30 rounded-full overflow-hidden relative shadow-inner">
                  <motion.div
                    className={cn("absolute left-0 top-0 bottom-0 rounded-full bg-linear-to-r", c.bar)}
                    initial={{ width: "0%" }}
                    animate={{ width: `${ns.fill}%`, opacity: isActive ? 1 : 0.3 }}
                    transition={{ width: { duration: 1.2, delay: i * 0.1, type: "spring", bounce: 0.2 }, opacity: { duration: 0.4 } }}
                  />
                </div>
                <span className={cn("text-[9px] font-mono font-medium w-8 text-right", isActive ? "text-foreground" : "text-muted-foreground")}>
                  {ns.hits}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-px bg-border/30 self-stretch shrink-0" />

      <div className="w-40 shrink-0 flex flex-col gap-0">
        <p className="text-[8px] font-mono uppercase tracking-widest text-muted-foreground mb-2.5">Retrieval Log</p>
        <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
          {recentQueries.map((q, qi) => {
            const c = NS_COLORS[q.ns];
            return (
              <motion.div
                key={`${q.ns}-${q.q}-${qi}`}
                className="rounded-xl border border-border/40 bg-muted/20 px-2.5 py-2"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: qi === 0 ? 1 : qi === 1 ? 0.8 : qi === 2 ? 0.5 : 0.25, y: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35, delay: qi * 0.05 }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className={cn("text-[6.5px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded-md", c.badge)}>{q.ns}</span>
                  <span className="text-[7px] font-mono text-muted-foreground/50 ml-auto tabular-nums">{q.t}</span>
                </div>
                <p className="text-[8px] text-foreground/75 leading-tight font-mono truncate">{q.q}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section — Features
───────────────────────────────────────────── */
const CARDS = [
  {
    title: "Live Collaborative Canvas",
    description: "Everyone on the team edits the same workflow, live — cursors and all.",
    visual: <CollabCanvasCard />,
    colSpan: "lg:col-span-1",
    height: "h-[260px]",
  },
  {
    title: "Agent Workflow Graph",
    description: "Start, Agent, Condition, HTTP Request, End — every run is one of these nodes.",
    visual: <WorkflowNodesCard />,
    colSpan: "lg:col-span-1",
    height: "h-[260px]",
  },
  {
    title: "Test-in-Canvas Chat",
    description: "Chat with the workflow directly on the canvas, tool calls visible inline.",
    visual: <TestChatCard />,
    colSpan: "lg:col-span-1",
    height: "h-[260px]",
  },
  {
    title: "Tenant Isolation",
    description: "Every workspace is scoped to its org at the database layer, and fails closed.",
    visual: <TenantIsolationCard />,
    colSpan: "lg:col-span-2",
    height: "h-[260px]",
  },
  {
    title: "RAG Retrieval",
    description: "Semantic search across docs, code, and chat history for grounded answers.",
    visual: <RagRetrievalCard />,
    colSpan: "lg:col-span-1",
    height: "h-[260px]",
  },
];

export interface FeaturesSectionProps {
  className?: string;
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section id="features" className={cn("w-full max-w-5/6 mx-auto p-4 sm:p-6 md:p-8", className)}>
      <div className="flex flex-col items-center text-center gap-3 mb-8 sm:mb-10">
        
        <h2 className="tracking-tighter uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          Built-In{" "}
          <span className="italic bg-clip-text pr-1 text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
            Features
          </span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
          Real features from real projects multi-tenant workspaces, live collaborative
          canvases, and semantic retrieval, shipped and running today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CARDS.map((card, idx) => (
          <FeatCard
            key={idx}
            title={card.title}
            description={card.description}
            className={cn(card.colSpan, card.height)}
          >
            {card.visual}
          </FeatCard>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;