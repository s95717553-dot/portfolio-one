export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  image: string;
}

export default function ProjectCard({ title, description, tech, image }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/90 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/95">
      <div className="h-56 overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Project</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
        </div>
        <p className="text-slate-400">{description}</p>
        <p className="text-sm text-slate-500">{tech}</p>
      </div>
    </article>
  );
}
