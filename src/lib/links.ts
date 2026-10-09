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
  // Trailing slash: each mock route is published as <slug>/index.html.
  return `${base}${slug}/`
}

export const HOME = base

/**
 * Resolves a public asset path against BASE_URL. Needed because the mock link
 * pages live one level deep (/HLS/aboutus/), where a document-relative
 * "assets/..." URL would resolve inside that folder instead of the site root.
 */
export function asset(p: string) {
  return `${base}${p.replace(/^\/+/, '')}`
}
