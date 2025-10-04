import Link from 'next/link'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,15,20,0.85)] backdrop-blur-md">
      <div className="section-wrapper flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="flex items-center text-lg font-semibold tracking-tight text-[var(--text)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] font-medium">
            HK
          </span>
          <span className="ml-3 hidden text-sm text-[var(--muted)] sm:block">Haedon Kaufman</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[var(--muted)] sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition duration-200 ease-out hover:text-[var(--text)] focus-visible:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/resume"
          className="glass-card inline-flex min-w-[96px] flex-shrink-0 items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-[var(--text)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 focus-visible:-translate-y-0.5"
        >
          Resume
        </Link>
      </div>
    </header>
  )
}
