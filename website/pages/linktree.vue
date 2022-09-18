<template>
  <div v-if="links">
    <div class="min-h-screen flex items-center mx-auto md:w-4/5 lg:w-3/5 xl:w-2/5 p-6">
      <div class="w-full">
        <DarkModeSwitch class="rounded-lg mb-3" />
        <div class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 mb-6">
          <div class="p-6">
            <div>
              <p class="preheader">Janik Rabenstein</p>

              <h1>Linktree</h1>

              <a v-for="link in links.attributes.linktree" :key="link" :href="link.url" target="_blank"
                rel="noopener noreferrer" class="group bg-slate-300 dark:bg-slate-700 hover:bg-primary dark:hover:bg-primary w-full block p-4 rounded-lg mb-3 text-lg font-medium">
                <i class="w-6 mr-4 text-primary group-hover:text-white" :class="link.fontawesome"></i><span>{{link.name}}</span>
              </a>
            </div>
          </div>
        </div>
        <NuxtLink to="/imprint" class="hover:text-primary">Impressum</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      links: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/api/linktree?populate=*`)
      .then((res) => res.json())
      .then((data) => (this.links = data['data']))
      .then((data) => (this.$route.meta.title = data.attributes.name))
      .catch((error) => console.log(error.message));
  },

}

definePageMeta({
  layout: "linktree",
  title: 'Linktree',
  description: 'Meine Social-Media Accounts und weitere wichtige Links!',
});


</script>

<style>

</style>