export function matches(texts: (string | string[] | undefined)[], filters: Set<string>): boolean {
  if (filters.size === 0) return true
  const hay = (
    texts
      .flatMap((t) => (Array.isArray(t) ? t : [t]))
      .filter(Boolean) as string[]
  )
    .join(' | ')
    .toLowerCase()
  for (const f of Array.from(filters)) if (hay.includes(f.toLowerCase())) return true
  return false
}
