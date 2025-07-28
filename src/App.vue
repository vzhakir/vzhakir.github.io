<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
// 1. Impor `navigationRoutes` dari router
import { navigationRoutes } from './router.js'; 
import Footer from './components/Footer.vue';

const route = useRoute();

// Komputasi untuk mendapatkan nama rute saat ini
const currentRouteName = computed(() => {
  const matchedRoute = navigationRoutes.find(r => r.path === route.path);
  return matchedRoute ? matchedRoute.name : '';
});
</script>

<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/">
          <span>{{ currentRouteName || 'MyPortfolio' }}</span>
        </RouterLink>
      </div>
      <nav>
        <RouterLink v-for="navRoute in navigationRoutes" :key="navRoute.name" :to="navRoute.path">
          {{ navRoute.name }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  
  <Footer />
</template>

<style scoped>
header {
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00bcd4;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #e0e0e0;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

nav a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #00bcd4;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

nav a:hover {
  color: #00bcd4;
}

nav a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Style untuk link yang aktif */
nav a.router-link-exact-active {
  color: #00bcd4;
}

main {
  padding-top: 80px; /* Memberi ruang untuk header yang fixed */
}

/* Animasi Fade untuk Transisi Halaman */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>