"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  BsWhatsapp,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsInstagram,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import Logo from "./logo";
import { SiBluesky } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Templates", href: "/templates" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: BsGithub, href: "https://github.com/unainr", label: "GitHub" },
  { icon: BsLinkedin, href: "https://www.linkedin.com/in/muhammad-unain7/", label: "LinkedIn" },
  { icon: BsTwitterX, href: "https://x.com/", label: "X" },
  { icon: BsInstagram, href: "https://www.instagram.com/viocodes_/", label: "Instagram" },
  { icon: SiBluesky, href: "https://bsky.app/profile/unainr.bsky.social/", label: "Bluesky" },
];

export function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-white/10 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

            {/* Brand */}
            <div className="flex flex-col gap-3">
              <Logo />
              <p className="text-sm text-gray-400 leading-relaxed max-w-55">
                Building thoughtful digital experiences with clean code and sharp design.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Socials
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                  >
                    <Icon className="text-lg" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-end gap-3 text-xs text-gray-500">
            <p>© 2026 Viocodes — Unain. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <Link
        href="https://wa.me/+923089469544"
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-8 left-8 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 hover:bg-green-400 transition-all duration-300"
      >
        <BsWhatsapp className="text-white text-3xl" />
      </Link>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300 ${
          showScrollButton ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
        }`}
      >
        <ArrowUp className="text-white w-5 h-5" />
      </button>
    </>
  );
}