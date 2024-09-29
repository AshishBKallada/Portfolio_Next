'use client';

import { useState } from "react";
import * as React from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/connect", label: "Connect" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const [hasShadow, setHasShadow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasShadow(scrollPosition === 0);
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 w-full max-w-[700px] mx-auto p-2 rounded-lg 
        ${isScrolled ? "bg-black border border-white" : "bg-gray-100"} 
        ${hasShadow ? "shadow-[0_6px_20px_rgba(255,255,255,0.9)]" : "shadow-none"} 
        backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="flex flex-col items-center text-lg">
        <nav className="robotica flex items-center justify-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ease-in-out 
                ${isScrolled ? "text-white" : "text-black"} 
                transform hover:scale-110 opacity-90 hover:opacity-100 will-change:transform will-change:opacity`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
