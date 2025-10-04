export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]/60 bg-[var(--surface)]/60">
      <div className="section-wrapper flex flex-col gap-4 py-6 text-center text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Haedon Kaufman. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:haka9670@gmail.com"
            className="transition duration-150 ease-out hover:text-[var(--text)]"
          >
            haka9670@gmail.com
          </a>
          <span aria-hidden="true" className="hidden text-[var(--border)] sm:inline">
            /
          </span>
          <a
            href="https://www.linkedin.com/in/haedonkaufman"
            target="_blank"
            rel="noreferrer"
            className="transition duration-150 ease-out hover:text-[var(--text)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
