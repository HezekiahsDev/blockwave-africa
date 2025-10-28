"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Leaflet
const LeafletAfricaMap = dynamic(
  () => import("@/components/ui/graphics/LeafletAfricaMap"),
  { ssr: false }
);

export type HeroProps = {
  /** Optional small tagline for the top-left badge */
  tagline?: string;
};

export default function Hero({ tagline = "Ride the Future" }: HeroProps) {
  return (
    <div className="w-full bg-black/80 text-slate-100 mb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-black/60 to-slate-900/60 border border-green-800/10 shadow-xl">
          {/* Mobile: Map as faint background behind text */}
          <div className="absolute inset-0 lg:hidden opacity-50 pointer-events-none z-0">
            <LeafletAfricaMap height="100%" className="h-full w-full" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left: Headline + Value props */}
            <div
              className="relative z-10 flex flex-col justify-center"
              data-aos="fade-right"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-green-600/10 ring-1 ring-green-600/30 p-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 12h18M12 3v18"
                      stroke="#22c55e"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-300">
                    {tagline}
                  </p>
                  <p className="text-xs text-slate-400">
                    BlockwaveAfrica · Web3 · Builders
                  </p>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white/95">
                Empowering Africa to learn, build and lead in the blockchain
                economy.
              </h1>

              <p className="mt-5 max-w-xl text-slate-300 leading-relaxed">
                Practical blockchain education, hands-on projects and a
                community that connects local talent with global opportunity.
                From workshops to incubation — we turn ideas into protocols.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-green-600 hover:bg-green-500 active:scale-95 transition-transform rounded-lg text-black font-semibold shadow-md"
                >
                  Join the wave
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Social Media Links */}
                <div className="flex gap-2 items-center">
                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/BlockWaveAfrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-green-600/50 transition-all active:scale-95"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-slate-300"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/blockwaveafrica?igsh=MXc1eGtxbnFocmhkaw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-green-600/50 transition-all active:scale-95"
                    aria-label="Follow us on Instagram"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-300"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/16oepdeavF/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-green-600/50 transition-all active:scale-95"
                    aria-label="Follow us on Facebook"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-slate-300"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-400">
                <strong>Promise:</strong> No hype — real skills, real projects,
                real community.
              </div>
            </div>

            {/* Right: Visual / SVG / Stats - Desktop only */}
            <div
              className="relative z-10 h-[560px] bg-transparent hidden lg:block"
              data-aos="fade-left"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              {/* Web3 Adoption Across Africa - Interactive Map */}
              <LeafletAfricaMap height="100%" className="h-full" />
            </div>

            {/* Decorative SVG overlays (absolute positioned) */}
            <svg
              className="pointer-events-none absolute -right-12 -top-8 opacity-30 hidden md:block"
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
              aria-hidden
            >
              <circle
                cx="110"
                cy="110"
                r="90"
                stroke="#064e3b"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            </svg>

            <svg
              className="pointer-events-none absolute -left-12 -bottom-8 opacity-40 hidden lg:block"
              width="260"
              height="140"
              viewBox="0 0 260 140"
              fill="none"
              aria-hidden
            >
              <path
                d="M0 100 C60 10, 200 10, 260 100"
                stroke="#16a34a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* small inline animations (keeps bundle tiny) */}
      <style jsx>{`
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
