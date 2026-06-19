<template>
  <section class="hero">
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>

    <div class="hero-inner container">
      <div class="hero-text">
        <span class="eyebrow">UI/UX · Mediengestaltung · Grafikdesign</span>
        <h1 class="hero-headline">
          Gestaltung,<br />
          <em>die deine Marke</em><br />
          unverwechselbar macht.
        </h1>
        <p class="hero-sub">
          Ich begleite Selbstständige und kleine Unternehmen von der ersten Idee
          bis zur fertigen Umsetzung – digital und print. Aus der Region Stuttgart,
          remote für ganz Deutschland.
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
          <span class="badge-label">Jahre<br />Erfahrung</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import jasminImg from '@/assets/jasmin.png'
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
  font-weight: 400;
  line-height: 1.1;
  color: var(--c-basil);
  margin-bottom: 1.5rem;
}
.hero-headline em { font-style: italic; color: var(--c-thyme); }
.hero-sub {
  font-size: var(--size-md);
  font-weight: 300;
  color: var(--c-mid);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 460px;
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
  font-weight: 500;
  line-height: 1;
}
.badge-label { font-size: 0.75rem; font-weight: 400; line-height: 1.4; opacity: 0.85; }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-image-wrap { order: -1; max-width: 300px; margin: 0 auto; }
  .hero-badge { left: 0; bottom: -16px; }
}
</style>
