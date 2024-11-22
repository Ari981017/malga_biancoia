<script setup lang="ts">
import { ref } from 'vue';
import type { Activity } from './types';
import ItineraryDetail from './ItineraryDetail.vue';

const activities: Activity[] = [
  {
    title: 'Hiking Trails',
    description: 'Explore scenic mountain trails just minutes away from the resort. Our trails offer varying difficulty levels, from easy nature walks to challenging mountain hikes. Each trail is well-marked and maintained, offering stunning views of the surrounding countryside. You might spot local wildlife and rare plant species along the way.',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
    distance: '5 min drive',
    location: { lat: 43.7696, lng: 11.2558 }
  },
  {
    title: 'Local Winery',
    description: 'Visit our partner winery for tastings and tours. Experience the art of winemaking firsthand in this historic vineyard. The winery offers guided tours of their cellars, explaining the wine-making process from grape to bottle. Enjoy tastings of their award-winning wines paired with local cheeses and charcuterie.',
    imageUrl: 'https://images.unsplash.com/photo-1507934683622-9ec7987427b3',
    distance: '15 min drive',
    location: { lat: 43.7746, lng: 11.2558 }
  },
  {
    title: 'Farmers Market',
    description: 'Experience local produce and crafts at the weekly market. Meet local farmers and artisans while browsing through fresh seasonal produce, handmade crafts, and local delicacies. The market is a hub of community activity and the perfect place to experience authentic local culture.',
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9',
    distance: '10 min drive',
    location: { lat: 43.7696, lng: 11.2608 }
  }
];

const selectedActivity = ref<Activity | null>(null);
const isDetailOpen = ref(false);

const showActivityDetail = (activity: Activity) => {
  selectedActivity.value = activity;
  isDetailOpen.value = true;
};

const closeDetail = () => {
  isDetailOpen.value = false;
  setTimeout(() => {
    selectedActivity.value = null;
  }, 300);
};
</script>

<template>
  <section id="itinerary" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Nearby Attractions</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="activity in activities" 
             :key="activity.title" 
             @click="showActivityDetail(activity)"
             class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
          <div class="relative h-48">
            <img :src="activity.imageUrl" 
                 :alt="activity.title" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <span class="absolute bottom-2 right-2 text-sm text-white px-2 py-1 bg-farm-600 rounded">
              {{ activity.distance }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ activity.title }}</h3>
            <p class="text-gray-600 line-clamp-2">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <ItineraryDetail 
      :activity="selectedActivity"
      :is-open="isDetailOpen"
      @close="closeDetail"
    />
  </section>
</template>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>