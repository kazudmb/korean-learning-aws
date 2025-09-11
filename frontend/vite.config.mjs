import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), './src'),
    },
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', '@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})