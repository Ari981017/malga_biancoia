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
      <Hero 
        title="Welcome to Our Farmhouse Resort"
        subtitle="Experience authentic farm living with modern comfort in our beautifully restored 19th-century farmhouse"
        imageUrl="https://images.unsplash.com/photo-1516571748831-5d81767b044d"
      />
      <Menu />
      <Itinerary />
      <News />
      <Gallery />
    </main>
    <Footer />
  </div>
</template>