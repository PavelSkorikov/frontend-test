
export default {
  mode: 'spa',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: 'blue' },

  css: [
    '@/theme/index.scss',
    '@/theme/font-awesome-4.7.0/css/font-awesome.min.css'
  ],
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },

  plugins: [
  ],

  buildModules: [
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],

  axios: {
  },

  build: {

    extend (config, ctx) {
    }
  }
}
