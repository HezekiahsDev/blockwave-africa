"use client";

import React from "react";

export type ProgramsGraphicProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function ProgramsGraphic({
  width = 360,
  height = 320,
  className = "",
}: ProgramsGraphicProps) {
  return (
    <div className="w-full flex items-center justify-center relative">
      <svg
        width={width}
        height={height}
        viewBox="0 0 360 320"
        fill="none"
        aria-hidden
        className={"programs-graphic " + className}
      >
        <defs>
          <linearGradient id="pg1" x1="0" x2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Base rounded panel */}
        <rect x="10" y="10" width="340" height="300" rx="20" fill="#061118" />

        {/* Modules grid */}
        <g opacity="0.95">
          <rect
            x="34"
            y="40"
            width="80"
            height="60"
            rx="8"
            fill="#07121a"
            stroke="url(#pg1)"
            strokeWidth="1"
          />
          <rect
            x="142"
            y="40"
            width="80"
            height="60"
            rx="8"
            fill="#07121a"
            stroke="#0ea5a0"
            strokeWidth="1"
          />
          <rect
            x="250"
            y="40"
            width="80"
            height="60"
            rx="8"
            fill="#07121a"
            stroke="#22c55e"
            strokeWidth="1"
          />

          <rect
            x="34"
            y="120"
            width="120"
            height="60"
            rx="8"
            fill="#07121a"
            stroke="#06b6d4"
            strokeWidth="1"
          />
          <rect
            x="196"
            y="120"
            width="134"
            height="60"
            rx="8"
            fill="#07121a"
            stroke="#22c55e"
            strokeWidth="1"
          />

          <rect
            x="34"
            y="200"
            width="120"
            height="80"
            rx="10"
            fill="#07121a"
            stroke="#0ea5a0"
            strokeWidth="1"
          />
          <rect
            x="196"
            y="200"
            width="188"
            height="80"
            rx="10"
            fill="#07121a"
            stroke="#06b6d4"
            strokeWidth="1"
          />
        </g>

        {/* Connection lines */}
        <g stroke="url(#pg1)" strokeWidth="1.2" opacity="0.6">
          <path d="M114 70 L142 70" strokeLinecap="round" />
          <path d="M222 70 L250 70" strokeLinecap="round" />
          <path d="M94 100 L94 120" strokeLinecap="round" />
          <path d="M200 100 L200 120" strokeLinecap="round" />
          <path d="M94 180 L94 200" strokeLinecap="round" />
          <path d="M260 180 L260 200" strokeLinecap="round" />
        </g>

        {/* Nodes */}
        <g className="nodes">
          <circle
            className="node node-1"
            cx="74"
            cy="70"
            r="6"
            fill="#22c55e"
          />
          <circle
            className="node node-2"
            cx="182"
            cy="70"
            r="6"
            fill="#06b6d4"
          />
          <circle
            className="node node-3"
            cx="290"
            cy="70"
            r="6"
            fill="#22c55e"
          />

          <circle
            className="node node-4"
            cx="94"
            cy="150"
            r="6"
            fill="#06b6d4"
          />
          <circle
            className="node node-5"
            cx="280"
            cy="150"
            r="6"
            fill="#22c55e"
          />

          <circle
            className="node node-6"
            cx="94"
            cy="240"
            r="6"
            fill="#0ea5a0"
          />
          <circle
            className="node node-7"
            cx="290"
            cy="240"
            r="6"
            fill="#06b6d4"
          />
        </g>

        {/* simple glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Animated data packets */}
        <g className="packets">
          <circle r="3" fill="#22c55e">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M74 70 L94 150 L94 240"
            />
          </circle>
          <circle r="2.5" fill="#06b6d4">
            <animateMotion
              dur="5.2s"
              repeatCount="indefinite"
              path="M182 70 L200 120 L280 150"
            />
          </circle>
        </g>
      </svg>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.85;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .programs-graphic {
          animation: float 7s ease-in-out infinite;
        }

        .nodes .node {
          filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.5));
          transform-origin: center;
          animation: pulse 3.5s ease-in-out infinite;
        }

        .nodes .node-2 {
          animation-delay: 0.2s;
        }
        .nodes .node-3 {
          animation-delay: 0.4s;
        }
        .nodes .node-4 {
          animation-delay: 0.6s;
        }
        .nodes .node-5 {
          animation-delay: 0.8s;
        }
        .nodes .node-6 {
          animation-delay: 1s;
        }
        .nodes .node-7 {
          animation-delay: 1.2s;
        }

        /* Animate connection lines dash offset */
        g[stroke] path {
          stroke-dasharray: 6 6;
          animation: dash 2.5s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -24;
          }
        }

        /* Reduce motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .programs-graphic,
          .nodes .node,
          g[stroke] path,
          .packets circle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
