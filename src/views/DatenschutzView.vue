<template>
  <section class="section page-top">
    <div class="container container-narrow">
      <h1 class="section-title">Datenschutzerklärung</h1>
      <p class="stand">Stand: {{ stand }}</p>

      <div class="legal-body">
        <h2>1. Verantwortliche Person</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website:<br />
          <span class="placeholder">✏️ Vorname Nachname, Straße, PLZ Ort</span><br />
          E-Mail: <a href="mailto:bullisign@gmail.com">bullisign@gmail.com</a>
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird gehostet bei <span class="placeholder">✏️ z.B. Netlify</span>.
          Beim Aufruf werden automatisch Server-Log-Files erhoben (Browser, Betriebssystem, IP, Uhrzeit).
          Diese Daten können nicht bestimmten Personen zugeordnet werden.
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Das Kontaktformular wird über <strong>Formspree</strong> (Formspree Inc., USA) abgewickelt.
          Deine Angaben (Name, E-Mail, Nachricht) werden zur Bearbeitung deiner Anfrage verarbeitet
          (Art. 6 Abs. 1 lit. b DSGVO). Formspree ist nach dem EU-US Data Privacy Framework zertifiziert.
          Weitere Infos: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener">formspree.io/legal/privacy-policy</a>.
          Die Daten werden nach Abschluss der Anfrage, spätestens nach 12 Monaten, gelöscht.
        </p>

        <h2>4. Schriftarten</h2>
        <p>
          Die auf dieser Website verwendete Schriftart (Fira Sans) ist lokal eingebunden. Beim Aufruf der
          Seite wird keine Verbindung zu Servern von Google oder anderen Anbietern aufgebaut.
        </p>

        <h2>5. Keine Cookies, kein Tracking</h2>
        <p>
          Diese Website verwendet keine Tracking-Cookies und keine Analyse-Tools.
          Es werden keine Nutzungsprofile erstellt.
        </p>

        <h2>6. Deine Rechte</h2>
        <p>Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO).</p>
        <p>
          Anfragen an: <a href="mailto:bullisign@gmail.com">bullisign@gmail.com</a><br />
          Beschwerden beim Landesbeauftragten für Datenschutz Baden-Württemberg:
          <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener">
            www.baden-wuerttemberg.datenschutz.de
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stand = new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); min-height: 60svh; }
.stand { font-size: var(--size-xs); color: var(--c-mid); margin-bottom: 2rem; }
.legal-body h2 {
  font-family: var(--f-display); font-size: var(--size-lg);
  font-weight: 400; color: var(--c-basil); margin: 2rem 0 0.5rem;
}
.legal-body p { font-size: var(--size-sm); color: var(--c-mid); font-weight: 300; margin-bottom: 0.5rem; line-height: 1.7; }
.legal-body a { color: var(--c-basil); text-decoration: underline; }
.placeholder {
  display: inline-block;
  background: rgba(168,170,88,0.15); border: 1px dashed var(--c-thyme);
  border-radius: 6px; padding: 0.3rem 0.7rem;
  font-size: var(--size-sm); color: var(--c-basil);
}
</style>
