<template>
  <div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <Header />
    <Breadcrumb class="mt-24"/>
    <div class="container mx-auto">
     <slot />
    </div>
    <Footer />

  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  title: `${route.meta.title} · Janik Rabenstein`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
      lang: 'de',
    },
  meta: [
    { name: 'og:title', content: `${route.meta.title} · Janik Rabenstein` },
    { name: 'twitter:title', content: `${route.meta.title} · Janik Rabenstein` },
    { name: 'description', content: `${route.meta.description}` },
    { name: 'og:description', content: `${route.meta.description}` },
    { name: 'twitter:description', content: `${route.meta.description}` },
    { name: 'author', content: 'Janik Rabenstein' },
    { name: 'publisher', content: 'Janik Rabenstein' },
    { name: 'keywords', content: 'Janik Rabenstein, Webentwickler, Webdeveloper, Entwickler, Bayreuth, Bindlach, Fichtelgebirge, Vue.js, Nuxt.js, Python, PHP' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'og:type', content: 'website' },
    { name: 'og:site_name', content: 'Janik Rabenstein' },
    { name: 'og:image', content: '/logo.png' },
    { name: 'theme-color', content: '#0ea5e9' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
  link: [
     { rel: 'icon', href: '/favicon.ico'}
  ]
})
</script>

<style>

</style>