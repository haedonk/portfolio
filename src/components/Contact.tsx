import { GlassCard } from './GlassCard'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haedonkaufman/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.4v1.56h.05c.47-.89 1.63-1.83 3.36-1.83 3.59 0 4.25 2.36 4.25 5.43v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.57V9h3.55v11.45Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/haedonk',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.33 1.2-3.16-.12-.3-.52-1.51.12-3.16 0 0 .98-.31 3.2 1.21a11.1 11.1 0 0 1 5.82 0c2.22-1.52 3.2-1.21 3.2-1.21.64 1.65.24 2.86.12 3.16a4.5 4.5 0 0 1 1.2 3.16c0 4.49-2.75 5.48-5.36 5.77.42.37.79 1.1.79 2.23v3.3c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-wrapper py-16 lg:py-20">
      <GlassCard className="flex flex-col items-center gap-6 p-6 text-center md:p-10">
        <h2 className="section-heading">Let&apos;s connect</h2>
        <p className="max-w-2xl leading-7 text-[var(--muted)]">
          I enjoy collaborating on backend-heavy products, data-driven experiences, and platform enablement. Reach out to talk
          about roles, projects, or mentoring.
        </p>
        <a
          href="mailto:haedonkaufman@gmail.com"
          className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#031422] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 focus-visible:-translate-y-0.5"
        >
          Email me
        </a>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--muted)] transition duration-200 ease-out hover:-translate-y-0.5 hover:text-[var(--text)] focus-visible:-translate-y-0.5"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </GlassCard>
    </section>
  )
}
