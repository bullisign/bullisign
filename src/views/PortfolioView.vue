<template>
  <section class="section section-warm page-top">
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow">Ausgewählte Projekte</span>
        <h1 class="section-title">Portfolio</h1>
        <p class="section-sub">
          Ich gestalte vom Problem her. Darum zeigt jedes Projekt, welches <strong>Problem</strong> am Anfang
          stand, welche <strong>Lösung</strong> ich entwickelt habe und was dabei herauskam.
        </p>
        <div class="filters" role="group" aria-label="Projekte filtern">
          <button
            v-for="f in filters"
            :key="f.key"
            type="button"
            :aria-pressed="filter === f.key"
            @click="filter = f.key"
          >{{ f.label }}</button>
        </div>
      </div>

      <div class="portfolio-grid">
        <button
          v-for="p in visible"
          :id="p.id"
          :key="p.id"
          type="button"
          class="portfolio-card"
          :class="{ wide: p.wide && filter === 'all' }"
          :aria-label="'Projekt ansehen: ' + p.title"
          @click="open(p.id)"
        >
          <div class="portfolio-card-img" :style="{ background: p.tint }">
            <img :src="p.cover" :alt="p.alt" loading="lazy" />
            <span class="tag" :class="{ 'tag-light': p.darkTag }">{{ p.tag }}</span>
          </div>
          <div class="portfolio-card-body">
            <h2>{{ p.title }}</h2>
            <p>{{ p.teaser }}</p>
            <span class="more">Projekt ansehen <span aria-hidden="true">→</span></span>
          </div>
        </button>
      </div>
    </div>
  </section>

  <!-- UX-Prozess -->
  <section class="section">
    <div class="container">
      <div class="section-header center">
        <span class="eyebrow">Mein UX-Prozess</span>
        <h2 class="section-title">So entstehen meine Projekte</h2>
      </div>
      <ol class="process">
        <li v-for="(s, i) in prozess" :key="s.title" class="process-step">
          <span class="process-no">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p class="process-desc">{{ s.text }}</p>
          <p class="process-label">Artefakte</p>
          <p class="process-items">{{ s.artefakte }}</p>
          <p class="process-label">Im Portfolio</p>
          <p class="process-where">{{ s.where }}</p>
        </li>
      </ol>

      <div class="thesis">
        <span class="eyebrow">Bachelorarbeit · aku.automation GmbH · 2024</span>
        <h3>Cloudbasierte Software für industrielle Bildverarbeitung</h3>
        <p>
          Ich habe die komplette Oberfläche einer Software zur Erstellung und Verwaltung neuronaler Netze
          gestaltet, von der Informationsarchitektur bis zum finalen UI, mit einer Komponentenbibliothek in
          Figma und sieben User-Testings. Die Arbeit unterliegt der Geheimhaltung, daher ohne Abbildungen.
        </p>
      </div>
    </div>
  </section>

  <section class="section section-basil cta">
    <div class="container cta-inner">
      <div>
        <h2 class="section-title title-light">Du hast ein Projekt im Kopf?</h2>
        <p class="cta-text">Ob Website, Corporate Design oder Flyer: Erzähl mir davon.</p>
      </div>
      <RouterLink to="/kontakt" class="btn-light">Projekt anfragen</RouterLink>
    </div>
  </section>

  <!-- Case Study -->
  <dialog ref="dlg" class="case" aria-labelledby="case-title" @close="onClose" @click="onBackdrop">
    <div v-if="current" class="case-inner">
      <div class="case-top">
        <span class="case-nr">Projekt {{ position + 1 }} von {{ visible.length }}</span>
        <div class="case-ctrl">
          <button type="button" class="pill-btn" aria-label="Vorheriges Projekt" @click="step(-1)">← Zurück</button>
          <button type="button" class="pill-btn" aria-label="Nächstes Projekt" @click="step(1)">Weiter →</button>
          <button type="button" class="pill-btn" @click="close">Schließen ✕</button>
        </div>
      </div>

      <div class="case-body">
        <span class="tag tag-static">{{ current.tag }}</span>
        <h2 id="case-title">{{ current.title }}</h2>
        <p class="case-ctx">{{ current.ctx }}</p>
        <ul class="case-tags">
          <li v-for="t in current.tags" :key="t">{{ t }}</li>
        </ul>

        <p v-if="current.intro" class="case-intro">{{ current.intro }}</p>

        <div v-if="current.problem" class="steps">
          <div class="step">
            <h3>Problem</h3>
            <p>{{ current.problem }}</p>
          </div>
          <div class="step">
            <h3>Lösung</h3>
            <ul>
              <li v-for="s in current.solution" :key="s">{{ s }}</li>
            </ul>
          </div>
          <div class="step step-result">
            <h3>Ergebnis</h3>
            <p>{{ current.result }}</p>
          </div>
        </div>

        <p v-if="current.link" class="case-link">
          Live ansehen:
          <a :href="current.link.url" target="_blank" rel="noopener">{{ current.link.label }}</a>
        </p>

        <div class="gallery" :class="'gallery-' + current.gallery.length">
          <figure v-for="g in current.gallery" :key="g.src" :class="g.kind">
            <a :href="g.src" target="_blank" rel="noopener" title="Bild in voller Größe öffnen">
              <img :src="g.src" :alt="g.alt" loading="lazy" />
            </a>
            <figcaption v-if="g.caption">{{ g.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import imgEla from '@/assets/portfolio/ela.webp'
import imgLabor from '@/assets/portfolio/labor.webp'
import imgGunti from '@/assets/portfolio/gunti.webp'
import imgNivea from '@/assets/portfolio/nivea.webp'
import imgGrill from '@/assets/portfolio/grill.webp'
import imgMagazin from '@/assets/portfolio/magazin.webp'
import imgBike from '@/assets/portfolio/bike.webp'
import imgSocial from '@/assets/portfolio/social.webp'
import nrHome from '@/assets/portfolio/naehrraum-desk-home.webp'
import nrBuchung from '@/assets/portfolio/naehrraum-desk-buchung.webp'
import nrSchwerpunkte from '@/assets/portfolio/naehrraum-desk-schwerpunkte.webp'
import nrMobHome from '@/assets/portfolio/naehrraum-mob-home.webp'
import nrMobLeistungen from '@/assets/portfolio/naehrraum-mob-leistungen.webp'
import nrUx from '@/assets/portfolio/naehrraum-ux.webp'

type Kat = 'ux' | 'brand' | 'print' | 'content'
interface Bild { src: string; alt: string; caption?: string; kind?: 'phone' | 'wide' }
interface Projekt {
  id: string
  title: string
  tag: string
  teaser: string
  ctx: string
  kat: Kat[]
  tags: string[]
  cover: string
  alt: string
  tint: string
  wide?: boolean
  darkTag?: boolean
  intro?: string
  problem?: string
  solution?: string[]
  result?: string
  link?: { url: string; label: string }
  gallery: Bild[]
}

const filters: { key: 'all' | Kat; label: string }[] = [
  { key: 'all', label: 'Alle' },
  { key: 'ux', label: 'UX & Web' },
  { key: 'brand', label: 'Branding' },
  { key: 'print', label: 'Print' },
  { key: 'content', label: 'Content & Social' },
]

const projekte: Projekt[] = [
  {
    id: 'naehrraum', title: 'Website nährraum', tag: 'Website & Buchung', wide: true, tint: '#c8d3c8',
    teaser: 'Konzeption, Design und WordPress-Umsetzung einer Website mit Online-Buchung für eine Ernährungsberatung für Familien.',
    ctx: 'Kundenprojekt · bullisign · Konzeption, Design & WordPress-Umsetzung', kat: ['ux'],
    tags: ['Informationsarchitektur', 'User Flow', 'Wireframes', 'WordPress', 'Online-Buchung'],
    cover: nrHome, alt: 'Startseite der Website nährraum',
    problem: 'Für eine neu gegründete Ernährungsberatung für Familien wurde eine Website gebraucht, die gestresste Eltern direkt abholt, Vertrauen aufbaut und den Weg zum ersten Termin so einfach wie möglich macht.',
    solution: [
      'Informationsarchitektur mit fünf Hauptseiten und eigenem Buchungsbereich, Schwerpunkte als direkt verlinkbare Abschnitte',
      'Startseite als Geschichte: vom Alltagsproblem der Eltern („Kennst du das?“) über Angebot und Zielgruppen bis zum Termin',
      'Buchung in vier Schritten mit Fortschrittsanzeige, kostenlosem Erstgespräch als niedriger Einstieg und FAQ zu Ablauf und Storno',
      'Wiederkehrende Call-to-Actions in Header, Hero und Abschluss',
      'Umsetzung als individuelles WordPress-Theme mit eigenem HTML und CSS, SEO-Grundlagen und DSGVO-konformer Einwilligung',
    ],
    result: 'Eine schlanke, responsive Website, über die Eltern, Großeltern und Kitas in wenigen Klicks einen Termin anfragen können.',
    link: { url: 'https://naehrraum.com', label: 'naehrraum.com' },
    gallery: [
      { src: nrHome, alt: 'Startseite nährraum, Desktop', caption: 'Startseite', kind: 'wide' },
      { src: nrMobHome, alt: 'Startseite nährraum, Smartphone', caption: 'Startseite mobil', kind: 'phone' },
      { src: nrMobLeistungen, alt: 'Leistungen nährraum, Smartphone', caption: 'Leistungen mobil', kind: 'phone' },
      { src: nrBuchung, alt: 'Terminbuchung mit Fortschrittsanzeige', caption: 'Buchung in vier Schritten' },
      { src: nrSchwerpunkte, alt: 'Schwerpunkte-Seite nährraum', caption: 'Schwerpunkte' },
      { src: nrUx, alt: 'Sitemap, User Flow der Buchung und Wireframe der Startseite', caption: 'Sitemap, User Flow und Wireframe', kind: 'wide' },
    ],
  },
  {
    id: 'ela', title: 'Launch Website ELA', tag: 'Product Launch', tint: '#d5c8b8',
    teaser: 'Konzeption und Gestaltung des Onlineshops für die Kosmetikmarke von Pamela Reif, mit Fokus auf die Produktdetailseiten.',
    ctx: 'Kundenprojekt · Goodlife Company · Werkstudentin', kat: ['ux'],
    tags: ['UX/UI', 'E-Commerce', 'Design-System', 'Desktop & Mobile'],
    cover: imgEla, alt: 'Shop-Seiten des ELA Onlineshops',
    problem: 'Für die neue Kosmetikmarke ELA (Pamela Reif) musste innerhalb kurzer Zeit ein kompletter Onlineshop entstehen: markenstark, aber vor allem mit einem reibungslosen Kauferlebnis für eine sehr große, ungeduldige Zielgruppe.',
    solution: [
      'Konzeption der gesamten Shop-Struktur inkl. Kategorie- und Produktdetailseiten',
      'Wireframing und visuelles Design für Desktop und Mobile',
      'Besonderer Fokus auf die Produktdetailseiten, da hier die Kaufentscheidung fällt',
      'Aufbau eines konsistenten Design-Systems für schnelle Skalierung neuer Produkte',
    ],
    result: 'Ein launch-fähiger, responsiver Onlineshop mit klarer Markenführung und intuitiver Navigation, termingerecht zum Produktlaunch fertig.',
    gallery: [{ src: imgEla, alt: 'Shop-Seiten des ELA Onlineshops', kind: 'wide' }],
  },
  {
    id: 'laborgeraetesued', title: 'CI Laborgeräte-Süd', tag: 'CI-Projekt', tint: '#cbd6db',
    teaser: 'Neues Webdesign inkl. umfassendem Styleguide für ein B2B-Unternehmen, übertragen auf Print.',
    ctx: 'Studienprojekt · Corporate Identity & Webdesign', kat: ['brand', 'ux', 'print'],
    tags: ['Corporate Identity', 'Webdesign', 'Styleguide', 'Print'],
    cover: imgLabor, alt: 'Website-Mockup, Visitenkarten, Briefpapier und Broschüre von Laborgeräte-Süd',
    problem: 'Der bestehende Markenauftritt von Laborgeräte-Süd wirkte nach innen und außen uneinheitlich. Es fehlte ein modernes, aber realistisch umsetzbares Webdesign, das die fachliche Kompetenz des Unternehmens glaubwürdig transportiert.',
    solution: [
      'Analyse des bestehenden Auftritts und Definition der Markenwerte',
      'Entwicklung eines neuen Webdesigns nach aktuellen Trends',
      'Dokumentation aller gestalterischen Entscheidungen in einem umfassenden Styleguide',
      'Übertragung des Corporate Designs auf Print-Anwendungen (Visitenkarten, Briefpapier, Broschüre)',
    ],
    result: 'Ein einheitlicher, direkt umsetzbarer Markenauftritt über Web und Print hinweg, dokumentiert in einem Styleguide als Grundlage für die weitere Markenentwicklung.',
    gallery: [{ src: imgLabor, alt: 'Website-Mockup, Visitenkarten, Briefpapier und Broschüre', kind: 'wide' }],
  },
  {
    id: 'guntiaroma', title: 'CD Gunti Aroma Kaffee', tag: 'CD-Projekt', tint: '#c5cb9f',
    teaser: 'Webdesign für eine Kaffeerösterei, Desktop und Mobile, inklusive Design-System.',
    ctx: 'Studienprojekt · Corporate Design für Rösterei', kat: ['brand', 'ux'],
    tags: ['Corporate Design', 'Webdesign', 'Wireframes', 'UI-Elemente'],
    cover: imgGunti, alt: 'Startseite, Mobile-Ansicht und UI-Elemente der Kaffeerösterei GuntiAroma',
    problem: 'Für die Kaffeerösterei GuntiAroma sollte eine Webpräsenz entstehen, die nicht nur ästhetisch überzeugt, sondern auch eine klare Struktur und intuitive Navigation für Shop, Röstprozess und Kaffeeseminare bietet.',
    solution: [
      'Erstellung von Wireframes als strukturelle Grundlage',
      'Kreative Gestaltung der Startseite für Desktop und Mobile',
      'Aufbau eines wiederverwendbaren Design-Systems (Icons, Buttons, UI-Elemente)',
      'Markenkommunikation entlang der gesamten Customer Journey, vom ersten Eindruck bis zum Checkout',
    ],
    result: 'Ein konsistentes Design-System, das sich nahtlos auf weitere Unterseiten des Shops übertragen lässt und die Markenwerte (Regionalität, Handwerk) durchgängig kommuniziert.',
    gallery: [{ src: imgGunti, alt: 'Startseite, Mobile-Ansicht und UI-Elemente', kind: 'wide' }],
  },
  {
    id: 'nivea', title: 'UX-Projekt NIVEA', tag: 'UX-Projekt', tint: '#b7c3b5',
    teaser: 'Barrierefreies Verpackungsdesign für Menschen mit motorischen Einschränkungen, Prototyp und Kampagnenkonzept.',
    ctx: 'Studienprojekt · Inclusive Design', kat: ['ux', 'content'],
    tags: ['Inclusive Design', 'Accessibility', 'Prototyp', 'Kampagne'],
    cover: imgNivea, alt: 'Schwachstellen-Analyse, Prototyp, NaviLens-Konzept und Content-Kampagne für NIVEA',
    problem: 'Menschen mit motorischen oder kognitiven Einschränkungen sind im Alltag häufig von unzugänglichen Produktverpackungen betroffen. Die Frage: Wie können NIVEA-Produkte so gestaltet werden, dass sie für alle nutzbar sind, ohne den Markenauftritt zu verlieren?',
    solution: [
      'Analyse konkreter Schwachstellen bestehender Verpackungen (schwer zu öffnen, rutschige Oberfläche)',
      'Entwicklung eines Prototyps mit Click-Clack-Deckel, rutschfestem Boden und taktiler Folie',
      'Konzeption einer NaviLens-Integration: Produkte per Smartphone erkennbar, mit Vorlesefunktion und vergrößerbaren Texten',
      'Entwurf einer begleitenden Content-Kampagne („Nivea is for everyone“) mit echten Menschen statt Models',
    ],
    result: 'Ein ganzheitliches Inclusive-Design-Konzept von der physischen Verpackung über digitale Zugänglichkeit bis zur Kommunikationsstrategie.',
    gallery: [{ src: imgNivea, alt: 'NIVEA Inclusive-Design-Konzept', kind: 'wide' }],
  },
  {
    id: 'baerenherzen', title: 'Launch Grillsauce Bärenherzen', tag: 'Product Launch', tint: '#2f2e2a', darkTag: true,
    teaser: 'Labeldesign für eine proteinreiche Grillsauce, markenstark, gesetzeskonform und regalfertig.',
    ctx: 'Eigenprojekt · Markenaufbau & Verpackungsdesign', kat: ['brand', 'print'],
    tags: ['Markenidentität', 'Verpackungsdesign', 'Etiketten', 'Lebensmittelrecht'],
    cover: imgGrill, alt: 'Etikettendesign der Grillsaucen Ketchup, Barbecue und Mango-Chilli',
    problem: 'Ein Bekannter wollte mit einer proteinhaltigen Grillsauce in den hart umkämpften Lebensmittelmarkt einsteigen. Für den Launch fehlten eine eigenständige Markenidentität und ein Label, das die strengen gesetzlichen Kennzeichnungspflichten erfüllt.',
    solution: [
      'Entwicklung einer eigenständigen Markenidentität (Name, Logo, visuelle Sprache)',
      'Gestaltung von drei Label-Varianten (Ketchup, Barbecue, Mango-Chilli) im einheitlichen Look',
      'Umsetzung aller lebensmittelrechtlich vorgeschriebenen Angaben ohne Kompromisse beim Design',
      'Abstimmung mit dem Gründer zu Zielgruppe und Positionierung im Premium-Segment',
    ],
    result: 'Drei marktreife, wiedererkennbare Produktlabel, die sich im Supermarktregal vom Standard-Ketchup-Design abheben.',
    gallery: [{ src: imgGrill, alt: 'Etiketten der drei Grillsaucen', kind: 'wide' }],
  },
  {
    id: 'bike-buch', title: 'Redesign Bike-Buch Stuttgart', tag: 'Redesign Print', tint: '#8c8c62', darkTag: true,
    teaser: 'Komplettes Redesign eines Fahrradführers, moderne Typografie, lebendige Farben und ein praktisches Querformat.',
    ctx: 'Weiterbildungsprojekt · Visuelle Designerin', kat: ['print'],
    tags: ['Editorial Design', 'Typografie', 'Querformat', 'QR-Code'],
    cover: imgBike, alt: 'Cover, Inhaltsverzeichnis und Tourenseite des neu gestalteten Fahrradbuchs',
    problem: 'Aufgabe war, ein bestehendes, wenig ansprechendes Buch komplett neu zu denken. Das Original: hochformatig, textlastig, ohne Grafiken und für eine junge Zielgruppe kaum attraktiv.',
    solution: [
      'Wechsel zu einem Querformat, das an eine Fahrradkarte erinnert',
      'Einsatz lebendiger Farben, moderner Typografie und Icons statt reiner Textwüsten',
      'Integration zusätzlicher Features: komoot-Anbindung per QR-Code, Fahrradtipps, Notizseiten',
      'Neugestaltung von Cover und Inhaltsverzeichnis als visuelle Leitplanken für das gesamte Buch',
    ],
    result: 'Ein modernes, zielgruppengerechtes Buchkonzept, das dieselben Inhalte deutlich zugänglicher und alltagstauglicher macht.',
    gallery: [{ src: imgBike, alt: 'Seiten des Fahrradbuchs', kind: 'wide' }],
  },
  {
    id: 'social-media', title: 'Social Media – schultech & HYPT', tag: 'Social Media', tint: '#bcc6c7',
    teaser: 'Gestaltung und Pflege der Social-Media-Präsenz für schultech GmbH, HYPT GbR und den SkiClub Renningen.',
    ctx: 'Kundenprojekte · Betreuung mehrerer Accounts', kat: ['content'],
    tags: ['Instagram', 'Content-Erstellung', 'Grafik', 'Pressearbeit'],
    cover: imgSocial, alt: 'Drei Smartphones mit Instagram-Feeds',
    intro: 'In den vergangenen Jahren durfte ich verschiedene Unternehmen, wie die schultech GmbH und HYPT GbR, sowie den SkiClub Renningen bei der Gestaltung ihrer Social-Media-Präsenz begleiten und unterstützen.',
    gallery: [{ src: imgSocial, alt: 'Instagram-Feeds', kind: 'wide' }],
  },
  {
    id: 'abstracta', title: 'Online-Magazin ABSTRACTA', tag: 'Konzept & Design', tint: '#beb5cc',
    teaser: 'Gründungskonzept, Finanzierungsmodell und erste Ausgabe eines digitalen Kunstmagazins.',
    ctx: 'Studienprojekt · Mediengründung von Grund auf', kat: ['content'],
    tags: ['Konzeption', 'Finanzierungsmodell', 'Redaktion', 'Instagram'],
    cover: imgMagazin, alt: 'Seiten zu Finanzierung und Mediengründung des Kunstmagazins ABSTRACTA',
    problem: 'Ein Kunstmagazin sollte als eigenständiges Medium konzipiert werden, von der Positionierung über ein tragfähiges Finanzierungsmodell bis zur ersten Content-Produktion, ohne Leser*innen durch eine Bezahlschranke sofort abzuschrecken.',
    solution: [
      'Zielgruppenanalyse und Positionierung des Magazins',
      'Entwicklung eines gestaffelten Finanzierungsmodells (Basic/Advanced/Pro) plus Kooperationen mit Hochschule und Museen',
      'Wahl der Rechtsform (GbR) und Klärung rechtlicher Rahmenbedingungen',
      'Produktion des ersten Artikels inkl. journalistischer Headline, Recherche und begleitendem Video',
    ],
    result: 'Ein vollständiges, finanzierbares Medienkonzept mit einer ersten produzierten Ausgabe und aktiver Instagram-Präsenz.',
    gallery: [{ src: imgMagazin, alt: 'Konzeptseiten ABSTRACTA', kind: 'wide' }],
  },
]

const prozess = [
  { title: 'Verstehen', text: 'Zielgruppen, Ziele und Probleme klären', artefakte: 'Interviews, Personas, Customer Journey, Schwachstellenanalyse', where: 'NIVEA · GuntiAroma' },
  { title: 'Strukturieren', text: 'Inhalte ordnen und Wege planen', artefakte: 'Informationsarchitektur, Sitemap, User Flows', where: 'nährraum · ELA' },
  { title: 'Skizzieren', text: 'Ideen früh sichtbar machen', artefakte: 'Wireframes, interaktive Prototypen', where: 'nährraum · ELA · GuntiAroma' },
  { title: 'Gestalten & Umsetzen', text: 'UI, Design-System und Code', artefakte: 'UI-Design, Komponenten in Figma, HTML, CSS, WordPress', where: 'nährraum · ELA · Laborgeräte-Süd' },
  { title: 'Testen & Optimieren', text: 'Prüfen, messen, verbessern', artefakte: 'User-Testings, Google Analytics, Hotjar, SEO', where: 'Bachelorarbeit · ELA' },
]

const filter = ref<'all' | Kat>('all')
const visible = computed(() =>
  filter.value === 'all' ? projekte : projekte.filter((p) => p.kat.includes(filter.value as Kat))
)

const dlg = ref<HTMLDialogElement | null>(null)
const currentId = ref<string | null>(null)
const current = computed(() => projekte.find((p) => p.id === currentId.value) ?? null)
const position = computed(() => visible.value.findIndex((p) => p.id === currentId.value))

const route = useRoute()
const router = useRouter()

async function open(id: string) {
  currentId.value = id
  await nextTick()
  if (dlg.value && !dlg.value.open) dlg.value.showModal()
  dlg.value?.scrollTo({ top: 0 })
  router.replace({ hash: '#' + id })
}
function close() {
  dlg.value?.close()
}
function onClose() {
  currentId.value = null
  router.replace({ hash: '' })
}
function onBackdrop(e: MouseEvent) {
  if (e.target === dlg.value) close()
}
function step(d: number) {
  const list = visible.value
  if (!list.length) return
  const i = (position.value + d + list.length) % list.length
  open(list[i].id)
}

onMounted(() => {
  const id = route.hash.replace('#', '')
  if (projekte.some((p) => p.id === id)) open(id)
})
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); }
.section-sub strong { font-weight: 500; color: var(--c-basil); }

