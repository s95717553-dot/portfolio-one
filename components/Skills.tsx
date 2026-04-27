"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skills = [
   "HTML5", "CSS","JavaScript","Next.js", "React", "TypeScript", "Tailwind CSS",  "Node.js", 
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.6, ease: "easeOut" as const, delay: 0.5 };

export default function Skills() {
  return (
    <section className="space-y-8">
      <motion.div
        className="space-y-3"
        {...fadeInUp}
        transition={transition}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Skills</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Texnologiyalar va Ko'nikmalar</h2>
        <p className="max-w-3xl text-slate-400">
          Men dasturlash sohasidagi tajribam bilan yuqori sifatli loyihalar yarataman.
        </p>
      </motion.div>

      <div className="glass-panel rounded-[2.5rem] border border-white/10 p-8 overflow-hidden">
        <Marquee gradient={false} speed={50} className="text-2xl font-semibold text-slate-200">
          {skills.map((skill, index) => (
            <span key={skill} className="mx-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {skill}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}