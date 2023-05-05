<template>
  <div>
    <HomeHero />
    <HomeAboutMe />
    <HomeIconSlider />
    <HomeRepositories />
    <HomeLatestPosts />
    <HomeContact />
  </div>
</template>

<script setup>

useHead({
    title: "Startseite · Janik Rabenstein",
    meta: [
        { hid: 'description', name: "description", content: "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt" },
        // Twitter stuff
        { hid: 'twitter:title', name: "twitter:title", content: "Startseite · Janik Rabenstein" },
        { hid: 'twitter:description', name: "twitter:description", content: "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt" },
        // OG stuff
        { hid: 'og:title', name: "og:title", content: "Startseite · Janik Rabenstein" },
        { hid: 'og:description', name: "og:description", content: "Janik Rabenstein - Ihr erfahrener Webentwickler in Bayreuth. Professionelle Websites und individuelle Lösungen für Ihren Online-Auftritt" },
    ],
})
</script>

<style>

</style>