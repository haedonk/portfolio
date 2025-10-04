import { ElementType, ReactNode } from 'react'

interface GlassCardProps {
  className?: string
  as?: ElementType
  children: ReactNode
}

export function GlassCard({ className = '', as: Component = 'div', children }: GlassCardProps) {
  const combinedClassName = ['glass-card', className].filter(Boolean).join(' ')
  const ComponentToRender = Component

  return <ComponentToRender className={combinedClassName}>{children}</ComponentToRender>
}

export default GlassCard
