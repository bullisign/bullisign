<template>
  <section class="pagehead">
    <BlobShape class="shape pagehead-shape" :fill="shape" />
    <div class="wrap pagehead-inner">
      <p class="eyebrow"><BlobShape class="dot" />{{ eyebrow }}</p>
      <h1 class="h1">{{ title }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlobShape from './BlobShape.vue'

defineProps<{ eyebrow: string; title: string; lead: string; shape: string }>()
</script>

<style scoped>
.pagehead { position: relative; overflow: hidden; padding: 40px 0 56px; }
.pagehead-shape { width: 360px; right: -170px; top: -190px; transform: rotate(-18deg); }
.pagehead-inner { position: relative; }
.pagehead .h1 { max-width: 900px; }
.pagehead .lead { max-width: 660px; }
@media (min-width: 900px) {
  .pagehead { padding: 72px 0 88px; }
  .pagehead-shape { width: 620px; right: -210px; top: -300px; }
}
</style>
