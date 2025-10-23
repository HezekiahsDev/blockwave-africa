"use client";

import React from "react";

export default function Manifesto() {
  return (
    <div
      className="relative p-6 md:p-8 rounded-2xl bg-linear-to-b from-black/60 to-black/50 border border-green-700/20 backdrop-blur-sm"
      data-aos="fade-right"
    >
      <div className="flex items-center gap-4 mb-6">
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
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Blockwave Africa
          </h1>
          <p className="text-sm text-green-300/90">Ride the Future</p>
        </div>
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-slate-100 mb-4">
        Why we exist
      </h2>
      <p className="text-slate-300 leading-relaxed space-y-4 mb-6">
        The world is shifting — code, transparency and community now reshape
        economies. Blockwave exists to break the barriers between Africa and the
        blockchain economy, equipping students, creators, entrepreneurs and
        builders with knowledge, tools and networks so they become active
        shapers of the future.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <li className="flex gap-3 items-start">
          <span className="mt-1 text-green-400">●</span>
          <span>
            Blockchain education that&apos;s simple, practical and accessible.
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 text-green-400">●</span>
          <span>
            Networking to bridge local talent with global opportunity.
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 text-green-400">●</span>
          <span>Turning theory into real-world projects and impact.</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 text-green-400">●</span>
          <span>Community-driven: people before profit.</span>
        </li>
      </ul>

      <div className="mt-8">
        <a
          className="inline-flex items-center gap-3 px-5 py-3 bg-green-600 hover:bg-green-500 active:scale-95 transition-transform rounded-lg text-black font-semibold shadow-lg"
          href="#cta"
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
      </div>

      {/* Decorative SVG lines */}
      <svg
        className="absolute right-6 bottom-6 opacity-60 pointer-events-none"
        width="220"
        height="120"
        viewBox="0 0 220 120"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M10 110 C60 10, 160 10, 210 110"
          stroke="url(#g1)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="6 8"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}
