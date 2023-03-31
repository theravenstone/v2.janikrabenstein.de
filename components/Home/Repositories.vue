<template>
    <XContainer v-if="projects">
        <span class="preheader">GitHub Repositories</span>
        <h2>Open Source Projekte<span class="text-primary">.</span></h2>
        <div class="mb-6">
            <span class="inline-block w-40 h-1 mx-1 rounded-full bg-primary"></span>
            <span class="inline-block w-5 h-1 mx-1 rounded-full bg-primary"></span>
            <span class="inline-block w-1 h-1 mx-1 rounded-full bg-primary"></span>
        </div>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <a v-for="project in projects.filter(p => p.fork === false)" :key="project" rel="noopener noreferrer" target="_blank" :href="project.html_url"
                class="group">
                <div
                    class="relative flex flex-col flex-auto h-full overflow-hidden transition duration-300 bg-gray-200 rounded-lg dark:bg-gray-800 lg:hover:-translate-y-4">
                    <div class="flex flex-col flex-auto h-full p-6">
                        <div class="mb-6">
                            <h3>{{ project.full_name }}</h3>
                            <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
                        </div>
                        <div class="flex items-center mt-auto space-x-6">
                            <div>
                                <i class="mr-2 fa-solid fa-star"></i>
                                {{ project.stargazers_count }}
                            </div>
                            <div>
                                <i class="mr-2 fa-solid fa-code-fork"></i>
                                {{ project.forks }}
                            </div>
                            <div>
                                <i class="mr-2 fa-solid fa-eye"></i>
                                {{ project.watchers_count }}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    </XContainer>
</template>

<script setup>

const { data: projects } = await useFetch('https://api.github.com/users/theravenstone/repos')

</script>

<style></style>