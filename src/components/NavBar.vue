<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Itinerari', href: '#itinerary' },
  { name: 'News', href: '#news' },
  { name: 'Galleria', href: '#gallery' },
];

const isOpen = ref(false);
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-bold text-farm-600">Malga Biancoia</span>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a v-for="item in navigation" 
             :key="item.name"
             :href="item.href"
             class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-farm-500">
            {{ item.name }}
          </a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="isOpen = !isOpen"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <Bars3Icon v-if="!isOpen" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div v-show="isOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a v-for="item in navigation"
           :key="item.name"
           :href="item.href"
           @click="isOpen = false"
           class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-farm-500 hover:bg-gray-50">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>