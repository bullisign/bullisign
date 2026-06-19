<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
