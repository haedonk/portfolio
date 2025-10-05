'use client'
import { GlassCard } from './GlassCard'
import useActiveFilters from './useActiveFilters'

const availableFilters = [
  'Java',
  'Kafka', 
  'OpenShift',
  'Scaling',
  'Kubernetes'
]

function setFiltersInURL(filters: Set<string>) {
  const url = new URL(window.location.href)
  if (filters.size === 0) {
    url.searchParams.delete('filters')
  } else {
    url.searchParams.set('filters', Array.from(filters).join(','))
  }
  window.history.pushState({}, '', url.toString())
  
  // Removed auto-scroll to test gap issue
  
  // Dispatch custom event to notify other components
  window.dispatchEvent(new CustomEvent('filterchange', { 
    detail: { filters: Array.from(filters) } 
  }))
}

export default function FilterBar() {
  const activeFilters = useActiveFilters()

  const toggleFilter = (filter: string) => {
    const newFilters = new Set<string>()
    if (!activeFilters.has(filter)) {
      newFilters.add(filter)
    }
    setFiltersInURL(newFilters)
  }

  const clearAllFilters = () => {
    setFiltersInURL(new Set())
  }

  // Use the same beautiful styling whether filters are active or not

  return (
    <div
      className="border-b border-[var(--border)] bg-[rgba(11,15,23,0.85)] backdrop-blur-md"
    >
      <div className="section-wrapper py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-[var(--text)]">Filter by Technology</h3>
            {activeFilters.size > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                Clear filter
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {availableFilters.map((filter) => (
              <span
                key={filter}
                onClick={() => toggleFilter(filter)}
                className="inline-flex items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)] cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}