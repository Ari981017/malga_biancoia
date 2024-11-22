<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image?: string;
  isSpecial?: boolean;
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
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
    items: [
      { name: 'Panino con salame e/o formaggio', description: 'Artisanal bread with selected cured meats and cheeses', price: 12 },
      { name: 'Tagliere di Formaggi', description: 'Selection of local aged cheeses', price: 16 },
      { name: 'Tagliere di Salumi', description: 'Assortment of cured meats', price: 16 },
      { name: 'Tagliere Misto', description: 'Mixed board of cheeses and cured meats', price: 22 }
    ]
  },
  {
    id: 'primi',
    title: 'Primi',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    items: [
      { name: 'Gnocchi al Burro di Malga', description: 'Potato gnocchi with mountain butter', price: 18 },
      { name: 'Gnocchi al Ragù di Sorana', description: 'Potato gnocchi with traditional meat sauce', price: 20 },
      { name: 'Lasagne al Ragù di Sorana', description: 'Layered pasta with meat sauce and béchamel', price: 22 }
    ]
  },
  {
    id: 'secondi',
    title: 'Secondi',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    items: [
      { name: 'Tosella con Polenta e Funghi', description: 'Fresh cheese with polenta and mushrooms', price: 24 },
      { name: 'Hamburger Biancoia', description: 'Artisanal beef burger with local cheese', price: 22 },
      { 
        name: 'Piatto del giorno', 
        description: "Chef's special of the day", 
        price: 26,
        isSpecial: true 
      }
    ]
  },
  {
    id: 'dolci',
    title: 'Dolci',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    items: [
      { name: 'Panna Cotta', description: 'Classic Italian dessert with berry coulis', price: 8 },
      { name: 'AgriGelato', description: 'Homemade ice cream with farm-fresh ingredients', price: 7 },
      { name: 'Dolce della Casa', description: 'Daily special dessert', price: 9 }
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
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Our Menu</h2>

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
                   :class="[
                     'p-6 transition-colors duration-200',
                     item.isSpecial ? 'bg-farm-50' : ''
                   ]">
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-900 flex items-center">
                      {{ item.name }}
                      <span v-if="item.isSpecial" 
                            class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-farm-100 text-farm-800">
                        Special
                      </span>
                    </h4>
                    <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                  </div>
                  <span class="text-farm-600 font-medium">€{{ item.price }}</span>
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