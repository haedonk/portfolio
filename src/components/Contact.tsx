import Link from 'next/link'
import GlassCard from './GlassCard'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haedonkaufman',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.27 2.372 4.27 5.458v6.285z" />
        <path d="M5.337 7.433a2.062 2.062 0 112.062-2.062 2.062 2.062 0 01-2.062 2.062z" />
        <path d="M6.94 20.452H3.731V9H6.94z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/haedonkaufman',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2a10 10 0 00-3.162 19.492c.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.776.603-3.362-1.338-3.362-1.338-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.218-.253-4.555-1.109-4.555-4.943 0-1.091.39-1.985 1.029-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.684 0 3.842-2.34 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48A10 10 0 0012 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-wrapper py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Let’s collaborate on your next launch.
        </h2>
        <GlassCard className="mt-8 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-left">
              <p className="text-base leading-7 text-[var(--muted)]">
                Prefer email? I usually respond within one business day and am happy to schedule a deeper conversation.
              </p>
              <Link
                href="mailto:haka9670@gmail.com"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-900 transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:shadow-glass"
              >
                haka9670@gmail.com
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">Elsewhere</span>
              <div className="flex items-center gap-3">
                {socials.map(social => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--text)] transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

export default Contact
