'use client'
import { useEffect, useState } from 'react'

export function parseFiltersFromURL(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  const qs = new URLSearchParams(window.location.search)
  const raw = (qs.get('q') || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  return new Set(raw)
}

export default function useActiveFilters() {
  const [filters, setFilters] = useState<Set<string>>(parseFiltersFromURL())

  useEffect(() => {
    const onPop = () => setFilters(parseFiltersFromURL())
    const onChange = (e: Event) => {
      const d = (e as CustomEvent).detail as { filters: string[] } | undefined
      if (d?.filters) setFilters(new Set(d.filters))
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('filterchange', onChange as any)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('filterchange', onChange as any)
    }
  }, [])

  return filters
}
