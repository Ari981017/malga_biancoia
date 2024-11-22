<script setup lang="ts">
import { ref } from 'vue';
import type { Activity } from './types';
import ItineraryDetail from './ItineraryDetail.vue';
import hikingImage from '../images/itinerary/cartelli.jpg';
import greenImage from '../images/itinerary/green.png';

const activities: Activity[] = [
  {
    title: 'Anello Biancoia',
    description: 'La passeggiata ad anello nei boschi di Val Biancoia, con partenza e arrivo a Malga Biancoia, è perfetta per chi vuole godersi la natura in tutta tranquillità. Questo percorso di circa 1 ora e 30 minuti ti porta tra alberi secolari e splendide viste panoramiche.Iniziamo da Malga Biancoia, salendo leggermente, potrai ammirare la valle e le montagne circostanti, con pause obbligate per scattare qualche foto. Nei punti più alti, prati fioriti e scorci mozzafiato ti aspettano.La discesa ti riporta lentamente verso Malga Biancoia, dove ti aspetta un meritato riposo. Dopo questa bellissima passeggiata, l’ideale è fermarsi per un pranzo tradizionale nella nostra malga.',
    imageUrl: hikingImage,
    distance: '1 ora 30 minuti',
    location: { lat: 43.7696, lng: 11.2558 }
  },
  {
    title: 'A1 | Val Biancoia e dintorni',
    description: 'L’itinerario si snoda in una zona facilmente raggiungibile dalla pianura, con interessanti viste panoramiche sulla pianura stessa e, verso est, sul Monte Grappa, sulle Pale di San Martino e sui rilievi feltrini e bellunesi.Il paesaggio è caratterizzato da estesi boschi di faggio che, verso la fine della stagione estiva, regalano panorami autunnali molto suggestivi. Il percorso corrisponde parzialmente all’itinerario CAI 872 Ciscati/Biancoia. Quest’area, vocata all’attività estrattiva, è anche conosciuta per le vicine Cave dipinte di Rubbio.',
    imageUrl: greenImage,
    distance: '4 ore',
    location: { lat: 43.7746, lng: 11.2558 }
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
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Itinerari a Biancoia</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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