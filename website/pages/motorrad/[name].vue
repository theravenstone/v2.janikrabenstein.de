<template>
  <div v-if="motorcycle">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 my-12">

      <div class="mx-auto">
        <img class="rounded"
          :src="'http://localhost:3000' + motorcycle.attributes.thumbnail.data.attributes.formats.small.url" alt="">
      </div>
      <div>
        <h1 class="text-5xl font-bold">{{ motorcycle.attributes.name }}</h1>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
        </div>
        <p v-if="motorcycle.attributes.description" class="mb-6">{{ motorcycle.attributes.description }}</p>
        <ul class="text-xl">
          <li v-if="motorcycle.attributes.ccm"><i class="fa-solid fa-bolt text-primary mr-3"></i>{{
              motorcycle.attributes.ccm
          }} CCM</li>
          <li v-if="motorcycle.attributes.horsepower"><i class="fa-solid fa-bolt text-primary mr-3"></i>{{
              motorcycle.attributes.horsepower
          }} PS</li>
          <li v-if="motorcycle.attributes.construction_year"><i class="fa-solid fa-bolt text-primary mr-3"></i>Baujahr
            {{ motorcycle.attributes.construction_year }}</li>
        </ul>

      </div>


    </div>
    <div class="p-6 my-12" v-if="motorcycle.attributes.tuning_part[0]">
      <h2 class="text-4xl font-bold">Tuning Parts</h2>
      <div class="mb-6">
        <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="tuning_part in motorcycle.attributes.tuning_part" :key="tuning_part.id">
          <div class="bg-slate-200 dark:bg-slate-800 rounded-lg p-6 h-full">
            <h3 class="text-xl">{{ tuning_part.name }}</h3>

            <!-- Image -->

            <a v-if="tuning_part.url" :href=tuning_part.url target="_blank" rel="noopener noreferrer"
              class="group text-primary hover:text-primary-hover">Produktlink</a>
          </div>
        </div>
      </div>
    </div>

    <div class="gap-4 p-6 my-12" v-if="motorcycle.attributes.image.data">
      <h2 class="text-4xl font-bold">Galerie</h2>
      <div class="mb-6">
        <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
        <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div v-for="image in motorcycle.attributes.image.data" :key="image">
          <img class="rounded w-full" :src="'http://localhost:3000' + image.attributes.formats.small.url" alt="">

        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>


export default {
  data() {
    return {
      motorcycle: null,
    };
  },
  mounted() {
    const route = useRoute()
    fetch(`http://localhost:3000/api/motorcycles?filters[url_slug][$eq]=${route.params.name}&populate=*`)
      .then((res) => res.json())
      .then((data) => (this.motorcycle = data['data'][0]))
      .then((data) => (this.$route.meta.title = data.attributes.name))
      .catch((error) => console.log(error.message));
  },

}

definePageMeta({
    layout: "motorcycle",
    title: 'Motorrad',
    description: 'Meine Motorräder mit allen wichtigen Informationen hier an einem Ort!',
});
</script>

<style>
</style>