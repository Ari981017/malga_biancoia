<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import antipastiImage from '../images/menu/antipasti.jpg';
import primiImage from '../images/menu/primi.jpg';
import secondiImage from '../images/menu/secondi.jpg';
import dolciImage from '../images/menu/dolci.jpg';

interface MenuItem {
  name: string;
  image?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  image: string;
  items: MenuItem[];
}

const menu: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    image: antipastiImage,
    items: [
      { name: 'Panino con salame e/o formaggio'},
      { name: 'Tagliere di Formaggi'},
      { name: 'Tagliere di Salumi'},
      { name: 'Tagliere Misto'}
    ]
  },
  {
    id: 'primi',
    title: 'Primi',
    image: primiImage,
    items: [
      { name: 'Gnocchi al Burro di Malga'},
      { name: 'Gnocchi al Ragù di Sorana'},
      { name: 'Lasagne al Ragù di Sorana'}
    ]
  },
  {
    id: 'secondi',
    title: 'Secondi',
    image: secondiImage,
    items: [
      { name: 'Tosella con Polenta e Funghi'},
      { name: 'Hamburger Biancoia'},
      { name: 'Piatto del giorno'}
    ]
  },
  {
    id: 'dolci',
    title: 'Dolci',
    image: dolciImage,
    items: [
      { name: 'Panna Cotta'},
      { name: 'AgriGelato'},
      { name: 'Dolce della Casa'}
    ]
  }
];

const activeCategory = ref<string | null>(null);

const toggleCategory = (categoryId: string) => {
  activeCategory.value = activeCategory.value === categoryId ? null : categoryId;
};

const isActive = (categoryId: string) => activeCategory.value === categoryId;
</script>

<template>
  <section id="menu" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Menu</h2>

      <!-- Menu Categories -->
      <div class="space-y-6">
        <div v-for="category in menu" 
             :key="category.id"
             class="bg-white rounded-lg shadow-md overflow-hidden">
          
          <!-- Category Header -->
          <button @click="toggleCategory(category.id)"
                  class="w-full flex items-center justify-between p-6 focus:outline-none focus:ring-2 focus:ring-farm-500 focus:ring-inset"
                  :aria-expanded="isActive(category.id)"
                  :aria-controls="`content-${category.id}`">
            <div class="flex items-center space-x-4">
              <img :src="category.image" 
                   :alt="category.title"
                   class="w-16 h-16 object-cover rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900">{{ category.title }}</h3>
            </div>
            <ChevronDownIcon 
              class="w-6 h-6 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': isActive(category.id) }"
            />
          </button>

          <!-- Category Content -->
          <div v-show="isActive(category.id)"
               :id="`content-${category.id}`"
               class="border-t border-gray-200">
            <div class="divide-y divide-gray-200">
              <div v-for="item in category.items" 
                   :key="item.name"
                   :class="['p-6 transition-colors duration-200']">
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-900 flex items-center">
                      {{ item.name }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>