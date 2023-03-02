<template>
  <div>
    <Head>
      <Title>Startseite · Janik Rabenstein</Title>
      <Meta name="description"
        content="Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!" />
    </Head>
    <HomeHero />
    <HomeAboutMe />
    <HomeIconSlider />
    <HomeLatestPosts />
    <HomeContact />
  </div>
</template>

<script setup>
useHead({
  title: `Startseite · Janik Rabenstein`,
})
definePageMeta({
  layout: "home",
  title: 'Startseite',
  description: 'Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!',
})

</script>

<style>

</style>