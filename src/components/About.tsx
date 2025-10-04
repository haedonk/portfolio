import { GlassCard } from './GlassCard'

export function About() {
  return (
<section id="about" className="section-wrapper py-16 lg:py-20">
  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)]">
    <GlassCard className="p-6 md:p-8">
      <h2 className="section-heading">About</h2>
      <p className="mt-4 leading-relaxed text-[var(--muted)]">
        I’m a backend engineer focused on <strong>building resilient, high-performance platforms</strong> that keep critical experiences online. 
        At <strong>PNC Bank</strong>, I design and maintain <strong>high-volume Java and Kafka microservices</strong> powering customer communications, 
        leading initiatives that improved scalability, reduced cost, and enhanced reliability across 50+ applications. 
        My approach combines <strong>disciplined engineering</strong>, deep system observability, and cross-team collaboration 
        to ship software that scales confidently and runs efficiently.
      </p>
    </GlassCard>

    <GlassCard className="p-6 md:p-8">
      <h3 className="text-xl font-semibold text-[var(--text)]">What I&apos;m focusing on</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
        <li><strong>Scaling</strong> Spring Boot and Kafka-based systems with intelligent autoscaling and lag-aware rebalancing.</li>
        <li><strong>Automating</strong> CI/CD pipelines and resilience testing to streamline deployments across OpenShift environments.</li>
        <li><strong>Optimizing</strong> data workflows and observability pipelines to improve insights and reduce operational overhead.</li>
      </ul>
    </GlassCard>
  </div>
</section>

  )
}
