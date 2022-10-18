<template>
    <section class="p-6 my-12 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <NuxtLink :to="'/motorrad/' + motorcycle.attributes.url_slug" v-for="motorcycle in motorcycles"
                :key="motorcycle">
                <div
                    class="overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 lg:hover:-translate-y-4 transition duration-300">
                    <img class="object-cover w-full h-64"
                        :src="'http://localhost:2345' + motorcycle.attributes.thumbnail.data.attributes.formats.medium.url"
                        :alt="motorcycle.attributes.thumbnail.data.attributes.alternativeText">

                    <div class="p-6">
                        <div>
                            <p class="preheader">Motorrad</p>

                            <h2>{{ motorcycle.attributes.name }}</h2>

                            <ul class="text-gray-600 dark:text-gray-400">
                                <li v-if="motorcycle.attributes.ccm"><i
                                        class="fa-solid fa-bolt text-primary mr-3"></i>{{
                                        motorcycle.attributes.ccm
                                        }} CCM</li>
                                <li v-if="motorcycle.attributes.horsepower"><i
                                        class="fa-solid fa-bolt text-primary mr-3"></i>{{
                                        motorcycle.attributes.horsepower
                                        }}</li>
                                <li v-if="motorcycle.attributes.construction_year"><i
                                        class="fa-solid fa-bolt text-primary mr-3"></i>Baujahr
                                    {{ motorcycle.attributes.construction_year }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NuxtLink>
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
        fetch("http://localhost:2345/api/motorcycles?populate=thumbnail")
            .then((res) => res.json())
            .then((data) => (this.motorcycles = data['data']))
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