import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Projects</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Asosiy loyihalarim</h1>
        <p className="text-slate-400">Quyida mening amalga oshirgan loyihalarimning qisqacha ko‘rinishi.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            tech={project.tech}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
