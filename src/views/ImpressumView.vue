<template>
  <section class="section page-top">
    <div class="container container-narrow">
      <h1 class="section-title">Impressum</h1>

      <div class="legal-body">
        <h2>Angaben gemäß § 5 TMG</h2>
        <!-- ✏️ Ersetze die Platzhalter mit deinen echten Daten -->
        <p class="placeholder">✏️ Vorname Nachname</p>
        <p class="placeholder">✏️ Straße Hausnummer</p>
        <p class="placeholder">✏️ PLZ Ort</p>

        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:bullisign@gmail.com">bullisign@gmail.com</a></p>

        <h2>Kleinunternehmerregelung</h2>
        <p>Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.</p>

        <h2>Berufsbezeichnung</h2>
        <p>UI/UX-Designerin & Mediengestalterin (freiberuflich)</p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p class="placeholder">✏️ Vorname Nachname, Adresse wie oben</p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen.
          Für externe Links gilt: Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
          Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht.
          Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts
          bedürfen der schriftlichen Zustimmung der Autorin.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); min-height: 60svh; }
.legal-body { margin-top: 2rem; }
.legal-body h2 {
  font-family: var(--f-display); font-size: var(--size-lg);
  font-weight: 400; color: var(--c-basil);
  margin: 2rem 0 0.5rem;
}
.legal-body h2:first-child { margin-top: 0; }
.legal-body p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; margin-bottom: 0.4rem; }
.legal-body a { color: var(--c-basil); text-decoration: underline; }
.placeholder {
  display: inline-block;
  background: rgba(168,170,88,0.15); border: 1px dashed var(--c-thyme);
  border-radius: 6px; padding: 0.4rem 0.8rem;
  font-size: var(--size-sm) !important; color: var(--c-basil) !important;
  margin-bottom: 0.25rem;
}
</style>
