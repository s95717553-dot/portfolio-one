"use client"

import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import Skills from "../components/Skills";
import ExperienceTimeline from "../components/ExperienceTimeline";

/**
 * Main Portfolio Homepage
 * 
 * This page combines all components into one complete portfolio:
 * 1. Hero - 3D animated hero section
 * 2. BentoGrid - Projects showcase with links
 * 3. Skills - Marquee scrolling skills
 * 4. ExperienceTimeline - Scroll-triggered experience
 */

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section - 3D Animation, Magnetic Button, Text Reveal */}
      <Hero />

      {/* Projects Bento Grid - Apple Style with Image Zoom and Links */}
      <BentoGrid />

      {/* Skills Marquee - Continuous scrolling animation */}
      <Skills />

      {/* Experience Timeline - Scroll triggered animation */}
      <ExperienceTimeline />

      {/* Optional: Add CTA Section */}
      <section className="glass-panel rounded-[2.5rem] border border-white/10 p-12 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.85)]">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Keling, birgalikda ishlaylik! 🚀
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            Sizning loyihangizni hayotga o'tkazish uchun men siz bilan ishga tayyor'man.
            Bog'lanish uchun quyidagi tugmani bosing.
          </p>
          <a
            href="/contact"
            className="inline-flex rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Bog'lanish Uchun
          </a>
        </div>
      </section>
    </div>
  );
}
