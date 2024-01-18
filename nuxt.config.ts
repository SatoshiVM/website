import { defineNuxtConfig } from 'nuxt/config'
import stylelint from 'vite-plugin-stylelint'

export default defineNuxtConfig({
  ssr: true,
  devServer: {
    host: '0.0.0.0'
  },
  app: {
    head: {
      title: 'SatoshiVM',
      link: [
        { rel: 'icon', type: 'image/*', href: '/icon.png' },
        {
          rel: 'text',
          type: 'font/ttf',
          href: '@/assets/fonts/IBMPlexMono-Bold.ttf'
        },
        {
          rel: 'text',
          type: 'font/ttf',
          href: '@/assets/fonts/IBMPlexMono-Regular.ttf'
        }
      ]
    }
  },
  css: ['@/assets/styles/basic.scss'],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/devtools',
    '@vueuse/motion/nuxt',
    '@nuxtjs/fontaine',
    'floating-vue/nuxt'
  ],
  components: ['~/components', '~/blocks', '~/components/icons'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;'
        }
      }
    },
    plugins: [
      stylelint({
        fix: true
      })
    ]
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {}
      }
    }
  }
})
