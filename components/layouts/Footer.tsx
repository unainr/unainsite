"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { BsWhatsapp, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";
import Logo from "./logo";


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
      <footer >
        <div className=" mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo/>

            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/unainr"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 transition-colors">
                <BsGithub className="text-2xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-unain7/"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 transition-colors">
                <BsLinkedin className="text-2xl" />
              </Link>
              <Link
                href="https://www.instagram.com/un_r_7/"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 transition-colors">
                <BsInstagram className="text-2xl" />
              </Link>
            </div>

            <p className="text-gray-400 text-sm">© 2025 All rights reserved</p>
          </div>
        </div>
      </footer>

      <Link
        href="https://wa.me/+923089469544"
        target="_blank"
        className="fixed bottom-8 left-8 z-50 bg-green-500 cursor-pointer p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <BsWhatsapp className="text-white text-3xl" />
      </Link>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-blue-400 p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 ${
          showScrollButton ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <ArrowUp className="text-white text-2xl" />
      </button>
    </>
  );
}
