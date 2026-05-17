import { AboutView } from '@/modules/about/ui/view/about-view'
import type { Metadata } from "next";

const AboutPage = () => {
  return (
    <>
        <AboutView />
    </>
  )
}

export default AboutPage

export const metadata: Metadata = {
  metadataBase: new URL("https://unainr.vercel.app"),
  title: "About | Muhammad Unain — Full Stack & AI Developer",
  description:
    "Learn about Muhammad Unain — a Full Stack & AI developer from Pakistan building scalable web apps, SaaS products, and AI-powered solutions with Next.js, TypeScript, and modern tooling.",
  keywords: [
    "About Muhammad Unain",
    "Full Stack Developer Pakistan",
    "Next.js Developer Karachi",
    "AI Developer Pakistan",
    "Software Engineer Portfolio",
    "TypeScript Developer",
    "React Developer",
  ],
  authors: [{ name: "Muhammad Unain" }],
  creator: "Muhammad Unain",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unainr.vercel.app/about",
    title: "About | Muhammad Unain — Full Stack & AI Developer",
    description:
      "Full Stack & AI developer from Pakistan. I build production-grade web applications, SaaS products, and AI-powered tools using Next.js, TypeScript, and cutting-edge LLMs.",
    siteName: "Muhammad Unain Portfolio",
    images: [{ url: "/fine1.png", width: 1200, height: 630, alt: "About Muhammad Unain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Muhammad Unain — Full Stack & AI Developer",
    description:
      "Full Stack & AI developer from Pakistan building modern web apps and AI-powered solutions.",
    images: ["/fine.png"],
    creator: "@unainr",
  },
  alternates: { canonical: "https://unainr.vercel.app/about" },
  category: "technology",
};