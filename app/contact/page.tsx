"use client"

export default function ContactPage() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Contact</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Aloqa uchun yozing</h1>
          <p className="text-slate-400">Loyiha, hamkorlik yoki savollar bo‘yicha quyidagi shakl orqali xabar qoldiring.</p>
        </div>
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/85 p-6">
          <p className="text-slate-300">Men har doim yangi g'oyalar va hamkorlik imkoniyatlarini qadrlayman.</p>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <p>📍 Manzil: Fargona viloyati, Uchkoprik tumani, Miltiqchi qishlogi</p>
            <p>✉️ Email: s95717553@gmail.com</p>
            <p>💼 Rol: Full-stack / Frontend Developer</p>
          </div>
        </div>
      </div>
      <form className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/85 p-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">Ismingiz</label>
          <input type="text" placeholder="Ismingiz" className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
          <input type="email" placeholder="email@example.com" className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">Xabar</label>
          <textarea rows={5} placeholder="Sizga qanday yordam bera olishimni yozing" className="w-full rounded-3xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500"></textarea>
        </div>
        <button type="submit" className="inline-flex w-full justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Xabar yuborish
        </button>
      </form>
    </section>
  );
}
