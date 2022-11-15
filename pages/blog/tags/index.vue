<template>
  <XContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink :to="'/blog/tags' + tag._path.replace('/tags/', '/')" v-for="tag in tags" :key="tag._path"
          class="group border-2 border-primary bg-primary/10 hover:bg-primary/20 p-6 rounded-lg">
          <h2>#{{ tag.name }}</h2>
          <p>{{ tag.description }}</p>
        </NuxtLink>
    </div>
  </XContainer>
</template>
  
<script setup>
const tags = await queryContent('tags').find()
definePageMeta({
  layout: "tag",
  title: 'Tags',
  description: 'Alle Tags an einem Ort, damit du genau den Blog Beitrag findest, der dich interessiert!',
})

</script>
  
<style>

</style>