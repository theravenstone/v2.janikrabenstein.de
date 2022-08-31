<template>
    <div class="bg-slate-200 dark:bg-slate-800 my-12">
        <div class="container flex items-center px-6 py-4 mx-auto overflow-y-auto whitespace-nowrap">

            <NuxtLink to="/" class="text-primary hover:text-primary-hover">
                <i class="fa-solid fa-house-chimney"></i>
            </NuxtLink>
            <span v-for="item in crumbs" :key="item">
                <i class="fa-solid fa-angle-right mx-5"></i>
                <span>{{ item.name }}</span>

            </span>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        crumbs() {
            const crumbs = []
            this.$route.matched.forEach((item, i, { length }) => {
                const crumb = {}


                // is last item?
                if (i === length - 1) {
                    // crumb.path = this.$route.path
                    crumb.name = this.$route.meta.title

                    crumb.active = true
                } else {
                    // crumb.path = item.path
                    crumb.name = item.meta.title || item.path
                }
                if (!crumbs.includes(crumb)) {
                    crumbs.push(crumb)
                }
            })


            return crumbs
        }
    }
}
</script>

<style>
</style>