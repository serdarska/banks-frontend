export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'banks-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
      },
      {
        src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/sass/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-leaflet',
    ['nuxt-i18n',{
      locales: [
        {
          name: 'Macedonian',
          code: 'mk',
          iso: 'mk-MK',
          file: 'mk-MK.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'mk'
    }]
  ],

  // i18n: {
  //   locales: ['en', 'mk'],
  //   defaultLocale: 'mk',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en: {
  //         menu: {
  //           option1: 'Home',
  //           option2: 'Banks',
  //           option3: 'About us'
  //         },
  //         description: 'Find your bank on the go!',
  //         searchbar: 'Find your bank',
  //         team:{
  //           desc1: ' Our goal is to help you find<br/>\n' +
  //             '          the bank you have been<br/>\n' +
  //             '          looking for in an easier and<br/>\n' +
  //             '          more efficient way. <br/>',
  //           desc2: ' You can only find banks<br/>\n' +
  //             '          in North Macedonia.<br/>',
  //           desc3: 'The main goal of this <br/>\n' +
  //             '          application is to display your<br/>\n' +
  //             '          desired bank with it\'s<br/>\n' +
  //             '          location. <br/>'
  //         }
  //       },
  //       mk: {
  //         menu: {
  //           option1: 'Почетна',
  //           option2: 'Банки',
  //           option3: 'За Нас'
  //         },
  //         description: 'Најдете ја вашата банка во движење!',
  //         searchbar: 'Најдете ја вашата банка',
  //         team:{
  //           desc1: 'Нашата цел е да ви помогнеме<br/>\n ' + '' +
  //             '     на полесен и поефикасен начин<br>\n' +
  //             '     да ја пронајдете банката што ја барате.<br>\n',
  //           desc2: 'Банките можете да ги најдете <br/>\n' +
  //             '     само во Северна Македонија.<br/>',
  //           desc3: 'Главната цел на оваа апликација<br/>\n' +
  //             '     е да ја прикаже саканата банка<br/>\n' +
  //             '     со нејзината локација.<br/>\n'
  //         }
  //       }
  //     }
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
