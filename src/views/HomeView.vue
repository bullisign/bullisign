<template>
  <!-- HERO -->
  <section class="hero">
    <BlobShape class="shape hero-shape" fill="var(--c-duck)" />
    <div class="wrap hero-inner">
      <div class="hero-text">
        <p class="eyebrow"><BlobShape class="dot" />UX/UI- &amp; Markendesign · Dettingen unter Teck</p>
        <h1 class="h1">Gestaltung,<br />die deine Marke<br />unverwechselbar macht.</h1>
        <p class="lead hero-lead">
          Ich bin Jasmin Bullinger, UX/UI- und Markendesignerin. Ich gestalte Websites, digitale Oberflächen
          und Markenauftritte vom Problem her und setze sie auch selbst um, von der ersten Struktur bis zur
          fertigen Website oder zum Druckprodukt.
        </p>
        <div class="btn-row">
          <RouterLink to="/portfolio" class="btn btn-dark">Portfolio ansehen <span aria-hidden="true">→</span></RouterLink>
          <RouterLink to="/kontakt" class="btn btn-line">Lass uns reden</RouterLink>
        </div>
        <p class="job-note"><span class="job-dot" aria-hidden="true"></span><span>Offen für Projekte und für eine <RouterLink to="/ueber-mich#arbeitgeber">feste Stelle im UX/UI-Team</RouterLink>.</span></p>
      </div>
      <div class="hero-photo">
        <div class="hero-photo-box">
          <img :src="jasminImg" alt="Porträt von Jasmin Bullinger" width="640" height="700" />
          <div class="badge">
            <span class="badge-label">Seit</span>
            <span class="badge-no">2014</span>
            <span class="badge-label">in der<br />Gestaltung</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AUSGEWÄHLTE ARBEITEN -->
  <section class="section">
    <div class="wrap">
      <div class="works-head">
        <div>
          <p class="eyebrow" style="color: var(--c-accent)"><BlobShape class="dot" fill="var(--c-bark)" />Ausgewählte Arbeiten</p>
          <h2 class="h2" style="margin-top: 14px">Vier Projekte, vier Probleme.</h2>
        </div>
        <RouterLink to="/portfolio" class="btn btn-line">Zum Portfolio <span aria-hidden="true">→</span></RouterLink>
      </div>
      <div class="grid grid-2">
        <RouterLink v-for="t in teaser" :key="t.id" :to="{ path: '/portfolio', hash: '#' + t.id }" class="tease">
          <div class="tease-img" :style="{ background: t.bg }">
            <img v-if="t.img" :src="t.img" alt="" loading="lazy" />
            <div v-else class="nda" aria-hidden="true">
              <div class="wf">
                <div class="wf-row wf-top"><span>Navigation · Projekte</span><i></i></div>
                <div class="wf-row wf-tiles"><b></b><b></b><b></b></div>
                <div class="wf-row wf-lines"><b></b><b style="width: 70%"></b></div>
              </div>
            </div>
          </div>
          <div class="tease-body">
            <p class="eyebrow tease-tag">{{ t.tag }}</p>
            <h3 class="tease-title">{{ t.title }}</h3>
            <p class="tease-text">{{ t.text }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <ProcessBlobs />

  <!-- ZITAT -->
  <section class="section">
    <div class="wrap quote-wrap">
      <svg class="quote-mark" viewBox="0 0 34 28" aria-hidden="true"><path style="fill: var(--c-lav)" d="M0 28V16C0 6 5 1 14 0v6c-5 1-7 4-7 9h7v13zm20 0V16c0-10 5-15 14-16v6c-5 1-7 4-7 9h7v13z" /></svg>
      <blockquote class="big-quote">„{{ referenzen[0].quote }}“</blockquote>
      <p class="quote-by"><strong>{{ referenzen[0].name }}</strong>, {{ referenzen[0].role }}</p>
      <RouterLink to="/referenzen" class="btn btn-line">Alle Referenzen <span aria-hidden="true">→</span></RouterLink>
    </div>
  </section>

  <CtaBand />
</template>

<script setup lang="ts">
import BlobShape from '@/components/BlobShape.vue'
import ProcessBlobs from '@/components/ProcessBlobs.vue'
import CtaBand from '@/components/CtaBand.vue'
import { referenzen } from '@/data/referenzen'
import jasminImg from '@/assets/brand/jasmin-blob.webp'
import imgNaehrraum from '@/assets/portfolio/naehrraum-desk-home.webp'
import imgEla from '@/assets/portfolio/ela.webp'
import imgNivea from '@/assets/portfolio/nivea.webp'

const teaser = [
  { id: 'naehrraum', img: imgNaehrraum, bg: 'var(--c-duck)', tag: 'Kundenprojekt · Website', title: 'nährraum', text: 'Website mit Online-Buchung für eine Ernährungsberatung für Familien.' },
  { id: 'bachelorarbeit', img: '', bg: 'var(--c-lav)', tag: 'Bachelorarbeit · UX/UI', title: 'Software für neuronale Netze', text: 'Komplette Oberfläche einer B2B-Software, nach Design Thinking und siebenmal getestet.' },
  { id: 'ela', img: imgEla, bg: 'var(--c-sand)', tag: 'Werkstudentin · E-Commerce', title: 'Onlineshop ELA', text: 'Shop-Struktur und Design zum Launch einer neuen Kosmetikmarke.' },
  { id: 'nivea', img: imgNivea, bg: 'var(--c-butter)', tag: 'Studienprojekt · Inclusive Design', title: 'NIVEA for everyone', text: 'Verpackung und Kampagne, die niemanden ausschließen.' },
]
</script>

<style scoped>
/* Hero */
.hero { position: relative; overflow: hidden; }
.hero-shape { width: 560px; right: -210px; top: -80px; transform: rotate(-14deg); }
.hero-inner { position: relative; display: grid; gap: 32px; padding-top: 24px; padding-bottom: 56px; align-items: center; }
.hero-photo { display: flex; justify-content: center; }
.hero-photo-box { position: relative; width: 100%; max-width: 300px; }
.badge {
  position: absolute; left: -12px; bottom: 10%;
  display: flex; align-items: center; gap: 10px;
  background: var(--c-ink); color: var(--c-cream);
  border-radius: 14px; padding: 10px 14px;
  box-shadow: 0 12px 30px rgba(47, 43, 34, .22);
}
.badge-no { font-size: 26px; font-weight: 600; line-height: 1; }
.badge-label { font-size: 12px; line-height: 1.35; }
.hero-lead { max-width: 540px; margin-bottom: 32px; }
.job-note { margin-top: 24px; font-size: 14px; display: flex; gap: 10px; align-items: center; }
.job-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--c-ink); flex: none; }

