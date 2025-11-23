import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'Geoffrey Makawa Portfolio',
        short_name: 'Portfolio',
        description: 'Geoffrey Makawa - Full Stack Developer Portfolio',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        icons: []
      }
    })
  ],
})
