<template>
    <div>
        <NuxtLink v-for="tag in tags" :key="tag" :to="'/blog/tags/' + tag.attributes.url_slug"
            class="inline-block px-3 py-1 text-xs font-bold text-white transition-colors duration-300 transform border-2 border-primary bg-primary/10 rounded-full cursor-pointer hover:bg-primary mr-2 mb-2 font-mono flex-shrink-0">
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