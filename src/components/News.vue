<script setup lang="ts">
interface NewsItem {
  title: string;
  date: string;
  content: string;
}

const news: NewsItem[] = [
  {
    title: 'Summer Festival Announcement',
    date: '2024-06-01',
    content: 'Join us for our annual Summer Festival featuring local music, food, and crafts.'
  },
  {
    title: 'New Farm-to-Table Menu',
    date: '2024-05-15',
    content: 'We\'re excited to announce our new seasonal menu featuring ingredients from our garden.'
  },
  {
    title: 'Cooking Classes Begin',
    date: '2024-05-01',
    content: 'Learn traditional cooking techniques with our expert chefs every weekend.'
  }
];
</script>

<template>
  <section id="news" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Latest News</h2>
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