export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/components.scss',
    '~/assets/css/animations.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:5000'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-tailvue', {toast: true}],
    '@nuxtjs/auth-next'
  ],

  axios: {
    // proxy: true
    baseURL: "http://localhost:5000"
  },

  auth: {
    strategies: {
      local: {
//      scheme: "refresh",
        token: {
          property: "token", //property name that the Back-end sends for you as a access token for saving on localStorage and cookie of user browser
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token", // property name that the Back-end sends for you as a refresh token for saving on localStorage and cookie of user browser
//        data: "refresh_token", // data can be used to set the name of the property you want to send in the request.
//      },
        endpoints: {
          login: { url: "/api/login", method: "post", withCredentials: true },
//        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/api/getUser", method: "get" }
        }
      }
    }
  },

  loading: {
    color: '#00F3B3',
    height: '4px'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate']
  }
}
