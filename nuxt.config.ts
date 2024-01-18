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
      meta: [
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'SatoshiVM' },
        {
          hid: 'og-desc',
          property: 'og:description',
          content:
            'Decentralized Bitcoin ZK Rollup Layer2 that is compatible with the EVM ecosystem and uses native BTC as gas.'
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: 'https://www.satoshivm.io/banner.png'
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://wwww.satoshivm.io'
        },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/*', href: '/icon.png' },
        {
          rel: 'preload',
          type: 'font/ttf',
          href: '@/assets/fonts/IBMPlexMono-Bold.ttf'
        },
        {
          rel: 'preload',
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
    'floating-vue/nuxt',
    '@hypernym/nuxt-gsap'
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
