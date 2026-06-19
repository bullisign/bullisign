<template>
  <section class="section section-basil page-top">
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow eyebrow-light">Was Kunden sagen</span>
        <h1 class="section-title title-light">Referenzen</h1>
      </div>

      <div class="referenzen-grid">
        <blockquote v-for="ref in referenzen" :key="ref.name" class="referenz-card reveal">
          <p class="referenz-text">{{ ref.quote }}</p>
          <footer class="referenz-author">
            <div class="author-avatar"></div>
            <div>
              <strong>{{ ref.name }}</strong>
              <span>{{ ref.role }}</span>
            </div>
          </footer>
        </blockquote>
      </div>

      <div class="cta-wrap center">
        <RouterLink to="/kontakt" class="btn-light">Auch zusammenarbeiten?</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'
useReveal()

const referenzen = [
  {
    quote: '„Jasmin hat sofort verstanden, worum es geht – ohne lange Erklärungen. Das Ergebnis war genau das, was wir uns vorgestellt haben, nur besser umgesetzt als erwartet."',
    name: 'Lucie B.',
    role: 'Head of People & Culture, hej Natural'
  },
  {
    quote: '„Sehr angenehme Zusammenarbeit, schnelle Umsetzung und ein echtes Gespür für Ästhetik. Man merkt, dass hier jemand mitdenkt und nicht einfach nur Aufgaben abarbeitet."',
    name: 'Thomas B.',
    role: 'Geschäftsführung, netzwerk P'
  },
  {
    quote: '„Jasmin hat unsere Marke auf Anhieb verstanden und visuell auf den Punkt gebracht. Professionell, zuverlässig und mit einem Blick fürs Detail, der wirklich den Unterschied macht."',
    name: 'Claudia B.',
    role: 'COO, netzwerk P GmbH'
  },
  {
    quote: '„Kreativ, durchdacht und immer einen Schritt voraus. Die Zusammenarbeit hat Spaß gemacht – und das Ergebnis spricht für sich."',
    name: 'Julius W.',
    role: 'Geschäftsführung, netzwerk P'
  },
]
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); min-height: 100svh; }
.referenzen-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.referenz-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 14px;
  padding: 2rem;
}
.referenz-text {
  font-family: var(--f-display); font-size: var(--size-lg);
  font-style: italic; color: var(--c-shortbread);
  line-height: 1.6; margin-bottom: 1.5rem; opacity: 0.92;
}
.referenz-author {
  display: flex; align-items: center; gap: 0.75rem;
  padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.12);
}
.author-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(168,170,88,0.35); flex-shrink: 0;
}
.referenz-author strong { display: block; font-size: var(--size-sm); font-weight: 500; color: var(--c-linen); }
.referenz-author span { font-size: var(--size-xs); color: var(--c-sand); opacity: 0.75; }
.cta-wrap { margin-top: 2rem; }
.btn-light {
  display: inline-block;
  background: transparent;
  color: var(--c-linen);
  padding: 0.8rem 2rem;
  font-size: var(--size-sm); font-weight: 400; letter-spacing: 0.04em;
  border-radius: 999px; border: 2px solid rgba(255,255,255,0.4);
  transition: background var(--trans), border-color var(--trans);
}
.btn-light:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }
@media (max-width: 680px) { .referenzen-grid { grid-template-columns: 1fr; } }
</style>
