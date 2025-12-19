
import type React from "react"
import {
  Cpu,
  Sparkles,
  Rocket,
  Layers,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import { Warp } from "@paper-design/shaders-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Modern Web Experiences",
    description:
      "Building elegant, high-performance UIs with Next.js, Tailwind, and Shadcn UI — crafted for beauty and speed.",
    icon: <Sparkles className="w-10 h-10 dark:text-white text-white" />,
  },
  {
    title: "AI-Powered Intelligence",
    description:
      "Integrating Gemini, Vercel AI SDK, and LLMs to create smart assistants, analyzers, and GenAI-driven tools.",
    icon: <Cpu className="w-10 h-10 dark:text-white text-white" />,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connected workflows powered by TRPC, Sanity, ImageKit, and server actions — smooth, scalable, and real-time.",
    icon: <Workflow className="w-10 h-10 dark:text-white text-white" />,
  },
  {
    title: "Performance & Scalability",
    description:
      "Optimized rendering with SSR, ISR, and Framer Motion animations for a frictionless, fast user experience.",
    icon: <Rocket className="w-10 h-10 dark:text-white text-white" />,
  },
  {
    title: "Clean & Customizable UI",
    description:
      "Glassmorphic visuals, responsive layouts, and vibrant interactions that align with your brand and vision.",
    icon: <Layers className="w-10 h-10 dark:text-white text-white" />,
  },
  {
    title: "Future-Ready Stack",
    description:
      "Developed with TypeScript, React 19, and modern AI frameworks — built to evolve with technology.",
    icon: <MonitorSmartphone className="w-10 h-10 dark:text-white text-white" />,
  },
];

export default  function FeaturesCards() {
  const getShaderConfig = (index: number) => {
    const configs:any = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots" as const,
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-linear-to-br from-gray-50 to-gray-100 dark:from-background dark:to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="my-4 text-5xl font-bold" >
							Building the{" "}
								<span className="bg-clip-text text-transparent  bg-linear-to-r from-blue-500 to-blue-400">
								 Modern Web
								</span>
							</div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I design and develop high-performance web experiences powered by modern frameworks, intelligent AI systems, and refined UI design built for speed, scalability, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-80">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/80 border border-white/20 dark:border-white/10">
                  <div className="mb-6 filter drop-shadow-lg">{feature.icon}</div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>

                  <p className="leading-relaxed grow text-gray-100 font-medium">{feature.description}</p>

                  {/* <div className="mt-6 flex items-center text-sm font-bold text-gray-200">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
