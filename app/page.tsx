"use client"

import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import Skills from "../components/Skills";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <BentoGrid />
      <Skills />
      <ExperienceTimeline />
    </div>
  );
}