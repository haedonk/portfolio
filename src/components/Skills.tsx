import GlassCard from './GlassCard'

const skillGroups = [
  {
    name: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'GraphQL', 'REST APIs'],
  },
  {
    name: 'DevOps',
    items: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'CI/CD', 'Terraform'],
  },
  {
    name: 'Data',
    items: ['PostgreSQL', 'Oracle', 'Kafka', 'Redis', 'Airflow', 'dbt'],
  },
  {
    name: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Storybook', 'Testing Library'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-wrapper py-16 lg:py-20">
      <div className="mx-auto max-w-5xl text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Cross-functional experience from API design to deployment.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map(group => (
            <GlassCard key={group.name} className="p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[var(--text)]">{group.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="rounded-xl border border-[var(--border)]/80 bg-white/5 px-3 py-1 text-sm font-medium text-[var(--muted)]"
                  >
                    {item}
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

export default Skills
