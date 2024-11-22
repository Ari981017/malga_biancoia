<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = {
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/agriturismo_malga_biancoia/' }
  ],
  contact: {
    phone: '+39 347 1094928',
    phone2: '+39 349 1482936',
    email: 'larivierasoc.agr@gmail.com',
    address: ' Via biancoia, 1, 36062 Lusiana Conco VI'
  }
};
</script>

<template>
  <footer class="bg-farm-700 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-60" style="display: flex; justify-content:space-between;">
        <!-- Contact Info -->
        <div >
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <div class="space-y-2 text-farm-200">
            <p>{{ links.contact.phone }}</p>
            <p>{{ links.contact.phone2 }}</p>
            <p>{{ links.contact.email }}</p>
            <p>{{ links.contact.address }}</p>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a v-for="social in links.social" 
               :key="social.name"
               :href="social.href"
               class="text-farm-200 hover:text-white transition-colors"
               target="_blank">
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-farm-700 text-center text-farm-200" style="text-align: center;">
        <p>&copy; {{ currentYear }} Agriturismo Malga Biancoia. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>