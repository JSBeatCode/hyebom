import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // root: path.resolve(__dirname, 'src'),
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    }
  },
  build: {
    emptyOutDir: false
  }
})
