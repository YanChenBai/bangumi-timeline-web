import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    VitePWA({
      includeAssets: ['favicon.ico'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Timeline',
        short_name: 'Timeline',
        description: '番剧时间表聚合',
        theme_color: '#fff',
        icons: [
          {
            src: '/logo_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo_512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf}'],
        runtimeCaching: [
          {
            // 匹配动态图片的正则表达式
            urlPattern: /^https:\/\/tl\.api\.bycrx\.ltd\/img\?img=(.+)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'timeline-images',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('naive-ui')) {
              return 'nui'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
