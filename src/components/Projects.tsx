import Link from 'next/link'
import GlassCard from './GlassCard'

const projects = [
  {
    title: 'Recipe AI Platform',
    summary: 'Semantic recipe discovery with automated data processing and personalized suggestions.',
    tech: ['Spring Boot', 'PostgreSQL', 'Angular', 'Together AI', 'Docker'],
    highlights: [
      'Processed 100k+ recipes with batch normalization to improve query speed by 35%.',
      'Embedded semantic search delivering 92% match accuracy for natural language prompts.',
      'CI/CD pipelines ship weekly updates with automated regression checks.',
    ],
    live: 'https://recipes.haedonkaufman.com',
    source: 'https://github.com/haedonkaufman/recipe-ai',
  },
  {
    title: 'SMS Banking Modernization',
    summary: 'Enterprise modernization of legacy messaging platform for 5M+ customers.',
    tech: ['Java', 'Spring', 'Kafka', 'OpenShift', 'Dynatrace'],
    highlights: [
      'Migrated 15+ services to event-driven architecture, reducing outages by 40%.',
      'Implemented observability stack that cut incident triage time from hours to minutes.',
      'Achieved 5k TPS throughput with horizontal scaling and resilient retry strategies.',
    ],
    live: undefined,
    source: undefined,
  },
  {
    title: 'Integration Ops Toolkit',
    summary: 'Internal developer tooling for onboarding partners and automating QA environments.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Jenkins', 'Terraform'],
    highlights: [
      'Provisioned isolated test environments in under 10 minutes via reusable templates.',
      'Centralized partner configs with audit history, eliminating spreadsheet drift.',
      'Reduced deployment feedback loop by 60% using contract testing harnesses.',
    ],
    live: undefined,
    source: undefined,
  },
  {
    title: 'Incident Insights Dashboard',
    summary: 'Operational analytics dashboard tracking service health and customer impact.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vitest'],
    highlights: [
      'Unified telemetry feeds into a single glass-card view with prioritized alerts.',
      'Built drill-down analytics for root cause analysis across teams.',
      'Improved leadership reporting cadence from weekly to daily with automated exports.',
    ],
    live: undefined,
    source: 'https://github.com/haedonkaufman/incident-insights',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-wrapper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Selected work delivering measurable outcomes.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map(project => (
            <GlassCard key={project.title} className="flex h-full flex-col p-6 md:p-8">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                    <p className="mt-2 text-base text-[var(--muted)]">{project.summary}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="rounded-xl border border-[var(--border)]/70 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 text-left text-sm text-[var(--muted)]">
                  {project.highlights.map(highlight => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-4 py-2 text-[var(--text)] transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Live
                  </Link>
                )}
                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-4 py-2 text-[var(--text)] transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
