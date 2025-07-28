<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

// Pastikan onMounted dijalankan agar animasi dimulai setelah komponen ter-render
onMounted(() => {
  // Animasi untuk judul halaman
  anime({
    targets: '.projects-title',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    easing: 'easeOutExpo'
  });

  // Animasi untuk setiap kartu proyek
  anime({
    targets: '.project-card',
    opacity: [0, 1],          // Animasi dari transparan menjadi terlihat
    translateY: [50, 0],      // Bergerak dari 50px di bawah ke posisi asli
    duration: 1200,           // Durasi total animasi
    delay: anime.stagger(200),// Setiap kartu akan muncul dengan jeda 200ms
    easing: 'easeOutExpo'     // Jenis easing untuk efek yang lebih halus
  });
});

</script>

<template>
  <section class="projects-container">
    <h2 class="projects-title">My Projects</h2>
    <ul>
      <li class="project-card">
        <div class="project-media-wrapper">
          <img src="/project1.png" alt="Project Preview: Pet Hotel & Grooming" class="project-preview" />
        </div>
        <div class="project-info">
          <h3>Pet Hotel & Grooming</h3>
          <p>This is a website for a pet hotel and grooming service. Users can find information about services, see opening hours, and book appointments.</p>
          <a href="https://github.com/russs743/prak-web-projek-akhir-kel-1" class="view-project-button">VIEW PROJECT</a>
        </div>
      </li>
      <li class="project-card">
        <div class="project-media-wrapper">
          <img src="/project2.png" alt="Project Preview: Easy!Appointments" class="project-preview" />
        </div>
        <div class="project-info">
          <h3>Easy!Appointments</h3>
          <p>Easy!Appointments is a highly customizable open-source web app that lets customers book appointments through a modern interface.</p>
          <a href="https://github.com/russs743/Easy-Appointment-ProjectKDJK-Kel1P3" class="view-project-button">VIEW PROJECT</a>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Penting: Atur state awal elemen sebelum dianimasikan */
.projects-title,
.project-card {
  opacity: 0;
}

.projects-container {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #E0E0E0;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 2rem;
}

/* Anda bisa menyesuaikan style kartu proyek sesuai desain Anda */
li.project-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 188, 212, 0.2);
}

.project-media-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9; /* Membuat gambar responsif */
}

.project-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #00bcd4; /* Warna aksen */
}

p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.view-project-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #00bcd4;
  color: #121212;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.view-project-button:hover {
  background-color: #0097a7;
}

/* Media query untuk tampilan di layar lebih besar */
@media (min-width: 768px) {
  ul {
    grid-template-columns: 1fr 1fr; /* 2 kolom di tablet */
  }
}
</style>