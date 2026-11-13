<template>
  <PageHead
    eyebrow="Leistungen"
    title="Wobei ich dir helfen kann."
    lead="Konzept, Gestaltung und Umsetzung aus einer Hand. Du hast eine Ansprechpartnerin vom ersten Gespräch bis zur fertigen Website oder zum Druckprodukt."
    shape="var(--c-duck)"
  />

  <section class="leistungen">
    <div class="wrap grid grid-2">
      <article v-for="l in leistungen" :key="l.title" class="card">
        <span class="icon" :style="{ background: l.color }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" v-html="l.icon"></svg>
        </span>
        <h2 class="l-title">{{ l.title }}</h2>
        <p class="l-text">{{ l.text }}</p>
        <ul class="ticks l-list">
          <li v-for="p in l.points" :key="p">{{ p }}</li>
        </ul>
      </article>
    </div>
  </section>

  <ProcessBlobs />
  <CtaBand />
</template>

<script setup lang="ts">
import PageHead from '@/components/PageHead.vue'
import ProcessBlobs from '@/components/ProcessBlobs.vue'
import CtaBand from '@/components/CtaBand.vue'

const leistungen = [
  {
    title: 'UX/UI-Design',
    color: 'var(--c-duck)',
    icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/>',
    text: 'Oberflächen für Software, Apps und Shops, die Menschen ohne Umwege ans Ziel bringen.',
    points: ['Anforderungen, Personas und User Journeys', 'Informationsarchitektur und User Flows', 'Wireframes und klickbare Prototypen in Figma', 'UI-Design und Design System mit Komponentenbibliothek', 'Usability-Tests mit echten Nutzer*innen'],
  },
  {
    title: 'Websites',
    color: 'var(--c-butter)',
    icon: '<path d="M8 6l-5 6 5 6M16 6l5 6-5 6"/>',
    text: 'Von der Sitemap bis zur fertigen Seite, die du im Alltag selbst pflegen kannst.',
    points: ['Konzept, Sitemap und Seitenstruktur', 'Design für Desktop und Mobile', 'Umsetzung in WordPress, Webflow oder HTML/CSS', 'Online-Buchung und Formulare', 'SEO-Grundlagen und datenschutzkonforme Einbindung'],
  },
  {
    title: 'Marke & Corporate Design',
    color: 'var(--c-lav)',
    icon: '<circle cx="12" cy="12" r="8"/><path d="M9 15c1-4 2-7 4-7s1 3-1 4 3 1 3 3"/>',
    text: 'Ein Auftritt, der wiedererkennbar ist, digital und gedruckt.',
    points: ['Logo und Bildmarke', 'Farbwelt und Typografie', 'Styleguide für den Alltag', 'Geschäftsausstattung'],
  },
  {
    title: 'Print & Social',
    color: 'var(--c-sand)',
    icon: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
    text: 'Als gelernte Mediengestalterin weiß ich, was in der Druckerei ankommen muss.',
    points: ['Flyer, Broschüren und Plakate', 'Etiketten und Verpackung', 'Social-Media-Content und -Strategie', 'Druckfertige Daten'],
  },
]
</script>

<style scoped>
.leistungen { padding: 8px 0 var(--sec-y); }
.icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: var(--c-ink); }
.l-title { font-size: 24px; font-weight: 600; letter-spacing: -.01em; }
.l-text { font-size: 16px; line-height: 1.6; color: var(--c-muted); }
.l-list { margin-top: 6px; padding-top: 18px; border-top: 1px solid var(--c-line); }
@media (min-width: 900px) { .l-title { font-size: 26px; } }
</style>
