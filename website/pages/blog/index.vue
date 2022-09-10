<template>
  <section class="container mx-auto p-6 mb-6">
    <div v-if="posts">
      <h2>Letzte Beiträge</h2>
      <div class="mb-6">
        <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink :to="'/blog/' + post.attributes.url_slug" v-for="post in posts" :key="post + 'featured'">

          <div class="overflow-hidden bg-slate-200 rounded-lg dark:bg-slate-800 h-full lg:hover:-translate-y-4 transition duration-300">
            <img v-if="post.attributes.thumbnail.data" class="object-cover w-full h-48"
              :src="'http://localhost:3000' + post.attributes.thumbnail.data.attributes.formats.medium.url"
              :alt="post.attributes.thumbnail.data.attributes.alternativeText">

            <div class="p-6">
              <div>

                <div class="mb-3">
                  <NuxtLink v-for="tag in post.attributes.tags.data" :key="tag"
                    :to="'/blog/tags/' + tag.attributes.url_slug"
                    class="px-3 py-1 text-xs font-medium text-slate-100 transition-colors duration-300 transform bg-primary rounded-full cursor-pointer hover:bg-primary-hover mr-2">

                    {{tag.attributes.name}}

                  </NuxtLink>
                </div>

                <h3>{{ post.attributes.title }}</h3>
                <p class="text-slate-600 dark:text-slate-400">{{ post.attributes.teaser }}</p>
              </div>

              <div class="flex items-center justify-between mt-4">
                <NuxtLink :to="'/blog/' + post.attributes.url_slug" class="text-primary hover:text-primary-hover">
                  Weiterlesen
                </NuxtLink>

                <div class="flex items-center">

                  <span class="text-slate-700 cursor-pointer dark:text-slate-200">Janik Rabenstein</span>
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
    fetch(`http://localhost:3000/api/posts?populate=*`)
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