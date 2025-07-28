<template>
  <div id="app">
    <div class="global-background-wrapper">
      <video autoplay muted loop playsinline class="global-background-video">
        <source src="/mybackground.mp4" type="video/mp4" />
      </video>
    </div>

    <SocialLinks />
    <Header />

    <main :class="['main-content', { 'no-padding-top': $route.path === '/' }]">
      <router-view /> </main>

    <Footer v-if="$route.path !== '/'" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SocialLinks from './components/SocialLinks.vue'
</script>

<style>
/* Global Styles untuk memastikan halaman mengisi viewport dan tanpa scroll */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: transparent; /* Default background jika video belum dimuat */
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* Penting untuk posisi absolut global-background-wrapper jika ingin absolute bukan fixed */
}

/* Styles untuk Video Background Global */
.global-background-wrapper {
  position: fixed; /* Fixed agar selalu di viewport dan tidak ikut scroll */
  top: 0;
  left: 0;
  width: 100vw; /* Mengisi penuh lebar viewport */
  height: 100vh; /* Mengisi penuh tinggi viewport */
  z-index: -2; /* Pastikan di bawah semua konten lain */
}

.global-background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6); /* Gelapkan sedikit agar teks lebih terbaca */
}


.main-content {
  flex-grow: 1;
  position: relative; /* Penting agar child bisa diposisikan relatif terhadapnya (misal Home.vue) */
  /* Default padding-top untuk halaman lain agar tidak tertutup header */
  padding-top: 90px; /* Ditingkatkan dari 80px untuk ruang aman */
}

/* CSS baru: Menghilangkan padding-top untuk halaman Home (agar Home bisa full screen) */
.main-content.no-padding-top {
  padding-top: 0;
}
</style>