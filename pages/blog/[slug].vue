<template>
  <XContainer>
    <div v-if="article">

      <Head>
        <Title>{{ article.title }} · Janik Rabenstein</Title>
        <Meta name="description" :content="article.teaser" />
      </Head>
      <div v-if="article.img">
        <img v-if="article.img" class="object-cover w-full rounded-lg lg:h-96 mb-12" :src="article.img"
          :alt="article.alt" />
        <div class="xl:w-2/3 mx-auto">
          <h1>{{ article.title }}</h1>

          <p class="text-gray-600 dark:text-gray-400 mb-6">
            <i class="fa-solid fa-rocket-launch text-primary mr-2"></i>{{ article.date }} <span>&middot; Janik Rabenstein</span>
          </p>
          <div class="mb-12">
            <NuxtLink v-for="tag in article.tags" :key="tag" :to="'/blog/tags/' + tag"
              class="px-3 py-1 text-xs font-bold text-gray-900 dark:text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary mr-2 font-mono">

              {{ tag.replace('-', ' ') }}

            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="bg-gradient-to-tl from-primary-hover/50 to-primary/50 rounded-lg p-12 mb-12">
        <div class="xl:w-2/3 mx-auto">
          <h1>{{ article.title }}</h1>
          <p class=" mb-6">
            <i class="fa-solid fa-rocket-launch mr-2"></i>{{ article.date }} <span>&middot; Janik Rabenstein</span>
          </p>
          <div>
            <NuxtLink v-for="tag in article.tags" :key="tag" :to="'/blog/tags/' + tag"
              class="px-3 py-1 text-xs font-bold text-gray-900 dark:text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary mr-2 font-mono">

              {{ tag.replace('-', ' ') }}

            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="xl:w-2/3 mx-auto">
        <ContentRenderer class="markdown" :value="article" />
      </div>
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