"use client";

import React from "react";
import Manifesto from "@/components/sections/Manifesto";
import Mission from "@/components/sections/Mission";

export default function MissionAndManifesto() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
      {/* LEFT: Story / Manifesto */}
      <Manifesto />

      {/* RIGHT: Promise / CTA */}
      <Mission />

      {/* Center dividing animated SVG line (horizontal visual anchor) */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        aria-hidden
      >
        <svg
          width="100%"
          height="120"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 C300 10, 900 110, 1200 60"
            stroke="url(#lineGrad)"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            className="stroke-flow"
          />
        </svg>
      </div>
    </div>
  );
}
