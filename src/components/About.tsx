import { GlassCard } from './GlassCard'

export function About() {
  return (
    <section id="about" className="section-wrapper py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)]">
        <GlassCard className="p-6 md:p-8">
          <h2 className="section-heading">About</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            I help product and platform teams modernize backend systems, design reliable APIs, and automate operations. At PNC
            Bank I maintain high-volume banking services, streamline deployments, and own incident response for customer-facing
            communications. My approach mixes disciplined engineering with collaborative delivery so teams can move with
            confidence.
          </p>
        </GlassCard>
        <GlassCard className="p-6 md:p-8">
          <h3 className="text-xl font-semibold text-[var(--text)]">What I&apos;m focusing on</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-[var(--muted)]">
            <li>Scaling Spring Boot services with resilient messaging and observability.</li>
            <li>Automating CI/CD pipelines that deliver secure builds across environments.</li>
            <li>Leveraging data workflows to unlock insights and personalization.</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
