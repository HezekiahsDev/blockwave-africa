"use client";

import React from "react";

export default function Mission() {
  return (
    <div
      className="relative p-6 md:p-8 rounded-2xl bg-linear-to-b from-slate-900/80 to-black/40 border border-green-700/10"
      data-aos="fade-left"
    >
      <h3 className="text-sm uppercase tracking-wider text-green-300 font-semibold">
        Our mission
      </h3>
      <h4 className="text-2xl md:text-3xl font-extrabold mt-3 mb-4">
        Empower • Connect • Build
      </h4>

      <p className="text-slate-300 leading-relaxed mb-6">
        We host workshops, launch online learning tracks, build partnerships,
        and support projects solving real problems across Africa. From Kano to
        Nairobi — we help local ideas become global protocols.
      </p>

      {/* Value grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-black/30 border border-green-800/10">
          <div className="font-semibold">Education</div>
          <div className="text-sm text-slate-300">
            Hands-on curricula that scale from beginners to builders.
          </div>
        </div>
        <div className="p-4 rounded-lg bg-black/30 border border-green-800/10">
          <div className="font-semibold">Networking</div>
          <div className="text-sm text-slate-300">
            Bridges between local talent and global opportunity.
          </div>
        </div>
        <div className="p-4 rounded-lg bg-black/30 border border-green-800/10">
          <div className="font-semibold">Incubation</div>
          <div className="text-sm text-slate-300">
            Support for early projects and founders.
          </div>
        </div>
        <div className="p-4 rounded-lg bg-black/30 border border-green-800/10">
          <div className="font-semibold">Events</div>
          <div className="text-sm text-slate-300">
            From grassroots meetups to major summits.
          </div>
        </div>
      </div>

      <div className="mt-8 text-xs text-slate-400">
        <strong>Our promise:</strong> No hype. No empty promises. Just truth,
        trust, and transparency.
      </div>

      {/* SVG background */}
      <svg
        className="absolute left-8 top-8 opacity-30 pointer-events-none"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden
      >
        <circle
          cx="80"
          cy="80"
          r="60"
          stroke="#064e3b"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <path
          d="M20 120 C40 40, 120 40, 140 120"
          stroke="#16a34a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}
