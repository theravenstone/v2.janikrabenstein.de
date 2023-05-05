<template>
    <div>
        <XContainer class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="max-w-md text-center">
                    <h1 class="mb-8 font-extrabold text-9xl dark:text-primary">
                        <span class="sr-only">Error</span>404
                    </h1>
                    <p class="text-2xl font-semibold md:text-3xl">Seite nicht Gefunden</p>
                    <p class="text-gray-600 dark:text-gray-400">Keine sorge, du kannst auf der Startseite
                        neu beginnen.</p>
                </div>
            </div>
        </XContainer>
        <XContainer>
            <!-- Continue With -->
            <div class="flex flex-col">
                <h2 class="text-lg preheader">
                    Versuchen Sie Ihr Glück hier
                </h2>

                <div class="flex flex-col items-stretch mt-5">
                    <!-- Nav Item #1 -->
                    <NuxtLink to="/" class="flex flex-row px-4 py-8 transition duration-300 border-t-2 border-gray-300 group dark:border-gray-800 hover:cursor-pointer">
                        <!-- Nav Icon -->
                        <div class="flex items-center mr-6">
                            <i class="mx-auto text-2xl fa-solid fa-house-chimney text-primary md:text-3xl"></i>
                        </div>

                        <!-- Text -->
                        <div class="flex flex-col grow">
                            <h3 class="mb-0 text-sm font-bold md:text-lg lg:text-xl group-hover:underline">
                                Startseite
                            </h3>

                            <div class="text-sm font-semibold text-gray-600 transition duration-300 md:text-md lg:text-lg dark:text-gray-400 group-hover:text-gray-500">
                                Ihr Webentwickler aus dem Landkreis Bayreuth. Lassen Sie uns gemeinsam das nächste Projekt starten!
                            </div>
                        </div>

                        <!-- Chevron -->
                        <i class="hidden pr-2 my-auto ml-3 text-gray-600 transition duration-300 fa-solid fa-chevron-right dark:text-gray-400 group-hover:text-gray-500 md:group-hover:translate-x-2 md:block"></i>
                    </NuxtLink>

                    <!-- Nav Item #2 -->
                    <NuxtLink to="/blog" class="flex flex-row px-4 py-8 transition duration-300 border-t-2 border-gray-300 group dark:border-gray-800 hover:cursor-pointer">

                        <!-- Nav Icon -->
                        <div class="flex items-center mr-6">
                            <i class="mx-auto text-2xl fa-solid fa-books text-primary md:text-3xl"></i>
                        </div>

                        <!-- Text -->
                        <div class="flex flex-col grow">
                            <h3 class="mb-0 text-sm font-bold md:text-lg lg:text-xl group-hover:underline">
                                Blog
                            </h3>

                            <div class="text-sm font-semibold text-gray-600 transition duration-300 md:text-md lg:text-lg dark:text-gray-400 group-hover:text-gray-500">
                            Hier findest du alle interessanten Artikel zu mir und dem, was ich so mache. Viel Spaß beim Lesen!
                            </div>
                        </div>

                        <!-- Chevron -->
                        <i class="hidden pr-2 my-auto ml-3 text-gray-600 transition duration-300 fa-solid fa-chevron-right dark:text-gray-400 group-hover:text-gray-500 md:group-hover:translate-x-2 md:block"></i>
                    </NuxtLink>

                    <!-- Nav Item #3 -->
                    <NuxtLink to="/blog/tags" class="flex flex-row px-4 py-8 transition duration-300 border-t-2 border-gray-300 group dark:border-gray-800 hover:cursor-pointer">

                        <!-- Nav Icon -->
                        <div class="flex items-center mr-6">
                            <i class="mx-auto text-2xl fa-solid fa-hashtag text-primary md:text-3xl"></i>
                        </div>

                        <!-- Text -->
                        <div class="flex flex-col grow">
                            <h3 class="mb-0 text-sm font-bold md:text-lg lg:text-xl group-hover:underline">
                                Tags
                            </h3>

                            <div class="text-sm font-semibold text-gray-600 transition duration-300 md:text-md lg:text-lg dark:text-gray-400 group-hover:text-gray-500">
                            Alle Tags an einem Ort, damit du genau den Beitrag findest, der dich interessiert!
                            </div>
                        </div>

                        <!-- Chevron -->
                        <i class="hidden pr-2 my-auto ml-3 text-gray-600 transition duration-300 fa-solid fa-chevron-right dark:text-gray-400 group-hover:text-gray-500 md:group-hover:translate-x-2 md:block"></i>
                    </NuxtLink>
                </div>
            </div>
        </XContainer>
</div>
</template>

<script>
export default{

}

definePageMeta({
  title: '404 Seite nicht gefunden',
  description: 'Oh nein, hier geht es nicht weiter. Seite nicht gefunden.',
})

useHead({
    title: "Seite nicht gefunden · Janik Rabenstein",
    meta: [
        { hid: 'description', name: "description", content: "Es tut uns leid, die gesuchte Seite konnte nicht gefunden werden." },
        // Twitter stuff
        { hid: 'twitter:title', name: "twitter:title", content: "Seite nicht gefunden · Janik Rabenstein" },
        { hid: 'twitter:description', name: "twitter:description", content: "Es tut uns leid, die gesuchte Seite konnte nicht gefunden werden." },
        // OG stuff
        { hid: 'og:title', name: "og:title", content: "Seite nicht gefunden · Janik Rabenstein" },
        { hid: 'og:description', name: "og:description", content: "Es tut uns leid, die gesuchte Seite konnte nicht gefunden werden." },
    ],
})

</script>