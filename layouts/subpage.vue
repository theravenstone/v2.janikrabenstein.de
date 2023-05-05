<template>
    <div class="text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <PageLoader />
        <Header />
        <slot />
        <Footer />

    </div>
</template>
  
<script setup>
const route = useRoute()
</script>
  
<style></style>