<template>
  <div class="background-wrapper">
    <main class="content">
      <section class="hero-section">
        <h1>Get to know about me.</h1>
        <button @click="navigateToAbout" class="scroll-button">
          Let's Go! <i class="fas fa-arrow-right"></i>
        </button>
      </section>

      </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Initialize useRouter

const navigateToAbout = () => {
  router.push('/about'); // Navigate to the /about route
};
</script>

<style scoped>
/* Pertahankan atau sesuaikan gaya CSS sesuai kebutuhan Anda */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.background-wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.6);
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-section h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.scroll-button {
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.scroll-button:hover {
  background-color: #0097a7;
  transform: translateY(-2px);
}
</style>