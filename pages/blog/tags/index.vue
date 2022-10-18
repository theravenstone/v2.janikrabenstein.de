<template>
    <section class="container mx-auto p-6 mb-6">
      <div v-if="tags">        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink :to="'/blog/tags/' + tag.attributes.url_slug" v-for="tag in tags" :key="tag" class="group border-2 border-primary p-6 rounded-lg">
            <h2>#{{ tag.attributes.name }}</h2>
            <p>{{ tag.attributes.description }}</p>
           
          </NuxtLink>
        </div>
  
  
      </div>
      <div v-else>
        <p>
          <i class="fa-solid fa-triangle-exclamation mr-3 text-rose-500"></i>
          <span>Es sind noch keine Tags vorhanden.</span>
        </p>
      </div>
    </section>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        tags: null,
      };
    },
    mounted() {
      const route = useRoute()
      fetch(`http://localhost:2345/api/tags?populate=*`)
        .then((res) => res.json())
        .then((data) => (this.tags = data['data']))
        .catch((error) => console.log(error.message));
    },
  
  }
  definePageMeta({
    layout: "tag",
    title: 'Tags',
    description: 'Alle Tags an einem Ort, damit du genau den Blog Beitrag findest, der dich interessiert!',
  })
  
  </script>
  
  <style>
  
  </style>