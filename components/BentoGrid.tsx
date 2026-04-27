"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bentoCards = [
  {
    title: "Premium Visual Identity",
    description: "Glassmorphism, gradient matn va nozik effektlar bilan brendingizga zamonaviy ko'rinish bering.",
    className: "lg:col-span-4 lg:row-span-2",
    image: "/project1.jpg", // Placeholder, replace with actual
    video: null,
  },
  {
    title: "Creative Web Developer",
    description: "Sizning veb-ismlaringiz va loyihalaringizni yuqori sifatli dizayn bilan namoyish eting.",
    className: "lg:col-span-2 lg:row-span-1",
    image: "/project2.jpg",
    video: null,
  },
  {
    title: "Responsive Experience",
    description: "Har bir loyiha har bir ekran o'lchamida chiroyli va intuitiv ko'rinadi.",
    className: "lg:col-span-2 lg:row-span-1",
    image: "/project3.jpg",
    video: null,
  },
  {
    title: "Highlighted Projects",
    description: "Bento grid dizayni bilan sizning eng yaxshi ishlaringiz ko'zni o'ziga tortadi.",
    className: "lg:col-span-4 lg:row-span-1",
    image: "/project4.jpg",
    video: null,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition8 = { duration: 0.6, ease: "easeOut", delay: 0.5 };
const transition9 = { duration: 0.6, ease: "easeOut", delay: 0.6 };
const transition10 = { duration: 0.6, ease: "easeOut", delay: 0.7 };
const transition11 = { duration: 0.6, ease: "easeOut", delay: 0.8 };
const transition12 = { duration: 0.6, ease: "easeOut", delay: 0.9 };

export default function BentoGrid() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <motion.p
          className="text-sm uppercase tracking-[0.28em] text-sky-300/80"
          {...fadeInUp}
          transition={transition8}
        >
          Bento Grid
        </motion.p>
        <motion.h2
          className="text-3xl font-semibold text-white sm:text-4xl"
          {...fadeInUp}
          transition={transition9}
        >
          Top loyihalarimning noyob namoyishi
        </motion.h2>
        <motion.p
          className="max-w-3xl text-slate-400"
          {...fadeInUp}
          transition={transition10}
        >
          Har bir blok bir xil emas — har biri o'ziga xos o'lcham va fokusga ega. Bu sizning loyihalaringizni premium uslubda taqdim etadi.
        </motion.p>
      </div>

      <div className="grid gap-5 lg:grid-cols-6 lg:grid-rows-[220px_220px]">
        {bentoCards.map((card, index) => {
          const cardTransitions = [transition11, transition12, { duration: 0.6, ease: "easeOut", delay: 1.0 }, { duration: 0.6, ease: "easeOut", delay: 1.1 }];
          return (
            <motion.article
              key={card.title}
              className={`glass-card relative overflow-hidden p-6 transition duration-500 hover:scale-105 ${card.className}`}
              {...fadeInUp}
              transition={cardTransitions[index] || transition11}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%)] opacity-70" />
              {card.image && (
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
              <div className="relative space-y-4 z-10">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Featured</p>
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="text-slate-300">{card.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}