"use client";

import React from "react";

export default function Team() {
  const people = [
    {
      name: "XENONTHEKING",
      role: "Founder",
      desc: "Provides vision and strategic leadership for the project.",
      xAccount: "https://x.com/Double_Elevenn1",
    },
    {
      name: "EmmybabsDeVav",
      role: "Co-founder",
      desc: "Builds partnerships and alliances across the ecosystem",
      xAccount: "https://x.com/emmybabsdevav",
    },
    {
      name: "Hezekiahs",
      role: "Dev Lead",
      desc: "Leads the development efforts and technical direction.",
      xAccount: "https://x.com/HezekiahsDev",
    },
  ];

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="w-full section-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-green-800/10 p-6 sm:p-8 lg:p-10">
          {/* Animated background graphic - inline SVG */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 760 380"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              aria-hidden
              className="team-graphic-svg"
            >
              <defs>
                <linearGradient id="tg1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.28" />
                </linearGradient>
              </defs>

              <rect
                x="0"
                y="0"
                width="760"
                height="380"
                rx="24"
                fill="url(#tg1)"
                opacity="0.08"
              />

              {/* floating abstract blobs */}
              <g className="blobs" fill="url(#tg1)" opacity="0.15">
                <ellipse cx="140" cy="120" rx="88" ry="48" />
                <ellipse cx="320" cy="60" rx="60" ry="36" />
                <ellipse cx="560" cy="140" rx="100" ry="52" />
              </g>

              {/* connecting arcs */}
              <g
                stroke="#22c55e"
                strokeWidth="1.2"
                opacity="0.4"
                className="arcs"
              >
                <path
                  d="M60 180 C160 120, 240 120, 320 160"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M320 160 C420 200, 520 200, 640 160"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* subtle nodes */}
              <g className="nodes">
                <circle cx="120" cy="140" r="6" fill="#22c55e" />
                <circle cx="300" cy="60" r="5" fill="#06b6d4" />
                <circle cx="520" cy="130" r="6" fill="#22c55e" />
              </g>

              {/* small moving packet */}
              <circle r="2.8" fill="#22c55e">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path="M120 140 L320 160 L520 130"
                />
              </circle>
            </svg>
          </div>

          <style jsx>{`
            .team-graphic-svg {
              transform-origin: center;
              animation: team-float 9s ease-in-out infinite;
            }

            @keyframes team-float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-8px);
              }
            }

            .blobs ellipse {
              transform-origin: center;
              animation: blob-sway 8s ease-in-out infinite;
            }
            .blobs ellipse:nth-child(2) {
              animation-delay: 1s;
            }
            .blobs ellipse:nth-child(3) {
              animation-delay: 2s;
            }

            @keyframes blob-sway {
              0%,
              100% {
                transform: translateY(0) scale(1);
              }
              50% {
                transform: translateY(-6px) scale(1.02);
              }
            }

            .nodes circle {
              filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.35));
              animation: node-pulse 3.6s ease-in-out infinite;
            }

            @keyframes node-pulse {
              0%,
              100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.2);
                opacity: 0.85;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .team-graphic-svg,
              .blobs ellipse,
              .nodes circle {
                animation: none !important;
              }
            }
          `}</style>

          <div className="relative">
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center ring-1 ring-green-600/30">
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

                <h2
                  id="programs-heading"
                  className="text-xl sm:text-2xl font-extrabold tracking-tight text-green-400"
                >
                  Team
                </h2>
              </div>
              <p className="mt-2 text-slate-300 max-w-2xl">
                A small, focused group helping Africa ride the future.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {people.map((p) => (
                <li
                  key={p.name}
                  className="bg-black/30 border border-green-800/10 rounded-2xl p-4 flex flex-col items-start gap-4"
                >
                  <div className="w-full flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-linear-to-br from-green-600/10 to-teal-500/6 flex items-center justify-center overflow-hidden">
                      {/* Placeholder image */}
                      <div className="w-12 h-12 rounded-full bg-green-700/20 flex items-center justify-center text-green-300 font-bold">
                        {p.name.slice(0, 1)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-100">
                        {p.name}
                      </div>
                      <div className="text-sm text-slate-300">{p.role}</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300">{p.desc}</p>

                  <div className="mt-auto w-full">
                    <a
                      className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-500 text-black rounded-md font-medium"
                      href={p.xAccount}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
