"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

// Inline SVGs – eliminates the 1.6 MB react-icons/fa chunk
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" />
    <g strokeWidth="2" stroke="currentColor" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </g>
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certificates" },
  { label: "Work", href: "#work" },
];

const HeroHeader: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync theme on mount
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav
      className={`fixed w-full border-b px-4 sm:px-8 md:px-12 lg:px-[5%] flex items-center justify-between z-[100] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 py-2.5 sm:py-3 md:py-4 ${isScrolled
        ? "border-black/5 bg-[#fffcf3]/85 shadow-[0_8px_30px_rgba(17,24,39,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0a]/85 dark:shadow-none"
        : "border-transparent bg-transparent shadow-none backdrop-blur-none"
        }`}
    >

      {/* Logo */}
      <Link href="/" className="ml-0.5 sm:ml-2 md:ml-3 min-[1261px]:ml-0">
        <span className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">Osam<span className="text-[#ff4d00]">a</span></span>
      </Link>

      {/* Center pill nav */}
      <ul className="hidden min-[1261px]:flex items-center gap-6 min-[1261px]:gap-8 rounded-full px-12 py-3 bg-[#fffcf3]/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="group">
              <span className="relative inline-flex items-start">
                <span className="relative block overflow-hidden cursor-pointer font-bold" style={{ lineHeight: 1.2 }}>
                  <span className="flex items-center text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full">
                    {item.label.split("").map((char, i) => (
                      <span key={i} className="inline-block whitespace-pre">{char}</span>
                    ))}
                  </span>
                  <span className="absolute inset-0 flex items-center text-[#ff4d00] transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    {item.label.split("").map((char, i) => (
                      <span key={i} className="inline-block whitespace-pre">{char}</span>
                    ))}
                  </span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Right: theme toggle + connect button */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Dark/Light toggle */}
        <button
          onClick={toggleTheme}
          className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 overflow-hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Connect button */}
        <div className="hidden min-[1261px]:block ml-4">
          <a href="#contact" className="relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold px-10 py-3.5 h-14 text-base bg-[#fffcf3] dark:bg-[#0a0a0a] border border-gray-500 dark:border-white/50 rounded-full group transition-colors hover:bg-[#fffcf3] dark:hover:bg-[#fffcf3]/5">
            <span className="relative block overflow-hidden cursor-pointer font-bold" style={{ lineHeight: 1.2 }}>
              <span className="flex items-center text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-full">
                {"Connect".split("").map((char, i) => <span key={i} className="inline-block">{char}</span>)}
                <span className="inline-block ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </span>
              </span>
              <span className="absolute inset-0 flex items-center text-[#ff4d00] transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                {"Connect".split("").map((char, i) => <span key={i} className="inline-block">{char}</span>)}
                <span className="inline-block ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(HeroHeader);
