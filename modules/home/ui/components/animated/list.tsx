import { AnimatedList } from "./animated-list"
import Image from "next/image"
interface NotificationData {
  id: number
  name: string
  message: string
  timeAgo: string
  icon: string
}

type NotificationProps = {
  notification: NotificationData
}



export function Notification({ notification }: NotificationProps) {
  return (
    <div className="flex w-full max-w-80.5 items-center justify-between gap-4 rounded-2xl border border-neutral-50 bg-white p-3.5 shadow-xl shadow-neutral-200 dark:border-neutral-900 dark:bg-neutral-950 dark:shadow-neutral-950/70">
      <Image
      width={800}
      height={800}
        src={notification.icon}
        alt={notification.name}
        className="h-10 w-10"
      />
      <div className="flex w-full flex-col">
        <div className="flex w-full items-start justify-between">
          <span className="text-sm font-medium">{notification.name}</span>
          <span className="text-xs text-neutral-400">
            {notification.timeAgo}
          </span>
        </div>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {notification.message}
        </span>
      </div>
    </div>
  )
}

export function AnimatedListDemo() {
 const notifications: NotificationData[] = [
  {
    id: 1,
    name: "Docker",
    message: "Your container is ready",
    timeAgo: "Just now",
    icon: "/icons/docker.svg",
  },
  {
    id: 2,
    name: "Figma",
    message: "Fresh design just dropped",
    timeAgo: "Moments ago",
    icon: "/icons/figma.svg",
  },
  {
    id: 3,
    name: "Appwrite",
    message: "New files uploaded safely",
    timeAgo: "Recently",
    icon: "/icons/appwrite.svg",
  },
  {
    id: 4,
    name: "Vite",
    message: "Your app feels lightning fast",
    timeAgo: "Hot update",
    icon: "/icons/vite.svg",
  },
  {
    id: 5,
    name: "Vercel",
    message: "Your site is live worldwide",
    timeAgo: "Trending",
    icon: "/icons/vercel.svg",
  },
  {
    id: 6,
    name: "Node.js",
    message: "Server is running smooth",
    timeAgo: "Live",
    icon: "/icons/node.svg",
  },
  {
    id: 7,
    name: "PostgreSQL",
    message: "Data saved without issues",
    timeAgo: "Updated",
    icon: "/icons/postgressql.svg",
  },
  {
    id: 8,
    name: "Gemini AI",
    message: "AI response feels smarter",
    timeAgo: "New",
    icon: "/icons/gemini.svg",
  },
  {
    id: 9,
    name: "TypeScript",
    message: "Types compiled with no errors",
    timeAgo: "Just added",
    icon: "/icons/t.svg",
  },
  {
    id: 10,
    name: "React",
    message: "Components rendered instantly",
    timeAgo: "Active",
    icon: "/icons/react.svg",
  },
  {
    id: 11,
    name: "OpenAI",
    message: "Model response generated",
    timeAgo: "Processing",
    icon: "/icons/openai.svg",
  },
  {
    id: 12,
    name: "Next.js",
    message: "Pages load instantly now",
    timeAgo: "Fresh",
    icon: "/icons/nextjs.png",
  },
];


  return (
    <div className="h-100 w-full  ">
      <AnimatedList
        stackGap={20}
        columnGap={85}
        scaleFactor={0.04}
        scrollDownDuration={5}
        formationDuration={1}
      >
        {notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </AnimatedList>
    </div>
  )
}
