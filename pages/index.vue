<template>
  <div>
    <Head>
      <Title>Startseite · Janik Rabenstein</Title>
      <Meta name="description"
        content="Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!" />
    </Head>
    <Hero />
    <AboutMe />
    <IconSlider />
    <LatestPosts />
    <Contact />
  </div>
</template>

<script setup>
useHead({
  title: `Startseite · Janik Rabenstein`,
})
definePageMeta({
  title: 'Startseite',
  description: 'Dein Webentwickler aus dem Landkreis Bayreuth. Lass uns gemeinsam das nächste Projekt starten!',
})

</script>

<style>

</style>