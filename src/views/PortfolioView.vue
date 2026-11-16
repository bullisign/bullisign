<template>
  <PageHead
    eyebrow="Portfolio"
    title="Arbeiten, die ein Problem lösen."
    lead="Bei jedem Projekt steht am Anfang eine Frage: Was hält die Menschen gerade auf? Hier siehst du, wie ich darauf geantwortet habe."
    shape="var(--c-butter)"
  />

  <!-- 01 nährraum -->
  <article id="naehrraum" class="wrap case-block">
    <div class="case">
      <div class="case-text">
        <p class="eyebrow" style="color: var(--c-accent)">01 · Kundenprojekt · 2026</p>
        <h2 class="h3">nährraum: Vom „Kennst du das?“ zum ersten Termin</h2>
        <div class="rule"></div>
        <p class="text">
          Eine neue Ernährungsberatung für Familien brauchte eine Website, die gestresste Eltern abholt und den Weg
          zum ersten Termin so kurz wie möglich macht. Ich habe die Startseite als Geschichte aufgebaut, vom
          Alltagsproblem über das Angebot bis zur Buchung, und alles als eigenes WordPress-Theme umgesetzt.
        </p>
        <dl class="anno">
          <dt style="color: var(--c-sage)">Rolle</dt><dd>Konzept, Informationsarchitektur, UI-Design, WordPress-Umsetzung</dd>
          <dt style="color: var(--c-sage)">Ergebnis</dt><dd>Termin anfragen in vier Schritten, mit kostenlosem Erstgespräch als leichtem Einstieg</dd>
        </dl>
        <p><a href="https://naehrraum.com" target="_blank" rel="noopener" class="ext">naehrraum.com ansehen ↗</a></p>
      </div>
      <div class="nr-stage">
        <div class="frame nr-desk"><img :src="nrHome" alt="Startseite der Website nährraum auf dem Desktop" loading="lazy" /></div>
        <div class="nr-phone"><img :src="nrMob" alt="Startseite nährraum auf dem Smartphone" loading="lazy" /></div>
      </div>
    </div>
    <div class="behind">
      <p class="eyebrow" style="color: var(--c-sage)">Hinter den Kulissen · Sitemap, User Flow, Wireframe</p>
      <img :src="nrUx" alt="Sitemap, User Flow der Buchung und Wireframe der Startseite von nährraum" loading="lazy" />
    </div>
  </article>

  <!-- 02 Bachelorarbeit (Text-Case-Study, Inhalte durch Arbeitszeugnis gedeckt) -->
  <article id="bachelorarbeit" class="band">
    <div class="wrap">
      <p class="eyebrow">02 · Bachelorarbeit · aku.automation GmbH · 2024</p>
      <h2 class="h2 ba-title">Eine Software für neuronale Netze, gestaltet von null an</h2>
      <p class="lead ba-lead">Die Inhalte sind vertraulich. Deshalb gibt es hier keine Screens, sondern das, worauf es ankommt: das Problem, mein Vorgehen und was ich daraus gelernt habe.</p>
      <ul class="stats" aria-label="Eckdaten">
        <li><b>6</b><span>Phasen Design Thinking</span></li>
        <li><b>7</b><span>Usability-Tests</span></li>
        <li><b>1</b><span>komplette Komponentenbibliothek</span></li>
      </ul>

      <div class="cs">
        <div class="cs-row">
          <h3 class="cs-label">Problem</h3>
          <p class="cs-problem">
            Ein Spezialist für industrielle Bildverarbeitung wollte eine eigene cloudbasierte Software, mit der
            neuronale Netze erstellt, trainiert und verwaltet werden. Die Nutzer*innen sind Fachleute mit sehr
            unterschiedlichem Vorwissen. Die Aufgabe: eine Oberfläche, die komplexe KI-Abläufe verständlich macht,
            ohne Expert*innen auszubremsen.
          </p>
        </div>

        <div class="cs-row">
          <h3 class="cs-label">Vorgehen</h3>
          <div>
            <p class="text">
              Ich habe nach dem Design-Thinking-Prozess gearbeitet. Zuerst habe ich die Anforderungen der
              Nutzer*innen ermittelt und sie bei der Arbeit beobachtet. Daraus sind Personas, eine Empathy Map und
              eine User Journey Map entstanden. Auf dieser Basis habe ich Informationsarchitektur und Hierarchie
              definiert, dann Wireframes, Screendesigns und einen interaktiven Prototyp in Figma gestaltet. Diesen
              Prototyp habe ich in sieben Usability-Tests geprüft, die Ergebnisse ausgewertet und das Design
              weiterentwickelt. Zum Schluss habe ich eine vollständige Komponentenbibliothek aufgebaut und alles mit
              Entwicklung und Fachabteilungen abgestimmt.
            </p>
            <ol class="phases" aria-label="Phasen des Design-Thinking-Prozesses">
              <li v-for="(p, i) in phasen" :key="p" :class="{ last: i === phasen.length - 1 }"><span>{{ i + 1 }}</span>{{ p }}</li>
            </ol>
            <p class="loop">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" /></svg>
              Nach jedem Test zurück in die Gestaltung
            </p>
          </div>
        </div>

        <div class="cs-row">
          <h3 class="cs-label">Was ich gelernt habe</h3>
          <div class="learn">
            <article v-for="(l, i) in learnings" :key="l.title" class="learn-card">
              <span class="learn-no">0{{ i + 1 }}</span>
              <h4 class="learn-title">{{ l.title }}</h4>
              <p class="learn-text">{{ l.text }}</p>
            </article>
          </div>
        </div>
      </div>

      <figure class="ba-quote">
        <svg class="quote-mark" viewBox="0 0 34 28" aria-hidden="true"><path style="fill: var(--c-lav)" d="M0 28V16C0 6 5 1 14 0v6c-5 1-7 4-7 9h7v13zm20 0V16c0-10 5-15 14-16v6c-5 1-7 4-7 9h7v13z" /></svg>
        <div>
          <blockquote>„Frau Bullinger übertrug komplexe, hochtechnologische Sachverhalte in eine intuitive Benutzeroberfläche einer cloudbasierten B2B-Software …“</blockquote>
          <figcaption><strong>Prof. Patricia Franzreb</strong>, Hochschule Neu-Ulm · aus dem Empfehlungsschreiben</figcaption>
        </div>
      </figure>
    </div>
  </article>

  <!-- 03 ELA -->
  <article id="ela" class="wrap case-block">
    <div class="case">
      <div class="case-text">
        <p class="eyebrow" style="color: var(--c-accent)">03 · Werkstudentin · Goodlife Company · Stand 2023</p>
        <h2 class="h3">ELA: Ein Onlineshop zum Launch einer neuen Kosmetikmarke</h2>
        <div class="rule"></div>
        <p class="text">
          Die Kosmetikmarke ELA von Pamela Reif brauchte zum Start einen kompletten Onlineshop, für eine riesige
          Community, die am Launchtag gleichzeitig vorbeischaut. Ich habe Shop-Struktur, Wireframes und das Design
          für Desktop und Mobile konzipiert. Der Fokus lag auf den Produktdetailseiten, denn dort fällt die
          Kaufentscheidung.
        </p>
        <dl class="anno">
          <dt style="color: var(--c-sage)">Rolle</dt><dd>Shop-Struktur, Wireframes, UI Desktop &amp; Mobile, Design-System</dd>
          <dt style="color: var(--c-sage)">Ergebnis</dt><dd>Pünktlich zum Produktlaunch fertig</dd>
        </dl>
      </div>
      <div class="stage" style="background: var(--c-sand)">
        <div class="frame"><img :src="imgEla" alt="Seiten des ELA Onlineshops auf Desktop und Smartphone" loading="lazy" /></div>
        <p class="stage-note">Stand 2023. Der Shop wurde inzwischen überarbeitet.</p>
      </div>
    </div>
  </article>

  <!-- 04 NIVEA -->
  <article id="nivea" class="wrap case-block last-case">
    <div class="case flip">
      <div class="case-text">
        <p class="eyebrow" style="color: var(--c-accent)">04 · Studienprojekt · Inclusive Design</p>
        <h2 class="h3">NIVEA for everyone: Eine Dose, die alle aufbekommen</h2>
        <div class="rule"></div>
        <p class="text">
          Für Menschen mit motorischen Einschränkungen ist schon das Öffnen einer Cremedose eine Hürde. Das Konzept
          reicht von der Verpackung bis zur Kampagne: Click-Clack-Deckel, rutschfester Boden und taktile Folie,
          Produkte per NaviLens fürs Smartphone lesbar, und eine Kampagne mit echten Menschen statt Models.
        </p>
        <dl class="anno">
          <dt style="color: var(--c-sage)">Methoden</dt><dd>Schwachstellenanalyse, Prototyp, Accessibility, Kampagnenkonzept</dd>
        </dl>
      </div>
      <div class="stage" style="background: var(--c-butter)">
        <div class="frame"><img :src="imgNivea" alt="Inclusive-Design-Konzept für NIVEA: Analyse, Prototyp, NaviLens und Kampagne" loading="lazy" /></div>
      </div>
    </div>
  </article>

  <!-- WEITERE ARBEITEN -->
  <section class="section more">
    <div class="wrap">
      <div class="center more-head">
        <p class="eyebrow center" style="color: var(--c-accent)">Weitere Arbeiten</p>
        <h2 class="h2">Marke, Print und Social</h2>
        <div class="filters" role="group" aria-label="Arbeiten filtern">
          <button
            v-for="f in filter"
            :key="f.key"
            type="button"
            class="fbtn"
            :aria-pressed="aktiv === f.key"
            @click="aktiv = f.key"
          >{{ f.label }}</button>
        </div>
      </div>
      <div class="grid grid-3">
        <article v-for="w in sichtbar" :key="w.title" class="work">
          <div class="work-img" :style="{ background: w.bg }"><img :src="w.img" :alt="w.alt" loading="lazy" /></div>
          <div class="work-body">
            <p class="eyebrow" style="color: var(--c-accent); font-size: 11px">{{ w.tag }}</p>
            <h3 class="work-title">{{ w.title }}</h3>
            <p class="work-text">{{ w.text }}</p>
          </div>
        </article>
      </div>
      <div class="wip">
        <p class="eyebrow"><BlobShape class="dot" />Aktuell in Arbeit</p>
        <p class="wip-text">
          Aktuell entstehen drei Projekte: ein digitales Produkt, eine Web-App mit mobiler Begleit-App und ein
          Markenauftritt im Gesundheitsbereich. Mehr dazu, sobald sie live sind.
        </p>
      </div>
    </div>
  </section>

  <CtaBand />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHead from '@/components/PageHead.vue'
