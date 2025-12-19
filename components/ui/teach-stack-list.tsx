"use client"

import type React from "react"

import { cn } from "@/lib/utils"

import { AnimatedList } from "./animated-list"
import { techStack } from "@/constants/data"

interface TechItem {
  name: string
  category: string
  icon: React.ReactNode
  color: string
}

const techStackWithColors: TechItem[] = techStack.map((tech, index) => ({
  ...tech,
  color: [
    "#00C9A7", // Next.js
    "#61DAFB", // React
    "#3178C6", // TypeScript
    "#06B6D4", // Tailwind
    "#339933", // Node.js
    "#47A248", // MongoDB
    "#336791", // PostgreSQL
    "#2496ED", // Docker
    "#000000", // Vercel
    "#FF6B6B", // OpenAI
    "#4285F4", // Gemini
  ][index % 11],
}))

const notifications = Array.from({ length: 3 }, () => techStackWithColors).flat()

const TechNotification = ({ name, category, icon, color }: TechItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto  max-w-md cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <div className="text-white text-lg">{icon}</div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{category}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">Technology Stack</p>
        </div>
      </div>
    </figure>
  )
}

export function TechStackAnimatedList({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <TechNotification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background"></div>
    </div>
  )
}
