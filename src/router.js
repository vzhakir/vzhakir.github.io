import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Pastikan Anda memiliki file ini
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

// 1. Definisikan dan ekspor urutan navigasi yang dibutuhkan App.vue
export const navigationSequence = [
  '/',
  '/projects',
  '/about',
  '/contact'
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Gunakan komponen Home untuk halaman utama
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;