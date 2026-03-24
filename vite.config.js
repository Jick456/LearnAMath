import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'assets/*'],
      manifest: {
        name: 'LearnAMath',
        short_name: 'LearnAMath',
        description: 'Premium gamified learning platform for MOE Math Mastery',
        theme_color: '#0a0a0c',
        icons: [
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5000000, // For large data files like syllabus
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,woff,woff2,json,js.map}']
      }
    })
  ],
})
