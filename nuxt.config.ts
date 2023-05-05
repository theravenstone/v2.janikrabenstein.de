// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          id: "Cookiebot",
          "data-cbid": "199102d1-f2ea-44ed-99ec-5d189f4c3caa",
          src: "https://consent.cookiebot.com/uc.js",
          async: true,
        },
        {
          type: "text/plain",
          "data-cookieconsent": "statistics",
          src: "https://www.googletagmanager.com/gtag/js?id=G-YZC29VW4PH",
        },
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
            "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt",
        },
        {
          name: "og:description",
          content:
            "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt",
        },
        {
          name: "twitter:description",
          content:
            "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt",
        },
        { name: "author", content: "Janik Rabenstein" },
        { name: "publisher", content: "Janik Rabenstein" },
        {
          name: "keywords",
          content:
            "Janik Rabenstein, Webentwickler, Webdeveloper, Entwickler, Bayreuth, Bindlach, Fichtelgebirge, Vue.js, Nuxt.js, Python, PHP, Wordpress, Pimcore",
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
