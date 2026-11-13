<template>
  <section class="process section">
    <div class="wrap">
      <div class="center process-head">
        <p class="eyebrow center"><BlobShape class="dot" />So arbeite ich</p>
        <h2 class="h2">Erst verstehen, dann gestalten.</h2>
      </div>
      <ol class="steps" aria-label="Mein Vorgehen in vier Schritten">
        <li v-for="(s, i) in steps" :key="s.title" class="step" :class="{ last: i === steps.length - 1 }">
          <BlobShape class="step-shape" :style="{ transform: `rotate(${s.rotate}deg)` }" />
          <div class="step-in">
            <span class="step-no">{{ i + 1 }}</span>
            <span class="step-title">{{ s.title }}</span>
            <span class="step-text">{{ s.text }}</span>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlobShape from './BlobShape.vue'

const steps = [
  { title: 'Zuhören', text: 'Wer nutzt das, und wo hakt es? Ich frage lieber einmal mehr nach.', rotate: -8 },
  { title: 'Sortieren', text: 'Sitemap, User Flows und Wireframes, damit alle dasselbe Bild haben.', rotate: 14 },
  { title: 'Gestalten', text: 'UI, Farben, Schrift und Komponenten, passend zur Marke.', rotate: -3 },
  { title: 'Bauen & testen', text: 'Umsetzen, mit echten Menschen ausprobieren, nachschärfen.', rotate: 7 },
]
</script>

<style scoped>
.process { background: var(--c-duck); }
.process-head { display: flex; flex-direction: column; align-items: center; gap: 14px; margin-bottom: 28px; }
.steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center; }
.step { position: relative; width: 300px; height: 328px; display: flex; align-items: center; justify-content: center; color: var(--c-cream); margin-top: -60px; }
.step:first-child { margin-top: 0; }
.step-shape { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; color: var(--c-cream); }
.step.last .step-shape { color: var(--c-ink); }
.step-in { position: relative; width: 178px; display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; color: var(--c-ink); }
.step.last .step-in { color: var(--c-cream); }
.step-no { font-size: 13px; font-weight: 600; letter-spacing: .12em; }
.step-title { font-size: 23px; font-weight: 600; letter-spacing: -.01em; line-height: 1.15; }
.step-text { font-size: 14px; line-height: 1.5; }
@media (min-width: 900px) {
  .process-head { margin-bottom: 36px; }
  .steps { flex-direction: row; justify-content: center; }
  .step { margin-top: 0; margin-left: -46px; }
  .step:first-child { margin-left: 0; }
}
</style>
