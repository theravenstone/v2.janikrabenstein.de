<template>
  <XContainer>
    <div v-if="article">
      <div class="mb-6">
        <NuxtLink v-for="tag in article.tags" :key="tag" :to="'/blog/tags/' + tag"
          class="px-3 py-1 text-xs font-bold text-gray-900 dark:text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary mr-2 font-mono">

          {{ tag.replace('-', ' ') }}

        </NuxtLink>
      </div>

      <Head>
        <Title>{{ article.title }} · Janik Rabenstein</Title>
        <Meta name="description" :content="article.teaser" />
      </Head>
      <h1>{{ article.title }}</h1>

      <Head>
        <Title>{{ article.title }} · Janik Rabenstein</Title>
      </Head>
      <p class="text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-rocket-launch text-primary mr-2"></i> Veröffentlicht am {{ article.date }} <span
          class="hidden sm:inline">von Janik Rabenstein</span>
      </p>
      <img v-if="article.img" class="object-cover w-full rounded-lg h-96 mb-6" :src="article.img" :alt="article.alt">
      <ContentRenderer class="markdown" :value="article" />
    </div>
  </XContainer>
</template>

<script setup>
const route = useRoute()
const article = await queryContent('articles').where({ _path: '/articles/' + route.params.slug }).findOne()

useHead({
  title: `Beitrag · Janik Rabenstein`,
})

definePageMeta({
  layout: "blogpost",
  title: 'Beitrag',
  description: 'Hier findest du alle interessanten Artikel zu mir und dem, was ich so mache. Viel Spaß beim Lesen!',
});
</script>

<style>

</style>