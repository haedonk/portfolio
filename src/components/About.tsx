import GlassCard from './GlassCard'

export function About() {
  return (
    <section id="about" className="section-wrapper py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">About</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Pragmatic engineering with a focus on resilient systems.
        </h2>
        <GlassCard className="mt-8 p-6 md:p-8">
          <p className="text-base leading-7 text-[var(--muted)]">
            I help product teams translate business requirements into scalable infrastructure. From modernizing monoliths to
            orchestrating event-driven workflows, I specialize in crafting APIs, data integrations, and automation that make
            complex ecosystems feel effortless. Mentorship, documentation, and thoughtful tooling are core to how I keep teams
            moving quickly without sacrificing stability.
          </p>
        </GlassCard>
      </div>
    </section>
  )
}

export default About
