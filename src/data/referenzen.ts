// Wörtliche Auszüge aus Empfehlungsschreiben und Arbeitszeugnissen.
// „…“ steht für den Geburtsnamen „Frau Berthold“ in älteren Zeugnissen.
export interface Referenz {
  quote: string
  name: string
  role: string
  source: string
  color: string
}

export const referenzen: Referenz[] = [
  {
    quote: 'Frau Bullinger verfügt über ein interdisziplinäres Profil, das gestalterische Exzellenz, systematische UX-Methodik und technisches Verständnis in bemerkenswerter Weise vereint.',
    name: 'Prof. Patricia Franzreb',
    role: 'Hochschule Neu-Ulm',
    source: 'aus dem Empfehlungsschreiben',
    color: 'var(--c-duck)',
  },
  {
    quote: '… übernahm die interne Rolle des UX-Designers und war ein wichtiger Impulsgeber für das Team.',
    name: 'Thomas Bausch',
    role: 'Geschäftsführung, netzwerk P GmbH',
    source: 'aus dem Arbeitszeugnis',
    color: 'var(--c-butter)',
  },
  {
    quote: '… beeindruckte uns stets durch eine sehr gute Arbeitsqualität, wobei sie die selbst gesetzten und vereinbarten Ziele auch unter schwierigsten Bedingungen stets erreichte, meist sogar noch übertroffen hat.',
    name: 'Lucie Benz',
    role: 'Head of People & Culture, Goodlife Company',
    source: 'aus dem Praktikumszeugnis',
    color: 'var(--c-sand)',
  },
  {
    quote: 'Bei der Erfüllung der Aufgaben ging Frau Bullinger überaus planvoll und ergebnisorientiert vor, sodass diese zu unserer vollsten Zufriedenheit realisiert wurden.',
    name: 'Boris Gierszewski',
    role: 'Geschäftsführung, aku.automation GmbH',
    source: 'aus dem Arbeitszeugnis',
    color: 'var(--c-lav)',
  },
]
