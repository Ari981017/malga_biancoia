<script setup lang="ts">
interface NewsItem {
  title: string;
  date: string;
  content: string;
}

const news: NewsItem[] = [
  {
    title: 'CASEUS',
    date: '2024-10-05',
    content: '1° Classificato Formaggio di Fattoria Caciotta'
  },
  {
    title: 'SU IN MALGA! - Gallio',
    date: '2024-07-28',
    content: '2° Classificati Nostrano Biancoia'
  }
];
</script>

<template>
  <section id="news" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">News</h2>
      <div class="space-y-8">
        <article v-for="item in news" :key="item.title" 
                 class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
            <time :datetime="item.date" class="text-sm text-gray-500">
              {{ new Date(item.date).toLocaleDateString() }}
            </time>
          </div>
          <p class="text-gray-600">{{ item.content }}</p>
        </article>
      </div>
    </div>
  </section>
</template>