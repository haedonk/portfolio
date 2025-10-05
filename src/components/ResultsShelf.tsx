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

  // ⛔️ If no active filters, unmount the ENTIRE shelf (no space left behind)
  if (!active) return null

  const subset = items.filter((i) => matches(i.texts, filters))

  return (
    <motion.div
      key="shelf"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -16, opacity: 0 }}
      className="sticky top-32 z-40 border-b border-[var(--border)] bg-[rgba(11,15,23,0.72)] backdrop-blur-md"
    >
      <div className="section-wrapper py-4">
        <div className="mb-3 text-sm text-[var(--muted)]">
          Showing {subset.length} result{subset.length === 1 ? '' : 's'}
        </div>

        {/* 2) Animate to height:0 when subset is empty */}
        <motion.div
          layout
          initial={false}
          animate={{
            opacity: subset.length === 0 ? 0 : 1,
            height: subset.length === 0 ? 0 : 'auto',
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="grid gap-6 md:grid-cols-2 overflow-hidden" // ← no min-h here
        >
          {subset.map((it) => (
            <MotionCard key={`s-${it.id}`} id={it.id}>
              {it.render()}
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
