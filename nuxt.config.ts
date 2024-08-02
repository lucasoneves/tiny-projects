// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  googleFonts: {
    families: {
      Roboto: true,
      Mulish: true
    }
  },
  css: [
    // SCSS file in the project
    '~/assets/sass/main.scss'
  ]
,  

  vite: {
    css:  {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/sass/globals.scss" as *;'
        }
      }
    }
  },

  modules: ["@nuxtjs/google-fonts"]
})