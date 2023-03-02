<template>
  <div>
    <div class="flex items-center min-h-screen p-6 mx-auto md:w-4/5 lg:w-3/5 xl:w-2/5">
      <div class="w-full">
        <DarkModeSwitch class="mb-3 rounded-lg" />
        <div class="mb-6 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800">
          <div class="p-6">
            <div>
              <p class="preheader">Janik Rabenstein</p>
              <h1>Linktree<span class="text-primary">.</span></h1>

              <a href="https://github.com/theravenstone" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-brands fa-github"></i><span>GitHub</span>
              </a>
              <a href="https://wa.me/+4915228627482" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-brands fa-whatsapp"></i><span>WhatsApp</span>
              </a>
              <a href="https://discord.com/users/594922360553865216" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-brands fa-discord"></i><span>Discord</span>
              </a>
              <a href="https://instagram.com/raven.supreme" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-brands fa-instagram"></i><span>Instagram</span>
              </a>
              <a href="https://www.youtube.com/@theravenstone" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-brands fa-youtube"></i><span>YouTube</span>
              </a>
              <a href="mailto:janik.rabenstein@gmail.com" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-solid fa-envelope"></i><span>Email</span>
              </a>
              <a href="tel:+4915228627482" target="_blank" rel="noopener noreferrer" class="flex items-center w-full p-4 mb-3 text-lg font-medium bg-gray-300 rounded-lg group dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary">
                <i class="w-6 h-6 mr-4 text-primary group-hover:text-white fa-solid fa-phone"></i><span>Telefon</span>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <NuxtLink to="/impressum" class="mx-3 hover:text-primary">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz" class="mx-3 hover:text-primary">Datenschutz</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


useHead({
    title: `Linktree · Janik Rabenstein`,
})
definePageMeta({
  layout: "linktree",
  title: 'Linktree',
  description: 'Meine Social-Media Accounts und weitere wichtige Links!',
});


</script>

<style>

</style>