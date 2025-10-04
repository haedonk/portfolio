import Link from 'next/link'
import { Metadata } from 'next'
import { GlassCard } from '../../components/GlassCard'

export const metadata: Metadata = {
  title: 'Resume | Haedon Kaufman',
  description: 'Resume for Haedon Kaufman, backend engineer and integrations specialist.',
}

type Section = {
  title: string
  items: { heading: string; subheading?: string; meta?: string; bullets?: string[] }[]
}

const sections: Section[] = [
  {
    title: 'Experience',
    items: [
      {
        heading: 'Software Engineer · PNC Bank',
        meta: '2022 — Present · Remote',
        bullets: [
          'Deliver and maintain 50+ Java microservices handling 5k+ TPS for SMS banking experiences.',
          'Lead cloud migration of 15 legacy services onto OpenShift with automated resilience testing.',
          'Improve customer onboarding by 25% by launching auto-enrollment messaging flows.',
          'Developed automated integration and contract tests using Groovy/Spock and integrated SonarQube to enforce code quality and surface coverage metrics.',
        ],
      },
      {
        heading: 'Assistant Manager · The Libertine Pub',
        meta: '2021 — 2022 · San Luis Obispo, CA',
        bullets: [
          'Trained 90% of new staff on high-volume operations and guest experience standards.',
          'Reduced waste by 10% through updated measurement systems and supplier processes.',
        ],
      },
      {
        heading: 'Operations Coordinator · The Litigation Practice Group',
        meta: '2020 — 2021 · San Clemente, CA',
        bullets: [
          'Boosted productivity by 30% via scheduling policies and daily standups.',
          'Improved customer outcomes by 15% through trend analysis and reporting.',
        ],
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        heading: 'B.S. Computer Science',
        subheading: 'Oregon State University',
        meta: 'Expected 2025 · Artificial Intelligence & Cybersecurity',
      },
      {
        heading: 'A.S. Computer Science',
        subheading: 'Cuesta College',
        meta: '2022 · Focus on Java, Python, C, and discrete mathematics',
      },
    ],
  },
  {
    title: 'Core Skills',
    items: [
      {
        heading: 'Languages & Frameworks',
            bullets: ['Java', 'Groovy', 'Spring Boot', 'Node.js', 'TypeScript', 'SQL', 'Python'],
      },
      {
        heading: 'Platform & Tooling',
        bullets: ['Kubernetes', 'OpenShift', 'Kafka', 'Jenkins', 'Docker', 'Dynatrace', 'SonarQube'],
      },
    ],
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] pb-20 text-[var(--text)]">
      <header className="section-wrapper flex items-center justify-between py-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Resume</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--text)] md:text-4xl">Haedon Kaufman</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">haka9670@gmail.com · Pittsburgh, PA · linkedin.com/in/haedonkaufman</p>
        </div>
        <Link
          href="/"
          className="hidden rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition duration-200 ease-out hover:-translate-y-0.5 hover:text-[var(--text)] focus-visible:-translate-y-0.5 md:inline-flex"
        >
          Back home
        </Link>
      </header>
      <main className="section-wrapper space-y-6">
        {sections.map((section) => (
          <GlassCard key={section.title} className="p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--text)]">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.items.map((item) => (
                <div key={item.heading} className="space-y-1">
                  <h3 className="text-base font-semibold text-[var(--text)]">{item.heading}</h3>
                  {item.subheading && <p className="text-sm text-[var(--muted)]">{item.subheading}</p>}
                  {item.meta && <p className="text-sm text-[var(--muted)]">{item.meta}</p>}
                  {item.bullets && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--muted)]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </main>
    </div>
  )
}
