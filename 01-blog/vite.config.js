import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@style': path.resolve(__dirname, './public/scss')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './public/scss/partials/_colors.scss';
          @import './public/scss/partials/_fonts.scss';
          @import './public/scss/partials/_variables.scss';
        `
      }
    }
  },
})
