// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          src: "https://cdn-cookieyes.com/client_data/f44c6a0e3ac747dae338aff5/script.js",
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-YZC29VW4PH"
        }
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "de",
      },
      title: "Janik Rabenstein",
      meta: [
        { name: "og:title", content: "Janik Rabenstein" },
        { name: "twitter:title", content: "Janik Rabenstein" },
        {
          name: "description",
          content:
            "Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!",
        },
        {
          name: "og:description",
          content:
            "Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!",
        },
        {
          name: "twitter:description",
          content:
            "Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!",
        },
        { name: "author", content: "Janik Rabenstein" },
        { name: "publisher", content: "Janik Rabenstein" },
        {
          name: "keywords",
          content:
            "Janik Rabenstein, Webentwickler, Webdeveloper, Entwickler, Bayreuth, Bindlach, Fichtelgebirge, Vue.js, Nuxt.js, Python, PHP",
        },
        { name: "twitter:card", content: "summary" },
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "Janik Rabenstein" },
        { name: "og:image", content: "/logo.png" },
        { name: "theme-color", content: "#0ea5e9" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
};
