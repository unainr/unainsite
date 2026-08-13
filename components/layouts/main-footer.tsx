'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaBluesky,
  FaXTwitter,
} from 'react-icons/fa6';
import Logo from './logo';

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/project' },
  { name: 'Contact',  href: '/contact' },
];

// idle = filled brand color | hover = outline only (brand border, transparent bg)
const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/unainr',
    idle: 'text-white bg-[#24292e] border-[#24292e]',
    hover: 'hover:bg-transparent hover:text-foreground hover:border-foreground/30',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-unain7/',
    idle: 'text-white bg-[#0A66C2] border-[#0A66C2]',
    hover: 'hover:bg-transparent hover:text-[#0A66C2] hover:border-[#0A66C2]/50',
  },
  {
    icon: FaXTwitter,
    label: 'X',
    href: 'https://x.com/VioCodes_',
    idle: 'text-white bg-black border-black dark:bg-black dark:text-white dark:border-white/30',
    hover: 'hover:bg-transparent hover:text-foreground hover:border-foreground/30 dark:hover:text-black dark:hover:bg-white/80  dark:hover:border-white/30',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/viocodes_',
    idle: 'text-white bg-[#E1306C] border-[#E1306C]',
    hover: 'hover:bg-transparent hover:text-[#E1306C] hover:border-[#E1306C]/50',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/+923089469544',
    idle: 'text-white bg-[#25D366] border-[#25D366]',
    hover: 'hover:bg-transparent hover:text-[#25D366] hover:border-[#25D366]/50',
  },
  {
    icon: FaBluesky,
    label: 'Bluesky',
    href: 'https://bsky.app/profile/unainr.bsky.social/',
    idle: 'text-white bg-[#0085ff] border-[#0085ff]',
    hover: 'hover:bg-transparent hover:text-[#0085ff] hover:border-[#0085ff]/50',
  },
];

export default function FooterStandard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <footer className="mt-20 w-full">
      

      <div className="relative w-full px-5">
        <div className="container m-auto grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">

          {/* ── Brand ── */}
          <div className="space-y-5 lg:col-span-2">

           <Logo/>

            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Building thoughtful digital experiences with clean code and sharp design.
            </p>

            {/* Social icons — filled by default, outline on hover */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, label, href, idle, hover }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`
                    inline-flex size-9 items-center justify-center
                    rounded-lg border transition-all duration-200 hover:scale-110
                    ${idle} ${hover}
                  `}
                >
                  <Icon className="size-3.75" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Nav + Connect ── */}
          <div className="grid w-full grid-cols-2 items-start gap-8 sm:px-5 lg:col-span-3">

            {/* Navigation */}
            <div className="w-full">
              <h3 className="border-primary mb-4 -ml-5 border-l-2 pl-5 text-sm font-semibold uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <GradientHoverLink href={item.href} name={item.name} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="w-full">
              <h3 className="border-primary mb-4 -ml-5 border-l-2 pl-5 text-sm font-semibold uppercase tracking-wider">
                Connect
              </h3>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Have a project in mind? Let's build something great together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                }}
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #3b82f6 35%, #06b6d4 65%, transparent 100%)',
          }}
        />

        {/* Bottom bar */}
        <div className="text-muted-foreground container m-auto flex flex-col items-center justify-between gap-3 p-4 text-xs md:flex-row md:px-0 md:text-sm">
          <p>&copy; 2026 Viocodes — Unain. All rights reserved.</p>
          
        </div>

        {/* Subtle bottom glow */}
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 left-0 -z-10 h-1/3 w-full"
          style={{
            background: 'linear-gradient(to top, rgba(59,130,246,0.05), transparent)',
          }}
        />
      </div>
    </footer>
  );
}

// Gradient text on hover via inline style swap
function GradientHoverLink({ href, name }: { href: string; name: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-sm transition-colors duration-200"
      style={
        hovered
          ? {
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }
          : { color: 'var(--muted-foreground)' }
      }
    >
      {name}
    </Link>
  );
}