<template>
  <section class="nf">
    <div class="wrap nf-inner">
      <p class="eyebrow"><BlobShape class="dot" />Fehler 404</p>
      <h1 class="h1">Diese Seite gibt es leider nicht.</h1>
      <p class="lead">Vielleicht hat sich die Adresse geändert. Hier geht es weiter:</p>
      <div class="btn-row">
        <RouterLink to="/" class="btn btn-dark">Zur Startseite <span aria-hidden="true">→</span></RouterLink>
        <RouterLink to="/portfolio" class="btn btn-line">Portfolio ansehen</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlobShape from '@/components/BlobShape.vue'
</script>

<style scoped>
.nf { padding: var(--sec-y) 0; }
.nf-inner { max-width: 760px; }
.nf .lead { margin-bottom: 28px; }
</style>
