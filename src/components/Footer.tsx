'use client'

export function Footer() {
  return (
    <footer className="section-wrapper py-10 text-sm text-[var(--muted)]">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Haedon Kaufman. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:haedonkaufman@gmail.com" className="transition duration-200 ease-out hover:text-[var(--text)]">
            haedonkaufman@gmail.com
          </a>
          <a href="https://github.com/haedonk" className="transition duration-200 ease-out hover:text-[var(--text)]">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
