import imgLabor from '@/assets/portfolio/labor.webp'
import imgGunti from '@/assets/portfolio/gunti.webp'
import imgBike from '@/assets/portfolio/bike.webp'
import imgSocial from '@/assets/portfolio/social.webp'
import imgMagazin from '@/assets/portfolio/magazin.webp'

export type Kategorie = 'marke' | 'web' | 'print' | 'social'

export interface Arbeit {
  kat: Kategorie[]
  tag: string
  title: string
  text: string
  img: string
  alt: string
  bg: string
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
    kat: ['marke', 'web', 'print'],
    tag: 'Corporate Identity · Studienprojekt',
    title: 'Laborgeräte-Süd',
    text: 'Neuer Markenauftritt für ein B2B-Unternehmen: Webdesign, Styleguide und alles bis zu Visitenkarte und Broschüre.',
    img: imgLabor,
    alt: 'Website, Visitenkarten, Briefpapier und Broschüre von Laborgeräte-Süd',
    bg: '#E6E9EA',
  },
  {
    kat: ['marke', 'web'],
    tag: 'Corporate Design · Studienprojekt',
    title: 'Gunti Aroma',
    text: 'Webdesign und Design-System für eine regionale Kaffeerösterei, vom ersten Eindruck bis zum Checkout.',
    img: imgGunti,
    alt: 'Startseite, Mobile-Ansicht und UI-Elemente der Kaffeerösterei Gunti Aroma',
    bg: '#EFE7DC',
  },
  {
    kat: ['print'],
    tag: 'Editorial · Weiterbildung',
    title: 'Bike-Buch Stuttgart',
    text: 'Ein textlastiger Fahrradführer, neu gedacht im Querformat, mit Icons, Farbe und komoot-Touren per QR-Code.',
    img: imgBike,
    alt: 'Cover, Inhaltsverzeichnis und Tourenseite des Fahrradbuchs',
    bg: '#E3E0D2',
  },
  {
    kat: ['social'],
    tag: 'Social Media · Website',
    title: 'schultech, HYPT & Skiclub Renningen',
    text: 'Instagram-Content für mehrere Accounts, dazu neue Unterseiten und die Social-Media-Strategie für den Skiclub Renningen.',
    img: imgSocial,
    alt: 'Drei Smartphones mit Instagram-Feeds',
    bg: '#E6EAEA',
  },
  {
    kat: ['social'],
    tag: 'Medienkonzept · Studienprojekt',
    title: 'Online-Magazin ABSTRACTA',
    text: 'Positionierung, Finanzierungsmodell und erste Ausgabe eines digitalen Kunstmagazins, inklusive Instagram.',
    img: imgMagazin,
    alt: 'Konzeptseiten des Kunstmagazins ABSTRACTA',
    bg: '#E9E6EC',
  },
]
