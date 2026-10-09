// Build-time only: renders the app to static HTML so the mock link targets
// can be collected from the real DOM (see scripts/gen-link-pages.mjs).
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

export const html = renderToStaticMarkup(<App />)
