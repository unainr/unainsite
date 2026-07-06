"use client";

import React, { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence, type Transition } from "motion/react";
import { List, LayoutGrid, Layers, ArrowUpRight, FolderGit2, LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Project {
  _id: string;
  name: string;
  description: string;
  projectLink: string;
  images: string[];
  icon: LucideIcon;
}

export type ViewMode = "list" | "card" | "pack";

// ─── Constants ────────────────────────────────────────────────────────────

const S: Transition = { type: "spring", stiffness: 400, damping: 32, mass: 0.8 };
const S_TAB: Transition = { type: "spring", stiffness: 500, damping: 35, mass: 0.6 };
const S_LINK: Transition = { type: "spring", stiffness: 500, damping: 30 };
const FADE: Transition = { duration: 0.12, ease: [0.25, 0.1, 0.25, 1] };

const GPU: React.CSSProperties = { willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" };
const RESET = { rotate: 0, x: 0, y: 0 };

const TABS: { mode: ViewMode; icon: LucideIcon }[] = [
  { mode: "list", icon: List },
  { mode: "card", icon: LayoutGrid },
];

// ─── View-mode class maps ───────────────────────────────────────────────────

const GRID_CLS: Record<ViewMode, string> = {
  list: "flex flex-col gap-2",
  card: "grid grid-cols-1 sm:grid-cols-2 gap-3",
  pack: "h-48 sm:h-64 flex items-center justify-center mt-4",
};

const CARD_CLS: Record<ViewMode, string> = {
  list: "flex-row gap-3 sm:gap-4 w-full rounded-lg",
  card: "flex-col gap-3 w-full items-start rounded-xl",
  pack: "absolute w-36 h-36 sm:w-56 sm:h-56 items-center justify-center rounded-xl",
};

const IMG_CLS: Record<ViewMode, string> = {
  list: "w-14 h-14 sm:w-16 sm:h-16 rounded-lg border border-border",
  card: "w-full aspect-square rounded-lg border border-border shadow-sm",
  pack: "w-full h-full rounded-lg border border-border shadow-lg",
};

const WRAP_CLS: Record<ViewMode, string> = {
  list: "p-2",
  card: "p-3",
  pack: "py-4",
};

// ─── Hook: track viewport for pack-view spacing ─────────────────────────────

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

// ─── Sub-components ─────────────────────────────────────────────────────────

const ViewTab = React.memo(function ViewTab({
  active,
  onClick,
  icon: Icon,
}: {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
}) {
  return (
     <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex cursor-pointer items-center px-2 sm:px-2.5 py-1.5 rounded-md outline-none transition-colors duration-150",
        active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {active && (
        <motion.span
          layoutId="project-layout-active-tab"
          className="absolute inset-0 rounded-md bg-linear-to-r from-blue-500 to-cyan-500 shadow-sm"
          transition={S_TAB}
          style={GPU}
        />
      )}
      <Icon size={14} strokeWidth={2} className={cn("relative z-10 transition-transform duration-200", active && "scale-110")} />
    </button>
  );
});

const ProjectInfo = React.memo(function ProjectInfo({ project, view }: { project: Project; view: ViewMode }) {
  const isCard = view === "card";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
      transition={FADE}
      className={cn("flex flex-1 items-center justify-between min-w-0 gap-2", isCard ? "w-full px-1 pb-1" : "px-0")}
    >
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center justify-start flex-wrap gap-y-1">
          <h3 className="font-medium text-sm sm:text-[15px] leading-tight truncate text-foreground max-w-[65%] sm:max-w-none">
            {project.name}
          </h3>
          <span className="flex items-center gap-1 px-1 rounded-sm bg-muted/50 border border-border text-primary text-[10px] font-bold shrink-0 ml-2">
            <FolderGit2 size={10} className="text-primary/70" />
            Live
          </span>
        </div>
        <span className="line-clamp-2  text-sm text-muted-foreground">
          {project.description}
        </span>
      </div>

      <motion.div whileTap={{ scale: 0.9 }} transition={S_LINK} className="shrink-0">
        <Link
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "shrink-0 flex items-center justify-center border transition-all duration-200 outline-none rounded-sm bg-card border-border text-foreground/80 hover:border-primary/40 hover:text-primary",
            isCard ? "size-6" : "size-7 mr-1 sm:mr-2"
          )}
        >
          <ArrowUpRight size={isCard ? 14 : 16} strokeWidth={2.5} />
        </Link>
      </motion.div>
    </motion.div>
  );
});

// ─── Main component ─────────────────────────────────────────────────────────

export interface ProjectAnimatedLayoutProps {
  projects: Project[];
  defaultView?: ViewMode;
  heading?: string;
  count?: number;
  startCount?: number;
  className?: string;
}

export function ProjectAnimatedLayout({
  projects,
  defaultView = "card",
  heading = "My Projects",
  count,
  startCount,
  className,
}: ProjectAnimatedLayoutProps) {
  const [view, setView] = useState<ViewMode>(defaultView);
  const isMobile = useIsMobile();
  const packX = isMobile ? 12 : 22;

  const items = projects.slice(startCount, count);
  const len = items.length;

  return (
    <div className={cn("w-full max-w-5/6 mx-auto p-4 sm:p-6 md:p-8 font-sans select-none", className)}>
      <div className="w-full flex flex-col items-stretch sm:items-end gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-3 sm:gap-5">
          <div className="my-2 sm:my-4 tracking-tighter uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
            Recent{" "}
            <span className="italic bg-clip-text pr-1 text-transparent bg-linear-to-r from-blue-500 to-cyan-500">
              Builds
            </span>
          </div>
          <nav className="flex p-1 bg-muted rounded-lg w-fit border border-border self-start sm:self-auto">
            {TABS.map((t) => (
              <ViewTab key={t.mode} active={view === t.mode} onClick={() => setView(t.mode)} icon={t.icon} />
            ))}
          </nav>
        </div>

        <div
          className={cn(
            "relative w-full flex flex-col items-center border border-border rounded-xl bg-muted/60",
            WRAP_CLS[view]
          )}
        >
          <LayoutGroup>
            <motion.div layout transition={S} style={GPU} className={cn("w-full relative", GRID_CLS[view])}>
              {items.map((project, i) => (
                <motion.div
                  key={project._id}
                  layout
                  transition={S}
                  style={{ ...GPU, zIndex: view === "pack" ? len - i : 1 }}
                  animate={view === "pack" ? { rotate: 0, x: (i - (len - 1) / 2) * packX } : RESET}
                  className={cn("relative flex items-center bg-background p-1.5", CARD_CLS[view])}
                >
                  <motion.div layout transition={S} className={cn("relative overflow-hidden shrink-0 bg-background", IMG_CLS[view])}>
                    <motion.img
                      layout
                      transition={S}
                      src={project.images[0] ?? "/placeholder.png"}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover block"
                    />
                  </motion.div>
                  <AnimatePresence mode="popLayout" initial={false}>
                    {view !== "pack" && <ProjectInfo key={`${project._id}-info`} project={project} view={view} />}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
}

export default ProjectAnimatedLayout;