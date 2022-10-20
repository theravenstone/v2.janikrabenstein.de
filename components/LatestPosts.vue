<template>
  <section class="container mx-auto p-6 mb-12">
    <div v-if="posts">
      <span class="preheader">Blog</span>
      <h2>Letzte Beiträge</h2>
      <div class="mb-6">
        <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <NuxtLink :to="'/blog/' + post.attributes.url_slug" v-for="post in posts" :key="post" class="group">

          <div class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 h-full lg:hover:-translate-y-4 transition duration-300 relative flex flex-col flex-auto">
            <img v-if="post.attributes.thumbnail.data" class="object-cover w-full h-48"
              :src="'http://localhost:2345' + post.attributes.thumbnail.data.attributes.formats.medium.url"
              :alt="post.attributes.thumbnail.data.attributes.alternativeText">

            <div class="p-6 h-full flex flex-col flex-auto">
              <div>

                <div class="mb-3">
                  <NuxtLink v-for="tag in post.attributes.tags.data" :key="tag"
                    :to="'/blog/tags/' + tag.attributes.url_slug"
                    class="px-3 py-1 text-xs font-bold text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary mr-2 font-mono">

                    {{tag.attributes.name}}

                  </NuxtLink>
                </div>

                <h3>{{ post.attributes.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ post.attributes.teaser }}</p>
              </div>

              <div class="flex items-center justify-between mt-auto">
                <NuxtLink :to="'/blog/' + post.attributes.url_slug" class="text-primary group-hover:text-primary-hover">
                  Weiterlesen <i class="fa-solid fa-chevron-right my-auto ml-2 text-primary group-hover:text-primary-hover transition duration-300 lg:group-hover:translate-x-2"></i>
                </NuxtLink>

                <div class="sm:flex items-center hidden">
                  <span class="text-gray-700 cursor-pointer dark:text-gray-200">Janik Rabenstein</span>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>


    </div>
    <div v-else>
      <p>
        <i class="fa-solid fa-triangle-exclamation mr-3 text-rose-500"></i>
        <span>Es sind noch keine Blog Beiträge vorhanden.</span>
      </p>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    const route = useRoute()
    fetch(`http://localhost:2345/api/posts?populate=*&pagination[limit]=3&sort[0]=publishedAt%3Adesc`)
      .then((res) => res.json())
      .then((data) => (this.posts = data['data']))
      .catch((error) => console.log(error.message));
  },

}
definePageMeta({
  layout: "blog",
  title: 'Blog',
  description: 'Hier findest du alle interessanten Artikel zu mir und dem was ich so mache. Viel Spaß beim lesen!',
})

</script>

<style>

</style>