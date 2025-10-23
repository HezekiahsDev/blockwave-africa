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

                {/* Subscription removed — primary CTA remains above */}
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
