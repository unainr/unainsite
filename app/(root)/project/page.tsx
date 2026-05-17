import { ProjectView } from "@/modules/projects/ui/view/project-view";
import type { Metadata } from "next";


const ProjectPage = async () => {
	return (
		<>
			<ProjectView />
		</>
	);
};

export default ProjectPage;
export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("https://unainr.vercel.app"),
  title: "Projects | Muhammad Unain — Full Stack & AI Developer",
  description:
    "Explore projects by Muhammad Unain — a Full Stack & AI developer from Karachi building production-grade web apps, SaaS products, and LLM-powered tools with Next.js, TypeScript, and modern tech stacks.",

  keywords: [
    "Muhammad Unain Projects",
    "Full Stack Developer Portfolio",
    "Next.js Projects",
    "AI Projects Pakistan",
    "React Developer Portfolio",
    "SaaS Projects",
    "TypeScript Projects",
    "Web Development Portfolio Pakistan",
    "LLM Integration Projects",
    "Tailwind CSS Projects",
    "Clerk Auth Projects",
    "Drizzle ORM",
    "Neon Database",
    "Vercel AI SDK",
  ],
  authors: [{ name: "Muhammad Unain" }],
  creator: "Muhammad Unain",
  publisher: "Muhammad Unain",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unainr.vercel.app/projects",
    title: "Projects | Muhammad Unain — Full Stack & AI Developer",
    description:
      "Production-grade web apps, SaaS products, and AI-powered tools built with Next.js, TypeScript, and LLMs. Browse the full project portfolio.",
    siteName: "Muhammad Unain Portfolio",
    images: [
      {
        url: "/fine.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Unain — Projects Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Muhammad Unain — Full Stack & AI Developer",
    description:
      "Production-grade web apps, SaaS products, and AI-powered tools. Browse the full portfolio.",
    images: ["/fine.png"],
    creator: "@unainr",
  },

  alternates: {
    canonical: "https://unainr.vercel.app/projects",
  },

  category: "technology",

  other: {
    "application-name": "Muhammad Unain Portfolio",
    "apple-mobile-web-app-title": "Muhammad Unain",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};
