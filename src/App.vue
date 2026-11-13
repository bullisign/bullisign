<template>
  <a href="#inhalt" class="skip">Zum Inhalt springen</a>
  <NavBar />
  <main id="inhalt">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
.skip { position: absolute; left: -9999px; top: 8px; z-index: 200; background: var(--c-ink); color: var(--c-cream); padding: 10px 16px; border-radius: 999px; }
.skip:focus { left: 8px; }
</style>
