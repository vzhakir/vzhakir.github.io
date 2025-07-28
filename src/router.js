import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

// Definisikan rute dalam bentuk array objek
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
];

// Ekspor urutan path untuk digunakan di komponen lain
export const routesInOrder = routes.map(route => route.path);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
