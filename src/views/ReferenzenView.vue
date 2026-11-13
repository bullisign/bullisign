<template>
  <PageHead
    eyebrow="Referenzen"
    title="Was andere über meine Arbeit sagen."
    lead="Auszüge aus meinem Empfehlungsschreiben und meinen Arbeitszeugnissen. Die vollständigen Dokumente schicke ich dir gern zu."
    shape="var(--c-lav)"
  />

  <section class="refs">
    <div class="wrap grid grid-2">
      <figure v-for="r in referenzen" :key="r.name" class="card ref">
        <svg class="quote-mark" viewBox="0 0 34 28" aria-hidden="true"><path :style="{ fill: r.color }" d="M0 28V16C0 6 5 1 14 0v6c-5 1-7 4-7 9h7v13zm20 0V16c0-10 5-15 14-16v6c-5 1-7 4-7 9h7v13z" /></svg>
        <blockquote class="ref-quote">„{{ r.quote }}“</blockquote>
        <figcaption class="ref-by">
          <strong>{{ r.name }}</strong>
          <span>{{ r.role }} · {{ r.source }}</span>
        </figcaption>
      </figure>
    </div>
  </section>

  <CtaBand />
</template>

<script setup lang="ts">
import PageHead from '@/components/PageHead.vue'
import CtaBand from '@/components/CtaBand.vue'
import { referenzen } from '@/data/referenzen'
</script>

<style scoped>
.refs { padding: 8px 0 var(--sec-y); }
.ref { gap: 20px; }
.ref-quote { font-size: 18px; line-height: 1.55; }
.ref-by { margin-top: auto; padding-top: 18px; border-top: 1px solid var(--c-line); display: flex; flex-direction: column; gap: 2px; font-size: 14px; line-height: 1.5; }
.ref-by strong { font-size: 17px; }
@media (min-width: 900px) { .ref-quote { font-size: 19px; } }
</style>
