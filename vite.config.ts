/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Le préfixe `/MJLibrary/` est appliqué aussi en développement, pour coller à
// GitHub Pages : les URL de redirection OAuth déclarées sont les mêmes aux deux endroits.
export default defineConfig({
  base: '/MJLibrary/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    passWithNoTests: true,
  },
})
