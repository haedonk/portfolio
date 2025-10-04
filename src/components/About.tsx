'use client'
import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'
import useActiveFilters from './useActiveFilters'

export function About() {
  const filters = useActiveFilters()
  const active = filters.size > 0

  return (
    <motion.section
      id="about"
      layout
      animate={{
        height: active ? 0 : 'auto',
        opacity: active ? 0 : 1,
        marginTop: active ? 0 : undefined,
        marginBottom: active ? 0 : undefined,
      }}
      style={{
        overflow: active ? 'hidden' : undefined,
        pointerEvents: active ? 'none' : 'auto',
      }}
      className="section-wrapper py-16 lg:py-20"
    >
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
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            I actively integrate <strong>AI-assisted development tools</strong> into my workflow, including GitHub Copilot in IntelliJ, PyCharm, and VS Code, as well as OpenAI Codex for rapid prototyping and documentation. This enables me to accelerate boilerplate creation, maintain focus on architecture and logic, and deliver production-quality solutions faster.
          </p>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <h3 className="text-xl font-semibold text-[var(--text)]">What I&apos;m focusing on</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
            <li>
              <strong>Scaling</strong> Spring Boot and Kafka-based systems with intelligent autoscaling and lag-aware rebalancing.
            </li>
            <li>
              <strong>Automating</strong> CI/CD pipelines and resilience testing to streamline deployments across OpenShift environments.
            </li>
            <li>
              <strong>Optimizing</strong> data workflows and observability pipelines to improve insights and reduce operational overhead.
            </li>
            <li>
              <strong>Leveraging</strong> AI-assisted tools like GitHub Copilot and Codex to accelerate development and maintain code quality.
            </li>
          </ul>
        </GlassCard>
      </div>
    </motion.section>
  )
}
