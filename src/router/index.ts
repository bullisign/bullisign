import { createRouter, type RouteRecordRaw, type RouterHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    description: string
  }
}

export const SITE_URL = 'https://bullisign.com'

const brand = 'bullisign · Jasmin Bullinger'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'bullisign – UX/UI- & Markendesign | Jasmin Bullinger',
      description: 'Jasmin Bullinger, UX/UI- und Markendesignerin aus Dettingen unter Teck (Region Stuttgart). Websites, digitale Oberflächen und Markenauftritte – von der Konzeption bis zur Umsetzung.',
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue'),
    meta: {
      title: `Portfolio – UX/UI-, Web- und Markenprojekte | ${brand}`,
      description: 'Ausgewählte Arbeiten von Jasmin Bullinger: Website mit Online-Buchung für nährraum, UX/UI einer KI-Software (Bachelorarbeit, Design Thinking, 7 Usability-Tests), Onlineshop ELA und Inclusive Design für NIVEA.',
    },
  },
  {
    path: '/leistungen',
    name: 'leistungen',
    component: () => import('@/views/LeistungenView.vue'),
    meta: {
      title: `Leistungen – UX/UI-Design, Websites, Corporate Design | ${brand}`,
      description: 'UX/UI-Design mit Design System, Websites in WordPress, Webflow oder HTML/CSS, Corporate Design sowie Print und Social Media – Konzept, Gestaltung und Umsetzung aus einer Hand.',
    },
  },
  {
    path: '/ueber-mich',
    name: 'ueber-mich',
    component: () => import('@/views/UeberMichView.vue'),
    meta: {
      title: `Über mich – Jasmin Bullinger, UX/UI-Designerin | ${brand}`,
      description: 'Mediengestalterin, Visuelle Designerin und B.A. Informationsmanagement & Unternehmenskommunikation (Schwerpunkt UX, Hochschule Neu-Ulm). Offen für Projekte und eine Festanstellung im UX/UI-Design.',
    },
  },
  {
    path: '/referenzen',
    name: 'referenzen',
    component: () => import('@/views/ReferenzenView.vue'),
    meta: {
      title: `Referenzen – Stimmen zu meiner Arbeit | ${brand}`,
      description: 'Auszüge aus Empfehlungsschreiben und Arbeitszeugnissen: Hochschule Neu-Ulm, netzwerk P, Goodlife Company und aku.automation über die Arbeit von Jasmin Bullinger.',
    },
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('@/views/KontaktView.vue'),
    meta: {
      title: `Kontakt – Projekt oder Stelle anfragen | ${brand}`,
      description: 'Kontakt zu Jasmin Bullinger (bullisign), Dettingen unter Teck, Region Stuttgart und remote. Ab sofort verfügbar für Projekte und eine Festanstellung im UX/UI-Design.',
    },
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('@/views/ImpressumView.vue'),
    meta: { title: `Impressum | ${brand}`, description: 'Impressum von bullisign – Jasmin Bullinger, Bahnhofstraße 2, 73265 Dettingen unter Teck.' },
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('@/views/DatenschutzView.vue'),
    meta: { title: `Datenschutz | ${brand}`, description: 'Datenschutzerklärung von bullisign.com: Hosting bei Netlify, Kontaktformular, keine Cookies, kein Tracking.' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'nicht-gefunden',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: `Seite nicht gefunden | ${brand}`, description: 'Diese Seite gibt es leider nicht.' },
  },
]

/** Pfade, die beim Build als fertiges HTML erzeugt werden */
export const prerenderPaths = routes.filter((r) => !r.path.includes(':')).map((r) => r.path)

export function createAppRouter(history: RouterHistory) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior(to, from, saved) {
      if (saved) return saved
      if (to.path === from.path && !to.hash) return false
      if (to.hash) return { el: to.hash, top: 96 }
      return { top: 0 }
    },
  })

  // Titel, Beschreibung und Canonical im Browser aktuell halten
  router.afterEach((to) => {
    if (import.meta.env.SSR) return
    document.title = to.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + to.path)
  })

  return router
}
