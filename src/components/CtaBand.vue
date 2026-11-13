<template>
  <section class="cta">
    <BlobShape class="shape cta-shape" fill="var(--c-duck)" />
    <div class="wrap cta-inner">
      <div class="cta-text">
        <p class="eyebrow" style="color: var(--c-butter)">Kontakt</p>
        <h2 class="h2">Lass uns reden.</h2>
        <p class="lead">Du hast ein Projekt, eine offene Stelle oder einfach eine Frage? Ich freue mich auf deine Nachricht.</p>
      </div>
      <RouterLink to="/kontakt" class="btn btn-light">Nachricht schreiben <span aria-hidden="true">→</span></RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlobShape from './BlobShape.vue'
</script>

<style scoped>
.cta { position: relative; overflow: hidden; background: var(--c-ink); color: var(--c-cream); padding: var(--sec-y) 0; }
.cta-shape { width: 220px; right: -90px; top: -90px; transform: rotate(200deg); }
.cta-inner { position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px; }
.cta-text { display: flex; flex-direction: column; gap: 14px; max-width: 640px; }
.cta .lead { color: #E9E2D4; }
@media (min-width: 900px) { .cta-shape { width: 300px; right: -90px; top: -110px; } }
</style>
