'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/60 bg-[var(--surface)]/80 backdrop-blur-md">
      <div className="section-wrapper flex items-center justify-between py-4">
        <Link
          href="#hero"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] text-sm font-semibold tracking-tight transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:shadow-glass"
        >
          HK
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition duration-150 ease-out hover:text-[var(--text)] hover:-translate-y-[1px] hover:scale-[1.01]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/resume.pdf"
            className="hidden rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:border-[var(--accent)] hover:text-[var(--accent)] md:inline-flex"
          >
            Resume
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text)] transition duration-150 ease-out hover:-translate-y-[1px] hover:scale-[1.01] hover:border-[var(--accent)] md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-[var(--border)]/60 bg-[var(--surface)]/95 backdrop-blur-md md:hidden">
          <nav className="section-wrapper flex flex-col gap-4 py-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-[var(--muted)] transition duration-150 ease-out hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition duration-150 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
