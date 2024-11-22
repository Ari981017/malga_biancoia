<script setup lang="ts">
import type { Activity } from './types';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import hikingImage from '../images/itinerary/malga_it.jpeg';
import wineryImage from '../images/itinerary/biancoia.jpg';
import marketImage from '../images/itinerary/map.jpeg';
import itnerary2 from '../images/itinerary/it_2.png';
import map2 from '../images/itinerary/map2.png';

const props = defineProps<{
  activity: Activity | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

interface Card {
  title: string;
  description: string;
  imageUrl: string;
}

// Sample data for cards
const cards: Card[] = [
  {
    title: "Luogo 1",
    description: "Descrizione del primo luogo",
    imageUrl: hikingImage,
  },
  {
    title: "Luogo 2",
    description: "Descrizione del secondo luogo",
    imageUrl: wineryImage,
  },
  {
    title: "Luogo 3",
    description: "Descrizione del terzo luogo",
    imageUrl: marketImage,
  },
];

const cards2: Card[] = [
  {
    title: "Luogo 1",
    description: "Descrizione del primo luogo",
    imageUrl: itnerary2,
  },
  {
    title: "Luogo 2",
    description: "Descrizione del secondo luogo",
    imageUrl: map2,
  },
];


function getCards(): Card[] {
  if (props.isOpen && props.activity) {
    return props.activity.title === 'Anello Biancoia' ? cards : cards2;
  }
  return [];
}


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
            <p v-if="activity.title === 'Anello Biancoia'">Per un esperienza completa segui la nostra guida:
              <br> 
              <a href="https://footpathapp.com/routes/A587E5A9-D449-4112-B46B-74B7906639EB" target="_blank" class="footmap">Itinerario Malga Biancoia</a>
            </p>
            <p v-if="activity.title === 'A1 | Val Biancoia e dintorni'">Per un esperienza completa segui la nostra guida:
              <br> 
              <a href="https://www.komoot.com/it-it/tour/398572528?share_token=aJs6mWgobf91G9GcKnehI523nIzTNAnI38Xh7FTlEMGmQFhRxV&ref=wtd" target="_blank" class="footmap">Komoot</a>
            </p>
            
            <!-- Map -->
            <div class="mb-6">
              <br>
              <!-- Griglia con 3 card -->
              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div 
                  v-for="(card, index) in getCards()" 
                  :key="index" 
                  class="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <!-- Immagine card -->
                  <img 
                    :src="card.imageUrl" 
                    :alt="card.title" 
                    class="w-full h-60 object-cover">
                </div>
              </div>
            </div>

            <!-- Tips for Visitors -->
            <div v-if="activity.title === 'Anello Biancoia'">
              <h3 class="text-lg font-semibold mb-2">Tips per i visitatori</h3>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Il momento perfetto per la camminata è al mattino.</li>
                <li>Parcheggio disponibile difronte alla Malga</li>
                <li>Non dimenticare la macchina fotografica!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footmap {
  color: green;
  background-color: transparent;
  text-decoration: none;
}
</style>