import BlobShape from '@/components/BlobShape.vue'
import CtaBand from '@/components/CtaBand.vue'
import { filter, weitereArbeiten, type Kategorie } from '@/data/arbeiten'
import nrHome from '@/assets/portfolio/naehrraum-desk-home.webp'
import nrMob from '@/assets/portfolio/naehrraum-mob-home.webp'
import nrUx from '@/assets/portfolio/naehrraum-ux.webp'
import imgEla from '@/assets/portfolio/ela.webp'
import imgNivea from '@/assets/portfolio/nivea.webp'

const phasen = ['Verstehen', 'Beobachten', 'Sichtweise definieren', 'Ideen finden', 'Prototyp', 'Testen']
const learnings = [
  { title: 'Zuschauen schlägt Fragen', text: 'Bei Software für Fachleute reicht es nicht, Nutzer*innen zu fragen. Viele Gewohnheiten sind so selbstverständlich, dass niemand sie erwähnt. Man sieht sie erst, wenn man bei der Arbeit zuschaut.' },
  { title: 'Früh testen, auch mit Klick-Prototyp', text: 'Tests mit echten Anwender*innen lohnen sich schon, bevor eine Zeile Code geschrieben ist. Jede Runde hat das Design spürbar verbessert.' },
  { title: 'Komplexität sortieren, nicht verstecken', text: 'KI-Abläufe bleiben komplex. Die Aufgabe des Designs ist, sie in eine klare Reihenfolge und eine verständliche Struktur zu bringen.' },
  { title: 'Die Bibliothek ist die Übergabe', text: 'Eine saubere Komponentenbibliothek ist kein Extra, sondern das, womit das Entwicklungsteam nach dem Projekt weiterarbeiten kann.' },
]

