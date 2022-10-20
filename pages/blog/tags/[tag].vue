<template>
    <section class="container mx-auto p-6 mb-6">
        <div v-if="tag">
            <div class="xl:w-4/5 mx-auto">
                <h1><span class="text-primary">#</span>{{ tag.attributes.name }}</h1>
                <p>{{ tag.attributes.description }}</p>
                <hr />
                <div v-if="posts[0]" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NuxtLink :to="'/blog/' + post.attributes.url_slug" v-for="post in posts" :key="post" class="group">
                        <div
                            class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 h-full lg:hover:-translate-y-4 transition duration-300 relative flex flex-col flex-auto">
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
                                    <NuxtLink :to="'/blog/' + post.attributes.url_slug"
                                        class="text-primary group-hover:text-primary-hover">
                                        Weiterlesen <i
                                            class="fa-solid fa-chevron-right my-auto ml-2 text-primary group-hover:text-primary-hover transition duration-300 lg:group-hover:translate-x-2"></i>
                                    </NuxtLink>

                                    <div class="sm:flex items-center hidden">
                                        <span class="text-gray-700 cursor-pointer dark:text-gray-200">Janik
                                            Rabenstein</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <div v-else>
                    <p>
                        <i class="fa-solid fa-triangle-exclamation mr-3 text-rose-500"></i>
                        <span>Für diesen Tag wurden keine Blog Beiträge gefunden.</span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <p>
                <i class="fa-solid fa-triangle-exclamation mr-3 text-rose-500"></i>
                <span>Tag wurde nicht gefunden.</span>
            </p>
        </div>
    </section>
</template>
  
<script>

export default {
    data() {
        return {
            tag: null,
            posts: null,
        };
    },
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:2345/api/tags?filters[url_slug][$eq]=${route.params.tag}&populate=*`)
            .then((res) => res.json())
            .then((data) => (this.tag = data['data'][0]))
            .then((data) => (this.$route.meta.title = data.attributes.name))
            .then((data) => (this.$route.meta.description = data.attributes.description))
            .catch((error) => console.log(error.message));
        fetch(`http://localhost:2345/api/posts?filters[tags][url_slug][$eq]=${route.params.tag}&populate=*`)
            .then((res) => res.json())
            .then((data) => (this.posts = data['data']))
            .catch((error) => console.log(error.message));
    },

}
definePageMeta({
    layout: "tag-detail",
    title: 'Tag',
    description: 'Alle Tags an einem Ort, damit du genau den Blog Beitrag findest, der dich interessiert!',
})

</script>
  
<style>

</style>