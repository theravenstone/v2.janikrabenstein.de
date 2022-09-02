<template>
    <section class="p-6 my-12 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="motorcycle in motorcycles" :key="motorcycle">
                <NuxtLink :to="'/motorrad/' + motorcycle.attributes.url_slug"
                    class="group flex overflow-hidden bg-slate-200 rounded-lg dark:bg-gray-800 lg:hover:-translate-y-4 transition duration-300">
                    <div v-if="motorcycle.attributes.thumbnail.data" class="w-1/3">
                        <img class="object-none h-full"
                            :src="'http://localhost:3000' + motorcycle.attributes.thumbnail.data.attributes.formats.thumbnail.url"
                            alt="">
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <h2 class="text-2xl font-bold mb-3">{{ motorcycle.attributes.name }}</h2>

                        <ul class="text-lg">
                            <li v-if="motorcycle.attributes.ccm"><i class="fa-solid fa-bolt text-primary mr-3"></i>{{
                                    motorcycle.attributes.ccm
                            }} CCM</li>
                            <li v-if="motorcycle.attributes.horsepower"><i
                                    class="fa-solid fa-bolt text-primary mr-3"></i>{{
                                            motorcycle.attributes.horsepower
                                    }} PS</li>
                            <li v-if="motorcycle.attributes.construction_year"><i
                                    class="fa-solid fa-bolt text-primary mr-3"></i>Baujahr
                                {{ motorcycle.attributes.construction_year }}</li>
                        </ul>

                    </div>
                </NuxtLink>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            motorcycles: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/api/motorcycles?populate=thumbnail")
            .then((res) => res.json())
            .then((data) => (this.motorcycles = data['data']))
            .catch((error) => console.log(error.message));
    },

}
definePageMeta({
    layout: "subpage",
    title: 'Motorrad',
    description: 'Meine Motorräder mit allen wichtigen Informationen hier an einem Ort!',
});

</script>

<style>
</style>