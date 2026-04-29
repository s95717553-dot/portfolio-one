"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
 import { ExternalLink,  } from "lucide-react";
import { projects } from "@/data/projects";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition8 = { duration: 0.6, ease: "easeOut" as const,  delay: 0.5 };
const transition9 = { duration: 0.6, ease: "easeOut" as const, delay: 0.6 };
const transition10 = { duration: 0.6, ease: "easeOut" as const, delay: 0.7 };
const transition11 = { duration: 0.6, ease: "easeOut" as const, delay: 0.8 };
const transition12 = { duration: 0.6, ease: "easeOut"as const, delay: 0.9 };

export default function BentoGrid() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const getGridClass = (index: number) => {
    const classes = [
      "lg:col-span-4 lg:row-span-2",
      "lg:col-span-2 lg:row-span-1",
      "lg:col-span-2 lg:row-span-1",
      "lg:col-span-4 lg:row-span-1",
      "lg:col-span-2 lg:row-span-1",
      "lg:col-span-2 lg:row-span-1",
    ];
    return classes[index % classes.length] || "lg:col-span-2 lg:row-span-1";
  };

  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <motion.p
          className="text-sm uppercase tracking-[0.28em] text-sky-300/80"
          {...fadeInUp}
          transition={transition8}
        >
          Featured Projects
        </motion.p>
        <motion.h2
          className="text-3xl font-semibold text-white sm:text-4xl"
          {...fadeInUp}
          transition={transition9}
        >
          Mening yaratgan loyihalarim
        </motion.h2>
        <motion.p
          className="max-w-3xl text-slate-400"
          {...fadeInUp}
          transition={transition10}
        >
          Har bir loyiha professional uslubda va zamonaviy texnologiyalardan foydalanib yaratilgan. Shu yerda mening eng yaxshi ishlari taqdim etilgan.
        </motion.p>
      </div>

      <div className="grid gap-5 lg:grid-cols-6 lg:grid-rows-auto">
        {allProjects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`group glass-card relative overflow-hidden p-6 transition duration-500 hover:scale-105 cursor-pointer ${getGridClass(index)}`}
            {...fadeInUp}
            transition={
              index === 0
                ? transition11
                : index === 1
                  ? transition12
                  : { duration: 0.6, ease: "easeOut", delay: 1.0 + index * 0.1 }
            }
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%)] opacity-70" />

            {/* Image with Zoom Effect */}
            {project.image && (
              <motion.div
                className="absolute inset-0 overflow-hidden"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                 
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />
              </motion.div>
            )}

            {/* Content */}
            <div className="relative space-y-4 z-10 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">
                  {project.featured ? "Featured" : "Project"}
                </p>
                <h3 className="text-xl font-semibold text-white line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-slate-300 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-800/50 text-sky-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs bg-slate-800/50 text-slate-400 px-2 py-1 rounded-full">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 px-3 py-2 rounded-lg transition"
                >
                   <ExternalLink className="w-4 h-4" /> 
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 px-3 py-2 rounded-lg transition"
                >
                  Code
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}