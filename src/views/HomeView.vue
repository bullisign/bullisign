<template>
  <section class="hero">
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>

    <div class="hero-inner container">
      <div class="hero-text">
        <span class="eyebrow">Websites · UX/UI Design · Corporate Design</span>
        <h1 class="hero-headline">
          Gestaltung,<br />
          <em>die deine Marke</em><br />
          unverwechselbar macht.
        </h1>
        <p class="hero-sub">
          Ich gestalte Websites, digitale Oberflächen und Markenauftritte vom Problem her und setze sie
          auch selbst um: von der ersten Idee über Struktur und Design bis zur fertigen Website oder
          zum Druckprodukt. Aus Dettingen unter Teck, für die Region Stuttgart und remote.
        </p>
        <div class="hero-actions">
          <RouterLink to="/kontakt" class="btn-primary">Projekt anfragen</RouterLink>
          <RouterLink to="/portfolio" class="btn-ghost">Meine Arbeiten</RouterLink>
        </div>
      </div>

      <div class="hero-image-wrap">
        <div class="hero-image-blob" aria-hidden="true"></div>
        <div class="hero-photo">
          <img :src="jasminImg" alt="Jasmin Bullinger – bullisign" />
        </div>
        <div class="hero-badge">
          <span class="badge-number">10+</span>
          <span class="badge-label">Jahre<br />Gestaltung</span>
        </div>
      </div>
    </div>
  </section>

  <!-- So arbeite ich -->
  <section class="section section-warm">
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow">So arbeite ich</span>
        <h2 class="section-title">Vom Problem zur <em>fertigen Website</em></h2>
        <p class="section-sub">
          Gute Gestaltung beginnt nicht im Grafikprogramm, sondern bei den Menschen, die sie nutzen.
        </p>
      </div>

      <ol class="process">
        <li v-for="(step, i) in prozess" :key="step.title" class="process-step reveal">
          <span class="process-no">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- Ausgewählte Projekte -->
  <section class="section">
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow">Ausgewählte Projekte</span>
        <h2 class="section-title">Ein Blick in meine Arbeit</h2>
      </div>

      <div class="featured">
        <RouterLink
          v-for="p in highlights"
          :key="p.id"
          :to="{ path: '/portfolio', hash: '#' + p.id }"
          class="featured-card reveal"
        >
          <div class="featured-img"><img :src="p.img" :alt="p.alt" loading="lazy" /></div>
          <div class="featured-body">
            <span class="featured-tag">{{ p.tag }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </RouterLink>
      </div>

      <div class="center more">
        <RouterLink to="/portfolio" class="btn-ghost">Alle Projekte ansehen</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import jasminImg from '@/assets/jasmin.png'
import imgNaehrraum from '@/assets/portfolio/naehrraum-desk-home.webp'
import imgEla from '@/assets/portfolio/ela.webp'
import imgNivea from '@/assets/portfolio/nivea.webp'
import { useReveal } from '@/composables/useReveal'
useReveal()

const prozess = [
  { title: 'Verstehen', text: 'Wer nutzt die Seite, und was wollen diese Menschen dort erreichen? Ziele, Zielgruppen und Probleme klären.' },
  { title: 'Strukturieren', text: 'Inhalte ordnen und Wege planen: Informationsarchitektur, Sitemap und User Flows.' },
  { title: 'Skizzieren', text: 'Ideen früh sichtbar machen, mit Wireframes und klickbaren Prototypen.' },
  { title: 'Gestalten & Umsetzen', text: 'UI-Design, Design-System und die technische Umsetzung, zum Beispiel in WordPress, HTML und CSS.' },
  { title: 'Testen & Optimieren', text: 'Mit echten Nutzer*innen testen, messen und verbessern, inklusive SEO-Grundlagen.' },
]

const highlights = [
  { id: 'naehrraum', tag: 'Website & Buchung', title: 'Website nährraum', img: imgNaehrraum,
    alt: 'Startseite der Website nährraum',
    text: 'Konzeption, Design und WordPress-Umsetzung einer Website mit Online-Buchung für eine Ernährungsberatung.' },
  { id: 'ela', tag: 'Product Launch', title: 'Onlineshop ELA', img: imgEla,
    alt: 'Seiten des ELA Onlineshops',
    text: 'Shop-Struktur, Produktdetailseiten und Design-System für die Kosmetikmarke von Pamela Reif.' },
  { id: 'nivea', tag: 'UX-Projekt', title: 'Inclusive Design NIVEA', img: imgNivea,
    alt: 'Konzept für barrierefreie NIVEA-Verpackung',
    text: 'Barrierefreie Verpackung, digitale Zugänglichkeit und eine Kampagne mit echten Menschen.' },
]
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 6rem;
  position: relative;
  overflow: hidden;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-headline {
  font-family: var(--f-display);
  font-size: var(--size-hero);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.08;
  color: var(--c-basil);
  margin-bottom: 1.5rem;
}
.hero-headline em { font-style: normal; color: var(--c-thyme); }
.hero-sub {
  font-size: var(--size-md);
  font-weight: 300;
  color: var(--c-mid);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 480px;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }

.hero-image-wrap { position: relative; display: flex; justify-content: center; }
.hero-image-blob {
  position: absolute;
  inset: -20px;
  background: var(--c-sand);
  opacity: 0.5;
  border-radius: 62% 38% 50% 50% / 44% 50% 50% 56%;
  z-index: 0;
  animation: blob-drift 12s ease-in-out infinite alternate;
}
.hero-photo {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3/4;
  background: var(--c-basket);
  border-radius: 58% 42% 48% 52% / 46% 52% 48% 54%;
  overflow: hidden;
}
.hero-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.hero-badge {
  position: absolute;
  bottom: 8%; left: -10%;
  z-index: 2;
  background: var(--c-basil);
  color: var(--c-linen);
  border-radius: 14px;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 24px rgba(64,66,34,0.18);
}
.badge-number {
  font-family: var(--f-display);
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
}
.badge-label { font-size: 0.75rem; font-weight: 400; line-height: 1.4; opacity: 0.85; }

/* Prozess */
.process {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  position: relative;
}
.process::before {
  content: '';
  position: absolute;
  top: 1.05rem; left: 0; right: 0;
  height: 1px;
  background: var(--c-thyme);
  opacity: 0.6;
}
.process-step { position: relative; padding-top: 3rem; }
.process-step::before {
  content: '';
  position: absolute;
  top: 0.65rem; left: 0;
  width: 0.85rem; height: 0.85rem;
  border-radius: 50%;
  border: 1.5px solid var(--c-thyme);
  background: var(--c-linen);
}
.process-step:last-child::before { background: var(--c-thyme); }
.process-no {
  position: absolute; top: 0; left: 1.5rem;
  font-weight: 600; font-size: var(--size-md); color: var(--c-thyme);
}
.process-step h3 { font-size: var(--size-lg); color: var(--c-basil); margin-bottom: 0.4rem; }
.process-step p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; line-height: 1.6; }

