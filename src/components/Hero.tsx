import Link from 'next/link'
import GlassCard from './GlassCard'

export function Hero() {
  return (
    <section id="hero" className="section-wrapper flex flex-col gap-12 pb-16 pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pb-24">
      <GlassCard className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[var(--border)] bg-[var(--surface)]/80 p-1 text-3xl font-semibold text-[var(--accent)] shadow-glass lg:mx-0">
        <div className="flex h-full w-full items-center justify-center rounded-full border border-[var(--border)]/60 bg-black/40 text-3xl font-semibold text-[var(--accent)]">
          HK
        </div>
      </GlassCard>
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Software Engineer</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
          Building dependable platforms that connect data, teams, and customers.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)] md:text-xl">
          I design resilient backend services, integration pipelines, and cloud automations that keep product teams shipping without friction.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-900 transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:shadow-glass"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
