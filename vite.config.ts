import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves the app from /<repo>/, not /
  plugins: [react()],
  base: '/RJWeb',
})
