<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = {
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' }
  ],
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'info@farmhouseresort.com',
    address: '123 Countryside Lane, Rural County, RC 12345'
  }
};
</script>

<template>
  <footer class="bg-farm-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Resort Info -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Farmhouse Resort</h3>
          <p class="text-farm-200 mb-4">Experience authentic farm living with modern comfort in our beautifully restored 19th-century farmhouse.</p>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <div class="space-y-2 text-farm-200">
            <p>{{ links.contact.phone }}</p>
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
               class="text-farm-200 hover:text-white transition-colors">
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-farm-700 text-center text-farm-200">
        <p>&copy; {{ currentYear }} Farmhouse Resort. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>