const aktiv = ref<'alle' | Kategorie>('alle')
const sichtbar = computed(() =>
  aktiv.value === 'alle' ? weitereArbeiten : weitereArbeiten.filter((w) => w.kat.includes(aktiv.value as Kategorie))
)
</script>

<style scoped>
.case-block { margin-bottom: 72px; scroll-margin-top: 90px; }
.last-case { margin-bottom: 0; padding-bottom: var(--sec-y); }
.case { display: grid; grid-template-columns: minmax(0, 1fr); gap: 32px; align-items: center; }
.case-text { display: flex; flex-direction: column; gap: 20px; }
.ext { font-weight: 500; }

.nr-stage { background: var(--c-duck); border-radius: var(--radius-lg); padding: 20px; }
.nr-desk { border-radius: 12px; }
.nr-phone { width: 120px; margin-top: 16px; border-radius: 18px; overflow: hidden; border: 5px solid var(--c-ink); box-shadow: 0 18px 40px rgba(47, 43, 34, .25); }
.nr-phone img { width: 100%; }
.behind { margin-top: 40px; background: var(--c-mist); border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; }
.behind img { border-radius: 12px; }

.stage { border-radius: var(--radius-lg); padding: 20px; }
.stage-note { margin-top: 14px; font-size: 13px; }

