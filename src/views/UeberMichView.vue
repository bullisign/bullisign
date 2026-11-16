<template>
  <section class="intro">
    <div class="wrap intro-inner">
      <div class="intro-photo">
        <img :src="jasminImg" alt="Porträt von Jasmin Bullinger" width="640" height="700" />
      </div>
      <div class="intro-text">
        <p class="eyebrow"><BlobShape class="dot" />Über mich</p>
        <h1 class="h1" style="margin: 0">Hallo, ich bin Jasmin.</h1>
        <p class="intro-lead">Ich komme aus dem Print. Dort habe ich gelernt, dass jedes Detail zählt, bis zum letzten Millimeter Beschnitt.</p>
        <p class="text">
          Irgendwann hat mich mehr interessiert, was auf dem Bildschirm passiert: Warum klickt jemand auf einen
          Button und jemand anderes nicht? Wo bleiben Menschen hängen? Also habe ich angefangen, Websites nicht nur zu
          gestalten, sondern selbst zu bauen, und habe UX studiert. Seitdem habe ich Onlineshops für Marken mit
          riesiger Community mitgestaltet, Instagram-Feeds entwickelt, die man beim Scrollen sofort wiedererkennt,
          und für eine KI-Software eine komplette Oberfläche entworfen, die ich so lange getestet habe, bis sie sich
          selbstverständlich anfühlte.
        </p>
        <p class="text">
          Heute arbeite ich als bullisign für Kund*innen aus der Region und remote. Am meisten freut es mich, wenn
          jemand eine Seite benutzt und gar nicht merkt, wie viel Arbeit darin steckt, weil einfach alles da ist,
          wo man es sucht.
        </p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap two">
      <div class="weg">
        <p class="eyebrow" style="color: var(--c-accent)"><BlobShape class="dot" fill="var(--c-bark)" />Mein Weg</p>
        <ol class="tl" aria-label="Mein Weg, neueste Station zuerst">
          <li v-for="s in weg" :key="s.title"><strong>{{ s.title }}</strong><span>{{ s.sub }}</span></li>
        </ol>
      </div>
      <div class="side">
        <div class="box">
          <p class="eyebrow" style="color: var(--c-sage)">Werkzeuge</p>
          <ul class="chips">
            <li v-for="t in tools" :key="t" class="chip">{{ t }}</li>
          </ul>
        </div>
        <div id="arbeitgeber" class="box box-ink">
          <p class="eyebrow" style="color: var(--c-butter)">Für Arbeitgeber*innen</p>
          <p class="side-title">Ich suche eine Festanstellung im UX/UI-Design.</p>
          <p class="side-text">
            Gern remote oder hybrid in der Region Stuttgart, ab sofort verfügbar. Lebenslauf, Arbeitszeugnisse und
            Empfehlungsschreiben schicke ich dir gern zu.
          </p>
          <div class="btn-row">
            <RouterLink :to="{ path: '/kontakt', query: { thema: 'Bewerbungsunterlagen' } }" class="btn btn-light">Unterlagen anfragen <span aria-hidden="true">→</span></RouterLink>
            <a href="https://www.linkedin.com/in/jasminbullinger" target="_blank" rel="noopener" class="btn btn-line-light">LinkedIn</a>
          </div>
        </div>
        <div class="box box-duck">
          <p class="eyebrow">Abseits vom Bildschirm</p>
          <p class="side-text">
            Wenn ich nicht gestalte, stehe ich oft auf dem Snowboard. Beim Skiclub Renningen betreue ich die
            SkiClub-Kids, bin Anwärterin als Snowboardlehrerin und kümmere mich um Website, Instagram und Reels.
          </p>
        </div>
        <div class="btn-row">
          <RouterLink to="/referenzen" class="btn btn-dark">Referenzen lesen <span aria-hidden="true">→</span></RouterLink>
          <RouterLink to="/portfolio" class="btn btn-line">Portfolio ansehen</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
</template>

<script setup lang="ts">
import BlobShape from '@/components/BlobShape.vue'
import CtaBand from '@/components/CtaBand.vue'
import jasminImg from '@/assets/brand/jasmin-blob.webp'

const weg = [
  { title: 'Selbstständig als bullisign', sub: 'UX/UI- und Markendesign für Kund*innen aus der Region und remote' },
  { title: 'Bachelorarbeit und Werkstudentin UX/UI', sub: 'aku.automation GmbH · Software-Oberfläche, Design System, 7 Usability-Tests' },
  { title: 'Praktikum und Werkstudentin UX/UI', sub: 'Goodlife Company · Onlineshops, u. a. ELA' },
  { title: 'B.A. Informationsmanagement & Unternehmenskommunikation', sub: 'Hochschule Neu-Ulm · Schwerpunkt User Experience' },
  { title: 'Technical Operator & interne UX-Designerin', sub: 'netzwerk P · parallel Weiterbildung zur Visuellen Designerin' },
  { title: 'Ausbildung Mediengestalterin Digital & Print', sub: 'netzwerk P · Start 2014' },
]

const tools = ['Figma', 'Adobe XD', 'Miro', 'Photoshop', 'Illustrator', 'InDesign', 'HTML & CSS', 'JavaScript & Vue', 'WordPress', 'Webflow', 'Shopify', 'Google Analytics', 'Hotjar', 'Asana']
</script>

<style scoped>
.intro { background: var(--c-sand); }
.intro-inner { display: grid; gap: 32px; align-items: center; padding-top: 32px; padding-bottom: 56px; }
.intro-photo { display: flex; justify-content: center; }
.intro-photo img { width: 100%; max-width: 260px; }
.intro-text { display: flex; flex-direction: column; gap: 18px; }
.intro-lead { font-size: 20px; line-height: 1.55; }

.two { display: grid; gap: 48px; }
.weg { display: flex; flex-direction: column; gap: 28px; }
.tl { list-style: none; margin: 0; padding: 0; border-left: 1.5px solid var(--c-ink); }
.tl li { position: relative; padding: 0 0 20px 22px; font-size: 16px; line-height: 1.45; display: flex; flex-direction: column; }
.tl li span { font-size: 14px; }
.tl li::before { content: ''; position: absolute; left: -7px; top: 4px; width: 12px; height: 12px; border-radius: 50%; border: 1.5px solid var(--c-ink); background: var(--c-cream); }
.tl li:first-child::before { background: var(--c-ink); }
.tl li:last-child { padding-bottom: 0; }
.side { display: flex; flex-direction: column; gap: 24px; }
.box { background: var(--c-paper); border: 1px solid var(--c-line); border-radius: var(--radius); padding: 22px 24px; display: flex; flex-direction: column; gap: 14px; }
.box-duck { background: var(--c-duck); border-color: var(--c-duck); }
.btn-line-light { background: transparent; color: var(--c-cream); border-color: var(--c-cream); }
.btn-line-light:hover { background: var(--c-cream); color: var(--c-ink); }
.box-ink { background: var(--c-ink); border-color: var(--c-ink); color: var(--c-cream); scroll-margin-top: 90px; }
.side-title { font-size: 22px; font-weight: 600; letter-spacing: -.01em; line-height: 1.25; }
.side-text { font-size: 16px; line-height: 1.65; }

@media (min-width: 900px) {
  .intro-inner { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 64px; padding-top: 72px; padding-bottom: 96px; }
  .intro-photo img { max-width: 420px; }
  .intro-lead { font-size: 21px; }
  .two { grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 64px; align-items: start; }
  .box { padding: 26px 28px; }
}
</style>
