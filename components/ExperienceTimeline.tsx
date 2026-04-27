"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2022",
    title: "Marketing Specialist",
    description: "SMM va copywriting bo'yicha mijozlar uchun strategiyalar ishlab chiqdim.",
  },
  {
    year: "2023",
    title: "Web Developer",
    description: "Next.js va React bilan birinchi loyihalarimni yaratdim.",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    description: "Marketing va dasturlashni birlashtirib, kompleks loyihalar ustida ishladim.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.6, ease: "easeOut" as const, delay: 0.5 };

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="space-y-8">
      <motion.div
        className="space-y-3"
        {...fadeInUp}
        transition={transition}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Experience</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Tajribam</h2>
        <p className="max-w-3xl text-slate-400">
          Marketing va dasturlash sohasidagi yo'lim.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
        <motion.div
          className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"
          style={{ height }}
        ></motion.div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className="relative flex items-start gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center text-white font-semibold">
                {exp.year}
              </div>
              <div className="glass-card p-6 flex-1">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-slate-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}