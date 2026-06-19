# bullisign

Persönliche Portfolio-Website von Jasmin Bullinger – UI/UX-Designerin & Mediengestalterin.

**Tech-Stack:** Vue 3 · Vite · TypeScript · Vue Router · SCSS-free (CSS Custom Properties)

---

## Setup

```bash
npm install
npm run dev      # Entwicklung auf http://localhost:5173
npm run build    # Produktions-Build → /dist
npm run preview  # Build lokal vorschauen
```

---

## Deployment auf Netlify

1. Repo auf GitHub pushen
2. Auf [app.netlify.com](https://app.netlify.com) → "Add new site" → GitHub-Repo auswählen
3. Build-Befehl: `npm run build` · Publish-Ordner: `dist`
4. Die `netlify.toml` erledigt den Rest (SPA-Redirects)

---

## Vor dem Live-Gang checken

- [ ] `src/views/KontaktView.vue` → `DEIN_CODE` durch echten Formspree-Code ersetzen
- [ ] `src/views/ImpressumView.vue` → Adress-Platzhalter (✏️) befüllen
- [ ] `src/views/DatenschutzView.vue` → Adresse + Hosting-Anbieter eintragen

---

## Projektstruktur

```
src/
├── assets/
│   ├── jasmin.png        ← Profilfoto
│   └── main.css          ← Design Tokens + globale Styles
├── components/
│   ├── NavBar.vue
│   └── AppFooter.vue
├── composables/
│   └── useReveal.ts      ← Scroll-Reveal-Animation
├── router/
│   └── index.ts
├── views/
│   ├── HomeView.vue
│   ├── LeistungenView.vue
│   ├── PortfolioView.vue
│   ├── UeberMichView.vue
│   ├── ReferenzenView.vue
│   ├── KontaktView.vue
│   ├── ImpressumView.vue
│   └── DatenschutzView.vue
├── App.vue
├── env.d.ts
└── main.ts
```
