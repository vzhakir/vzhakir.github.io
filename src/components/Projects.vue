<script setup>
// Tidak perlu JavaScript tambahan untuk animasi ini.
// Vue akan menangani semuanya melalui CSS.

// Data proyek bisa diletakkan di sini agar lebih rapi
const projects = [
  {
    id: 1,
    title: 'Pet Hotel & Grooming',
    description: 'This is a website for a pet hotel and grooming service. Users can find information about services, see opening hours, and book appointments.',
    image: '/project1.png',
    link: 'https://github.com/russs743/prak-web-projek-akhir-kel-1'
  },
  {
    id: 2,
    title: 'Easy!Appointments',
    description: 'Easy!Appointments is a highly customizable open-source web app that lets customers book appointments through a modern interface.',
    image: '/project2.png',
    link: 'https://github.com/russs743/Easy-Appointment-ProjectKDJK-Kel1P3'
  }
];
</script>

<template>
  <section class="projects-container">
    <h2 class="projects-title">My Projects</h2>

    <TransitionGroup name="list" tag="ul">
      <li 
        v-for="(project, index) in projects" 
        :key="project.id" 
        :style="{ 'transition-delay': index * 150 + 'ms' }"
      >
        <div class="project-media-wrapper">
          <img :src="project.image" :alt="'Project Preview: ' + project.title" class="project-preview" />
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" class="view-project-button">VIEW PROJECT</a>
        </div>
      </li>
    </TransitionGroup>

  </section>
</template>

<style scoped>
/* Kelas-kelas transisi ini digunakan oleh Vue secara otomatis
  berdasarkan 'name' yang diberikan pada <TransitionGroup>.
*/

/* 1. State awal elemen saat akan masuk (enter) */
.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* 2. State akhir elemen saat masuk */
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* 3. Menentukan properti transisi untuk animasi masuk */
.list-enter-active {
  transition: all 0.5s ease;
}

/* CSS untuk tata letak dan style kartu proyek */
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

li {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 188, 212, 0.2);
}

.project-media-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
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
  color: #00bcd4;
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

@media (min-width: 768px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}
</style>