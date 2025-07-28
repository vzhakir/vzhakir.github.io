<template>
  <div class="page-navigator">
    <!-- Tombol Panah Kiri -->
    <router-link v-if="prevRoute" :to="prevRoute" class="nav-arrow left" aria-label="Previous Page">
      <i class="fas fa-chevron-left"></i>
    </router-link>

    <!-- Tombol Panah Kanan -->
    <router-link v-if="nextRoute" :to="nextRoute" class="nav-arrow right" aria-label="Next Page">
      <i class="fas fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script setup>
// Komponen ini menerima props untuk rute sebelumnya dan berikutnya
defineProps({
  prevRoute: {
    type: String,
    default: null,
  },
  nextRoute: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
/* Pastikan Anda sudah mengimpor Font Awesome di proyek Anda */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.page-navigator {
  position: fixed;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none; /* Penting agar tidak menghalangi klik di tengah layar */
  z-index: 1000;
}

.nav-arrow {
  pointer-events: all; /* Aktifkan kembali pointer untuk tombol panah */
  color: white;
  background-color: rgba(0, 188, 212, 0.3);
  border: 1px solid rgba(0, 188, 212, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.nav-arrow:hover {
  background-color: rgba(0, 188, 212, 0.7);
  transform: scale(1.1);
}

.nav-arrow.left {
  margin-left: 20px;
}

.nav-arrow.right {
  margin-right: 20px;
}
</style>