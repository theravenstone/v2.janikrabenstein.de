<template>
    <div>
      <PageLoader/>
      <FixedSocials/>
      <Header />
      <div>
       <slot />
      </div>
      <Footer />
    </div>
  </template>
  
  
  <script setup>
  const route = useRoute()
  useHead({
    title: `${route.meta.title} · Janik Rabenstein`,
    meta: [
        { name: 'og:title', content: `${route.meta.title} · Janik Rabenstein` },
        { name: 'twitter:title', content: `${route.meta.title} · Janik Rabenstein` },
        { name: 'description', content: `${route.meta.description}` },
        { name: 'og:description', content: `${route.meta.description}` },
        { name: 'twitter:description', content: `${route.meta.description}` },
    ],
  })
  </script>