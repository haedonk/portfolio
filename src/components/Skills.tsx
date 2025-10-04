'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlassCard } from './GlassCard'
import { FilterKey, itemMatches, parseFiltersFromURL } from './filter-utils'

const skills = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'Node.js', 'REST APIs', 'Microservices', 'Pytorch'],
  },
  {
    title: 'DevOps',
    items: ['Kubernetes', 'OpenShift', 'Helm', 'Docker', 'Jenkins', 'CI/CD Automation', 'Google Cloud Platform'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Oracle', 'Kafka', 'Power BI', 'Elasticsearch', 'Logscale', 'Dynatrace'],
  },
  {
    title: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Design Systems', 'JavaScript'],
  },
]

export const highlights = [
  {
    title: 'Kubernetes — Scaling & Optimization',
    description:
      'Practical experience designing autoscaling and resource strategies to improve reliability and reduce cost. Focus areas include Horizontal Pod Autoscaler (HPA) for scaling pods by CPU/memory or custom metrics, Vertical Pod Autoscaler (VPA) for right-sizing pod resource requests, and using the Cluster Autoscaler for node-level scaling.',
    bullets: [
      'Horizontal vs. Vertical scaling: HPA (scale replicas) and VPA (adjust resource requests/limits).',
      'Autoscaling pods on CPU/memory and custom metrics (Prometheus adapter / external metrics).',
      'Resource requests & limits tuning to reduce throttling and optimize cluster utilization.',
      'Cluster Autoscaler and node sizing to balance cost and performance.',
      'Observability + readiness/liveness probes to ensure safe scaling and rollout behavior.',
    ],
  },
  {
    title: 'Kafka — High-Throughput Messaging & Reliability',
    description:
      'Extensive experience architecting and tuning Apache Kafka for mission-critical systems requiring high throughput, message durability, and real-time processing. Skilled in optimizing producer–consumer performance, managing backpressure, and ensuring data integrity across distributed clusters.',
    bullets: [
      'Designed and optimized Kafka topologies supporting 5k+ TPS across multi-microservice environments.',
      'Implemented partitioning strategies, consumer group balancing, and concurrency controls to maximize parallelism and minimize lag.',
      'Enabled dynamic scaling of Kafka consumer applications based on consumer lag and CPU utilization, using sticky assignors to prevent stop-the-world rebalances.',
      'Developed Kafka Connect integrations for ETL ingestion and data synchronization between databases and external APIs.',
      'Created retry, backoff, and dead-letter workflows ensuring guaranteed delivery and fault isolation.',
      'Applied fine-grained producer and consumer tuning (batch.size, linger.ms, fetch.min.bytes) to improve throughput and latency.',
      'Instrumented topic health monitoring and lag tracking with Dynatrace and custom metrics dashboards.',
    ],
  },
  {
    title: 'Spring Batch — Large-Scale Data Processing',
    description:
      'Proficient in designing scalable Spring Batch jobs for high-volume ETL and enrichment pipelines, enabling efficient, fault-tolerant data ingestion at enterprise scale.',
    bullets: [
      'Built parallelized file ingestion and transformation pipelines handling 4M+ records per run with chunk-oriented processing.',
      'Implemented partitioned step execution and asynchronous task scheduling for optimal performance.',
      'Integrated Spring Batch with Kafka Connectors for streaming and downstream data propagation.',
      'Created custom retry, skip, and checkpoint logic to ensure transactional consistency and graceful recovery.',
      'Optimized memory and commit intervals to balance throughput and stability during large-scale batch runs.',
    ],
  },
];

export function Skills() {
  const [filters, setFilters] = useState<Set<FilterKey>>(new Set())

  useEffect(() => {
    const applyFromUrl = () => setFilters(parseFiltersFromURL())
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<{ filters: FilterKey[] }>).detail
      if (detail?.filters) {
        setFilters(new Set(detail.filters))
      }
    }

    applyFromUrl()
    window.addEventListener('popstate', applyFromUrl)
    window.addEventListener('filterchange', onChange as EventListener)
    return () => {
      window.removeEventListener('popstate', applyFromUrl)
      window.removeEventListener('filterchange', onChange as EventListener)
    }
  }, [])

  const highlightsSorted = useMemo(() => {
    return highlights
      .map((item) => {
        const match = itemMatches([item.title, item.description, item.bullets], filters)
        return { item, match }
      })
      .sort((a, b) => Number(b.match) - Number(a.match))
  }, [filters])

  return (
    <section id="skills" className="section-wrapper py-16 lg:py-20">
      <div className="flex flex-col gap-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">Skills</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Tools and technologies I use to deliver reliable, observable, and secure software.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => (
            <GlassCard key={group.title} className="flex flex-col gap-4 p-6">
              <h3 className="text-lg font-semibold text-[var(--text)]">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="mt-10 space-y-6">
          <AnimatePresence initial={false}>
            {highlightsSorted.map(({ item, match }) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: match ? 1 : 0.6, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
              >
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                    {item.bullets.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
