<template>
  <section class="legal">
    <div class="legal-inner">
      <h1 class="legal-title">Impressum</h1>
      <div class="rule"></div>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>Jasmin Bullinger<br />bullisign – UX/UI- &amp; Markendesign<br />Bahnhofstraße 2<br />73265 Dettingen unter Teck</p>

      <h2>Kontakt</h2>
      <p>E-Mail: <a href="mailto:bullisign@gmail.com">bullisign@gmail.com</a></p>

      <h2>Umsatzsteuer</h2>
      <p>Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.</p>

      <h2>Berufsbezeichnung</h2>
      <p>UX/UI- und Markendesignerin (freiberuflich)</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Jasmin Bullinger, Bahnhofstraße 2, 73265 Dettingen unter Teck</p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Haftung für Inhalte</h2>
      <p>Die Inhalte dieser Website habe ich mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieterin bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>

      <h2>Haftung für Links</h2>
      <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese Inhalte ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden mir Rechtsverletzungen bekannt, entferne ich die betreffenden Links umgehend.</p>

      <h2>Urheberrecht</h2>
      <p>Die Inhalte und Arbeiten auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Die Rechte an gezeigten Marken und Logos liegen bei deren Inhabern.</p>
    </div>
  </section>
</template>

<style>
.legal { padding: 40px 0 var(--sec-y); }
.legal-inner { max-width: 760px; margin: 0 auto; padding: 0 var(--pad-x); }
.legal-title { font-size: clamp(36px, 5vw, 52px); font-weight: 600; letter-spacing: -.02em; margin-bottom: 12px; }
.legal h2 { font-size: 13px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--c-sage); margin: 36px 0 10px; }
.legal p, .legal li { font-size: 17px; line-height: 1.7; margin-bottom: 10px; }
.legal ul { padding-left: 22px; margin: 0 0 10px; }
.legal .stand { font-size: 14px; color: var(--c-muted); margin-top: 12px; }
@media (min-width: 900px) { .legal { padding-top: 64px; } }
</style>
