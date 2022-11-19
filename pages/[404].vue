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
                <h2 class="preheader text-lg">
                    Versuche dein Glück hier
                </h2>

                <div class="flex flex-col items-stretch mt-5">
                    <!-- Nav Item #1 -->
                    <NuxtLink to="/" class="flex flex-row group px-4 py-8
                    border-t-2 border-gray-300 dark:border-gray-800 hover:cursor-pointer
                    transition duration-300">
                        <!-- Nav Icon -->
                        <div class="flex items-center mr-6">
                            <i class="fa-solid fa-house-chimney mx-auto 
                            text-primary text-2xl md:text-3xl"></i>
                        </div>

                        <!-- Text -->
                        <div class="grow flex flex-col">
                            <h3 class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline mb-0">
                                Startseite
                            </h3>

                            <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-400 group-hover:text-gray-500
                            transition duration-300">
                                Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!
                            </div>
                        </div>

                        <!-- Chevron -->
                        <i class="fa-solid fa-chevron-right  my-auto pr-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-500 transition duration-300 md:group-hover:translate-x-2 ml-3 hidden md:block"></i>
                    </NuxtLink>

                    <!-- Nav Item #2 -->
                    <NuxtLink to="/blog" class="flex flex-row group px-4 py-8
                    border-t-2 border-gray-300 dark:border-gray-800 hover:cursor-pointer
                    transition duration-300">

                        <!-- Nav Icon -->
                        <div class="flex items-center mr-6">
                            <i class="fa-solid fa-books mx-auto 
                            text-primary text-2xl md:text-3xl"></i>
                        </div>

                        <!-- Text -->
                        <div class="grow flex flex-col">
                            <h3 class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline mb-0">
                                Blog
                            </h3>

                            <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-400 group-hover:text-gray-500
                            transition duration-300">
                            Hier findest du alle interessanten Artikel zu mir und dem, was ich so mache. Viel Spaß beim Lesen!
                            </div>
                        </div>

                        <!-- Chevron -->
                        <i class="fa-solid fa-chevron-right my-auto pr-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-500 transition duration-300 md:group-hover:translate-x-2 ml-3 hidden md:block"></i>
                    </NuxtLink>

                    <!-- Nav Item #3 -->
                    <NuxtLink to="/blog/tags" class="flex flex-row group px-4 py-8
                    border-t-2 border-gray-300 dark:border-gray-800 hover:cursor-pointer
                    transition duration-300">

                        <!-- Nav Icon -->
                        <div class="flex items-center mr-6">
                            <i class="fa-solid fa-hashtag mx-auto 
                            text-primary text-2xl md:text-3xl"></i>
                        </div>

                        <!-- Text -->
                        <div class="grow flex flex-col">
                            <h3 class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline mb-0">
                                Tags
                            </h3>

                            <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-400 group-hover:text-gray-500
                            transition duration-300">
                            Alle Tags an einem Ort, damit du genau den Beitrag findest, der dich interessiert!
                            </div>
                        </div>

                        <!-- Chevron -->
                        <i class="fa-solid fa-chevron-right my-auto pr-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-500 transition duration-300 md:group-hover:translate-x-2 ml-3 hidden md:block"></i>
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

</script>