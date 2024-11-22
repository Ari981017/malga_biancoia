<script setup lang="ts">
import { ref } from 'vue';
import hamburgerImage from '../images/gallery/panino.jpg';
import pasticcioImage from '../images/gallery/pasticcio.jpg';
import cheeseImage from '../images/gallery/formaggio.jpg';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const images: GalleryImage[] = [
  {
    url: hamburgerImage,
    title: 'Hamburger Biancoia',
    description: 'Il nostro hamburger di sorna!'
  },
  {
    url: pasticcioImage,
    title: 'Lasagne',
    description: 'Le nostro lasagne fatto in casa!'
  },
  {
    url: cheeseImage,
    title: 'Formaggi',
    description: 'I nostri formaggi artigianali'
  }
];

const selectedImage = ref<GalleryImage | null>(null);
</script>

<template>
  <section id="gallery" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Galleria</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="image in images" :key="image.url" 
             @click="selectedImage = image"
             class="cursor-pointer group relative">
          <img :src="image.url" :alt="image.title" 
               class="w-full h-full object-cover rounded-lg">
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