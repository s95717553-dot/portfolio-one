const stack = ["Next.js", "Tailwind CSS", "TypeScript", "React", "Node.js", "REST API", "Vercel"];

export default function TechStackPage() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Tech Stack</p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Foydalanadigan texnologiyalar</h1>
        <p className="text-slate-400">Quyidagi texnologiyalar men uchun doimiy ravishda ishlatiladigan asosiy vositalar.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item) => (
          <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-900/85 p-5 text-slate-200 transition hover:border-sky-500/30 hover:bg-slate-900/95">
            <h2 className="text-lg font-semibold">{item}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
