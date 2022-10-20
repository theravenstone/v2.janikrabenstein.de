<template>
  <header class="w-full p-6 fixed top-0 bg-white dark:bg-gray-900 transition duration-300 z-40">
    <div class="flex flex-wrap flex-row items-center">
      <NuxtLink to="/" class="flex title-font font-medium items-center md:mb-0">
        <img src="@/assets/logo.png" alt="Janik Rabenstein Logo" class="inline-block mr-3 w-12 h-12">
        <span class="font-bold ml-3 text-2xl hidden sm:block font-nexabold">Janik Rabenstein</span>
      </NuxtLink>

      <nav id="menu"
        class="hidden md:ml-4 md:py-1 md:pl-4 md:border-l-2 md:border-gray-300 md:dark:border-gray-800 md:flex flex-wrap items-center text-base justify-center">
        <NuxtLink to="/" class="mr-5 hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-400">
          Startseite
        </NuxtLink>
        <NuxtLink to="/blog"
          class="mr-5 hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-400">
          Blog
        </NuxtLink>
        <NuxtLink to="/blog/tags"
          class="mr-5 hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-400">
          Tags
        </NuxtLink>
        <NuxtLink to="/motorrad"
          class="mr-5 hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-400">
          Motorrad
        </NuxtLink>
      </nav>

      <button aria-label="Menü öffnen" @click="drawer" class="ml-auto">
        <i class="fa-solid fa-bars-staggered w-6 h-6"></i>
      </button>

      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <aside
        class="transform top-0 left-0 w-80 max-w-full bg-white dark:bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <span @click="isOpen = false" class="flex w-full items-center p-6">
          <NuxtLink to="/" class="flex title-font font-medium items-center">
            <img src="@/assets/logo.png" alt="Janik Rabenstein Logo" width="50" height="50" class="inline-block mr-3">
            <span class="font-bold ml-2 text-2xl font-nexabold">Janik Rabenstein</span>
          </NuxtLink>
        </span>

        <span
          class="flex w-full items-center px-4 border-b-2 border-gray-300 dark:border-gray-800 mt-6 preheader">Seiten</span>
        <NuxtLink to="/" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-house-chimney mr-2"></i>
          <span>Startseite</span>
        </NuxtLink>
        <NuxtLink to="/blog" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-books mr-2"></i>
          <span>Blog</span>
        </NuxtLink>
        <NuxtLink to="/blog/tags" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-hashtag mr-2"></i>
          <span>Tags</span>
        </NuxtLink>
        <NuxtLink to="/motorrad" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-motorcycle mr-2"></i>
          <span>Motorrad</span>
        </NuxtLink>
        

        <span
          class="flex w-full items-center px-4 border-b-2 border-gray-300 dark:border-gray-800 mt-6 preheader">Theme</span>
        <DarkModeSwitch />

        


        <span
          class="flex w-full items-center px-4 border-b-2 border-gray-300 dark:border-gray-800 mt-6 preheader">Rechtliches</span>
         <NuxtLink to="/impressum" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-scale-balanced mr-2"></i>
          <span>Impressum</span>
        </NuxtLink>


        <div class="fixed bottom-0 w-full flex justify-around p-4 text-xl">
          <a rel="noopener noreferrer" href="mailto:janik.rabenstein@gmail.com" title="Email"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:text-primary dark:text-white text-gray-900 transition duration-300">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/theravenstone" title="GitHub"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:text-primary dark:text-white text-gray-900 transition duration-300">
            <i class="fa-brands fa-github"></i>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://discord.com/users/594922360553865216"
            title="Discord"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:text-primary dark:text-white text-gray-900 transition duration-300">
            <i class="fa-brands fa-discord"></i>
          </a>

        </div>
      </aside>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
};
</script>
