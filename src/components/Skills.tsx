import { GlassCard } from './GlassCard'

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
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-[var(--text)]">Kubernetes — Scaling & Optimization</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Practical experience designing autoscaling and resource strategies to improve reliability and reduce cost.
            Focus areas include Horizontal Pod Autoscaler (HPA) for scaling pods by CPU/memory or custom metrics, Vertical
            Pod Autoscaler (VPA) for right-sizing pod resource requests, and using the Cluster Autoscaler for node-level
            scaling.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
            <li>Horizontal vs. Vertical scaling: HPA (scale replicas) and VPA (adjust resource requests/limits).</li>
            <li>Autoscaling pods on CPU/memory and custom metrics (Prometheus adapter / external metrics).</li>
            <li>Resource requests & limits tuning to reduce throttling and optimize cluster utilization.</li>
            <li>Cluster Autoscaler and node sizing to balance cost and performance.</li>
            <li>Observability + readiness/liveness probes to ensure safe scaling and rollout behavior.</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
