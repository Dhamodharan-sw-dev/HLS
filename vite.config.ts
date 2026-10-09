import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Absolute base in production: the mock link pages (dist/<slug>.html) are
  // served from paths like /HLS/aboutus, so relative asset URLs would break.
  base: command === 'build' ? '/HLS/' : '/',
  plugins: [react(), tailwindcss()],
}))
