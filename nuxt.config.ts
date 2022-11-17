// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default({
    app: {
        layoutTransition: { name: 'layout', mode: 'out-in' },
        pageTransition: { name: 'page', mode: 'out-in' }
      },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
    ],
})
