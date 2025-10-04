import { GlassCard } from './GlassCard'

const skills = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'DevOps',
    items: ['Kubernetes', 'OpenShift', 'Docker', 'Jenkins', 'CI/CD Automation'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Oracle', 'Kafka', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Design Systems'],
  },
]

export function Skills() {
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
      </div>
    </section>
  )
}
