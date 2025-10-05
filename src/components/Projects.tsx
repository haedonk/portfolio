'use client'
import { LayoutGroup } from 'framer-motion'
import MotionCard from './MotionCard'
import useActiveFilters from './useActiveFilters'
import { matches } from './match'
import { GlassCard } from './GlassCard'
import type { CardItem } from './ResultsShelf'

interface Project {
  id: string
  title: string
  summary: string
  stack: string[]
  achievements: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    id: 'bulk-messaging-system',
    title: 'Bulk Messaging System',
    summary:
      'High-throughput batch and Kafka-based messaging system replacing legacy ETL workflows for large-scale customer notifications at PNC Bank.',
    stack: ['Java 17', 'Spring Batch', 'Kafka', 'OpenShift', 'Microsoft Graph'],
    achievements: [
      'Solely designed and implemented the entire system end-to-end, from ingestion to delivery.',
      'Built a Spring Batch pipeline to read and process 4M+ records from SharePoint via Microsoft Graph API in parallel.',
      'Engineered concurrent API calls for customer phone retrieval and database inserts, optimizing I/O throughput.',
      'Integrated Kafka connectors to stream records directly from the database into topics for real-time processing.',
      'Developed a bulk messaging Kafka consumer capable of processing 4M+ records in 1.5 hours (legacy ETL: 100K in 2 hours; ~53× faster).',
      'Architected fault-tolerant job recovery and retry mechanisms ensuring data consistency across parallel tasks.',
      'Deployed and monitored the system on OpenShift, achieving a 7× performance improvement and sustained operational reliability.',
    ],
    links: [],
  },
  {
    id: 'sms-banking-integrations',
    title: 'SMS Banking Integrations',
    summary: 'Modernized messaging services powering multi-channel customer notifications at PNC Bank.',
    stack: ['Java 21', 'Spring Boot', 'Kafka', 'OpenShift'],
    achievements: [
      'Handled 5k+ transactions per second with resilient Kafka consumer groups and short-circuiting patterns.',
      'Implemented OAuth2 security and observability standards across 50+ microservices.',
      'Reduced incident response time by 30% via Dynatrace dashboards and automated runbooks.',
      'Upgraded legacy applications from Java 8 → 17 → 21, leveraging language-level optimizations and improved GC tuning.',
      'Integrated Resilience4j circuit breakers and backoff policies to harden high-throughput pipelines and eliminate stop-the-world rebalances.',
      'Reduced cluster memory footprint by 200GB through autoscaling strategy design, resource tuning, and performance profiling.',
    ],
    links: [],
  },
  {
    id: 'recipe-ai-platform',
    title: 'Recipe AI Platform',
    summary:
      'Semantic recipe discovery engine with ingestion pipeline for 200k+ records and personalized search results.',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'pgvector / Embeddings'],
    achievements: [
      'Processed 200k+ recipes via Spring Batch with automated data quality checks and validation rules.',
      'Developed scalable ingestion and enrichment pipelines using Spring Boot and PostgreSQL with pgvector for semantic search.',
      'Implemented embedding generation workflows using OpenAI and local models (BGE-base, Llama 3) for vector similarity ranking.',
      'Reduced search latency by 45% through vector indexing, caching, and optimized query strategies.',
      'Optimized AI cost by 30% via prompt tuning, token aggregation, and request batching.',
      'Designed RESTful APIs for semantic search, filtering, and recipe recommendations.',
      'Integrated Angular frontend for interactive, low-latency semantic exploration of recipes.',
      'Implemented batch failure logging and retry workflows for resilient large-scale data processing.',
    ],
    links: [
      { label: 'Live', href: 'https://recipes.haedonkaufman.com' },
      { label: 'GitHub', href: 'https://github.com/haedonk/recipe-ai' },
    ],
  },
]

export const projectCardItems: CardItem[] = projects.map((project) => ({
  id: `project-${project.id}`,
  title: project.title,
  texts: [project.title, project.summary, project.stack, project.achievements],
  render: () => (
    <GlassCard className="flex h-full flex-col justify-between p-6">
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
      {project.links.length > 0 && (
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
      )}
    </GlassCard>
  ),
}))

export function Projects({ items = projectCardItems }: { items?: CardItem[] }) {
  const filters = useActiveFilters()
  const active = filters.size > 0

  if (active) return null

  return (
    <section id="projects" className="section-wrapper py-16 lg:py-20">
      <div className="flex flex-col gap-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">Projects</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Selected work showcasing delivery of stable, data-informed platforms.
          </p>
        </div>
        <LayoutGroup>
          <div className="grid gap-6 lg:grid-cols-2">
            {items.map((it) => {
              const isMatch = matches(it.texts, filters)
              return (
                <MotionCard
                  key={it.id}
                  id={it.id}
                  dimmed={active && !isMatch}
                  collapsed={active && !isMatch}
                >
                  {it.render()}
                </MotionCard>
              )
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}