/* Bachelorarbeit – Text-Case-Study */
.band { background: var(--c-lav); padding: var(--sec-y) 0; margin-bottom: 72px; scroll-margin-top: 90px; }
.ba-title { margin: 16px 0; max-width: 900px; }
.ba-lead { max-width: 760px; font-weight: 400; }
.stats { list-style: none; margin: 24px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px; }
.stats li { background: var(--c-cream); border-radius: 16px; padding: 14px 18px; display: flex; align-items: baseline; gap: 10px; }
.stats b { font-size: 28px; font-weight: 600; line-height: 1; }
.stats span { font-size: 14px; }
.cs { margin-top: 40px; }
.cs-row { display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; padding: 28px 0; border-top: 1.5px solid var(--c-ink); }
.cs-label { font-size: 13px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
.cs-problem { font-size: 18px; line-height: 1.6; max-width: 820px; }
.cs-row .text { max-width: 820px; }
.phases { list-style: none; margin: 22px 0 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.phases li {
  min-height: 72px; border: 1.5px solid var(--c-ink); border-radius: 10px; padding: 8px;
  display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
  font-weight: 600; font-size: 13px; line-height: 1.3; background: var(--c-cream);
}
.phases li span { font-size: 12px; font-weight: 500; }
.phases li.last { background: var(--c-ink); color: var(--c-cream); border-color: var(--c-ink); }
.loop { display: flex; align-items: center; gap: 10px; margin-top: 14px; font-size: 14px; font-weight: 600; }
.learn { display: grid; grid-template-columns: minmax(0, 1fr); gap: 14px; }
.learn-card { background: var(--c-cream); border-radius: 18px; padding: 22px 24px; display: flex; flex-direction: column; gap: 10px; }
.learn-no { font-size: 13px; font-weight: 600; letter-spacing: .12em; color: var(--c-sage); }
.learn-title { font-size: 19px; font-weight: 600; letter-spacing: -.01em; line-height: 1.25; margin: 0; }
.learn-text { font-size: 16px; line-height: 1.6; }
.ba-quote { margin-top: 32px; background: var(--c-cream); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 18px; }
.ba-quote blockquote { font-size: 19px; line-height: 1.5; }
.ba-quote figcaption { margin-top: 12px; font-size: 14px; }

/* Weitere Arbeiten */
.more { background: var(--c-warm); }
.more-head { display: flex; flex-direction: column; align-items: center; gap: 14px; margin-bottom: 32px; }
.filters {
  display: flex; gap: 8px; margin-top: 12px; width: calc(100% + 2 * var(--pad-x));
  overflow-x: auto; padding: 0 var(--pad-x) 6px; scrollbar-width: none;
}
.filters::-webkit-scrollbar { display: none; }
.fbtn {
  flex: none; font: inherit; font-size: 14px; font-weight: 500; min-height: 44px; padding: 0 18px;
  border-radius: 999px; border: 1.5px solid var(--c-ink); background: transparent; color: var(--c-ink); cursor: pointer;
}
.fbtn[aria-pressed='true'] { background: var(--c-ink); color: var(--c-cream); }
.work { background: var(--c-paper); border: 1px solid var(--c-line); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; }
.work-img { aspect-ratio: 4 / 3; overflow: hidden; }
.work-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.work-body { padding: 20px 22px 24px; display: flex; flex-direction: column; gap: 8px; }
.work-title { font-size: 20px; font-weight: 600; }
.work-text { font-size: 15px; line-height: 1.6; color: var(--c-muted); }
.wip { margin-top: 40px; border: 1.5px dashed var(--c-ink); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 14px; }
.wip-text { font-size: 16px; line-height: 1.6; }

@media (min-width: 900px) {
  .case-block { margin-bottom: 120px; }
  .band { margin-bottom: 120px; }
  .stats li { padding: 16px 20px; }
  .stats b { font-size: 30px; }
  .cs { margin-top: 64px; }
  .cs-row { grid-template-columns: 200px minmax(0, 1fr); gap: 32px; padding: 40px 0; }
  .cs-label { padding-top: 6px; }
  .cs-problem { font-size: 19px; }
  .phases { grid-template-columns: repeat(6, minmax(0, 1fr)); margin-top: 26px; }
  .learn { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .learn-card { padding: 24px 26px; }
  .learn-title { font-size: 20px; }
  .ba-quote { margin-top: 48px; padding: 32px 36px; flex-direction: row; gap: 24px; }
  .ba-quote blockquote { font-size: 21px; }
  .case { grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 56px; }
  .case.flip { grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); }
  .case.flip .case-text { order: 2; }
  .case-text { gap: 22px; }
  .nr-stage { position: relative; padding: 36px 0 36px 36px; }
  .nr-desk { border-radius: 14px 0 0 14px; }
  .nr-phone { position: absolute; left: -28px; bottom: -40px; width: 150px; margin-top: 0; }
  .behind { margin-top: 72px; padding: 28px; }
  .stage { padding: 32px; }
  .more-head { margin-bottom: 40px; }
  .filters { width: auto; justify-content: center; flex-wrap: wrap; overflow: visible; padding: 0; }
  .work-body { padding: 22px 24px 26px; }
  .wip { flex-direction: row; align-items: center; gap: 24px; padding: 28px 32px; }
  .wip .eyebrow { flex: none; }
}
</style>
