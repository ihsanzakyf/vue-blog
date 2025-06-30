<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <main>
      <Navbar />
      <RouterView />
      <Footer />
    </main>
  </div>
</template>

<style scoped></style>
