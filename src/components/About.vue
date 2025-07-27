<template>
  <section id="about" class="section" data-aos="fade-up" data-aos-duration="1000">
    <div class="about-content">
      <div class="introduction-block">
        <img src="../assets/selfpics.jpg" alt="My Photo" class="profile-pic" />
        <div class="introduction-text-content">
          <h2>Hello! My name is Vergi.</h2>
          <p>A Computer Science student from IPB University and currently interested in learning
            about Web Development, especially with Front End Development.</p>
        </div>
      </div>

      <div class="skills-section">
        <div v-for="(skillsList, categoryName) in categorizedSkills" :key="categoryName" class="skill-category">
          <h4 class="category-title">{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
          <div class="skills-grid">
            <div v-for="skill in skillsList" :key="skill.name" class="skill-card">
              <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
              <p>{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const categorizedSkills = ref({
  languages: [
    { name: 'JavaScript', icon: '/icons/js.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'HTML5', icon: '/icons/html.svg' },
    { name: 'CSS3', icon: '/icons/css.svg' },
    { name: 'C', icon: '/icons/c.svg' },
    { name: 'C++', icon: '/icons/cpp.svg' }
  ],
  frameworks: [
    { name: 'Vue.js', icon: '/icons/vue.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' }
  ],
  tools: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Canva', icon: '/icons/canva.svg' },
    { name: 'Microsoft Office', icon: '/icons/moffice.svg' },
    { name: 'Google Workspace', icon: '/icons/google.svg' },
    { name: 'CapCut', icon: '/icons/capcut.svg' }
  ]
});
</script>

<style scoped>
.section {
  padding: 4rem 2rem;
  background-color: transparent;
  color: #fff;
  min-height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  text-align: justify;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #00bcd4;
  font-weight: 700;
}

p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #e0e0e0;
}

.introduction-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 188, 212, 0.3);
}

.profile-pic {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #00bcd4;
  box-shadow: 0 0 15px rgba(0, 188, 212, 0.7);
  transition: transform 0.3s ease-in-out;
}

.profile-pic:hover {
  transform: scale(1.05);
}

.introduction-text-content {
  text-align: justify;
  flex-grow: 1;
}

.introduction-text-content h2 {
  margin-top: 0;
  font-size: 2.2rem;
}

.introduction-text-content p {
  font-size: 1.1rem;
}

.skills-section {
  background: rgba(0, 0, 0, 0.6);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 188, 212, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.category-title {
  font-size: 1.6rem;
  color: #00bcd4;
  margin-bottom: 0.8rem;
  text-align: center;
  border-bottom: 2px solid rgba(0, 188, 212, 0.5);
  padding-bottom: 0.5rem;
}

.skills-grid {
  display: grid;
  /* Kunci perubahan: Tetapkan 4 kolom */
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  /* Kunci perubahan: Tetapkan lebar maksimal grid dan pusatkan */
  /* Hitungan: (4 * max-width skill-card) + (3 * gap) = (4 * 160px) + (3 * 24px) = 640px + 72px = 712px */
  max-width: 720px; /* Sedikit lebih besar untuk buffer */
  margin: 0 auto; /* Pusatkan seluruh blok grid */
  justify-items: center; /* Memusatkan setiap item di dalam sel gridnya */
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 130px;
  width: 100%; /* Pastikan kartu skill memenuhi lebar 1fr yang dialokasikan */
  max-width: 160px;
  box-sizing: border-box;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 0.8rem;
  filter: drop-shadow(0 0 5px rgba(0, 188, 212, 0.5));
}

.skill-card p {
  font-size: 0.95rem;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0;
  text-align: center;
}

/* Media Queries untuk Responsivitas */
@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr); /* Ubah ke 3 kolom */
    /* Hitungan: (3 * max-width skill-card) + (2 * gap) = (3 * 160px) + (2 * 24px) = 480px + 48px = 528px */
    max-width: 530px; /* Sesuaikan lebar maksimal grid untuk 3 kolom */
  }
}

@media (max-width: 768px) {
  .about-content {
    gap: 3rem;
  }

  .introduction-block {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .introduction-text-content {
    text-align: center;
  }

  .profile-pic {
    width: 150px;
    height: 150px;
    margin-bottom: 1.5rem;
  }

  .skills-section {
    gap: 1rem;
  }
  .category-title {
    margin-bottom: 0.6rem;
  }
  .skills-grid {
    grid-template-columns: repeat(2, 1fr); /* Ubah ke 2 kolom */
    /* Hitungan: (2 * max-width skill-card) + (1 * gap) = (2 * 140px) + (1 * 16px) = 280px + 16px = 296px */
    max-width: 300px; /* Sesuaikan lebar maksimal grid untuk 2 kolom */
    gap: 1rem; /* Sesuaikan gap untuk mobile */
  }

  .skill-card {
    min-height: 110px;
    padding: 1rem 0.8rem;
    max-width: 140px;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 0.6rem;
  }

  .skill-card p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1rem;
  }

  .introduction-block, .skills-section {
    padding: 1.5rem;
  }

  .skills-section {
    gap: 0.8rem;
  }
  .category-title {
    margin-bottom: 0.5rem;
  }
  .skills-grid {
    grid-template-columns: 1fr; /* Ubah ke 1 kolom */
    /* Hitungan: (1 * max-width skill-card) = (1 * 130px) = 130px */
    max-width: 130px; /* Sesuaikan lebar maksimal grid untuk 1 kolom */
  }
  .skill-card {
    min-height: 100px;
    max-width: 130px;
  }
}
</style>