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
        { hid: "og:title", name: "og:title", content: "Janik Rabenstein" },
        { hid: "twitter:title", name: "twitter:title", content: "Janik Rabenstein" },
        {
          hid: "description",
          name: "description",
          content:
            "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt",
        },
        { hid:"author", name: "author", content: "Janik Rabenstein" },
        { hid:"publisher", name: "publisher", content: "Janik Rabenstein" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Janik Rabenstein, Webentwickler, Webdeveloper, Entwickler, Bayreuth, Bindlach, Fichtelgebirge, Vue.js, Nuxt.js, Python, PHP, Wordpress, Pimcore",
        },
        { hid: "twitter:card", name: "twitter:card", content: "summary" },
        { hid: "og:type", name: "og:type", content: "website" },
        { hid: "og:site_name", name: "og:site_name", content: "Janik Rabenstein" },
        { hid: "og:image", name: "og:image", content: "/logo.png" },
        { hid: "theme-color", name: "theme-color", content: "#0ea5e9" },
        { hid: "viewport", name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
};
