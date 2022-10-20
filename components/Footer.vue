<template>
    <footer class="border-t-4 border-primary transition duration-300">
        <div class="container mx-auto p-6 space-y-6">
            <div class="my-12 space-y-8 md:flex md:justify-between md:space-y-0">
                <div class="flex flex-col my-6 space-y-6 md:m-0">
                    <NuxtLink to="/" class="flex justify-center space-x-3 md:justify-start">
                        <img src="@/assets/logo.png" alt="Janik Rabenstein Logo" width="50" height="50">
                        <span class="self-center text-2xl font-bold font-nexabold">Janik Rabenstein</span>
                    </NuxtLink>
                    <p class="text-center md:max-w-sm md:text-left font-mono">Entwickler aus dem Landkreis Bayreuth
                        <span class="animate-wiggle inline-block"><i class="fa-solid fa-code text-primary"></i></span></p>
                </div>
                <div class="flex flex-wrap justify-center lg:space-x-8">
                    <div class="p-6 md:py-0">
                        <p class="text-lg font-medium font-nexabold">Quick links</p>
                        <ul class="space-y-1">
                            <li>
                                <NuxtLink to="/" class="hover:text-primary transition duration-300">Startseite
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog" class="hover:text-primary transition duration-300">Blog
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
                    <div class="p-6 md:py-0 md:pr-0">
                        <p class="text-lg font-medium font-nexabold">Rechtliches</p>
                        <ul class="space-y-1">
                            <li>
                                <NuxtLink to="/impressum" class="hover:text-primary transition duration-300">
                                    Impressum</NuxtLink>
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
        </div>
        </footer>
</template>

<script>
export default {
  data(){
    return{
      currentYear: new Date().getFullYear(),
    }
  }
}
</script>

<style>
</style>