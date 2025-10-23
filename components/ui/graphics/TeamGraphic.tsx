"use client";

import React from "react";

export type TeamGraphicProps = {
  className?: string;
};

export default function TeamGraphic({ className = "" }: TeamGraphicProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 760 380"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden
        className={"team-graphic " + className}
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
        <g stroke="#22c55e" strokeWidth="1.2" opacity="0.4" className="arcs">
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
        <g>
          <circle r="2.8" fill="#22c55e">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M120 140 L320 160 L520 130"
            />
          </circle>
        </g>
      </svg>

      <style jsx>{`
        .team-graphic {
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
          .team-graphic,
          .blobs ellipse,
          .nodes circle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