/* Ausgewählte Projekte */
.featured { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.featured-card {
  background: var(--c-linen);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex; flex-direction: column;
  transition: box-shadow var(--trans), transform var(--trans);
}
.featured-card:hover { box-shadow: 0 16px 40px rgba(64,66,34,0.13); transform: translateY(-5px); }
.featured-img { aspect-ratio: 4/3; overflow: hidden; background: var(--c-misty); }
.featured-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform 0.6s ease; }
.featured-card:hover .featured-img img { transform: scale(1.04); }
.featured-body { padding: 1.25rem 1.5rem 1.5rem; }
.featured-tag {
  font-size: 0.65rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--c-thyme);
}
.featured-body h3 { font-size: var(--size-lg); color: var(--c-basil); margin: 0.25rem 0 0.4rem; }
.featured-body p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; line-height: 1.6; }
.more { margin-top: 2.5rem; }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-image-wrap { order: -1; max-width: 300px; margin: 0 auto; }
  .hero-badge { left: 0; bottom: -16px; }
  .process { grid-template-columns: 1fr; gap: 1.25rem; }
  .process::before { top: 0; bottom: 0; left: 0.42rem; right: auto; width: 1px; height: auto; }
  .process-step { padding: 0 0 0 2.2rem; }
  .process-step::before { top: 0.3rem; }
  .process-no { position: static; display: block; }
  .featured { grid-template-columns: 1fr; }
}
</style>