.filters { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-top: 2rem; }
.filters button {
  font-size: var(--size-sm); letter-spacing: 0.02em;
  color: var(--c-text); background: transparent;
  border: 1px solid var(--c-border); border-radius: var(--radius-full);
  padding: 0.45rem 1rem;
  transition: background var(--trans), border-color var(--trans), color var(--trans);
}
.filters button:hover { border-color: var(--c-basil); }
.filters button[aria-pressed='true'] { background: var(--c-basil); border-color: var(--c-basil); color: var(--c-linen); }

.portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.portfolio-card {
  background: var(--c-linen);
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  overflow: hidden;
  display: flex; flex-direction: column;
  text-align: left; padding: 0; color: inherit;
  scroll-margin-top: 6rem;
  transition: box-shadow var(--trans), transform var(--trans);
}
.portfolio-card:hover { box-shadow: 0 16px 40px rgba(64,66,34,0.13); transform: translateY(-5px); }
.portfolio-card:focus-visible { outline: 2px solid var(--c-thyme); outline-offset: 3px; }
.portfolio-card.wide { grid-column: span 2; display: grid; grid-template-columns: 1.25fr 1fr; }
.portfolio-card-img { width: 100%; aspect-ratio: 4/3; position: relative; overflow: hidden; }
.portfolio-card.wide .portfolio-card-img { aspect-ratio: auto; height: 100%; min-height: 320px; }
.portfolio-card-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform 0.6s ease; }
.portfolio-card:hover .portfolio-card-img img { transform: scale(1.04); }

