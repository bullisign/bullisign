<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <RouterLink to="/" class="footer-brand" aria-label="bullisign – zur Startseite">
        <img :src="bildmarkeHell" alt="" width="40" height="44" />
        <span class="footer-word">bullisign</span>
      </RouterLink>
      <p class="footer-copy">© {{ year }} Jasmin Bullinger</p>
      <nav class="footer-nav" aria-label="Rechtliches">
        <a href="https://www.linkedin.com/in/jasminbullinger" target="_blank" rel="noopener">LinkedIn</a>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        <RouterLink to="/impressum">Impressum</RouterLink>
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import bildmarkeHell from '@/assets/brand/bildmarke-hell.svg'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer { background: var(--c-ink); color: #E9E2D4; border-top: 1px solid rgba(251, 248, 242, .15); }
.footer-inner { display: flex; flex-wrap: wrap; align-items: center; gap: 16px 24px; padding-top: 28px; padding-bottom: 28px; }
.footer-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.footer-brand img { width: 40px; height: 44px; }
.footer-word { font-weight: 600; font-size: 18px; color: var(--c-cream); }
.footer-copy { font-size: 14px; }
.footer-nav { display: flex; flex-wrap: wrap; gap: 8px 24px; font-size: 14px; width: 100%; }
.footer-nav a { color: #E9E2D4; padding: 6px 0; }
.footer-nav a:hover { color: var(--c-butter); }
@media (min-width: 900px) {
  .footer-nav { width: auto; margin-left: auto; }
}
</style>
