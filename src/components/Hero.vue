<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  imageUrl: string;
}>();
</script>

<template>
  <section class="relative h-screen">
    <div class="absolute inset-0">
      <img :src="imageUrl" class="w-full h-full object-cover" :alt="title">
      <div class="absolute inset-0 bg-gray-900 opacity-40"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{{ title }}</h1>
        <p class="mt-6 text-xl text-white max-w-3xl mx-auto">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>