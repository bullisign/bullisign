import imgLabor from '@/assets/portfolio/labor.webp'
import imgGunti from '@/assets/portfolio/gunti.webp'
import imgBike from '@/assets/portfolio/bike.webp'
import imgSocial from '@/assets/portfolio/social.webp'
import imgMagazin from '@/assets/portfolio/magazin.webp'

export type Kategorie = 'marke' | 'web' | 'print' | 'social'

export interface Arbeit {
  slug: string
  kat: Kategorie[]
  tag: string
  title: string
  text: string
  img: string
  alt: string
  bg: string
  /** Detailseite */
  meta: string
  problem: string
  loesung: string[]
  ergebnis: string
  rolle?: string
  punkte?: { title: string; text: string }[]
}

export const filter: { key: 'alle' | Kategorie; label: string }[] = [
  { key: 'alle', label: 'Alle' },
  { key: 'marke', label: 'Marke' },
  { key: 'web', label: 'Web' },
  { key: 'print', label: 'Print' },
  { key: 'social', label: 'Content & Social' },
]

export const weitereArbeiten: Arbeit[] = [
  {
    slug: 'laborgeraete-sued',
    kat: ['marke', 'web', 'print'],
    tag: 'Corporate Identity · Kundenprojekt im Studium',
    title: 'Laborgeräte-Süd',
    text: 'Neuer Markenauftritt für ein B2B-Unternehmen, von Logo und Styleguide bis Website und Broschüre. Mein Entwurf setzte sich gegen sieben andere durch.',
    img: imgLabor,
    alt: 'Website, Visitenkarten, Briefpapier und Broschüre von Laborgeräte-Süd',
    bg: '#E6E9EA',
    meta: 'Corporate Identity für Laborgeräte-Süd: neues Logo, Corporate Design, Styleguide, Webdesign und Print. Kundenprojekt im Studium, der Entwurf von Jasmin Bullinger wurde ausgewählt.',
    problem: 'Die Website war seit der Gründung nicht mehr überarbeitet worden, und es gab weder ein einheitliches Erscheinungsbild noch einen Styleguide. Der Kunde wünschte sich einen modernen, realistisch umsetzbaren Auftritt, der auffällt und die Stärken des Unternehmens zeigt. Einzige Vorgabe: das Orange.',
    loesung: [
      'Neue Bild-/Wortmarke mit dem LABORGERÄTESÜD-L, in Dunkelblau und dem vorgegebenen Orange',
      'Das Quadrat als durchgängiges Gestaltungsmittel, vom Logo über die Website bis zum Flyer: Es steht für Sicherheit und Vertrauen',
      'Futura als Firmenschrift, klare Layoutprinzipien und ein sachlicher Bildstil mit transparenten Farbflächen',
      'Neues Webdesign für Desktop und Mobile',
      'Styleguide mit Logo-Versionen, Größen, Mindestabständen und No-Gos',
      'Übertragung auf Print: Visitenkarten, Briefpapier und Broschüre',
    ],
    rolle: 'Alle acht Teilnehmenden haben einen eigenen Entwurf für Logo, Corporate Design, Web und Print erarbeitet. Mein Entwurf hat die Abstimmung gewonnen und wurde vom ganzen Team übernommen, ausgearbeitet und dem Kunden präsentiert.',
    ergebnis: 'Ein einheitlicher, direkt umsetzbarer Markenauftritt über Web und Print hinweg, mit Styleguide als Grundlage für die Weiterentwicklung, präsentiert beim Kunden.',
  },
  {
    slug: 'gunti-aroma',
    kat: ['marke', 'web'],
    tag: 'Corporate Design · Studienprojekt',
    title: 'Gunti Aroma',
    text: 'Webdesign und Design-System für eine regionale Kaffeerösterei, vom ersten Eindruck bis zum Checkout.',
    img: imgGunti,
    alt: 'Startseite, Mobile-Ansicht und UI-Elemente der Kaffeerösterei Gunti Aroma',
    bg: '#EFE7DC',
    meta: 'Webdesign und Design-System für die Kaffeerösterei Gunti Aroma: Wireframes, Startseite für Desktop und Mobile, UI-Komponenten. Studienprojekt von Jasmin Bullinger.',
    problem: 'Die regionale Kaffeerösterei brauchte eine Webpräsenz, die ästhetisch überzeugt und eine klare Struktur für Shop, Röstprozess und Kaffeeseminare bietet.',
    loesung: [
      'Wireframes als strukturelle Grundlage',
      'Gestaltung der Startseite für Desktop und Mobile',
      'Wiederverwendbares Design-System aus Icons, Buttons und UI-Elementen',
      'Markenkommunikation entlang der Customer Journey, vom ersten Eindruck bis zum Checkout',
    ],
    ergebnis: 'Ein konsistentes Design-System, das sich auf weitere Unterseiten übertragen lässt und Regionalität und Handwerk durchgängig zeigt.',
    rolle: 'Aufbau der Website im Team: Idee, Konzeption, Prototyp, Komponentenbibliothek und Umsetzung.',
  },
  {
    slug: 'bike-buch-stuttgart',
    kat: ['print'],
    tag: 'Editorial · Weiterbildung · 2018',
    title: 'Bike-Buch Stuttgart',
    text: 'Ein textlastiger Fahrradführer, neu gedacht im Querformat, mit Icons, Farbe und komoot-Touren per QR-Code.',
    img: imgBike,
    alt: 'Cover, Inhaltsverzeichnis und Tourenseite des Fahrradbuchs',
    bg: '#E3E0D2',
    meta: 'Bike-Buch Stuttgart: Neugestaltung eines Rad-Wanderführers für Stuttgart und Umland, von Zielgruppenanalyse, Persona und Copy-Strategie bis zum gedruckten Dummy. Editorial Design von Jasmin Bullinger.',
    problem: 'Die Aufgabe: einen gestalterisch missratenen Rad-Wanderführer für Stuttgart und Umland neu denken, und zwar komplett, von der ersten Analyse bis zum fertigen Dummy. Das Original war textlastig, unübersichtlich und sprach jüngere Radfahrer gar nicht an, die sich ohnehin lieber von einer App führen lassen.',
    loesung: [
      'Zielgruppe über Sinus-Milieus eingegrenzt, daraus die Persona Lukas: 22, Student, Mountainbiker, wenig Budget',
      'Copy-Strategie mit Positionierung, Tonalität („einfach, verständlich, motivierend“) und klarem Nutzenversprechen',
      'Querformat zum kompletten Umblättern: Die aktuelle Tour ist auf einen Blick zu sehen, auch in der Lenkertasche',
      'Breitere Ränder, damit die Hände beim Halten nichts verdecken',
      'Icons und Farben für Schwierigkeit und Höhenmeter, dazu Rastplätze und Bahnverbindungen pro Tour',
      'komoot-Touren per QR-Code als Brücke für alle, die unterwegs doch lieber das Handy nutzen',
    ],
    rolle: 'Einzelprojekt: Analyse, Persona, Copy-Strategie, Scribbles, Schrift- und Farbkonzept, Layout und Dummy, alles aus einer Hand.',
    ergebnis: 'Ein handlicher, preiswerter Tourenführer, der sich in Sekunden erfassen lässt und Buch und App verbindet, umgesetzt bis zum gedruckten Dummy.',
  },
  {
    slug: 'social-media',
    kat: ['social'],
    tag: 'Social Media · Website',
    title: 'schultech, HYPT & Skiclub Renningen',
    text: 'Instagram-Content für mehrere Accounts, dazu neue Unterseiten und die Social-Media-Strategie für den Skiclub Renningen.',
    img: imgSocial,
    alt: 'Drei Smartphones mit Instagram-Feeds',
    bg: '#E6EAEA',
    meta: 'Social Media und Content von Jasmin Bullinger: Instagram-Content, animierte GIFs und Reels für schultech, HYPT und den SkiClub Renningen, inklusive Social-Media-Strategie.',
    problem: 'Drei Accounts mit ganz unterschiedlichen Zielgruppen: Jeder Feed sollte sofort zur Marke passen, auf einen Blick wiedererkennbar sein und regelmäßig mit wenig Aufwand bespielt werden können.',
    loesung: [
      'Konzeption und Gestaltung von Posts und Logos',
      'Bewegtbild: animierte GIFs für HYPT, Reels für den SkiClub, die ich selbst schneide und poste',
      'Wiederkehrende Formate und Vorlagen pro Account, damit der Feed als Einheit wirkt',
      'Für den SkiClub zusätzlich die Social-Media-Strategie und neue Unterseiten der Vereinswebsite',
    ],
    ergebnis: 'Drei eigenständige Feeds, jeder in der Bildsprache und Tonalität seiner Zielgruppe.',
    rolle: 'Konzeption, Gestaltung und Bewegtbild. Beim SkiClub Renningen verantworte ich zusätzlich Strategie, Veröffentlichung und Website.',
    punkte: [
      { title: 'HYPT', text: 'Teamvorstellungen, Events, Erklär-Formate wie „Was ist gute User Experience?“ und animierte GIFs.' },
      { title: 'SkiClub Renningen', text: 'Social-Media-Strategie, Saison-Formate rund um Saisonstart, Skikurse und Jugendfreizeit sowie Reels.' },
      { title: 'schultech', text: 'Zitat-Posts, Teamporträts und Messe-Content in einem einheitlichen Raster.' },
    ],
  },
  {
    slug: 'abstracta',
    kat: ['social'],
    tag: 'Medienkonzept · Studienprojekt',
    title: 'Online-Magazin ABSTRACTA',
    text: 'Positionierung, Finanzierungsmodell und erste Ausgabe eines digitalen Kunstmagazins, inklusive Instagram.',
    img: imgMagazin,
    alt: 'Konzeptseiten des Kunstmagazins ABSTRACTA',
    bg: '#E9E6EC',
    meta: 'Online-Magazin ABSTRACTA: Medienkonzept mit Positionierung, Finanzierungsmodell, erster Ausgabe, Video, Instagram und Website. Studienprojekt von Jasmin Bullinger.',
    problem: 'Für ein digitales Kunstmagazin sollte ein tragfähiges Medienkonzept entstehen: Für wen ist es, wie finanziert es sich, und wie sieht die erste Ausgabe aus?',
    loesung: [
      'Positionierung und Zielgruppe des Magazins',
      'Finanzierungsmodell und Mediengründung',
      'Erste Ausgabe mit eigenen Beiträgen, inklusive Video',
      'Instagram-Account und Website für das Magazin',
    ],
    ergebnis: 'Ein durchdachtes Medienkonzept mit erster Ausgabe, das vom Inhalt bis zu den Kanälen zeigt, wie das Magazin funktionieren kann.',
    rolle: 'Im Team hatte jede ein eigenes Themengebiet. Bei meinem war ich für Idee, Text, Aufnahmen, Videoschnitt und Voice-over verantwortlich. Dazu habe ich den Instagram-Account angelegt und die Website gebaut.',
  },
]
