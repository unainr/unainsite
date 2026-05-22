import PageBanner from "@/components/page-banner"
import { TemplatesView } from "@/modules/templates/ui/view/templates-view"
import type { Metadata } from "next";

const TemplatestPage = () => {
  return (
    <>
    <PageBanner
            title="Templates"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Templates", href: "/templates" },
            ]}
          />
      <TemplatesView/>
    </>
  )
}

export default TemplatestPage


export const metadata: Metadata = {
  metadataBase: new URL("https://unainr.vercel.app"),
  title: "Templates | Muhammad Unain — Next.js & UI Starters",
  description:
    "Browse free and premium Next.js, TypeScript, and Tailwind CSS templates built by Muhammad Unain. Production-ready starters for SaaS, portfolios, landing pages, and more.",
  keywords: [
    "Next.js Templates",
    "TypeScript Starters",
    "Tailwind CSS Templates",
    "SaaS Starter Kit",
    "Portfolio Template",
    "Landing Page Template",
    "Free Web Templates",
    "React Templates",
    "UI Templates Pakistan",
    "shadcn Templates",
  ],
  authors: [{ name: "Muhammad Unain" }],
  creator: "Muhammad Unain",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unainr.vercel.app/templates",
    title: "Templates | Muhammad Unain — Next.js & UI Starters",
    description:
      "Free and premium Next.js, TypeScript, and Tailwind CSS templates. Production-ready starters for your next project.",
    siteName: "Muhammad Unain Portfolio",
    images: [{ url: "/6.png", width: 1200, height: 630, alt: "Muhammad Unain Templates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates | Muhammad Unain — Next.js & UI Starters",
    description:
      "Free and premium Next.js, Tailwind, and TypeScript templates. Ready-to-ship starters for SaaS, portfolios, and landing pages.",
    images: ["/fine.png"],
    creator: "@unainr",
  },
  alternates: { canonical: "https://unainr.vercel.app/templates" },
  category: "technology",
};
