export type FilterKey = 'Java' | 'Kafka' | 'OpenShift' | 'Scaling';

export const ALL_FILTERS: FilterKey[] = ['Java', 'Kafka', 'OpenShift', 'Scaling'];

export function parseFiltersFromURL(): Set<FilterKey> {
  if (typeof window === 'undefined') return new Set();
  const qs = new URLSearchParams(window.location.search);
  const raw = (qs.get('q') || '').split(',').map(s => s.trim()).filter(Boolean);
  const valid = raw.filter((x): x is FilterKey => (ALL_FILTERS as string[]).includes(x));
  return new Set(valid);
}

export function writeFiltersToURL(filters: Set<FilterKey>) {
  if (typeof window === 'undefined') return;
  const qs = new URLSearchParams(window.location.search);
  const value = Array.from(filters).join(',');
  if (value) qs.set('q', value); else qs.delete('q');
  const url = `${window.location.pathname}?${qs.toString()}`.replace(/\?$/, '');
  window.history.pushState({}, '', url);
  window.dispatchEvent(new CustomEvent('filterchange', { detail: { filters: Array.from(filters) } }));
}

export function toggleFilter(filters: Set<FilterKey>, key: FilterKey): Set<FilterKey> {
  const next = new Set(filters);
  if (next.has(key)) next.delete(key); else next.add(key);
  return next;
}

export function itemMatches(texts: (string | string[] | undefined)[], active: Set<FilterKey>): boolean {
  if (active.size === 0) return true;
  const hay = (texts.flatMap(t => Array.isArray(t) ? t : [t]).filter(Boolean) as string[])
    .join(' | ')
    .toLowerCase();

  const map: Record<FilterKey, string[]> = {
    Java: ['java'],
    Kafka: ['kafka'],
    OpenShift: ['openshift'],
    Scaling: ['scaling', 'autoscaling', 'hpa', 'vpa', 'cluster autoscaler', 'concurrency', 'rebalance'],
  };
  for (const k of Array.from(active)) {
    const needles = map[k as FilterKey];
    if (needles.some(n => hay.includes(n))) return true;
  }
  return false;
}
