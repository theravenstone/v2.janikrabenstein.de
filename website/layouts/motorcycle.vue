<template>
  <div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <Header />
    <div class="container mx-auto mt-24 text-center">
      <div class="max-w-lg mx-auto p-6">
        <h1 v-if="$route.meta.title">{{ $route.meta.title }}<span class="text-primary">.</span></h1>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
        </div>
        <p v-if="$route.meta.description" class="text-gray-500 dark:text-gray-300">{{ $route.meta.description }}</p>
      </div>
    </div>
    <Breadcrumb />
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
    { name: 'theme-color', content: '#41b883' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})
</script>

<style>

</style>