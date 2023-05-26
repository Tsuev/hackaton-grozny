// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/scss/main.scss',
    'vue-final-modal/style.css'
  ],
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  vite: {
    plugins: [
      svgLoader()
    ]
  },
  app: {
    head: {
      title: 'Лучшее с поля',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
