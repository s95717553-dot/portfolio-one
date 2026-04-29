"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Code, MessageCircle, ExternalLink } from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition1 = { duration: 0.6, ease: "easeOut" as const, delay: 0.1 };
const transition2 = { duration: 0.6, ease: "easeOut" as const, delay: 0.2 };
const transition3 = { duration: 0.6, ease: "easeOut" as const, delay: 0.3 };
const transition4 = { duration: 0.6, ease: "easeOut" as const, delay: 0.4 };
const transition5 = { duration: 0.6, ease: "easeOut" as const, delay: 0.5 };
const transition6 = { duration: 0.6, ease: "easeOut" as const, delay: 0.6 };
const transition7 = { duration: 0.6, ease: "easeOut" as const, delay: 0.7 };

// Text reveal animation
const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.05,
    },
  }),
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const titleText = "Salohiddin Sobirov";
  const titleChars = titleText.split("");

  return (
    <section
      className="glass-panel overflow-hidden rounded-[2.5rem] border border-white/10 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.85)]"
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-sky-300/90"
              {...fadeInUp}
              transition={transition1}
            >
              Premium Portfolio
            </motion.p>

            {/* Text Reveal Animation for Title */}
            <motion.h1 className="text-5xl font-semibold tracking-tight text-white sm:text-5xl flex flex-wrap gap-2">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={textRevealVariants}
                  className="bg-gradient-to-r from-gold-400 via-orange-500 to-gold-600 bg-clip-text text-transparent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-3xl font-semibold text-slate-200/90"
              {...fadeInUp}
              transition={transition3}
            >
              Creative Web Developer
            </motion.p>
          </div>

          <motion.p
            className="max-w-2xl text-slate-300/85 leading-8"
            {...fadeInUp}
            transition={transition4}
          >
            Men dasturlash va marketing (SMM, copywriting) sohasini birlashtirib, mijozlarni jalb qiladigan kreativ va kuchli veb-loyihalar yarataman. Har bir interfeys o'ziga xos, chiroyli va foydalanuvchi uchun qulay bo'lishiga e'tibor beraman.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            {...fadeInUp}
            transition={transition5}
          >
            <MagneticButton href="/projects">Loyihalarim</MagneticButton>
            <Link href="/contact" className="inline-flex rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500">
              Aloqa qilish
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-4"
            {...fadeInUp}
            transition={transition6}
          >



          </motion.div>
        </div>

        <motion.div
          className="glass-card relative overflow-hidden p-6 text-slate-200"
          {...fadeInUp}
          transition={transition7}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_40%)]" />
          <div className="relative space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Overview</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Premium glassmorphism look</h2>
              <p className="mt-3 text-slate-400">Hero, kartochkalar va navbar uchun nozik, qattiq ko'rinishga ega effekt.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Design</p>
                <p className="mt-3 text-sm text-slate-300">Glass, gradient va texturani uyg'unlashtiradigan sahifa.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Motion</p>
                <p className="mt-3 text-sm text-slate-300">Yumshoq animatsiyalar sahifa yuklanishida yanada yoqimli tajriba beradi.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
        {children}
      </Link>
    </motion.div>
  );
}