<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>

import '~/assets/js/fontawesome.js';
import '~/assets/js/splide.js';
import '~/assets/js/splide-extension-auto-scroll.js';
import '~/assets/css/splide.css';

onNuxtReady(async () => {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-YZC29VW4PH', { 'anonymize_ip': true });

})

</script>

<style>
.page-enter-active,
.layout-enter-active,
.page-leave-active,
.layout-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.layout-enter-from {
  opacity: 0;
  filter: blur(0.2rem);
  transform: translate(50px, 0);
}

.page-leave-to,
.layout-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
  transform: translate(-50px, 0);
}
</style>