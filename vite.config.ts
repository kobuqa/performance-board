import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: { assetsInlineLimit: 8 * 1024, sourcemap: mode === 'production' },
  plugins: [react(), svgr()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@application': resolve(__dirname, 'src/application'),
      '@processes': resolve(__dirname, 'src/processes'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@widgets': resolve(__dirname, 'src/widgets'),
      '@features': resolve(__dirname, 'src/features'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@shared': resolve(__dirname, 'src/shared')
    }
  }
}))
