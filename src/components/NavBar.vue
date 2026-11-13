<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="wrap nav-inner">
      <RouterLink to="/" class="brand" aria-label="bullisign – zur Startseite">
        <img :src="bildmarke" alt="" width="46" height="50" />
        <span class="brand-word">bullisign</span>
      </RouterLink>

      <nav class="nav-links" aria-label="Hauptnavigation">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
      </nav>

      <RouterLink to="/kontakt" class="btn btn-dark nav-cta">Kontakt</RouterLink>

      <button
        type="button"
        class="burger"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Menü öffnen"
        @click="menuOpen = true"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
      </button>
    </div>
  </header>

  <Transition name="menu">
    <div v-if="menuOpen" id="mobile-menu" class="mmenu" role="dialog" aria-modal="true" aria-label="Menü">
      <div class="mmenu-top">
        <RouterLink to="/" class="brand" @click="menuOpen = false">
          <img :src="bildmarke" alt="" width="46" height="50" />
          <span class="brand-word">bullisign</span>
        </RouterLink>
        <button ref="closeBtn" type="button" class="burger" aria-label="Menü schließen" @click="menuOpen = false">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <nav class="mmenu-links" aria-label="Mobile Navigation">
        <RouterLink to="/" class="mlink" @click="menuOpen = false">Start</RouterLink>
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="mlink" @click="menuOpen = false">{{ l.label }}</RouterLink>
      </nav>
      <RouterLink to="/kontakt" class="btn btn-dark mmenu-cta" @click="menuOpen = false">Kontakt aufnehmen <span aria-hidden="true">→</span></RouterLink>
      <p class="mmenu-mail">bullisign@gmail.com · <a href="https://www.linkedin.com/in/jasmin-b-416882146" target="_blank" rel="noopener">LinkedIn</a></p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import bildmarke from '@/assets/brand/bildmarke.svg'

const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/ueber-mich', label: 'Über mich' },
  { to: '/referenzen', label: 'Referenzen' },
]

const isScrolled = ref(false)
const menuOpen = ref(false)
const closeBtn = ref<HTMLButtonElement | null>(null)
const route = useRoute()

function onScroll() { isScrolled.value = window.scrollY > 10 }
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') menuOpen.value = false }

watch(() => route.fullPath, () => { menuOpen.value = false })
watch(menuOpen, async (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) { await nextTick(); closeBtn.value?.focus() }
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(251, 248, 242, .9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--trans);
}
.nav.scrolled { border-bottom-color: var(--c-line); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding-top: 12px; padding-bottom: 12px; }
.brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--c-ink); }
.brand img { width: 40px; height: 44px; }
.brand-word { font-weight: 600; font-size: 19px; letter-spacing: -.01em; }

.nav-links, .nav-cta { display: none; }
.burger {
  display: flex; align-items: center; justify-content: center;
  width: 48px; height: 48px; border-radius: 999px;
  border: 1.5px solid var(--c-ink); background: transparent; color: var(--c-ink); cursor: pointer;
}

.mmenu {
  position: fixed; inset: 0; z-index: 100; overflow-y: auto;
  background: var(--c-duck);
  padding: 12px var(--pad-x) 40px;
  display: flex; flex-direction: column;
}
.mmenu-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.mmenu-links { display: flex; flex-direction: column; }
.mlink {
  font-size: 32px; font-weight: 600; letter-spacing: -.02em; color: var(--c-ink); text-decoration: none;
  padding: 14px 0; border-bottom: 1.5px solid rgba(47, 43, 34, .25);
}
.mlink.router-link-exact-active { color: var(--c-ink-2); }
.mmenu-cta { margin-top: 28px; }
.mmenu-mail { margin-top: 16px; font-size: 14px; }

.menu-enter-active, .menu-leave-active { transition: opacity .2s ease, transform .2s ease; }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-8px); }

@media (min-width: 900px) {
  .nav-inner { padding-top: 18px; padding-bottom: 18px; }
  .brand img { width: 46px; height: 50px; }
  .burger { display: none; }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a { color: var(--c-ink); text-decoration: none; font-size: 15px; padding: 6px 0; border-bottom: 1.5px solid transparent; }
  .nav-links a:hover { color: var(--c-accent); }
  .nav-links a.router-link-active { border-bottom-color: var(--c-ink); font-weight: 500; }
  .nav-cta { display: inline-flex; min-height: 44px; }
}
</style>
