/**
 * GitHub Pages is a static host with no SPA fallback, so the mock links
 * (/HLS/aboutus, /HLS/login, ...) only return 200 if a real file sits there.
 *
 * This renders the app server-side, collects every in-site href it produces,
 * and writes dist/<slug>.html — a copy of the built index.html. GitHub Pages
 * writes both dist/<slug>/index.html and dist/<slug>.html, so the link targets
 * resolve with 200 and render the same home page.
 */
import { build } from 'vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const BASE = '/HLS/'
const dist = path.resolve('dist')

// Kept inside the project so the bundle can resolve react-dom at run time.
const ssrOut = path.resolve('node_modules/.hls-prerender')
await build({
  base: BASE,
  logLevel: 'error',
  build: {
    ssr: 'src/prerender.tsx',
    outDir: ssrOut,
    emptyOutDir: true,
    copyPublicDir: false,
  },
})

const { html } = await import(
  pathToFileURL(path.join(ssrOut, 'prerender.js')).href
)

const slugs = [
  ...new Set(
    [...html.matchAll(/href="([^"]*)"/g)]
      .map((m) => m[1])
      .filter((h) => h.startsWith(BASE))
      .map((h) => h.slice(BASE.length))
      .map((s) => s.replace(/\/$/, ''))
      .filter((s) => s && !s.startsWith('#') && !s.includes('/')),
  ),
].sort()

const index = readFileSync(path.join(dist, 'index.html'), 'utf8')
for (const slug of slugs) {
  // Directory index: /HLS/<slug>/ resolves with a plain 200 on any static host.
  mkdirSync(path.join(dist, slug), { recursive: true })
  writeFileSync(path.join(dist, slug, 'index.html'), index)
  // Flat copy too, so the extensionless /HLS/<slug> form works as well.
  writeFileSync(path.join(dist, `${slug}.html`), index)
}

// Unknown paths still render the app rather than GitHub's 404 page.
writeFileSync(path.join(dist, '404.html'), index)

console.log(`generated ${slugs.length} mock link pages: ${slugs.join(', ')}`)
