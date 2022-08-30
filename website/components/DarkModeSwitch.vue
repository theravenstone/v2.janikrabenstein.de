<template>
    <button v-if="darkMode" type="button" aria-label="use light mode" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" @click="setLightMode">
        <i class="fa-solid fa-sun mr-2"></i>
        <span>Light mode</span>
    </button>
    <button v-else type="button" aria-label="use dark mode" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" @click="setDarkMode">
        <i class="fa-solid fa-moon mr-2"></i>
        <span>Dark mode</span>
        </button>   
</template>

<script>

export default {
    data() {
        return {
            darkMode: null
        }
    },
    methods: {
        toggleDarkMode() {
            if (this.darkMode) {
                this.setDarkMode()
            } else {
                this.setLightMode()
            }
        },
        setDarkMode() {
            this.darkMode = true;
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        },
        setLightMode() {
            this.darkMode = false;
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark')
        }
    },
    mounted() {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');

            this.darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            this.darkMode = false;
        }
    }
}
</script>