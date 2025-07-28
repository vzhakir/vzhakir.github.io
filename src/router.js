// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
// 1. Ubah jalur import untuk menunjuk ke folder 'components'
import Projects from './components/Projects.vue'; 
import About from './components/About.vue';
import Contact from './components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    // 2. Gunakan komponen yang sudah diimpor (misalnya Projects) sebagai halaman utama
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