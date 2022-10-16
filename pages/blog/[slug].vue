<template>
  <section class="container mx-auto p-6 mb-6">
    <div v-if="post">

      <div class="md:w-4/5 mx-auto">
        <div class="mb-6">
        <NuxtLink v-for="tag in post.attributes.tags.data" :key="tag" :to="'/blog/tags/' + tag.attributes.url_slug"
          class="px-3 py-1 text-xs font-bold text-gray-100 transition-colors duration-300 transform bg-primary-hover rounded-full cursor-pointer hover:bg-primary mr-2 font-mono">

          {{tag.attributes.name}}

        </NuxtLink>
      </div>
      <h1>{{ post.attributes.title }}</h1>

      <Head>
        <Title>{{ post.attributes.title }} · Janik Rabenstein</Title>
      </Head>
      <p class="text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-rocket-launch text-primary mr-2"></i> Veröffentlicht {{
        fromNow(Date.parse(post.attributes.publishedAt)) }} <span class="hidden sm:inline">von Janik Rabenstein</span>
      </p>
      </div>
      <img v-if="post.attributes.thumbnail.data" class="object-cover w-full rounded-lg h-96 mb-6"
        :src="'http://localhost:3000' + post.attributes.thumbnail.data.attributes.formats.large.url"
        :alt="post.attributes.thumbnail.data.attributes.alternativeText">
      <div v-html="post.attributes.content" class="md:w-4/5 mx-auto"></div>


    </div>
    <div v-else>
      Loading...
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    const route = useRoute()
    fetch(`http://localhost:3000/api/posts?filters[url_slug][$eq]=${route.params.slug}&populate=*`)
      .then((res) => res.json())
      .then((data) => (this.post = data['data'][0]))
      .then((data) => (this.$route.meta.title = data.attributes.title))
      .catch((error) => console.log(error.message));
  },
  methods: {
    fromNow: function (date) {
      const SECOND = 1000;
      const MINUTE = 60 * SECOND;
      const HOUR = 60 * MINUTE;
      const DAY = 24 * HOUR;
      const WEEK = 7 * DAY;
      const MONTH = 30 * DAY;
      const YEAR = 365 * DAY;
      const units = [
        // { max: 30 * SECOND, divisor: 1, past1: 'gerade jetzt', pastN: 'gerade jetzt', future1: 'gerade jetzt', futureN: 'gerade jetzt' },
        // { max: MINUTE, divisor: SECOND, past1: 'vor einer Sekunde', pastN: 'vor # Sekunden', future1: 'in einer Sekunde', futureN: 'in # Sekunden' },
        // { max: HOUR, divisor: MINUTE, past1: 'vor einer Minute', pastN: 'vor # Minuten', future1: 'in einer Minute', futureN: 'in # Minuten' },
        // { max: DAY, divisor: HOUR, past1: 'vor einer Stunde', pastN: 'vor # Stunden', future1: 'in einer Stunde', futureN: 'in # Stunden' },
        { max: WEEK, divisor: DAY, past1: 'Gestern', pastN: 'vor # Tagen', future1: 'Morgen', futureN: 'in # Tagen' },
        { max: 4 * WEEK, divisor: WEEK, past1: 'letzte Woche', pastN: 'vor # Wochen', future1: 'nächste Woche', futureN: 'in # Wochen' },
        { max: YEAR, divisor: MONTH, past1: 'letzten Monat', pastN: 'vor # Monaten', future1: 'nächsten Monat', futureN: 'in # Monaten' },
        { max: 100 * YEAR, divisor: YEAR, past1: 'letztes Jahr', pastN: 'vor # Jahren', future1: 'nächstes Jahr', futureN: 'in # Jahren' },
        { max: 1000 * YEAR, divisor: 100 * YEAR, past1: 'letztes Jahrhundert', pastN: 'vor # Jahrhunderten', future1: 'in einem Jahrhundert', futureN: 'in # Jahrhunderten' },
        { max: Infinity, divisor: 1000 * YEAR, past1: 'letztes Jahrtausend', pastN: 'vor # Jahrtausenden', future1: 'in einem Jahrtausend', futureN: 'in # Jahrtausenden' },
      ];
      const diff = Date.now() - (typeof date === 'object' ? date : new Date(date)).getTime();
      const diffAbs = Math.abs(diff);
      for (const unit of units) {
        if (diffAbs < unit.max) {
          const isFuture = diff < 0;
          const x = Math.round(Math.abs(diff) / unit.divisor);
          if (x <= 1) return isFuture ? unit.future1 : unit.past1;
          return (isFuture ? unit.futureN : unit.pastN).replace('#', x);
        }
      }
    }
  },

}

definePageMeta({
  layout: "blogpost",
  title: 'Blog',
  description: 'Hier findest du alle interessanten Artikel zu mir und dem was ich so mache. Viel Spaß beim lesen!',
});
</script>

<style>

</style>