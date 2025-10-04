import { GlassCard } from './GlassCard'

interface Project {
  title: string
  summary: string
  stack: string[]
  achievements: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'Recipe AI Platform',
    summary:
      'Semantic recipe discovery engine with ingestion pipeline for 200k+ records and personalized search results.',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Vector Embeddings'],
    achievements: [
      'Processed 200k+ recipes via Spring Batch with automated data quality checks.',
      'Reduced search latency by 45% using vector indexes and query caching.',
      'Optimized AI costs by 30% through prompt engineering and response filtering.',
    ],
    links: [
      { label: 'Live', href: 'https://recipes.haedonkaufman.com' },
      { label: 'GitHub', href: 'https://github.com/haedonk/recipe-ai' },
    ],
  },
  {
    title: 'SMS Banking Integrations',
    summary: 'Modernized messaging services powering multi-channel customer notifications at PNC Bank.',
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'OpenShift'],
    achievements: [
      'Handled 5k+ transactions per second with resilient consumer groups and short circuiting.',
      'Implemented OAuth2 security and observability patterns across 50+ microservices.',
      'Cut incident response time by 30% through Dynatrace dashboards and runbooks.',
    ],
    links: [
    ],
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-wrapper py-16 lg:py-20">
      <div className="flex flex-col gap-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">Projects</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Selected work showcasing delivery of stable, data-informed platforms.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <GlassCard key={project.title} className="flex h-full flex-col justify-between p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--text)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--surface)] hover:shadow-lg hover:shadow-black/40 focus-visible:-translate-y-0.5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
