'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MotionCard({
  id,
  children,
  className,
  dimmed = false,
  collapsed = false,
}: {
  id: string
  children: ReactNode
  className?: string
  dimmed?: boolean
  collapsed?: boolean
}) {
  return (
    <motion.div
      layout
      layoutId={`card-${id}`}
      initial={false}
      animate={{
        opacity: dimmed ? 0.55 : 1,
        scale: dimmed ? 0.98 : 1,
        height: collapsed ? 0 : 'auto',
        marginTop: collapsed ? 0 : undefined,
        marginBottom: collapsed ? 0 : undefined,
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 36, mass: 0.8 }}
      className={className}
      style={{ overflow: collapsed ? 'hidden' : undefined }}
    >
      {children}
    </motion.div>
  )
}
