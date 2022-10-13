export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  env: {
    BASE_URL: 'http://localhost:8000'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'transneft-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-shared-mutations.js', ssr: false },
    { src: '~/plugins/vuex-cache.js', ssr: false },
    { src: '~/plugins/vidle.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components'
    ]
  },
    build: {
      transpile:  "three"
    },
  

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    proxyHeaders: true,
    credentials: true,
    baseURL: 'http://localhost:8000', //
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
