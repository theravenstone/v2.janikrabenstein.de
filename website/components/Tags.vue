<template>
  
        <div class="flex justify-center">
            <NuxtLink v-for="tag in tags" :key="tag" :to="'/blog/tags/' + tag.attributes.url_slug"
                class="px-3 py-1 text-xs font-medium text-slate-100 transition-colors duration-300 transform bg-primary rounded-full cursor-pointer hover:bg-primary-hover m-2">

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
        fetch(`http://localhost:3000/api/tags?populate=*`)
            .then((res) => res.json())
            .then((data) => (this.tags = data['data']))
            .catch((error) => console.log(error.message));
    },

}
</script>

<style>

</style>