// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

// Definisikan dan ekspor rute untuk navigasi
export const navigationRoutes = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' }
];

const routes = [
  {
    path: '/',
    name: 'Home',
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
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;