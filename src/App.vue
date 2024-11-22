<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Menu from './components/Menu.vue';
import Itinerary from './components/Itinerary.vue';
import News from './components/News.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <main>
      <section id="home">
      <Hero 
        title="Agriturismo Malga Biancoia"
        subtitle="Nel 2023, la nostra azienda agricola ha preso in gestione l’agriturismo Malga Biancoia, con l’intento di condividere la nostra passione e tradizione. Qui potrai godere della natura e assaporare i nostri formaggi artigianali, vivendo un’esperienza autentica in un ambiente familiare."
      />
    </section>
      <Menu />
      <Itinerary />
      <News />
      <Gallery />
    </main>
    <Footer />
  </div>
</template>