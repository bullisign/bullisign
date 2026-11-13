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

  <!-- 02 Bachelorarbeit -->
  <article id="bachelorarbeit" class="band">
    <div class="wrap">
      <div class="case flip">
        <div class="case-text">
          <p class="eyebrow">02 · Bachelorarbeit · aku.automation GmbH · 2024</p>
          <h2 class="h3">Eine Software für neuronale Netze, gestaltet von null an</h2>
          <div class="rule"></div>
          <p class="text">
            Für meine Bachelorarbeit habe ich nach dem Design-Thinking-Prozess die komplette Oberfläche einer
            cloudbasierten B2B-Software entwickelt, mit der neuronale Netze für die industrielle Bildverarbeitung
            erstellt und verwaltet werden. Die Inhalte sind vertraulich. Deshalb zeige ich hier keine Screens,
            sondern wie ich vorgegangen bin.
          </p>
          <dl class="anno wide">
            <template v-for="p in phasenText" :key="p.label">
              <dt>{{ p.label }}</dt><dd>{{ p.text }}</dd>
            </template>
          </dl>
        </div>
        <div class="ba-visuals">
          <div class="panel">
            <p class="eyebrow" style="color: var(--c-sage)">Design-Thinking-Prozess</p>
            <ol class="phases">
              <li v-for="(p, i) in phasen" :key="p" :class="{ last: i === phasen.length - 1 }">{{ i + 1 }}<br />{{ p }}</li>
            </ol>
            <p class="loop">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" /></svg>
              7 Iterationen: nach jedem Test zurück in die Gestaltung
            </p>
          </div>
          <div class="panel schema">
            <div>
              <p class="eyebrow" style="color: var(--c-sage)">Prinzip Dashboard</p>
              <div class="wf" aria-hidden="true">
                <div class="wf-row wf-top"><span>Navigation · Projekte</span><i></i></div>
                <div class="wf-row"><p class="wf-label">Status auf einen Blick · 3 Kacheln</p><div class="wf-tiles"><b></b><b></b><b></b></div></div>
                <div class="wf-row"><p class="wf-label">Liste · Filter · Aktion</p><b class="ln"></b><b class="ln" style="width: 80%"></b><b class="ln" style="width: 60%"></b></div>
              </div>
              <p class="schema-note">Schematisch, keine echten Inhalte</p>
            </div>
            <div>
              <p class="eyebrow" style="color: var(--c-sage)">Prinzip Bibliothek</p>
              <div class="lib" aria-hidden="true">
                <div class="lib-row"><span class="pill dark"></span><span class="pill"></span></div>
                <div class="lib-input"><b class="ln" style="width: 50%; margin: 0"></b></div>
                <div class="lib-row"><span class="sw" style="background: var(--c-duck)"></span><span class="sw" style="background: var(--c-butter)"></span><span class="sw" style="background: var(--c-bark)"></span><span class="sw dashed"></span></div>
                <div class="lib-row"><span class="tag">Tag</span><span class="tag grey">Status</span></div>
              </div>
            </div>
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
const phasenText = [
  { label: 'Verstehen & Beobachten', text: 'Nutzeranforderungen ermittelt, Nutzer*innen beobachtet' },
  { label: 'Sichtweise definieren', text: 'Personas, Empathy Map, User Journey Map, Informationsarchitektur' },
  { label: 'Ideen & Prototyp', text: 'Wireframes, Screendesigns, interaktiver Prototyp in Figma' },
  { label: 'Testen', text: '7 Usability-Tests, ausgewertet und das Design weiterentwickelt' },
  { label: 'Übergabe', text: 'Design System mit kompletter Komponentenbibliothek in Figma, in enger Abstimmung mit Entwicklung und Fachabteilungen' },
]

const aktiv = ref<'alle' | Kategorie>('alle')
const sichtbar = computed(() =>
  aktiv.value === 'alle' ? weitereArbeiten : weitereArbeiten.filter((w) => w.kat.includes(aktiv.value as Kategorie))
)
</script>

<style scoped>
.case-block { margin-bottom: 72px; scroll-margin-top: 90px; }
.last-case { margin-bottom: 0; padding-bottom: var(--sec-y); }
#bachelorarbeit { scroll-margin-top: 90px; }
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

/* Bachelorarbeit */
.band { background: var(--c-lav); padding: var(--sec-y) 0; margin-bottom: 72px; }
.ba-visuals { display: flex; flex-direction: column; gap: 20px; }
.panel { background: var(--c-cream); border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; }
.phases { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.phases li {
  min-height: 72px; border: 1.5px solid var(--c-ink); border-radius: 10px; padding: 10px;
  display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
  font-weight: 600; font-size: 14px; line-height: 1.3; background: var(--c-cream);
}
.phases li.last { background: var(--c-ink); color: var(--c-cream); }
.loop { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; }
.schema { display: grid; grid-template-columns: minmax(0, 1fr); gap: 24px; }
.schema .eyebrow { margin-bottom: 14px; }
.wf { border: 1.5px solid var(--c-ink); border-radius: 4px; background: var(--c-cream); }
.wf-row { border-bottom: 1px solid #C9CFCB; padding: 10px 12px; }
.wf-row:last-child { border-bottom: 0; }
.wf-top { display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 600; }
.wf-top i { width: 52px; height: 12px; border-radius: 6px; background: var(--c-ink); }
.wf-label { font-size: 12px; font-weight: 600; margin-bottom: 8px; }
.wf-tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
.wf-tiles b { height: 34px; background: #E3E6E2; border-radius: 2px; }
.ln { display: block; height: 8px; background: #E3E6E2; border-radius: 2px; margin-bottom: 6px; }
.schema-note { margin-top: 10px; font-size: 12px; color: var(--c-ink-2); }
.lib { display: flex; flex-direction: column; gap: 10px; }
.lib-row { display: flex; gap: 8px; }
.pill { height: 30px; flex: 1; border-radius: 15px; border: 1.5px solid var(--c-ink); }
.pill.dark { background: var(--c-ink); }
.lib-input { height: 36px; border-radius: 8px; border: 1.5px solid var(--c-ink); display: flex; align-items: center; padding: 0 10px; }
.sw { width: 30px; height: 30px; border-radius: 8px; }
.sw.dashed { border: 1.5px dashed var(--c-ink); }
.tag { padding: 4px 10px; border-radius: 999px; border: 1.2px solid var(--c-ink); font-size: 11px; }
.tag.grey { border-color: transparent; background: #E3E6E2; }
.ba-quote { margin-top: 40px; background: var(--c-cream); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 18px; }
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
  .case { grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 56px; }
  .case.flip { grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); }
  .case.flip .case-text { order: 2; }
  .case-text { gap: 22px; }
  .nr-stage { position: relative; padding: 36px 0 36px 36px; }
  .nr-desk { border-radius: 14px 0 0 14px; }
  .nr-phone { position: absolute; left: -28px; bottom: -40px; width: 150px; margin-top: 0; }
  .behind { margin-top: 72px; padding: 28px; }
  .stage { padding: 32px; }
  .panel { padding: 26px; }
  .phases { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .schema { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
  .ba-quote { margin-top: 56px; padding: 32px 36px; flex-direction: row; gap: 24px; }
  .ba-quote blockquote { font-size: 21px; }
  .more-head { margin-bottom: 40px; }
  .filters { width: auto; justify-content: center; flex-wrap: wrap; overflow: visible; padding: 0; }
  .work-body { padding: 22px 24px 26px; }
  .wip { flex-direction: row; align-items: center; gap: 24px; padding: 28px 32px; }
  .wip .eyebrow { flex: none; }
}
</style>
