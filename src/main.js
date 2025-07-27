import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js' // Pastikan ini mengarah ke router.js

const app = createApp(App)
app.use(router)
app.mount('#app')