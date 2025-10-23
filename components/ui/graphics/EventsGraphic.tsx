"use client";

import React from "react";

export type EventsGraphicProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function EventsGraphic({
  width = 380,
  height = 320,
  className = "",
}: EventsGraphicProps) {
  return (
    <div className="w-full flex items-center justify-center relative">
      <svg
        width={width}
        height={height}
        viewBox="0 0 380 320"
        fill="none"
        aria-hidden
        className={"events-graphic " + className}
      >
        <defs>
          <linearGradient id="eg1" x1="0" x2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <rect x="8" y="8" width="364" height="304" rx="18" fill="#061118" />

        {/* Calendar card */}
        <g>
          <rect
            x="36"
            y="34"
            width="140"
            height="110"
            rx="10"
            fill="#07121a"
            stroke="url(#eg1)"
            strokeWidth="1"
          />
          <rect
            x="36"
            y="34"
            width="140"
            height="28"
            rx="8"
            fill="#07121a"
            opacity="0.9"
          />
          <circle cx="62" cy="48" r="4" fill="#22c55e" />
          <circle cx="86" cy="48" r="4" fill="#06b6d4" />

          <text
            x="54"
            y="82"
            fill="#9ca3af"
            fontSize="26"
            fontFamily="sans-serif"
          >
            24
          </text>
        </g>

        {/* People / nodes */}
        <g>
          <circle
            cx="220"
            cy="70"
            r="24"
            fill="#07121a"
            stroke="#06b6d4"
            strokeWidth="1"
          />
          <circle cx="220" cy="70" r="6" fill="#22c55e" />
          <circle
            cx="260"
            cy="120"
            r="18"
            fill="#07121a"
            stroke="#22c55e"
            strokeWidth="1"
          />
          <circle cx="260" cy="120" r="5" fill="#06b6d4" />
        </g>

        {/* Pin / marker */}
        <g>
          <path
            d="M320 200c0-18-14-32-32-32s-32 14-32 32c0 20 32 80 32 80s32-60 32-80z"
            fill="#07121a"
            stroke="#22c55e"
            strokeWidth="1"
          />
          <circle cx="288" cy="200" r="6" fill="#22c55e" />
        </g>

        {/* simple glow filter */}
        <defs>
          <filter id="eglow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="packets">
          <circle r="3" fill="#22c55e">
            <animateMotion
              dur="4.2s"
              repeatCount="indefinite"
              path="M54 80 L120 80 L220 70"
            />
          </circle>
        </g>
      </svg>

      <style jsx>{`
        @keyframes floatEvt {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .events-graphic {
          animation: floatEvt 8s ease-in-out infinite;
        }

        .packets circle {
          filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.5));
        }

        @media (prefers-reduced-motion: reduce) {
          .events-graphic,
          .packets circle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
