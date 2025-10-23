"use client";

import React from "react";
import { EventsGraphic } from "../ui/graphics";

export default function Events() {
  const events = [
    {
      title: "Community Meetup",
      date: "TBD",
      desc: "Local builders connect, share progress and opportunities.",
    },
    {
      title: "Web3 101 Workshop",
      date: "TBD",
      desc: "A practical introduction to crypto, wallets and smart contracts.",
    },
    {
      title: "Hack Night",
      date: "TBD",
      desc: "Sprint on ideas with mentors and collaborators.",
    },
  ];

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="w-full section-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-green-800/10 bg-linear-to-b from-slate-900/40 to-black/40 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="col-span-12 lg:col-span-5 flex items-center justify-center p-4">
              <EventsGraphic
                width={360}
                height={320}
                className="max-w-full h-auto"
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="mb-6">
                <h2
                  id="events-heading"
                  className="text-xl sm:text-2xl font-extrabold tracking-tight text-green-400"
                >
                  Events
                </h2>
                <p className="mt-2 text-slate-300 max-w-2xl">
                  Meet, learn and build together. Join our upcoming sessions.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {events.map((ev) => (
                  <li
                    key={ev.title}
                    className="p-4 rounded-xl bg-black/30 border border-green-800/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 shrink-0">
                        {ev.title === "Community Meetup" && (
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M12 12a3 3 0 100-6 3 3 0 000 6zM5 21v-2a3 3 0 013-3h8a3 3 0 013 3v2"
                              stroke="#22c55e"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}

                        {ev.title === "Web3 101 Workshop" && (
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
                              fill="rgba(34,197,94,0.03)"
                            />
                            <path
                              d="M7 9h10"
                              stroke="#06b6d4"
                              strokeWidth="1"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {ev.title === "Hack Night" && (
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
                          </svg>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-slate-100">
                            {ev.title}
                          </div>
                          <span className="text-xs text-green-300 px-2 py-0.5 rounded bg-green-600/10 ring-1 ring-green-600/30">
                            {ev.date}
                          </span>
                        </div>
                        <div className="text-sm text-slate-300 mt-1">
                          {ev.desc}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#cta"
                  className="inline-block px-4 py-2 bg-green-600 hover:bg-green-500 text-black rounded-lg font-semibold"
                >
                  Get notified
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
