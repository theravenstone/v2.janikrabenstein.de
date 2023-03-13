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

  gtag('config', 'G-YZC29VW4PH');

})


console.log('')
console.log('  888888                   d8b 888           8888888b.           888                                 888            d8b          ')
console.log('    "88b                   Y8P 888           888   Y88b          888                                 888            Y8P          ')
console.log('     888                       888           888    888          888                                 888                         ')
console.log('     888  8888b.  88888b.  888 888  888      888   d88P  8888b.  88888b.   .d88b.  88888b.  .d8888b  888888 .d88b.  888 88888b.  ')
console.log('     888     "88b 888 "88b 888 888 .88P      8888888P"      "88b 888 "88b d8P  Y8b 888 "88b 88K      888   d8P  Y8b 888 888 "88b ')
console.log('     888 .d888888 888  888 888 888888K       888 T88b   .d888888 888  888 88888888 888  888 "Y8888b. 888   88888888 888 888  888 ')
console.log('     88P 888  888 888  888 888 888 "88b      888  T88b  888  888 888 d88P Y8b.     888  888      X88 Y88b. Y8b.     888 888  888 ')
console.log('     888 "Y888888 888  888 888 888  888      888   T88b "Y888888 88888P"   "Y8888  888  888  88888P"  "Y888 "Y8888  888 888  888 ')
console.log('   .d88P                                                                                                                         ')
console.log(' .d88P"                                                                                                                          ')
console.log('888P"                                                                                                                            ')
console.log('')
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