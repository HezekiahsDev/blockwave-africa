"use client";

import React, { JSX } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/HeroSection";
import MissionAndManifesto from "@/components/sections/MissionAndManifesto";
import Value from "@/components/sections/Value";
import Programs from "@/components/sections/Programs";
import Events from "@/components/sections/Events";
import Team from "@/components/sections/Team";

export default function Page(): JSX.Element {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-slate-100 pt-0 pb-16">
        {/* Hero section */}
        <section id="hero" aria-label="Hero" className="w-full  ">
          <Hero />
        </section>

        {/* About section: Manifesto + Mission */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="w-full  "
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <h2 id="about-heading" className="sr-only">
              About Blockwave
            </h2>
            <MissionAndManifesto />
          </div>
        </section>

        {/* Value section is a self-contained <section> inside the component */}
        <Value />

        {/* Additional sections */}
        <Programs />
        <Events />
        <Team />
      </main>

      <Footer />

      {/* Animations moved to global CSS for cross-component usage */}
    </>
  );
}