.tag {
  position: absolute; top: 12px; left: 12px;
  background: var(--c-basil); color: var(--c-linen);
  font-size: 0.65rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.25rem 0.6rem; border-radius: 999px;
}
.tag-light { background: var(--c-thyme); color: var(--c-basil); }
.tag-static { position: static; display: inline-block; }

.portfolio-card-body { padding: 1.25rem 1.5rem 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 0.4rem; }
.portfolio-card.wide .portfolio-card-body { justify-content: center; padding: 2rem; }
.portfolio-card-body h2 { font-size: var(--size-lg); font-weight: 500; color: var(--c-basil); }
.portfolio-card.wide .portfolio-card-body h2 { font-size: var(--size-xl); }
.portfolio-card-body p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; line-height: 1.6; }
.more { margin-top: auto; padding-top: 0.5rem; font-size: var(--size-sm); font-weight: 500; color: var(--c-basil); }

/* Prozess */
.process { list-style: none; display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; position: relative; }
.process::before { content: ''; position: absolute; top: 1.05rem; left: 0; right: 0; height: 1px; background: var(--c-thyme); opacity: 0.6; }
.process-step { position: relative; padding-top: 3rem; }
.process-step::before {
  content: ''; position: absolute; top: 0.65rem; left: 0;
  width: 0.85rem; height: 0.85rem; border-radius: 50%;
  border: 1.5px solid var(--c-thyme); background: var(--c-shortbread);
}
.process-step:last-child::before { background: var(--c-thyme); }
.process-no { position: absolute; top: 0; left: 1.5rem; font-weight: 600; color: var(--c-thyme); }
.process-step h3 { font-size: var(--size-lg); color: var(--c-basil); margin-bottom: 0.3rem; }
.process-desc { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; margin-bottom: 0.8rem; }
.process-label { font-size: 0.65rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--c-thyme); }
.process-items { font-size: var(--size-sm); color: var(--c-text); font-weight: 300; margin-bottom: 0.6rem; }
.process-where { font-size: var(--size-sm); color: var(--c-basil); font-weight: 500; }

