<template>
    <div v-if="loading" id="loading-screen"
        class="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 flex place-content-center items-center bg-gray-900 overflow-hidden">
        <div>
            <img src="@/assets/logo.png" alt="Loading Page..." class="animate-pulse mb-6" />
            <div class="text-center font-bold font-nexabold text-xl text-white">
                Loading...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
        }
    },
    mounted() {
        this.loading = false;
    }
}



</script>

<style>

</style>