<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <RouterLink to="/" class="nav-logo">bullisign</RouterLink>

    <nav class="nav-links">
      <RouterLink to="/leistungen">Leistungen</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/ueber-mich">Über mich</RouterLink>
      <RouterLink to="/referenzen">Referenzen</RouterLink>
      <RouterLink to="/kontakt" class="nav-cta">Kontakt</RouterLink>
    </nav>

    <button
      class="nav-burger"
      :aria-expanded="menuOpen"
      aria-label="Menü öffnen"
      @click="menuOpen = !menuOpen"
    >
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>
  </header>

  <nav class="mobile-menu" :class="{ open: menuOpen }">
    <RouterLink to="/leistungen" class="mobile-link" @click="menuOpen = false">Leistungen</RouterLink>
    <RouterLink to="/portfolio"  class="mobile-link" @click="menuOpen = false">Portfolio</RouterLink>
    <RouterLink to="/ueber-mich" class="mobile-link" @click="menuOpen = false">Über mich</RouterLink>
    <RouterLink to="/referenzen" class="mobile-link" @click="menuOpen = false">Referenzen</RouterLink>
    <RouterLink to="/kontakt"    class="mobile-link" @click="menuOpen = false">Kontakt</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen   = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 2rem;
  background: rgba(243, 240, 237, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--trans), background var(--trans);
}
.nav.scrolled { border-color: var(--c-border); }

.nav-logo {
  font-family: var(--f-display);
  font-size: var(--size-xl);
  font-weight: 500;
  color: var(--c-basil);
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.nav-links a {
  font-size: var(--size-sm);
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--c-mid);
  transition: color var(--trans);
}
.nav-links a:hover,
.nav-links a.router-link-active { color: var(--c-basil); }

.nav-cta {
  background: var(--c-basil) !important;
  color: var(--c-linen) !important;
  padding: 0.45rem 1.2rem;
  border-radius: var(--radius-full);
  font-weight: 500 !important;
  transition: background var(--trans) !important;
}
.nav-cta:hover { background: var(--c-pine) !important; }

.nav-burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
}
.nav-burger span {
  display: block;
  width: 22px; height: 1.5px;
  background: var(--c-basil);
  transition: transform var(--trans), opacity var(--trans);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 62px; left: 0; right: 0;
  z-index: 99;
  background: var(--c-shortbread);
  border-bottom: 1px solid var(--c-border);
  flex-direction: column;
  padding: 1rem 2rem;
}
.mobile-menu.open { display: flex; }

.mobile-link {
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--c-border);
  font-family: var(--f-display);
  font-size: var(--size-lg);
  color: var(--c-basil);
}
.mobile-link:last-child { border: none; }

@media (max-width: 680px) {
  .nav-links  { display: none; }
  .nav-burger { display: flex; }
}
</style>
