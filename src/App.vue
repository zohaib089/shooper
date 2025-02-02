<template>
  <div class="bg-white">
    <!-- Navbar -->
    <Navbar style="z-index: -1" />

    <!-- Main Router View -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
