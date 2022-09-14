<template>
  <section class="container mx-auto p-6 mb-6">
    <div v-if="motorcycle">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 my-12">

        
          <img class="rounded object-cover w-full"
            :src="'http://localhost:3000' + motorcycle.attributes.thumbnail.data.attributes.formats.small.url"
            :alt="motorcycle.attributes.thumbnail.data.attributes.alternativeText">
        
        <div>
          <h1>{{ motorcycle.attributes.name }}</h1>
          <Head>
            <Title>{{ motorcycle.attributes.name }} · Janik Rabenstein</Title>
          </Head>
          <div class="mb-6">
            <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
          </div>
          <p v-if="motorcycle.attributes.description">{{ motorcycle.attributes.description }}</p>
          <ul class="text-xl">
            <li v-if="motorcycle.attributes.ccm"><i class="fa-solid fa-bolt text-primary mr-3"></i>{{
            motorcycle.attributes.ccm
            }} CCM</li>
            <li v-if="motorcycle.attributes.horsepower"><i class="fa-solid fa-bolt text-primary mr-3"></i>{{
            motorcycle.attributes.horsepower
            }}</li>
            <li v-if="motorcycle.attributes.construction_year"><i class="fa-solid fa-bolt text-primary mr-3"></i>Baujahr
              {{ motorcycle.attributes.construction_year }}</li>
          </ul>

        </div>


      </div>
      <div class="p-6 my-12" v-if="motorcycle.attributes.tuning_parts[0]">
        <h2>Tuning Parts</h2>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tuning_parts in motorcycle.attributes.tuning_parts" :key="tuning_parts.id">
            <div class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800">
              <img v-if="tuning_parts.image" class="object-cover w-full h-64"
                :src="'http://localhost:3000' + tuning_parts" alt="Article">

              <div class="p-6">

                <p class="preheader">Tuning</p>
                <h3>{{ tuning_parts.name }}</h3>



                <a v-if="tuning_parts.url" :href=tuning_parts.url target="_blank" rel="noopener noreferrer"
                  class="group text-primary hover:text-primary-hover">Produktlink</a>
              </div>
            </div>



          </div>
        </div>
      </div>

      <div class="gap-6 p-6 my-12" v-if="motorcycle.attributes.image.data">
        <h2>Galerie</h2>
        <div class="mb-6">
          <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="image in motorcycle.attributes.image.data" :key="image">
            <img class="rounded w-full" :src="'http://localhost:3000' + image.attributes.formats.small.url"
              :alt="image.attributes.alternativeText">

          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </section>
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
    fetch(`http://localhost:3000/api/motorcycles?filters[url_slug][$eq]=${route.params.slug}&populate=*`)
      .then((res) => res.json())
      .then((data) => (this.motorcycle = data['data'][0]))
      .then((data) => (this.$route.meta.title = data.attributes.name))
      .catch((error) => console.log(error.message));
  },

}

definePageMeta({
  layout: "motorcycle-detail",
  title: 'Motorrad',
  description: 'Meine Motorräder mit allen wichtigen Informationen hier an einem Ort!',
});


</script>

<style>

</style>