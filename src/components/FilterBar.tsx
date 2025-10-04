'use client'

import { useEffect, useState } from 'react'
import { ALL_FILTERS, FilterKey, parseFiltersFromURL, toggleFilter, writeFiltersToURL } from './filter-utils'

export default function FilterBar() {
  const [active, setActive] = useState<Set<FilterKey>>(() => parseFiltersFromURL())

  useEffect(() => {
    setActive(parseFiltersFromURL())
    const onPop = () => setActive(parseFiltersFromURL())
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { filters: FilterKey[] } | undefined
      if (detail?.filters) setActive(new Set(detail.filters))
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('filterchange', onChange as EventListener)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('filterchange', onChange as EventListener)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return
      if (e.key === '0') {
        const cleared = new Set<FilterKey>()
        setActive(cleared)
        writeFiltersToURL(cleared)
        return
      }
      const map: Record<string, FilterKey> = { '1': 'Java', '2': 'Kafka', '3': 'OpenShift', '4': 'Scaling' }
      const key = map[e.key]
      if (key) {
        const next = toggleFilter(active, key)
        setActive(next)
        writeFiltersToURL(next)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const handleClick = (k: FilterKey) => {
    const next = toggleFilter(active, k)
    setActive(next)
    writeFiltersToURL(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const clear = () => {
    const cleared = new Set<FilterKey>()
    setActive(cleared)
    writeFiltersToURL(cleared)
  }

  return (
    <div className="sticky top-16 z-40 border-b border-[var(--border)] bg-[rgba(11,15,20,0.75)] backdrop-blur-md">
      <div className="section-wrapper flex items-center gap-2 overflow-x-auto py-3">
        {ALL_FILTERS.map((k) => {
          const pressed = active.has(k)
          return (
            <button
              key={k}
              aria-pressed={pressed}
              onClick={() => handleClick(k)}
              className={[
                'rounded-2xl px-4 py-2 text-sm font-medium transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
                pressed
                  ? 'bg-[var(--accent)] text-[#031422] shadow-sm'
                  : 'border border-[var(--border)] text-[var(--text)] hover:-translate-y-0.5 hover:bg-[var(--surface)]',
              ].join(' ')}
            >
              {k}
            </button>
          )
        })}
        <button
          onClick={clear}
          className="ml-2 rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition duration-200 hover:text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          aria-label="Clear filters (0)"
          title="Clear filters (0)"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
