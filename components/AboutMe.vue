<template>
  <XContainer75>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="flex items-center">
        <div>
          <span class="preheader">Über mich</span>
          <h2>Das ist meine Geschichte<span class="text-primary">.</span></h2>
          <div class="mb-6">
            <span class="inline-block w-40 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-5 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-1 h-1 mx-1 bg-primary rounded-full"></span>
          </div>
          <!-- <p>{{ age }} Jahre jung &middot; Aufgewachsen im
            Fichtelgebirge</p> -->
          <p>Alles begann, als ich 14 war. Ein guter Freund von mir hatte aus Spaß mit dem Programmieren von Discord
            Bots angefangen. Schnell habe ich mich auch dafür begeistern können.</p>
          <p>Es hat nicht lange gedauert, bis ich meine ersten Schritte in der Python Entwicklung gemacht habe und dies
            zu meinem Hobby wurde. Zwei Jahre später habe ich meine Schule abgeschlossen und eine Ausbildung im Bereich
            Web-Entwicklung angefangen.</p>
          <p>Mittlerweile arbeite ich seit über 3 Jahren als Vollzeit-Web-Entwickler und habe viele Erfahrungen
            gesammelt.</p>
          <p>Zu meinen Hobbys gehören Snowboarden, Eislaufen und Motorrad fahren. Gerne treffe ich mich auch mit
            Freunden oder mache einen gemütlichen Filmabend mit meiner Familie.</p>
        </div>
      </div>
      <div class="flex items-center">
        <img src="@/assets/img/me.jpg" alt="" class="rounded-lg w-full h-full object-cover">
      </div>
    </div>
  </XContainer75>

</template>

<script>
export default {
  data() {
    return {
      age: 0
    }
  },
  methods: {
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  mounted() {
    this.age = this.getAge("2003-06-14");
  }
}
</script>

<style>

</style>