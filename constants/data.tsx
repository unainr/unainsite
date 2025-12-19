import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVercel,
} from "react-icons/si"
import { Bot } from "lucide-react"

export const techStack = [
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
  {
    name: "React",
    category: "Frontend",
    icon: <SiReact className="w-5 h-5" />,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: <SiTypescript className="w-5 h-5" />,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: <SiTailwindcss className="w-5 h-5" />,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs className="w-5 h-5" />,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="w-5 h-5" />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql className="w-5 h-5" />,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <SiDocker className="w-5 h-5" />,
  },
  {
    name: "Vercel",
    category: "Deployment",
    icon: <SiVercel className="w-5 h-5" />,
  },
  { name: "OpenAI API", category: "AI", icon: <Bot className="w-5 h-5" /> },
  { name: "Google Gemini", category: "AI", icon: <Bot className="w-5 h-5" /> },
]
