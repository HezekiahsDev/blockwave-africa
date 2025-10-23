"use client";

import React from "react";

export type AfricaMapGraphicProps = {
  /** Optional width of the SVG */
  width?: number;
  /** Optional height of the SVG */
  height?: number;
  /** Optional className for additional styling */
  className?: string;
};

export default function AfricaMapGraphic({
  width = 320,
  height = 280,
  className = "",
}: AfricaMapGraphicProps) {
  return (
    <>
      <div className="w-full flex items-center justify-center relative">
        <svg
          width={width}
          height={height}
          viewBox="0 0 320 280"
          fill="none"
          aria-hidden
          className={`africa-map-svg ${className}`}
        >
          <defs>
            <linearGradient id="hgrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing effect for nodes */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Detailed Africa continent outline */}
          <g className="africa-outline">
            <path
              d="M160 30 
                 C 170 28, 180 30, 185 35
                 L 190 40
                 C 195 45, 198 52, 200 60
                 L 202 70
                 C 203 75, 205 80, 206 85
                 Q 208 95, 210 105
                 L 212 115
                 C 213 125, 214 135, 213 145
                 L 212 155
                 C 211 165, 209 175, 206 185
                 Q 203 195, 198 203
                 L 190 212
                 C 185 217, 178 220, 170 222
                 L 155 225
                 C 145 226, 135 226, 125 224
                 L 110 220
                 C 100 217, 92 212, 85 205
                 Q 78 198, 73 188
                 L 68 175
                 C 66 165, 65 155, 65 145
                 L 65 130
                 C 65 120, 66 110, 68 100
                 Q 70 88, 74 78
                 L 80 65
                 C 85 55, 92 47, 100 42
                 Q 110 35, 122 32
                 L 135 30
                 C 143 29, 152 29, 160 30
                 Z
                 M 175 32
                 C 178 30, 182 30, 185 32
                 L 188 35
                 C 190 37, 190 40, 188 42
                 L 185 44
                 C 182 45, 178 45, 175 43
                 Q 173 41, 173 38
                 C 173 35, 174 33, 175 32
                 Z"
              stroke="url(#hgrad)"
              strokeWidth="2.5"
              fill="rgba(34, 197, 94, 0.05)"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="continent-path"
              opacity="0.6"
            />

            {/* Additional detail paths for more realistic shape */}
            <path
              d="M 85 65 Q 80 70, 78 75 L 75 82 Q 73 88, 72 95"
              stroke="url(#hgrad)"
              strokeWidth="1.5"
              fill="none"
              className="detail-path"
              opacity="0.4"
            />
            <path
              d="M 200 75 Q 205 82, 207 90 L 209 98"
              stroke="url(#hgrad)"
              strokeWidth="1.5"
              fill="none"
              className="detail-path"
              opacity="0.4"
            />
          </g>

          {/* Network Grid - representing blockchain network */}
          <g className="network-grid" opacity="0.15">
            <line
              x1="80"
              y1="80"
              x2="240"
              y2="80"
              stroke="#22c55e"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="80"
              y1="120"
              x2="240"
              y2="120"
              stroke="#22c55e"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="80"
              y1="160"
              x2="240"
              y2="160"
              stroke="#22c55e"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="80"
              y1="200"
              x2="240"
              y2="200"
              stroke="#22c55e"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="120"
              y1="60"
              x2="120"
              y2="220"
              stroke="#06b6d4"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="160"
              y1="60"
              x2="160"
              y2="220"
              stroke="#06b6d4"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <line
              x1="200"
              y1="60"
              x2="200"
              y2="220"
              stroke="#06b6d4"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          </g>

          {/* Major African cities/hubs as nodes - positioned on the map */}
          {/* North Africa */}
          {/* Cairo, Egypt */}
          <circle
            cx="180"
            cy="55"
            r="6"
            fill="#22c55e"
            className="node node-1"
            filter="url(#glow)"
          />

          {/* Tunis, Tunisia */}
          <circle
            cx="155"
            cy="48"
            r="4"
            fill="#06b6d4"
            className="node node-2"
            filter="url(#glow)"
          />

          {/* West Africa */}
          {/* Lagos, Nigeria */}
          <circle
            cx="125"
            cy="90"
            r="6"
            fill="#22c55e"
            className="node node-3"
            filter="url(#glow)"
          />

          {/* Accra, Ghana */}
          <circle
            cx="110"
            cy="95"
            r="5"
            fill="#06b6d4"
            className="node node-4"
            filter="url(#glow)"
          />

          {/* Dakar, Senegal */}
          <circle
            cx="82"
            cy="82"
            r="4"
            fill="#22c55e"
            className="node node-5"
            filter="url(#glow)"
          />

          {/* East Africa */}
          {/* Nairobi, Kenya */}
          <circle
            cx="188"
            cy="145"
            r="6"
            fill="#06b6d4"
            className="node node-6"
            filter="url(#glow)"
          />

          {/* Addis Ababa, Ethiopia */}
          <circle
            cx="185"
            cy="115"
            r="5"
            fill="#22c55e"
            className="node node-7"
            filter="url(#glow)"
          />

          {/* Central Africa */}
          {/* Kinshasa, DRC */}
          <circle
            cx="145"
            cy="145"
            r="5"
            fill="#06b6d4"
            className="node node-8"
            filter="url(#glow)"
          />

          {/* Southern Africa */}
          {/* Johannesburg, South Africa */}
          <circle
            cx="155"
            cy="195"
            r="6"
            fill="#22c55e"
            className="node node-9"
            filter="url(#glow)"
          />

          {/* Cape Town, South Africa */}
          <circle
            cx="140"
            cy="210"
            r="5"
            fill="#06b6d4"
            className="node node-10"
            filter="url(#glow)"
          />

          {/* Connection lines between nodes - representing Web3 network */}
          <g className="connections">
            {/* North connections */}
            <line
              x1="180"
              y1="55"
              x2="155"
              y2="48"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-1"
              opacity="0.6"
            />
            <line
              x1="180"
              y1="55"
              x2="185"
              y2="115"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-2"
              opacity="0.6"
            />

            {/* North to West */}
            <line
              x1="155"
              y1="48"
              x2="125"
              y2="90"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-3"
              opacity="0.6"
            />

            {/* West connections */}
            <line
              x1="125"
              y1="90"
              x2="110"
              y2="95"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-4"
              opacity="0.6"
            />
            <line
              x1="110"
              y1="95"
              x2="82"
              y2="82"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-5"
              opacity="0.6"
            />

            {/* West to Central */}
            <line
              x1="125"
              y1="90"
              x2="145"
              y2="145"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-6"
              opacity="0.6"
            />

            {/* East connections */}
            <line
              x1="185"
              y1="115"
              x2="188"
              y2="145"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-7"
              opacity="0.6"
            />

            {/* Central to East */}
            <line
              x1="145"
              y1="145"
              x2="188"
              y2="145"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-8"
              opacity="0.6"
            />

            {/* Central to South */}
            <line
              x1="145"
              y1="145"
              x2="155"
              y2="195"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-9"
              opacity="0.6"
            />

            {/* South connections */}
            <line
              x1="155"
              y1="195"
              x2="140"
              y2="210"
              stroke="url(#pulseGrad)"
              strokeWidth="1.5"
              className="connect-line line-10"
              opacity="0.6"
            />

            {/* Cross-continental links */}
            <line
              x1="82"
              y1="82"
              x2="145"
              y2="145"
              stroke="url(#pulseGrad)"
              strokeWidth="1.2"
              className="connect-line line-11"
              opacity="0.4"
            />
            <line
              x1="188"
              y1="145"
              x2="155"
              y2="195"
              stroke="url(#pulseGrad)"
              strokeWidth="1.2"
              className="connect-line line-12"
              opacity="0.4"
            />
          </g>

          {/* Animated data packets moving across network */}
          <circle
            r="2.5"
            fill="#22c55e"
            className="data-packet packet-1"
            opacity="0.9"
          >
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M180 55 L155 48 L125 90 L145 145"
            />
          </circle>
          <circle
            r="2.5"
            fill="#06b6d4"
            className="data-packet packet-2"
            opacity="0.9"
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M180 55 L185 115 L188 145 L155 195"
            />
          </circle>
          <circle
            r="2.5"
            fill="#22c55e"
            className="data-packet packet-3"
            opacity="0.9"
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M82 82 L110 95 L125 90 L145 145"
            />
          </circle>
          <circle
            r="2.5"
            fill="#06b6d4"
            className="data-packet packet-4"
            opacity="0.9"
          >
            <animateMotion
              dur="5.5s"
              repeatCount="indefinite"
              path="M145 145 L155 195 L140 210"
            />
          </circle>

          {/* Pulsing rings around major hubs */}
          <circle
            cx="160"
            cy="140"
            r="45"
            stroke="#22c55e"
            strokeWidth="1"
            fill="none"
            className="pulse-ring ring-1"
            opacity="0.3"
          />
          <circle
            cx="160"
            cy="140"
            r="60"
            stroke="#06b6d4"
            strokeWidth="1"
            fill="none"
            className="pulse-ring ring-2"
            opacity="0.2"
          />
          <circle
            cx="160"
            cy="140"
            r="75"
            stroke="#22c55e"
            strokeWidth="1"
            fill="none"
            className="pulse-ring ring-3"
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Africa Map Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @keyframes draw-path {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            filter: drop-shadow(0 0 2px rgba(34, 197, 94, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.9))
              drop-shadow(0 0 12px rgba(6, 182, 212, 0.6));
          }
        }

        @keyframes flow-line {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* Apply animations */
        .africa-map-svg {
          animation: float 8s ease-in-out infinite;
        }

        .continent-path {
          stroke-dasharray: 1000;
          animation: draw-path 3s ease-out forwards;
        }

        .node {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .node-1 {
          animation-delay: 0s;
        }
        .node-2 {
          animation-delay: 0.2s;
        }
        .node-3 {
          animation-delay: 0.4s;
        }
        .node-4 {
          animation-delay: 0.6s;
        }
        .node-5 {
          animation-delay: 0.8s;
        }
        .node-6 {
          animation-delay: 1s;
        }
        .node-7 {
          animation-delay: 1.2s;
        }
        .node-8 {
          animation-delay: 1.4s;
        }
        .node-9 {
          animation-delay: 1.6s;
        }
        .node-10 {
          animation-delay: 1.8s;
        }

        .connect-line {
          stroke-dasharray: 10 5;
          animation: flow-line 2s linear infinite;
        }

        .line-1 {
          animation-delay: 0s;
        }
        .line-2 {
          animation-delay: 0.15s;
        }
        .line-3 {
          animation-delay: 0.3s;
        }
        .line-4 {
          animation-delay: 0.45s;
        }
        .line-5 {
          animation-delay: 0.6s;
        }
        .line-6 {
          animation-delay: 0.75s;
        }
        .line-7 {
          animation-delay: 0.9s;
        }
        .line-8 {
          animation-delay: 1.05s;
        }
        .line-9 {
          animation-delay: 1.2s;
        }
        .line-10 {
          animation-delay: 1.35s;
        }
        .line-11 {
          animation-delay: 1.5s;
        }
        .line-12 {
          animation-delay: 1.65s;
        }

        .detail-path {
          stroke-dasharray: 500;
          animation: draw-path 3.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        .pulse-ring {
          transform-origin: center;
          animation: pulse-ring 4s ease-out infinite;
        }

        .ring-1 {
          animation-delay: 0s;
        }
        .ring-2 {
          animation-delay: 1.3s;
        }
        .ring-3 {
          animation-delay: 2.6s;
        }

        .data-packet {
          filter: drop-shadow(0 0 3px currentColor);
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .africa-map-svg,
          .continent-path,
          .node,
          .connect-line,
          .pulse-ring,
          .data-packet,
          .data-packet animateMotion {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
