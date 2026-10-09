/**
 * Mock route helpers. The site is a single static home page, so these are
 * placeholder URLs only — they keep the address bar meaningful without any
 * real routing behind them.
 */
export function toPath(label: string) {
  const slug = label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '')
  return `/${slug}`
}

export const HOME = '/'
