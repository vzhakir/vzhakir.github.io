<template>
  <section id="projects" class="section">
    <div class="background-wrapper">
      <video autoplay muted loop playsinline class="background-video">
        <source src="/mybackground.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="projects-content">
      <h2>Projects</h2>
      <ul>
        <li>
          <div class="project-media-wrapper">
            <img src="/project2.png" alt="Project Preview: Easy!Appointments" class="project-preview" />
          </div>
          <div class="project-info">
            <h3>Easy!Appointments</h3>
            <p>Easy!Appointments is a highly customizable open-source web app that lets customers book appointments through a modern interface.</p>
            <a href="https://github.com/russs743/Easy-Appointment-ProjectKDJK-Kel1P3" class="view-project-button">VIEW PROJECT</a>
          </div>
        </li>
        <li>
          <div class="project-media-wrapper">
            <img src="/project1.png" alt="Project Preview: Development of Variant Calling Pipeline for IPB ISNIP Website" class="project-preview" />
          </div>
          <div class="project-info">
            <h3>IPB ISNIP Website</h3>
            <p>Creating processing raw sequencing data through quality control and alignment to a reference genome and aligns raw sequencing FASTQ files to a reference genome</p>
            <a href="https://github.com/vzhakir/CapstoneProject-10" class="view-project-button">VIEW PROJECT</a>
          </div>
        </li>
        </ul>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 4rem 2rem;
  background-color: transparent;
  color: #fff;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 90px - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.projects-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  color: #00bcd4;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
}

li {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 450px; /* Sesuaikan nilai ini agar semua kartu sama tinggi */
}

li:hover {
  transform: translateY(-5px);
}

.project-media-wrapper {
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.project-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-info {
  padding-bottom: 1rem;
  flex-grow: 1;
}

h3 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
}

p {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 1rem;
  text-align: justify;
  /* --- Tambahan ini untuk membatasi tinggi deskripsi dan membuat scroll --- */
  max-height: 120px; /* Sesuaikan nilai ini agar semua kartu terlihat sama tinggi */
  overflow-y: auto; /* Tambahkan scrollbar vertikal jika konten melebihi max-height */
  /* Menyembunyikan scrollbar jika diinginkan (khusus browser WebKit seperti Chrome/Safari) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Menyembunyikan scrollbar untuk WebKit browsers */
p::-webkit-scrollbar {
  display: none;
}

.view-project-button {
  display: block;
  width: calc(100% - 3rem);
  padding: 0.8rem 1.5rem;
  background-color: #00bcd4;
  color: white;
  text-align: left; /* Mengubah perataan teks di dalam tombol menjadi rata kiri */
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin-top: auto;
}

.view-project-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Media Queries untuk Responsivitas */
@media (max-width: 768px) {
  ul {
    grid-template-columns: 1fr;
  }

  li {
    padding: 0 1rem 1rem 1rem;
    min-height: 400px; /* Sesuaikan untuk layar mobile */
  }

  .project-media-wrapper {
    height: 180px;
  }

  .view-project-button {
    width: calc(100% - 2rem);
  }

  p {
    max-height: 100px; /* Sesuaikan max-height deskripsi untuk mobile */
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .project-media-wrapper {
    height: 150px;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    max-height: 80px; /* Sesuaikan max-height deskripsi untuk mobile kecil */
  }

  li {
    min-height: 350px; /* Sesuaikan untuk layar mobile yang sangat kecil */
  }
}
</style>