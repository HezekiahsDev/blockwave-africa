"use client";

import React from "react";
import { ProgramsGraphic } from "../ui/graphics";

export default function Programs() {
  const items = [
    {
      title: "Workshops",
      desc: "Hands-on sessions to learn the fundamentals and beyond.",
    },
    {
      title: "Learning Tracks",
      desc: "Beginner-to-builder paths with projects and mentorship.",
    },
    {
      title: "Incubator",
      desc: "From idea to MVP with guidance, demos and community.",
    },
  ];

  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="w-full section-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-green-800/10 bg-linear-to-b from-slate-900/40 to-black/40 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Text content */}
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
                    id="programs-heading"
                    className="text-xl sm:text-2xl font-extrabold tracking-tight text-green-400"
                  >
                    Programs
                  </h2>
                </div>

                <p className="mt-2 text-slate-300 max-w-2xl">
                  Learn by building. Follow structured tracks or join focused
                  workshops to level up your skills.
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
                        {item.title === "Workshops" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M4 7h16v10H4z"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              fill="rgba(34,197,94,0.03)"
                            />
                            <path
                              d="M8 11h8"
                              stroke="#06b6d4"
                              strokeWidth="1"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {item.title === "Learning Tracks" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M4 6h16M4 12h10M4 18h7"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {item.title === "Incubator" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M12 2v6M9 9h6l-1 9H10l-1-9z"
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

            {/* Right: graphic */}
            <div className="col-span-12 lg:col-span-5 flex items-center justify-center p-4">
              <ProgramsGraphic
                className="max-w-full h-auto"
                width={380}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
