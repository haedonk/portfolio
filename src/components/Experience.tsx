"use client"

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { GlassCard } from './GlassCard'
import { FilterKey, itemMatches, parseFiltersFromURL } from './filter-utils'

type Role = {
  company: string
  title: string
  period: string
  location: string
  achievements: string[]
}

const roles: Role[] = [
  {
    company: 'PNC Bank',
    title: 'Software Engineer',
    period: '2022 — Present',
    location: 'Remote',
    achievements: [
    'Delivered and maintained 50+ Java microservices handling 5k+ TPS for enterprise SMS banking.',
    'Solely designed and implemented a new bulk messaging platform using Spring Batch and Kafka, reducing end-to-end processing time from 7 hours to 1.5 hours while scaling to 4M+ records.',
    'Integrated Resilience4j circuit breakers to enhance fault tolerance and failover handling for high-throughput messaging pipelines.',
    'Analyzed cluster-wide resource usage and reduced total JVM and memory consumption by 200GB through autoscaling optimization, profiling, and performance analytics.',
    'Led the cloud migration of 15 legacy services to OpenShift with automated resilience and load testing pipelines.',
    'Improved customer onboarding by 25% by launching auto-enrollment and proactive messaging flows.',
    'Enhanced observability and incident response through Dynatrace dashboards, distributed tracing, and runbook automation.',
    'Adopted AI-assisted tools (Copilot, Codex) to streamline development, improve test coverage generation, and maintain consistent code documentation across Java and Python services.',
    ],
  },
  {
    company: 'The Libertine Pub',
    title: 'Assistant Manager',
    period: '2021 — 2022',
    location: 'San Luis Obispo, CA',
    achievements: [
      'Trained 90% of new staff on high-volume operations and guest experience standards.',
      'Cut waste by 10% through measurement systems and supplier process updates.',
    ],
  },
  {
    company: 'The Litigation Practice Group',
    title: 'Operations Coordinator',
    period: '2020 — 2021',
    location: 'San Clemente, CA',
    achievements: [
      'Boosted productivity by 30% via scheduling policies and daily standups.',
      'Improved customer outcomes by 15% through trend analysis and reporting.',
    ],
  },
]

export function Experience() {
  const [filters, setFilters] = useState<Set<FilterKey>>(() => parseFiltersFromURL())

  useEffect(() => {
    const onPop = () => setFilters(parseFiltersFromURL())
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { filters: FilterKey[] } | undefined
      if (detail?.filters) setFilters(new Set(detail.filters))
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('filterchange', onChange as EventListener)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('filterchange', onChange as EventListener)
    }
  }, [])

  const rolesSorted = useMemo(() => {
    return roles
      .map((r) => {
        const match = itemMatches([r.company, r.title, r.location, r.achievements], filters)
        return { r, match }
      })
      .sort((a, b) => Number(b.match) - Number(a.match))
  }, [filters])

  return (
    <section id="experience" className="section-wrapper py-16 lg:py-20">
      <div className="max-w-3xl">
        <h2 className="section-heading">Experience</h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          A track record of owning outcomes, mentoring teams, and elevating operations.
        </p>
      </div>
      <div className="mt-8 space-y-6">
        <AnimatePresence initial={false}>
          {rolesSorted.map(({ r, match }) => (
            <motion.div
              key={r.company + r.period}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: match ? 1 : 0.6, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ type: 'spring', stiffness: 420, damping: 36 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)]">{r.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{r.company} · {r.location}</p>
                  </div>
                  <p className="text-sm font-medium text-[var(--muted)]">{r.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
                  {r.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
