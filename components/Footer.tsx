// components/Footer.tsx
"use client";

import React, { JSX, useState } from "react";
import Link from "next/link";

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // Minimal fetch to API route if provided; otherwise fallback to localStorage
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const existing = JSON.parse(
          localStorage.getItem("blockwave_subs") || "[]"
        );
        existing.push({ email, ts: Date.now() });
        localStorage.setItem("blockwave_subs", JSON.stringify(existing));
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      const existing = JSON.parse(
        localStorage.getItem("blockwave_subs") || "[]"
      );
      existing.push({ email, ts: Date.now() });
      localStorage.setItem("blockwave_subs", JSON.stringify(existing));
      setStatus("success");
      setEmail("");
    }
  }

  return (
    <footer className="w-full bg-black text-slate-200 border-t border-green-800/8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & short */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-600/10 ring-1 ring-green-600/30 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 12h18M12 3v18"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-extrabold">Blockwave Africa</div>
                <div className="text-xs text-slate-400">Ride the Future</div>
              </div>
            </Link>

            <p className="mt-4 text-sm text-slate-400 max-w-sm">
              Practical blockchain education, community and projects that
              connect local talent to global opportunity.
            </p>

            <div className="mt-6 flex gap-3">
              {/* Replace hrefs with real links */}
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md ring-1 ring-green-700/20 hover:bg-white/2"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.7-.6.4-1.3.7-2 .9C16.6 6 15.8 5.5 15 5.5c-1.6 0-2.9 1.4-2.9 3.1 0 .2 0 .4.1.6C9.4 9 7.1 7.8 5.6 6c-.3.6-.5 1.4-.5 2.1 0 1.4.7 2.6 1.8 3.3-.5 0-1-.2-1.4-.4v.1c0 2 .1 3.7 2.1 4.8 0 .1 0 .1.1.2-1 .3-2 .3-3 .1 1 1.1 2.4 1.8 3.9 1.8-1.7 1.3-3.8 2-6 2-.4 0-.8 0-1.2-.1C6.9 21.8 9.5 22.5 12 22.5c7.4 0 11.4-6.1 11.4-11.4V10c.8-.6 1.5-1.4 2-2.3-.7.3-1.4.5-2.1.6z"
                    stroke="#22c55e"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md ring-1 ring-green-700/20 hover:bg-white/2"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2C7.6 2 4 5.6 4 10c0 3.5 2.3 6.5 5.5 7.5.4.1.6-.2.6-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-1-1.3-1-1.3-.8-.5.1-.6.1-.6 1 .1 1.6 1 1.6 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.9-2.2-.1-.2-.4-1.1.1-2.2 0 0 .8-.2 2.7.9.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.2 2.7-.9 2.7-.9.5 1.1.2 2 .1 2.2.6.6.9 1.3.9 2.2 0 3.1-1.9 3.8-3.7 4 .4.3.7.9.7 1.9v2.8c0 .2.2.5.6.4C17.7 16.5 20 13.5 20 10c0-4.4-3.6-8-8-8z"
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex gap-8">
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#programs" className="hover:text-white">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200">
              Get updates
            </h4>
            <p className="mt-2 text-sm text-slate-400">
              Monthly newsletters, event invites and program announcements.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex gap-2"
              aria-label="Footer subscribe"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="you@example.com"
                className="flex-1 px-3 py-2 rounded-lg bg-transparent border border-green-700/30 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded-lg text-black font-semibold text-sm"
              >
                {status === "sending" ? "..." : "Subscribe"}
              </button>
            </form>

            <div className="mt-2 text-xs h-5">
              {status === "success" && (
                <span className="text-green-300">
                  Thanks — you are subscribed.
                </span>
              )}
              {status === "error" && (
                <span className="text-rose-400">
                  Please enter a valid email.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-800/8 pt-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Blockwave. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <span className="hidden md:inline">• Built with care.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