/* Teaser */
.works-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px; margin-bottom: 36px; }
.tease {
  display: flex; flex-direction: column; overflow: hidden; text-decoration: none; color: var(--c-ink);
  background: var(--c-paper); border: 1px solid var(--c-line); border-radius: var(--radius);
  transition: box-shadow var(--trans), transform var(--trans);
}
.tease:hover { color: var(--c-ink); box-shadow: 0 16px 40px rgba(47, 43, 34, .13); transform: translateY(-3px); }
.tease-img { aspect-ratio: 4 / 3; overflow: hidden; }
.tease-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.tease-body { padding: 20px 22px 24px; display: flex; flex-direction: column; gap: 8px; }
.tease-tag { color: var(--c-accent); font-size: 11px; }
.tease-title { font-size: 22px; font-weight: 600; }
.tease-text { font-size: 15px; line-height: 1.6; color: var(--c-muted); }

.nda { height: 100%; display: flex; align-items: center; justify-content: center; padding: 24px; }
.wf { width: 78%; border: 1.5px solid var(--c-ink); border-radius: 4px; background: var(--c-cream); }
.wf-row { border-bottom: 1px solid #C9CFCB; padding: 10px 12px; }
.wf-row:last-child { border-bottom: 0; }
.wf-top { display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 600; }
.wf-top i { width: 44px; height: 10px; border-radius: 5px; background: var(--c-ink); }
.wf-tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
.wf-tiles b { height: 26px; background: #E3E6E2; border-radius: 2px; }
.wf-lines b { display: block; height: 7px; background: #E3E6E2; border-radius: 2px; margin-bottom: 6px; }

/* Zitat */
.quote-wrap { max-width: 920px; display: flex; flex-direction: column; align-items: center; gap: 22px; text-align: center; }
.big-quote { font-size: clamp(21px, 2.6vw, 30px); line-height: 1.4; letter-spacing: -.01em; }
.quote-by { font-size: 15px; }

@media (min-width: 900px) {
  .hero-shape { width: 940px; right: -230px; top: -150px; }
  .hero-inner { grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); gap: 56px; padding-top: 72px; padding-bottom: 96px; }
  .hero-photo-box { max-width: 430px; }
  .badge { padding: 14px 20px; border-radius: 16px; gap: 12px; }
  .badge-no { font-size: 34px; }
  .badge-label { font-size: 13px; }
  .works-head { margin-bottom: 44px; }
  .tease-body { padding: 22px 26px 26px; }
}
</style>
