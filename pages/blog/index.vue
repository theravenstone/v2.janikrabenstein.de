<template>
  <div>
    <div class="container mx-auto text-center">
      <div class="max-w-lg p-6 mx-auto">
        <h1>Blog<span class="text-primary">.</span></h1>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 rounded-full bg-primary"></span>
          <span class="inline-block w-5 h-1 mx-1 rounded-full bg-primary"></span>
          <span class="inline-block w-1 h-1 mx-1 rounded-full bg-primary"></span>
        </div>
      </div>
    </div>
    <Breadcrumb />
    <XContainer>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        <NuxtLink :to="'/blog' + article._path.replace('/articles/', '/')" v-for="article in articles"
          :key="article._path" class="group">
          <div
            class="relative flex flex-col flex-auto h-full overflow-hidden transition duration-300 bg-gray-200 rounded-lg dark:bg-gray-800 lg:hover:-translate-y-4">
            <img v-if="article.img" class="object-cover w-full h-48" :src="article.img" :alt="article.alt">
            <div class="flex flex-col flex-auto h-full p-6">
              <div>
                <div class="mb-3">
                  <NuxtLink v-for="tag in article.tags" :key="tag" :to="'/blog/tags/' + tag"
                    class="px-3 py-1 mr-2 font-mono text-xs font-bold text-gray-900 transition-colors duration-300 transform border-2 rounded-full cursor-pointer dark:text-white border-primary bg-primary/10 hover:bg-primary">

                    {{ tag.replace('-', ' ') }}

                  </NuxtLink>
                </div>
                <h2 class="h3">{{ article.title }}</h2>
                <p class="text-gray-600 dark:text-gray-400">{{ article.teaser }}</p>
              </div>

              <div class="flex items-center justify-between mt-auto">
                <span class="text-primary group-hover:text-primary-hover">
                  Weiterlesen <i
                    class="my-auto ml-2 transition duration-300 fa-solid fa-chevron-right text-primary group-hover:text-primary-hover lg:group-hover:translate-x-2"></i>
                </span>

                <!-- <div class="items-center hidden sm:flex"> -->
                <!-- <span class="text-gray-700 cursor-pointer dark:text-gray-200">Janik Rabenstein</span> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </XContainer>
  </div>
</template>

<script setup>
const articles = await queryContent('articles').sort({ datex: -1 }).find()

useHead({
  title: "Blog · Janik Rabenstein",
  meta: [
    { hid: 'description', name: "description", content: "Erfahren Sie Neues aus der Welt der Webentwicklung. Entdecken Sie hilfreiche Tipps, Tutorials und aktuelle Trends für Entwickler." },
    // Twitter stuff
    { hid: 'twitter:title', name: "twitter:title", content: "Blog · Janik Rabenstein" },
    { hid: 'twitter:description', name: "twitter:description", content: "Erfahren Sie Neues aus der Welt der Webentwicklung. Entdecken Sie hilfreiche Tipps, Tutorials und aktuelle Trends für Entwickler." },
    // OG stuff
    { hid: 'og:title', name: "og:title", content: "Blog · Janik Rabenstein" },
    { hid: 'og:description', name: "og:description", content: "Erfahren Sie Neues aus der Welt der Webentwicklung. Entdecken Sie hilfreiche Tipps, Tutorials und aktuelle Trends für Entwickler." },
  ],
})
definePageMeta({
  layout: "subpage",
})
</script>

<style></style>