<template>
  <div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <PageLoader/>
   
    <div class="container mx-auto">
     <slot />
    </div>
    
  </div>
</template>


<script setup>
const route = useRoute()
useHead({
  title: `${route.meta.title} · Janik Rabenstein`,
  meta: [
      { name: 'og:title', content: `${route.meta.title} · Janik Rabenstein` },
      { name: 'twitter:title', content: `${route.meta.title} · Janik Rabenstein` },
      { name: 'description', content: `${route.meta.description}` },
      { name: 'og:description', content: `${route.meta.description}` },
      { name: 'twitter:description', content: `${route.meta.description}` },
  ],
})
</script>