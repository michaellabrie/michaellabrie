import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base '/' because this is a user GitHub Pages site (michaellabrie.github.io)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
