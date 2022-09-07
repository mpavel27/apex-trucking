export default {
  head: {
    title: 'apex-website',
    htmlAttrs: {
      lang: 'en',
      class: 'scroll-smooth'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'}
    ],
  },

  css: [
    '~/assets/css/main.scss',
    '~/assets/css/components.scss',
    '~/assets/css/animations.scss'
  ],

  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:3000'
    }
  },

  modules: [
    '@nuxtjs/axios',
    ['nuxt-tailvue', {toast: true}],
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs'
  ],

  axios: {
    baseURL: "http://localhost:3000"
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
        endpoints: {
          login: { url: "/api/login", method: "post", withCredentials: true },
          logout: false,
          user: { url: "/api/getUser", method: "get" }
        }
      }
    }
  },

  loading: {
    color: '#00F3B3',
    height: '4px'
  },

  build: {
    transpile: ['vee-validate']
  },
  serverMiddleware: [
    '~/api/index.js'
  ],
}
