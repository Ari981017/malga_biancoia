<script setup lang="ts">
import { ref } from 'vue';
import mainBuildingImage from '../images/gallery/main-building.jpg';
import diningImage from '../images/gallery/dining.jpg';
import gardenImage from '../images/gallery/garden.jpg';
import surroundingsImage from '../images/gallery/surroundings.jpg';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const images: GalleryImage[] = [
  {
    url: mainBuildingImage,
    title: 'Main Building',
    description: 'Our beautifully restored farmhouse'
  },
  {
    url: diningImage,
    title: 'Dining Area',
    description: 'Farm-to-table dining experience'
  },
  {
    url: gardenImage,
    title: 'Garden',
    description: 'Our organic vegetable garden'
  },
  {
    url: surroundingsImage,
    title: 'Surroundings',
    description: 'Beautiful countryside views'
  }
];

const selectedImage = ref<GalleryImage | null>(null);
</script>

<template>
  <section id="gallery" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="image in images" :key="image.url" 
             @click="selectedImage = image"
             class="cursor-pointer group relative">
          <img :src="image.url" :alt="image.title" 
               class="w-full h-64 object-cover rounded-lg">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span class="text-white text-lg font-medium">{{ image.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedImage" 
         class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
         @click="selectedImage = null">
      <div class="max-w-4xl mx-auto p-4">
        <img :src="selectedImage.url" :alt="selectedImage.title" 
             class="max-h-[80vh] w-auto">
        <div class="mt-4 text-white">
          <h3 class="text-xl font-semibold">{{ selectedImage.title }}</h3>
          <p>{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>