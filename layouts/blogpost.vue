<template>
  <div class="text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
    <PageLoader/>
    <Header />
    <Breadcrumb class="mt-0"/>
    <div class="container mx-auto">
     <slot />
    </div>
    <Footer />

  </div>
</template>

<script setup>

</script>

<style>

</style>