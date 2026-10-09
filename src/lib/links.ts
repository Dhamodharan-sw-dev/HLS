/**
 * Mock route helpers. The site is a single static home page, so these are
 * placeholder URLs only — they keep the address bar meaningful without any
 * real routing behind them.
 *
 * Paths are built from Vite's BASE_URL so they stay correct under the
 * GitHub Pages sub-path (/HLS/) as well as on the dev server.
 */
const base = import.meta.env.BASE_URL

export function toPath(label: string) {
  const slug = label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '')
  return `${base}${slug}`
}

export const HOME = base
