<template>
  <section class="section section-warm page-top">
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow">Ausgewählte Projekte</span>
        <h1 class="section-title">Portfolio</h1>
        <p class="section-sub">Von E-Commerce bis Corporate Design – ein Querschnitt meiner Arbeit.</p>
      </div>

      <div class="portfolio-grid">
        <article v-for="item in projekte" :key="item.title" class="portfolio-card reveal">
          <div class="portfolio-card-img" :class="item.bg">
            <span class="tag">{{ item.tag }}</span>
            <div class="card-icon" v-html="item.icon"></div>
          </div>
          <div class="portfolio-card-body">
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'
useReveal()

const projekte = [
  {
    title: 'Launch Website ELA',
    tag: 'Product Launch',
    bg: 'pc-warm',
    text: 'Konzeption und Umsetzung des Onlineshops für die Kosmetikmarke von Pamela Reif – ästhetisch und conversion-optimiert.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="8" width="40" height="44" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M20 20h20M20 28h20M20 36h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    title: 'CI Laborgerätesüd',
    tag: 'CI-Projekt',
    bg: 'pc-blue',
    text: 'Neues Webdesign inkl. umfassendem Styleguide für ein B2B-Unternehmen – modern, einheitlich und markenstark.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="8" width="44" height="44" rx="4" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="30" r="10" stroke="currentColor" stroke-width="1.5"/></svg>`
  },
  {
    title: 'CD Gunti Aroma Kaffee',
    tag: 'CD-Projekt',
    bg: 'pc-green',
    text: 'Webdesign für ein nachhaltiges Kaffee-Startup – Desktop und Mobile, inklusive Designsystem und Styleguide.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><path d="M10 50 C10 30, 50 30, 50 10" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="30" cy="30" r="8" stroke="currentColor" stroke-width="1.5"/></svg>`
  },
  {
    title: 'UX-Projekt NIVEA',
    tag: 'UX-Projekt',
    bg: 'pc-sage',
    text: 'Barrierefreies Verpackungsdesign für Menschen mit motorischen Einschränkungen – Prototyp und Kampagnenkonzept.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><rect x="12" y="8" width="36" height="44" rx="4" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="28" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M22 44c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    title: 'Launch Grillsauce Bärenherzen',
    tag: 'Product Launch',
    bg: 'pc-dark',
    text: 'Labeldesign für eine proteinreiche Grillsauce – markenstark, gesetzeskonform und regalfertig.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><path d="M20 48V22l10-14 10 14v26H20z" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><path d="M26 48v-10h8v10" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/></svg>`
  },
  {
    title: 'Redesign Bike-Buch Stuttgart',
    tag: 'Redesign Print',
    bg: 'pc-olive',
    text: 'Komplettes Redesign eines Fahrradführers – moderne Typografie, lebendige Farben und ein praktisches Querformat.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="10" width="44" height="40" rx="3" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/><path d="M16 22h28M16 30h28M16 38h16" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    title: 'Social Media – schultech & HYPT',
    tag: 'Social Media',
    bg: 'pc-misty',
    text: 'Gestaltung und Pflege der Social-Media-Präsenz für schultech GmbH, HYPT GRB und den Ski Club Renningen.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="8" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="32" y="8" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="8" y="32" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="32" y="32" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.5"/></svg>`
  },
  {
    title: 'Online-Magazin ABSTRACTA',
    tag: 'Konzept & Design',
    bg: 'pc-purple',
    text: 'Gründungskonzept, Businessplan und Designsystem für ein digitales Kunstmagazin – Finanzierung, Plattform, CI.',
    icon: `<svg viewBox="0 0 60 60" fill="none"><rect x="8" y="6" width="44" height="48" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M18 18h24M18 26h24M18 34h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
]
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); }
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.portfolio-card {
  background: var(--c-linen);
  border-radius: 14px;
  border: 1px solid var(--c-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow var(--trans), transform var(--trans);
}
.portfolio-card:hover { box-shadow: 0 16px 40px rgba(64,66,34,0.13); transform: translateY(-5px); }

.portfolio-card-img {
  width: 100%; aspect-ratio: 4/3;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.card-icon { width: 60px; height: 60px; opacity: 0.35; color: var(--c-basil); }
.card-icon svg { width: 100%; height: 100%; }
.tag {
  position: absolute; top: 12px; left: 12px;
  background: var(--c-basil); color: var(--c-linen);
  font-size: 0.65rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.25rem 0.6rem; border-radius: 999px;
}
.pc-dark .tag { background: var(--c-thyme); color: var(--c-basil); }
.pc-olive .tag { background: rgba(255,255,255,0.2); color: white; }

.portfolio-card-body { padding: 1.25rem 1.5rem; flex: 1; display: flex; flex-direction: column; }
.portfolio-card-body h2 {
  font-family: var(--f-display); font-size: var(--size-lg);
  font-weight: 400; color: var(--c-basil); margin-bottom: 0.4rem;
}
.portfolio-card-body p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; line-height: 1.6; }

.pc-blue   { background: #C8D8DC; }
.pc-green  { background: #C4CBA4; }
.pc-warm   { background: #D9C9BA; }
.pc-dark   { background: #2E2C27; }
.pc-olive  { background: #8A9060; }
.pc-sage   { background: #B8C4B8; }
.pc-purple { background: #C4B8CC; }
.pc-misty  { background: #BCC8C8; }

@media (max-width: 1000px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 680px)  { .portfolio-grid { grid-template-columns: 1fr; } }
</style>
