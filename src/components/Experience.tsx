import GlassCard from './GlassCard'

type ExperienceItem = {
  role: string
  company: string
  period: string
  achievements: string[]
}

const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'PNC Bank',
    period: '2022 – Present',
    achievements: [
      'Led modernization of SMS banking services across 15+ applications, increasing platform stability by 40%.',
      'Delivered 5,000+ TPS throughput microservices with resilient Kafka processing and automated failover.',
      'Streamlined CI/CD with Jenkins, cutting deployment lead time from hours to minutes.',
    ],
  },
  {
    role: 'Assistant Manager',
    company: 'The Libertine Pub',
    period: '2021 – 2022',
    achievements: [
      'Standardized training that ramped 90% of new hires within two weeks.',
      'Reduced operational waste by 10% through inventory controls and analytics.',
    ],
  },
  {
    role: 'Operations Coordinator',
    company: 'The Litigation Practice Group',
    period: '2020 – 2021',
    achievements: [
      'Optimized scheduling and reporting workflows, improving productivity by 30%.',
      'Delivered actionable insights that improved customer outcomes by 15%.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-wrapper py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Impact through steady delivery and intentional collaboration.
        </h2>
        <div className="mt-8 space-y-6">
          {experience.map(item => (
            <GlassCard key={`${item.company}-${item.role}`} className="p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{item.role}</h3>
                  <p className="text-sm font-medium text-[var(--muted)]">{item.company}</p>
                </div>
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                {item.achievements.map(achievement => (
                  <li key={achievement} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
