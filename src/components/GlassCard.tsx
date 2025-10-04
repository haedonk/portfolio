'use client'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  const classes = ['glass-card', className].filter(Boolean).join(' ')

  return <div className={classes}>{children}</div>
}
