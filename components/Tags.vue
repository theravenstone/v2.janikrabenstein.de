<template>

    <div class="flex justify-center">
        <NuxtLink v-for="tag in tags" :key="tag" :to="'/blog/tags/' + tag.attributes.url_slug"
            class="px-3 py-1 text-xs font-bold text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary m-2 font-mono">

            {{tag.attributes.name}}

        </NuxtLink>
    </div>


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
</script>

<style>

</style>