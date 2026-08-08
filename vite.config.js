import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      // 关键配置：将 /api 开头的请求转发到你的后端
      '/api': {
        target: 'http://codercba.com:1888',
        changeOrigin: true,
        // 如果你后端路径也是 /api/xxx，不需要 rewrite
        // rewrite: (path) => path.replace(/^\/api/, '') // 如果后端没有 /api 前缀才需要这行
      },
    },
  },
})
