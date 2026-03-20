import { words } from '@/constants'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import { FlipWords } from './flip-text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const TextFlip = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4 lg:my-5 sm:my-0">
        <div className="flex flex-col items-center justify-center gap-6 text-center max-w-6xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs sm:text-sm font-medium text-zinc-200 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
        Full-Stack Developer & AI Specialist
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50 max-w-sm sm:max-w-2xl lg:max-w-4xl leading-tight">
        We Build Scalable AI-Powered Web Apps for{" "}
        <FlipWords words={words} />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-sm sm:max-w-2xl leading-relaxed">
        Smart. Scalable. Stunning. We bring your ideas to life with AI-powered
        web experiences that stand out.
      </motion.p>

      <AnimatePresence initial={false}>
        <motion.div className="inline-block relative mt-2 sm:mt-4">
          <motion.div
            style={{ borderRadius: "100px" }}
            layout
            layoutId="cta-card"
            className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500"
          />
          <Link href={'/project'}>
            <Button className="relative rounded-full flex items-center gap-2 h-11 sm:h-14 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white tracking-wide hover:opacity-90 transition-opacity">
              Explore My Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </motion.div>
      </AnimatePresence>

    </div>
    </div>
  )
}