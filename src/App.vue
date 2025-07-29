<template>
  <div id="app">
    <!-- 1. Layar Pemuatan (Loading Screen) -->
    <div id="loading-screen" v-if="isLoading">
      <div class="welcome-message">
        <h1>Welcome to My Profile</h1>
        <div class="spinner"></div>
      </div>
    </div>

    <!-- 2. Konten Utama Aplikasi (setelah loading selesai) -->
    <template v-if="!isLoading">
      <!-- Latar Belakang Video Global -->
      <div class="global-background-wrapper">
        <video autoplay muted loop playsinline class="global-background-video">
          <!-- Pastikan Anda memiliki video ini di folder /public -->
          <source src="/mybackground.mp4" type="video/mp4" />
        </video>
      </div>

      <!-- Komponen Tetap -->
      <SocialLinks />
      <Header />

      <!-- Konten Halaman yang Dinamis dengan Animasi -->
      <main :class="['main-content', { 'no-padding-top': $route.path === '/' }]">
        <router-view v-slot="{ Component }">
          <!-- 3. Animasi Transisi Halaman -->
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Footer hanya tampil di luar halaman utama -->
      <Footer v-if="$route.path !== '/'" />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SocialLinks from './components/SocialLinks.vue';

// State untuk mengontrol tampilan loading screen
const isLoading = ref(true);

// Hook yang dijalankan setelah komponen di-mount
onMounted(() => {
  // Mengatur timer untuk menyembunyikan loading screen setelah 3 detik
  // Anda bisa sesuaikan durasi ini (dalam milidetik)
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); 
});
</script>

<style>
/* --- Gaya Global --- */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: transparent; /* Diperlukan agar video terlihat */
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

/* --- Latar Belakang Video Global --- */
.global-background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2; /* Diletakkan di belakang semua konten */
}

.global-background-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Memastikan video menutupi seluruh area */
  filter: brightness(0.6); /* Membuat video sedikit lebih gelap */
}

/* --- Konten Utama --- */
.main-content {
  flex-grow: 1;
  position: relative;
  padding-top: 90px; /* Memberi ruang untuk header */
}

/* Hapus padding atas di halaman utama */
.main-content.no-padding-top {
  padding-top: 0;
}

/* --- Gaya Layar Pemuatan (Loading Screen) --- */
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Tampil di atas segalanya */
  flex-direction: column;
}

.welcome-message h1 {
  color: #00bcd4; /* Warna aksen */
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #00bcd4; /* Warna aksen */
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* --- Gaya Animasi Transisi Halaman (Fade) --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
