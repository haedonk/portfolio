import Link from 'next/link'
import { GlassCard } from './GlassCard'

export function Hero() {
  return (
    <section id="top" className="section-wrapper pt-24 pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1.1fr)] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <GlassCard className="flex h-32 w-32 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-3xl font-semibold text-[var(--text)] shadow-glass">
            HK
          </GlassCard>
        </div>
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--muted)]">Backend Engineer & Integrations Specialist</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
              Building resilient platforms that keep critical experiences online
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              I design and ship backend services, integrations, and data pipelines that are scalable, observable, and effortless for teams to operate.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#031422] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 focus-visible:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--surface)] hover:shadow-lg hover:shadow-black/40 focus-visible:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
