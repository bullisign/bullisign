<template>
  <footer class="footer">
    <div class="container footer-inner">
      <RouterLink to="/" class="footer-logo">bullisign</RouterLink>
      <nav class="footer-links">
        <RouterLink to="/impressum">Impressum</RouterLink>
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
      </nav>
      <p class="footer-copy">© {{ year }} bullisign · Jasmin Bullinger</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--c-linen);
  border-top: 1px solid var(--c-border);
  padding: var(--space-md) 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-logo {
  font-family: var(--f-display);
  font-size: var(--size-lg);
  color: var(--c-basil);
}
.footer-links {
  display: flex;
  gap: 2rem;
}
.footer-links a {
  font-size: var(--size-xs);
  color: var(--c-mid);
  transition: color var(--trans);
}
.footer-links a:hover { color: var(--c-basil); }
.footer-copy {
  font-size: var(--size-xs);
  color: var(--c-mid);
}
@media (max-width: 680px) {
  .footer-inner { flex-direction: column; text-align: center; }
}
</style>
