// components/Header.tsx
"use client";

import React, { JSX, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");

  const navItems = useMemo(
    () => [
      { id: "hero", label: "Home", href: "#hero" },
      { id: "about", label: "About", href: "#about" },
      { id: "value", label: "Values", href: "#value" },
      { id: "programs", label: "Programs", href: "#programs" },
      { id: "events", label: "Events", href: "#events" },
      { id: "team", label: "Team", href: "#team" },
    ],
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Detect scroll to strengthen header background for readability
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight active section in view
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id;
          setActive(id);
        }
      },
      {
        // favor the central viewport; adjust as needed
        root: null,
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -40% 0px",
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      sections.forEach((s) => observer.unobserve(s));
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={
        `w-full fixed top-0 left-0 right-0 z-50 text-slate-100 border-b border-green-800/10 transition-all duration-300 animate-slide-down ` +
        `${
          scrolled
            ? "bg-black/75 backdrop-blur supports-backdrop-filter:backdrop-blur-sm"
            : "bg-black/40"
        }`
      }
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-20 h-10 md:w-24 md:h-14 lg:w-32 lg:h-16 xl:w-40 xl:h-20">
                <Image
                  src="/assets/block-wave.png"
                  alt="Blockwave Africa Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={
                  `text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded ` +
                  `${
                    active === item.id
                      ? "text-green-500 border border-green-500 rounded-md px-2 py-1"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-black font-semibold transition"
            >
              Get updates
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md ring-1 ring-green-700/20"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="#22c55e"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="#22c55e"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <nav className="flex flex-col gap-3 pb-4" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  `block px-2 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded ` +
                  `${
                    active === item.id
                      ? "text-green-500 border border-green-500 rounded-md"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block px-4 py-2 bg-green-600 rounded-lg text-black font-semibold text-sm"
            >
              Get updates
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
