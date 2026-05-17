import { ContactView } from "@/modules/contact/ui/view/contact-view";
import type { Metadata } from "next";


const ContactPage = () => {
	return (
		<div>
			<ContactView />
		</div>
	);
};

export default ContactPage;

export const metadata: Metadata = {
  metadataBase: new URL("https://unainr.vercel.app"),
  title: "Contact | Muhammad Unain — Let's Work Together",
  description:
    "Get in touch with Muhammad Unain for freelance web development, AI integration projects, or SaaS collaboration. Based in Karachi, Pakistan. Available for remote work worldwide.",
  keywords: [
    "Contact Muhammad Unain",
    "Hire Web Developer Pakistan",
    "Freelance Developer Contact",
    "Next.js Developer for Hire",
    "AI Developer Karachi",
    "Remote Developer Pakistan",
    "Web Development Inquiry",
  ],
  authors: [{ name: "Muhammad Unain" }],
  creator: "Muhammad Unain",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unainr.vercel.app/contact",
    title: "Contact | Muhammad Unain — Let's Work Together",
    description:
      "Available for freelance projects and collaborations. Let's build something great together.",
    siteName: "Muhammad Unain Portfolio",
    images: [{ url: "/fine.png", width: 1200, height: 630, alt: "Contact Muhammad Unain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Muhammad Unain — Let's Work Together",
    description:
      "Available for freelance web development and AI projects. Based in Karachi, open to remote work worldwide.",
    images: ["/fine.png"],
    creator: "@unainr",
  },
  alternates: { canonical: "https://unainr.vercel.app/contact" },
  category: "technology",
};
