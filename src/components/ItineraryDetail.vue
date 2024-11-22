<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import type { Activity } from './types';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import type { Map as LeafletMap, TileLayer } from 'leaflet';

const props = defineProps<{
  activity: Activity | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const mapContainer = ref<HTMLElement | null>(null);
const map = ref<LeafletMap | null>(null);

const initMap = async () => {
  if (!props.activity || !mapContainer.value) return;

  const L = (await import('leaflet')).default;
  
  // Add Leaflet CSS
  if (!document.querySelector('#leaflet-css')) {
    const link = document.createElement('link');
    link.id = 'leaflet-css';
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
  }

  // Resort location (example coordinates)
  const resortLocation = [43.7696, 11.2558];
  // Activity location (example coordinates offset from resort)
  const activityLocation = [43.7696 + Math.random() * 0.01, 11.2558 + Math.random() * 0.01];

  map.value = L.map(mapContainer.value).setView(resortLocation, 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value);

  // Add markers
  L.marker(resortLocation).addTo(map.value)
    .bindPopup('Farmhouse Resort')
    .openPopup();

  L.marker(activityLocation).addTo(map.value)
    .bindPopup(props.activity.title);

  // Draw a line between points
  L.polyline([resortLocation, activityLocation], {color: 'red'}).addTo(map.value);
};

watch(() => props.activity, async (newActivity) => {
  if (newActivity) {
    // Wait for DOM update
    await new Promise(resolve => setTimeout(resolve, 0));
    initMap();
  }
});

onUnmounted(() => {
  if (map.value) {
    map.value.remove();
    map.value = null;
  }
});

const openingHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
];

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@example.com',
  website: 'www.example.com'
};
</script>

<template>
  <div v-if="isOpen && activity" 
       class="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto"
       @click.self="emit('close')">
    <div class="min-h-screen px-4 text-center">
      <div class="inline-block w-full max-w-4xl my-8 text-left align-middle bg-white rounded-lg shadow-xl transform transition-all">
        <!-- Header -->
        <div class="relative">
          <img :src="activity.imageUrl" :alt="activity.title" 
               class="w-full h-64 object-cover rounded-t-lg">
          <button @click="emit('close')"
                  class="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
            <XMarkIcon class="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <!-- Content -->
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">{{ activity.title }}</h2>
              <p class="text-farm-500">{{ activity.distance }}</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-gray-600 mb-6">{{ activity.description }}</p>

            <!-- Opening Hours -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Opening Hours</h3>
              <div class="space-y-1">
                <div v-for="schedule in openingHours" :key="schedule.day"
                     class="flex justify-between text-sm">
                  <span class="text-gray-600">{{ schedule.day }}</span>
                  <span class="text-gray-900">{{ schedule.hours }}</span>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Contact Information</h3>
              <div class="space-y-1 text-sm">
                <p><span class="text-gray-600">Phone:</span> <span class="text-gray-900">{{ contactInfo.phone }}</span></p>
                <p><span class="text-gray-600">Email:</span> <span class="text-gray-900">{{ contactInfo.email }}</span></p>
                <p><span class="text-gray-600">Website:</span> <span class="text-gray-900">{{ contactInfo.website }}</span></p>
              </div>
            </div>

            <!-- Map -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Location & Directions</h3>
              <div ref="mapContainer" class="h-64 rounded-lg"></div>
            </div>

            <!-- Tips for Visitors -->
            <div>
              <h3 class="text-lg font-semibold mb-2">Tips for Visitors</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Best time to visit is during morning hours</li>
                <li>Parking available on-site</li>
                <li>Guided tours available upon request</li>
                <li>Don't forget to bring your camera!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>