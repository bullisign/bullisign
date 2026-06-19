<template>
  <section class="section page-top">
    <div class="blob blob-3" aria-hidden="true"></div>
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow">Was ich anbiete</span>
        <h1 class="section-title">Leistungen</h1>
        <p class="section-sub">Ganzheitliche Gestaltung. Von der digitalen Oberfläche bis zum Druckprodukt.</p>
      </div>

      <div class="leistungen-grid">
        <article v-for="item in leistungen" :key="item.title" class="leistung-card reveal">
          <div class="leistung-icon-wrap" v-html="item.icon"></div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'
useReveal()

const leistungen = [
  {
    title: 'UI/UX Design',
    text: 'Nutzerorientierte Interfaces für Web und App. Von der Konzeption und Wireframes bis zum finalen, klickbaren Prototyp.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="14" cy="14" r="5" fill="currentColor" opacity="0.3"/>
    </svg>`
  },
  {
    title: 'Corporate Design',
    text: 'Ganzheitliche visuelle Identitäten: Logo, Farbwelt, Typografie und Styleguide für einen konsistenten Markenauftritt.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.5"/>
      <path d="M4 11h20M11 4v20" stroke="currentColor" stroke-width="1.5"/>
    </svg>`
  },
  {
    title: 'Grafikdesign',
    text: 'Kreative Gestaltung für Social Media, Präsentationen, Infografiken und alle weiteren digitalen Formate.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M5 22L10 12l5 7 4-5 4 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'Printwerbemittel',
    text: 'Flyer, Broschüren, Plakate, Etiketten, Geschäftsdrucksachen – druckfertig und mit Liebe zum Detail.',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 9h10M9 13h10M9 17h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
]
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); }
.leistungen-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
}
.leistung-card {
  background: var(--c-linen);
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid var(--c-border);
  transition: box-shadow var(--trans), transform var(--trans);
}
.leistung-card:hover { box-shadow: 0 12px 32px rgba(64,66,34,0.1); transform: translateY(-4px); }
.leistung-icon-wrap {
  width: 52px; height: 52px;
  background: rgba(168,170,88,0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-thyme);
  margin-bottom: 1rem;
}
.leistung-card h2 {
  font-family: var(--f-display);
  font-size: var(--size-xl);
  font-weight: 400;
  color: var(--c-basil);
  margin-bottom: 0.5rem;
}
.leistung-card p { font-size: var(--size-sm); color: var(--c-mid); line-height: 1.7; font-weight: 300; }

@media (max-width: 680px) { .leistungen-grid { grid-template-columns: 1fr; } }
</style>
