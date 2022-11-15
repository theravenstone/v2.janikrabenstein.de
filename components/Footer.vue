<template>
    <div class="container mx-auto">
        <div class="mx-6 md:mx-24 border-2 border-primary sm:rounded-full"></div>
    </div>
    <section class="container mx-auto p-6 md:px-24">
        <div class="my-12 md:flex md:justify-between">
            <div class="mb-12 md:mb-0">
                <NuxtLink to="/" class="flex justify-center md:justify-start mb-6">
                    <img src="@/assets/logo.png" alt="Janik Rabenstein Logo" width="50" height="50" class="mr-3 object-contain">
                    <span class="self-center text-2xl font-bold font-nexabold">Janik Rabenstein</span>
                </NuxtLink>
                <p class="text-center md:max-w-sm md:text-left font-mono">Entwickler aus dem Landkreis Bayreuth
                    <span class="animate-wiggle inline-block"><i class="fa-solid fa-code text-primary"></i></span>
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div class="px-6 md:py-0">
                    <p class="text-lg font-medium font-nexabold">Quick links</p>
                    <ul class="space-y-1">
                        <li>
                            <NuxtLink to="/" class="hover:text-primary transition duration-300">Startseite
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/motorrad" class="hover:text-primary transition duration-300">Motorrad
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/404" class="hover:text-primary transition duration-300">404 Seite
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="px-6 md:py-0">
                    <p class="text-lg font-medium font-nexabold">Blog</p>
                    <ul class="space-y-1">
                        <li>
                            <NuxtLink to="/blog" class="hover:text-primary transition duration-300">Beiträge
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/tags" class="hover:text-primary transition duration-300">Tags
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="px-6 md:py-0 md:pr-0">
                    <p class="text-lg font-medium font-nexabold">Rechtliches</p>
                    <ul class="space-y-1">
                        <li>
                            <NuxtLink to="/impressum" class="hover:text-primary transition duration-300">
                                Impressum</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/datenschutz" class="hover:text-primary transition duration-300">
                                Datenschutz</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-col-reverse items-center justify-between my-12 text-center sm:flex-row">
            <p class="text-sm mb-0"> © 2021 - {{ currentYear }} Alle Rechte vorbehalten</p>
            <div class="flex space-x-2 mb-6 sm:mb-0">
                <a rel="noopener noreferrer" href="mailto:janik.rabenstein@gmail.com" title="Email"
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white transition duration-300">
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/theravenstone" title="GitHub"
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white transition duration-300">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://discord.com/users/594922360553865216"
                    title="Discord"
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white transition duration-300">
                    <i class="fa-brands fa-discord"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    }
}
</script>

<style>

</style>