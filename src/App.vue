<template>
  <div id="app">
    <div class="global-background-wrapper">
      <video autoplay muted loop playsinline class="global-background-video">
        <source src="/mybackground.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- Komponen yang sudah ada -->
    <SocialLinks />
    <Header />
    
    <!-- Komponen Navigasi Baru -->
    <PageNavigator 
      v-if="showNavigator"
      :prev-route="prevRoute" 
      :next-route="nextRoute" 
    />

    <main :class="['main-content', { 'no-padding-top': $route.path === '/' }]">
      <router-view /> 
    </main>

    <Footer v-if="$route.path !== '/'" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { routesInOrder } from './router.js'; // Impor urutan rute

// Impor komponen yang ada dan yang baru
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SocialLinks from './components/SocialLinks.vue'
import PageNavigator from './components/PageNavigator.vue'; // Impor komponen navigasi

const route = useRoute();

// Tentukan apakah navigator harus ditampilkan (tidak di halaman utama)
const showNavigator = computed(() => route.path !== '/');

// Cari tahu indeks halaman saat ini
const currentIndex = computed(() => routesInOrder.indexOf(route.path));

// Tentukan rute sebelumnya berdasarkan indeks
const prevRoute = computed(() => {
  if (currentIndex.value > 0) {
    return routesInOrder[currentIndex.value - 1];
  }
  return null; // Tidak ada halaman sebelumnya
});

// Tentukan rute berikutnya berdasarkan indeks
const nextRoute = computed(() => {
  if (currentIndex.value < routesInOrder.length - 1) {
    return routesInOrder[currentIndex.value + 1];
  }
  return null; // Tidak ada halaman berikutnya
});
</script>

<style>
/* Global Styles Anda tetap sama */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: transparent;
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.global-background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

.global-background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.main-content {
  flex-grow: 1;
  position: relative;
  padding-top: 90px;
}

.main-content.no-padding-top {
  padding-top: 0;
}
</style>