.thesis {
  margin-top: var(--space-lg);
  background: var(--c-linen); border: 1px solid var(--c-border); border-radius: var(--radius-md);
  padding: 2rem;
}
.thesis h3 { font-size: var(--size-xl); color: var(--c-basil); margin-bottom: 0.5rem; }
.thesis p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; max-width: 760px; line-height: 1.7; }

/* CTA */
.cta { padding: var(--space-lg) 0; }
.cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
.cta-text { color: var(--c-shortbread); opacity: 0.8; font-weight: 300; }
.btn-light {
  display: inline-block; color: var(--c-linen);
  padding: 0.8rem 2rem; font-size: var(--size-sm); letter-spacing: 0.04em;
  border-radius: 999px; border: 2px solid rgba(255,255,255,0.4);
  transition: background var(--trans), border-color var(--trans);
}
.btn-light:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

/* Case Study */
.case {
  border: 0; padding: 0;
  width: min(1080px, 94vw); max-height: 92vh;
  margin: auto;
  border-radius: 18px;
  background: var(--c-shortbread); color: var(--c-text);
  overflow: auto;
}
.case::backdrop { background: rgba(46,44,39,0.6); backdrop-filter: blur(3px); }
.case-top {
  position: sticky; top: 0; z-index: 2;
  display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;
  padding: 0.9rem 1.25rem;
  background: rgba(243,240,237,0.95); border-bottom: 1px solid var(--c-border);
}
.case-nr { font-size: var(--size-xs); color: var(--c-mid); }
.case-ctrl { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.pill-btn {
  border: 1px solid var(--c-border); background: var(--c-linen); color: var(--c-text);
  border-radius: 999px; padding: 0.35rem 0.9rem; font-size: var(--size-sm);
}
.pill-btn:hover { border-color: var(--c-basil); }
.case-body { padding: 1.75rem clamp(1.1rem, 4vw, 3rem) 3rem; }
.case-body h2 { font-size: clamp(1.8rem, 3.6vw, 2.5rem); color: var(--c-basil); margin: 0.6rem 0 0.2rem; line-height: 1.15; }
.case-ctx { color: var(--c-mid); font-style: italic; font-size: var(--size-sm); }
.case-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 1rem 0 0; }
.case-tags li { font-size: var(--size-xs); border: 1px solid var(--c-border); background: var(--c-linen); border-radius: 999px; padding: 0.2rem 0.7rem; }
.case-intro { max-width: 62ch; margin-top: 1.5rem; }

