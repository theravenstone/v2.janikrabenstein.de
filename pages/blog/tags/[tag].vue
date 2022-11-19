<template>
    <XContainer>
        <div v-if="tag">
            <Head>
                <Title>{{ tag.name }} · Janik Rabenstein</Title>
                <Meta name="description" :content="tag.description" />
            </Head>
            <h1><span class="text-primary">#</span>{{ tag.name }}</h1>
            <p>{{ tag.description }}</p>
            <div class="mb-6">
                <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
                <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
                <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
            </div>
            <div v-if="articles" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NuxtLink :to="'/blog' + article._path.replace('/articles/', '/')" v-for="article in articles"
                    :key="article._path" class="group">
                    <div
                        class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 h-full lg:hover:-translate-y-4 transition duration-300 relative flex flex-col flex-auto">
                        <img v-if="article.img" class="object-cover w-full h-48" :src="article.img" :alt="article.alt">

                        <div class="p-6 h-full flex flex-col flex-auto">
                            <div>
                                <div class="mb-3">
                                    <NuxtLink v-for="tag in article.tags" :key="tag" :to="'/blog/tags/' + tag"
                                        class="px-3 py-1 text-xs font-bold text-gray-900 dark:text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary mr-2 font-mono">

                                        {{ tag.replace('-', ' ') }}

                                    </NuxtLink>
                                </div>

                                <h2 class="h3">{{ article.title }}</h2>
                                <p class="text-gray-600 dark:text-gray-400">{{ article.teaser }}</p>
                            </div>

                            <div class="flex items-center justify-between mt-auto">
                                <span class="text-primary group-hover:text-primary-hover">
                                    Weiterlesen <i
                                        class="fa-solid fa-chevron-right my-auto ml-2 text-primary group-hover:text-primary-hover transition duration-300 lg:group-hover:translate-x-2"></i>
                                </span>

                                <!-- <div class="sm:flex items-center hidden"> -->
                                <!-- <span class="text-gray-700 cursor-pointer dark:text-gray-200">Janik -->
                                <!-- Rabenstein</span> -->
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </XContainer>
</template>
  
<script setup>
const route = useRoute()
const tag = await queryContent('tags').where({ _path: '/tags/' + route.params.tag }).findOne()
const articles = await queryContent('articles').where({ tags: { $in: [route.params.tag] } }).sort({ date: -1 }).find()

useHead({
    title: `Tag · Janik Rabenstein`,
})
definePageMeta({
    layout: "tag-detail",
    title: 'Tag',
    description: 'Alle Tags an einem Ort, damit du genau den Beitrag findest, der dich interessiert!',
})

</script>
  
<style>

</style>