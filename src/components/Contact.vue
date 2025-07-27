<template>
  <section id="contact" class="section" data-aos="fade-up" data-aos-duration="1000">
    <div class="background-wrapper">
      <video autoplay muted loop playsinline class="background-video">
        <source src="/mybackground.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="contact-content">
      <h2>Contact</h2>
      <p>Feel free to reach out via email: <a href="mailto:you@example.com">you@example.com</a></p>
      <a href="/CV_Vergiawan Zhaki Rasendria.pdf" download="CV_Vergiawan_Zhaki_Rasendria.pdf" class="download-button">Download CV</a>
    </div>
  </section>
</template>

<script setup>
// Tidak ada perubahan skrip yang diperlukan
</script>

<style scoped>
/* Gaya CSS tetap sama */
.section {
  padding: 4rem 2rem;
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
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

.contact-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  color: #00bcd4;
}

p {
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
  line-height: 1.5;
}

a {
  color: #00bcd4;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #0097a7;
  text-decoration: underline;
}

.download-button {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.8rem;
  background-color: #00bcd4;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.download-button:hover {
  background-color: #0097a7;
  transform: translateY(-2px);
  text-decoration: none;
}
</style>