.steps { display: grid; grid-template-columns: 1fr 1.35fr 1fr; gap: 2rem; margin-top: 2rem; position: relative; }
.steps::before { content: ''; position: absolute; left: 0.45rem; right: 0; top: 0.42rem; height: 1px; background: var(--c-thyme); }
.step { position: relative; padding-top: 1.8rem; min-width: 0; }
.step::before {
  content: ''; position: absolute; left: 0; top: 0;
  width: 0.85rem; height: 0.85rem; border-radius: 50%;
  border: 1.5px solid var(--c-thyme); background: var(--c-shortbread);
}
.step-result::before { background: var(--c-thyme); }
.step h3 { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--c-thyme); margin-bottom: 0.4rem; }
.step p, .step li { font-size: var(--size-sm); font-weight: 300; line-height: 1.65; }
.step ul { padding-left: 1.1em; }
.step li { margin-bottom: 0.35rem; }
.step li::marker { color: var(--c-thyme); }

.case-link { margin-top: 1.5rem; font-size: var(--size-sm); }
.case-link a { color: var(--c-basil); font-weight: 500; text-decoration: underline; text-underline-offset: 3px; }

.gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
.gallery figure { grid-column: span 2; margin: 0; }
.gallery figure.wide { grid-column: span 4; }
.gallery figure.phone { grid-column: span 1; }
.gallery-1 figure { grid-column: span 4; }
.gallery img { width: 100%; border-radius: 10px; background: var(--c-linen); border: 1px solid var(--c-border); }
.gallery figcaption { font-size: var(--size-xs); color: var(--c-mid); margin-top: 0.35rem; }

@media (max-width: 1000px) {
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .process { grid-template-columns: repeat(2, 1fr); }
  .process::before { display: none; }
}
@media (max-width: 680px) {
  .portfolio-grid { grid-template-columns: 1fr; }
  .portfolio-card.wide { grid-column: auto; grid-template-columns: 1fr; }
  .portfolio-card.wide .portfolio-card-img { min-height: 0; aspect-ratio: 4/3; }
  .process { grid-template-columns: 1fr; }
  .steps { grid-template-columns: 1fr; gap: 1.25rem; }
  .steps::before { left: 0.42rem; right: auto; top: 0; bottom: 0; width: 1px; height: auto; }
  .step { padding: 0 0 0 1.8rem; }
  .gallery figure, .gallery figure.wide { grid-column: span 4; }
  .gallery figure.phone { grid-column: span 2; }
}
</style>
