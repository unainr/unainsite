import { ServicesView } from '@/modules/services/ui/view/services-view'
import type { Metadata } from "next";


const ServicesPage = () => {
  return (
    <div>
        <ServicesView />
    </div>
  )
}

export default ServicesPage

export const metadata: Metadata = {
  metadataBase: new URL("https://unainr.vercel.app"),
  title: "Services | Muhammad Unain — Web & AI Development",
  description:
    "Hire Muhammad Unain for full stack web development, AI integration, SaaS builds, and API development. Specializing in Next.js, TypeScript, and LLM-powered applications.",
  keywords: [
    "Hire Full Stack Developer",
    "Web Development Services Pakistan",
    "AI Integration Services",
    "Next.js Development",
    "SaaS Development",
    "API Development",
    "Freelance Developer Karachi",
    "LLM Integration",
    "Custom Web App Development",
    "TypeScript Developer for Hire",
  ],
  authors: [{ name: "Muhammad Unain" }],
  creator: "Muhammad Unain",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unainr.vercel.app/services",
    title: "Services | Muhammad Unain — Web & AI Development",
    description:
      "Full stack web development, AI integration, and SaaS product builds. Let's turn your idea into a production-ready application.",
    siteName: "Muhammad Unain Portfolio",
    images: [{ url: "/fine1.png", width: 1200, height: 630, alt: "Muhammad Unain Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Muhammad Unain — Web & AI Development",
    description:
      "Full stack development, AI integration, and SaaS builds. Available for freelance projects.",
    images: ["/fine.png"],
    creator: "@unainr",
  },
  alternates: { canonical: "https://unainr.vercel.app/services" },
  category: "technology",
};