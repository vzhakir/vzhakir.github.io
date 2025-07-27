<template>
  <div class="social-sidebar">
    <a href="https://github.com/vzhakir" target="_blank" rel="noopener" aria-label="GitHub">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/vergiawan-zhaki-rasendria-846579292/" target="_blank" rel="noopener" aria-label="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://instagram.com/vzhakir" target="_blank" rel="noopener" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
    </a>
  </div>
</template>

<style scoped>
.social-sidebar {
  position: fixed;
  top: 40%;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #3C3D37;
  padding: 0.5rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1000;
}

.social-sidebar a {
  color: white;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  transition: color 0.3s;
}

.social-sidebar a:hover {
  color: #00bcd4;
}
</style>