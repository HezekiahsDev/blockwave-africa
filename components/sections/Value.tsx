"use client";

import React from "react";
import { AfricaMapGraphic } from "../ui/graphics";

export default function Value() {
  const items = [
    {
      title: "Learn by building",
      desc: "Projects-first curriculum that turns concepts into shipped work.",
    },
    {
      title: "Community of builders",
      desc: "Mentors, peers and partners to accelerate your journey.",
    },
    {
      title: "Africa to the world",
      desc: "Bridge local talent to global protocols and opportunities.",
    },
    {
      title: "From idea to launch",
      desc: "Incubation support, demos, and pathways to funding.",
    },
  ];

  return (
    <section
      id="value"
      className="w-full section-full bg-black text-slate-100"
      aria-labelledby="value-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-green-800/10 bg-linear-to-b from-slate-900/40 to-black/40 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: reserved space for image/graphic */}
            <div className="col-span-12 lg:col-span-5 flex items-center justify-center p-4">
              {/* Use the AfricaMapGraphic component as a placeholder/illustration */}
              <AfricaMapGraphic
                className="max-w-full h-auto"
                width={420}
                height={360}
              />
            </div>

            {/* Right: Text content */}
            <div className="col-span-12 lg:col-span-7">
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
                    id="value-heading"
                    className="text-xl sm:text-2xl font-extrabold tracking-tight text-green-400"
                  >
                    Why join Blockwave Africa
                  </h2>
                </div>

                <p className="mt-2 text-slate-300 max-w-2xl">
                  We combine education, community and real-world projects so you
                  can grow faster and build with confidence.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item) => (
                  <li
                    key={item.title}
                    className="p-4 rounded-xl bg-black/30 border border-green-800/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 shrink-0">
                        {/* Select icon based on title */}
                        {item.title === "Learn by building" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="14"
                              rx="2"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              fill="rgba(34,197,94,0.04)"
                            />
                            <path
                              d="M3 18h18"
                              stroke="#06b6d4"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                            <rect
                              x="7"
                              y="8"
                              width="10"
                              height="6"
                              rx="1"
                              stroke="#22c55e"
                              strokeWidth="0.9"
                              fill="rgba(34,197,94,0.06)"
                            />
                          </svg>
                        )}

                        {item.title === "Community of builders" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M12 12a3 3 0 100-6 3 3 0 000 6zM19 21v-2a3 3 0 00-3-3h-8a3 3 0 00-3 3v2"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17 11a2 2 0 11-4 0 2 2 0 014 0z"
                              stroke="#06b6d4"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}

                        {item.title === "Africa to the world" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              fill="rgba(6,182,212,0.04)"
                            />
                            <path
                              d="M2 12h20M12 2v20"
                              stroke="#06b6d4"
                              strokeWidth="0.9"
                            />
                          </svg>
                        )}

                        {item.title === "From idea to launch" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M12 2v6M9 8h6l-1 9H10l-1-9z"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="rgba(34,197,94,0.03)"
                            />
                            <path
                              d="M5 21h14"
                              stroke="#06b6d4"
                              strokeWidth="1"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>

                      <div>
                        <div className="font-semibold text-slate-100">
                          {item.title}
                        </div>
                        <div className="text-sm text-slate-300 mt-1">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
