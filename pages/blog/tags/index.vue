<template>
  <div>
    <div class="container mx-auto text-center">
      <div class="max-w-lg p-6 mx-auto">
        <h1>Tags<span class="text-primary">.</span></h1>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 rounded-full bg-primary"></span>
          <span class="inline-block w-5 h-1 mx-1 rounded-full bg-primary"></span>
          <span class="inline-block w-1 h-1 mx-1 rounded-full bg-primary"></span>
        </div>
      </div>
    </div>
    <Breadcrumb />

    <XContainer>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink :to="'/blog/tags' + tag._path.replace('/tags/', '/')" v-for="tag in tags" :key="tag._path"
          class="p-6 border-2 rounded-lg group border-primary bg-primary/10 hover:bg-primary/20">
          <h2>#{{ tag.name }}</h2>
          <p>{{ tag.description }}</p>
        </NuxtLink>
      </div>
    </XContainer>
  </div>
</template>
  
<script setup>
const tags = await queryContent('tags').find()

useHead({
  title: "Tags · Janik Rabenstein",
  meta: [
    { hid: 'description', name: "description", content: "Entdecken Sie unsere vielfältigen Blog-Kategorien und finden Sie gezielt Informationen zu verschiedenen Themen der Webentwicklung." },
    // Twitter stuff
    { hid: 'twitter:title', name: "twitter:title", content: "Tags · Janik Rabenstein" },
    { hid: 'twitter:description', name: "twitter:description", content: "Entdecken Sie unsere vielfältigen Blog-Kategorien und finden Sie gezielt Informationen zu verschiedenen Themen der Webentwicklung." },
    // OG stuff
    { hid: 'og:title', name: "og:title", content: "Tags · Janik Rabenstein" },
    { hid: 'og:description', name: "og:description", content: "Entdecken Sie unsere vielfältigen Blog-Kategorien und finden Sie gezielt Informationen zu verschiedenen Themen der Webentwicklung." },
  ],
})
definePageMeta({
  layout: "subpage",
})
</script>
  
<style></style>
