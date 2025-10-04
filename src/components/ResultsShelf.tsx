'use client'
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion'
import useActiveFilters from './useActiveFilters'
import { matches } from './match'
import MotionCard from './MotionCard'

export type CardItem = {
  id: string
  title: string
  texts: (string | string[] | undefined)[]
  render: () => JSX.Element
}

export default function ResultsShelf({ items }: { items: CardItem[] }) {
  const filters = useActiveFilters()
  const active = filters.size > 0
  const subset = active ? items.filter((i) => matches(i.texts, filters)) : []

  return (
    <AnimatePresence initial={false}>
      {active && (
        <motion.div
          key="shelf"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          className="sticky top-16 z-40 border-b border-[var(--border)] bg-[rgba(11,15,23,0.72)] backdrop-blur-md"
        >
          <div className="section-wrapper py-4">
            <div className="mb-3 text-sm text-[var(--muted)]">
              Showing {subset.length} result{subset.length === 1 ? '' : 's'} for filters in URL
            </div>
            <LayoutGroup>
              <div className="grid gap-6 md:grid-cols-2">
                {subset.map((it) => (
                  <MotionCard key={`s-${it.id}`} id={it.id}>
                    {it.render()}
                  </MotionCard>
                ))}
              </div>
            </LayoutGroup>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
