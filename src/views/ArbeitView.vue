<template>
  <article v-if="arbeit">
    <section class="head">
      <BlobShape class="shape head-shape" :fill="arbeit.bg" />
      <div class="wrap head-inner">
        <RouterLink to="/portfolio#weitere-arbeiten" class="back">← Alle Arbeiten</RouterLink>
        <p class="eyebrow" style="color: var(--c-accent)"><BlobShape class="dot" />{{ arbeit.tag }}</p>
        <h1 class="h1">{{ arbeit.title }}</h1>
        <p class="lead">{{ arbeit.text }}</p>
      </div>
    </section>

    <div class="wrap">
      <div class="stage" :style="{ background: arbeit.bg }">
        <div class="frame"><img :src="arbeit.img" :alt="arbeit.alt" /></div>
      </div>

      <div class="cs">
        <div v-if="arbeit.rolle" class="cs-row">
          <p class="cs-label eyebrow" style="color: var(--c-sage)">Meine Rolle</p>
          <p class="text role">{{ arbeit.rolle }}</p>
        </div>
        <div class="cs-row">
          <p class="cs-label eyebrow" style="color: var(--c-sage)">Problem</p>
          <p class="text problem">{{ arbeit.problem }}</p>
        </div>
        <div class="cs-row">
          <p class="cs-label eyebrow" style="color: var(--c-sage)">Lösung</p>
          <ul class="list">
            <li v-for="l in arbeit.loesung" :key="l" class="text">{{ l }}</li>
          </ul>
        </div>
        <div v-if="arbeit.punkte" class="cs-row">
          <p class="cs-label eyebrow" style="color: var(--c-sage)">Die Accounts</p>
          <div class="cards">
            <div v-for="p in arbeit.punkte" :key="p.title" class="card">
              <h2 class="card-title">{{ p.title }}</h2>
              <p class="card-text">{{ p.text }}</p>
            </div>
          </div>
        </div>
        <div class="cs-row">
          <p class="cs-label eyebrow" style="color: var(--c-sage)">Ergebnis</p>
          <p class="text">{{ arbeit.ergebnis }}</p>
        </div>
      </div>

      <nav class="next" aria-label="Weitere Projekte">
        <RouterLink to="/portfolio#weitere-arbeiten" class="btn btn-line">← Alle Arbeiten</RouterLink>
        <RouterLink :to="`/portfolio/${naechste.slug}`" class="next-link">
          <span class="eyebrow" style="color: var(--c-accent)">Nächstes Projekt</span>
          <span class="next-title">{{ naechste.title }} →</span>
        </RouterLink>
      </nav>
    </div>
  </article>

  <CtaBand />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BlobShape from '@/components/BlobShape.vue'
import CtaBand from '@/components/CtaBand.vue'
import { weitereArbeiten } from '@/data/arbeiten'

const route = useRoute()
const index = computed(() => weitereArbeiten.findIndex((w) => route.path === `/portfolio/${w.slug}`))
const arbeit = computed(() => weitereArbeiten[index.value])
const naechste = computed(() => weitereArbeiten[(index.value + 1) % weitereArbeiten.length])
</script>

<style scoped>
.head { position: relative; overflow: hidden; padding: 32px 0 48px; }
.head-shape { width: 360px; right: -170px; top: -190px; transform: rotate(-18deg); }
.head-inner { position: relative; }
.head .h1 { max-width: 900px; }
.head .lead { max-width: 680px; }
.back { display: inline-block; margin-bottom: 28px; font-size: 15px; font-weight: 500; text-decoration: none; }

.stage { border-radius: 24px; padding: 16px; }
.stage .frame { background: #fff; }

.cs { margin-top: 40px; border-top: 1.5px solid var(--c-ink); }
.cs-row { display: grid; gap: 10px; padding: 28px 0; border-bottom: 1px solid var(--c-line); }
.problem { font-size: 18px; }
.role { font-weight: 500; }
.list { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
.list li::marker { color: var(--c-accent); }
.cards { display: grid; gap: 14px; }
.card { background: var(--c-paper); border: 1px solid var(--c-line); border-radius: 16px; padding: 18px 20px; }
.card-title { font-size: 18px; font-weight: 600; margin: 0 0 6px; }
.card-text { font-size: 15px; line-height: 1.6; color: var(--c-muted); margin: 0; }

.next { display: flex; flex-direction: column; gap: 20px; margin: 48px 0 var(--sec-y); }
.next-link { display: flex; flex-direction: column; gap: 6px; text-decoration: none; color: var(--c-ink); }
.next-title { font-size: 24px; font-weight: 600; letter-spacing: -.01em; }
.next-link:hover .next-title { color: var(--c-accent); }

@media (min-width: 900px) {
  .head { padding: 56px 0 72px; }
  .head-shape { width: 620px; right: -210px; top: -300px; }
  .stage { padding: 32px; }
  .cs { margin-top: 64px; }
  .cs-row { grid-template-columns: 200px minmax(0, 1fr); gap: 32px; padding: 36px 0; }
  .cs-label { padding-top: 6px; }
  .problem { font-size: 19px; }
  .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .next { flex-direction: row; justify-content: space-between; align-items: center; }
  .next-link { align-items: flex-end; text-align: right; }
}
</style>
