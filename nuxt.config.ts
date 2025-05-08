import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxt/content', 'nuxt-gtag'],

  gtag: {
    id: 'G-KGB38PTBJ2'
  },

  typescript: {
    typeCheck: true
  },

  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Resources & Resource Details page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/resources': { isr: 3600 },
    '/resources/**': { isr: 3600 },
  },

  site: {
    url: "https://spellapp.com",
    name: "Spell",
  },

  runtimeConfig: {
    public: {
      canonicalDomain: "https://spellapp.com",
    },
  },

  sitemap: {
    xsl: false,
    discoverImages: false,
    discoverVideos: false,
  },

  alias: {
    assets: '/<rootDir>/assets',
  },

  css: ['~/assets/scss/global.scss'],
  devtools: { enabled: false },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag.startsWith('swiper-')
      }
    }
  },

  content: {
    watch: {
      enabled: false
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/abstracts" as *;`
        }
      }
    },
    optimizeDeps: {
      exclude: ['@nuxt/content']
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'The AI-First Document Editor | Spell',
      meta: [
        { name: 'title', content: 'The AI-First Document Editor | Spell' },
        { property: 'og:title', content: 'The AI-First Document Editor | Spell' },
        { property: 'twitter:title', content: 'The AI-First Document Editor | Spell' },

        { name: 'description', content: 'The AI-powered alternative to Google Docs and Word, Spell is the best way to create & edit docs with AI.' },
        { property: 'og:description', content: 'The AI-powered alternative to Google Docs and Word, Spell is the best way to create & edit docs with AI.' },
        { property: 'twitter:description', content: 'The AI-powered alternative to Google Docs and Word, Spell is the best way to create & edit docs with AI.' },

        { property: 'og:image', content: '/images/open-graph/og-default.png' },
        { property: 'twitter:image', content: '/images/open-graph/og-default.png' },

        { name: 'author', content: 'Spell' },
        { name: 'keywords', content: 'Spellapp, Spell AI, Spell, AI-First Document Editor, Document Editor, AI Editor, AI-First Editor Editor, Create docs with AI, Real-time collaboration, AI, Google Docs, Word' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/favicon/android-chrome-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/favicon/android-chrome-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        { rel: "manifest", href: '/manifest.json' },

        { rel: "preconnect", crossorigin: "anonymous", href: 'https://fonts.googleapis.com' },
        { rel: "preconnect", crossorigin: "anonymous", href: 'https://fonts.gstatic.com' },
        { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap' },
      ]
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true
    },
    // ✅ Correct: use this syntax for files that must be bundled with serverless functions
    assets: [
      {
        baseName: 'resources.db',
        dir: 'database'
      }
    ]
  },

  compatibilityDate: '2025-04-01'
})