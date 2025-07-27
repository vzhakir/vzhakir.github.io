<template>
  <header class="header">
    <div class="container">
      <div class="logo">Vergi's Portfolio</div>

      <nav :class="{ open: isOpen }">
        <router-link to="/" @click="isOpen = false">Home</router-link>
        <router-link to="/about" @click="isOpen = false">About</router-link>
        <router-link to="/projects" @click="isOpen = false">Projects</router-link>
        <router-link to="/contact" @click="isOpen = false">Contact</router-link>
      </nav>

      <button class="hamburger" @click="isOpen = !isOpen">
        ☰
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #00bcd4;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #00bcd4;
}

.router-link-active {
  color: #00bcd4;
  border-bottom: 2px solid #00bcd4;
}

.hamburger {
  display: none;
  background: none;
  font-size: 1.8rem;
  border: none;
  color: white;
  cursor: pointer;
}

/* Mobile Styles */
@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 70px;
    right: 0;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.95);
    padding: 1rem 2rem;
    display: none;
    border-radius: 0 0 0 10px;
  }

  nav.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
</style>