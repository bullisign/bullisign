<template>
  <section class="kontakt">
    <BlobShape class="shape k-shape" fill="var(--c-duck)" />
    <div class="wrap k-inner">
      <div class="k-text">
        <p class="eyebrow" style="color: var(--c-butter)"><BlobShape class="dot" />Kontakt</p>
        <h1 class="h1" style="margin: 0">Lass uns reden.</h1>
        <p class="lead">Du hast ein Projekt, eine offene Stelle oder einfach eine Frage? Schreib mir ein paar Zeilen. Ich melde mich innerhalb von zwei Werktagen.</p>
        <dl class="anno">
          <dt style="color: var(--c-butter)">E-Mail</dt><dd><a href="mailto:bullisign@gmail.com" class="mail">bullisign@gmail.com</a></dd>
          <dt style="color: var(--c-butter)">LinkedIn</dt><dd><a href="https://www.linkedin.com/in/jasminbullinger" target="_blank" rel="noopener" class="mail">jasminbullinger</a></dd>
          <dt style="color: var(--c-butter)">Ort</dt><dd>Dettingen unter Teck, Region Stuttgart und remote</dd>
          <dt style="color: var(--c-butter)">Verfügbar</dt><dd>Ab sofort, für Projekte und für eine Festanstellung im UX/UI-Design</dd>
        </dl>
      </div>

      <div class="k-card">
        <div v-if="status === 'sent'" class="k-done" role="status">
          <h2 class="k-done-title">Danke für deine Nachricht!</h2>
          <p>Ich melde mich innerhalb von zwei Werktagen bei dir.</p>
        </div>

        <form
          v-else
          name="kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="k-form"
          novalidate
          @submit.prevent="senden"
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <p class="hp" aria-hidden="true"><label>Nicht ausfüllen: <input v-model="form['bot-field']" name="bot-field" tabindex="-1" autocomplete="off" /></label></p>

          <div class="field">
            <label for="k-name">Name</label>
            <input id="k-name" v-model.trim="form.name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="field">
            <label for="k-mail">E-Mail</label>
            <input id="k-mail" v-model.trim="form.email" name="email" type="email" autocomplete="email" required />
          </div>
          <div class="field">
            <label for="k-thema">Worum geht es? <span class="opt">(optional)</span></label>
            <input id="k-thema" v-model.trim="form.betreff" name="betreff" type="text" />
          </div>
          <div class="field">
            <label for="k-msg">Nachricht</label>
            <textarea id="k-msg" v-model.trim="form.nachricht" name="nachricht" rows="5" required></textarea>
          </div>

          <p v-if="fehler" class="k-error" role="alert">{{ fehler }}</p>

          <button type="submit" class="btn btn-dark k-submit" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden' }} <span aria-hidden="true">→</span>
          </button>
          <p class="k-hint">Deine Angaben nutze ich nur, um dir zu antworten. Mehr dazu im <RouterLink to="/datenschutz">Datenschutz</RouterLink>.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import BlobShape from '@/components/BlobShape.vue'

const route = useRoute()
const thema = typeof route.query.thema === 'string' ? route.query.thema : ''
const form = reactive<Record<string, string>>({ name: '', email: '', betreff: thema, nachricht: '', 'bot-field': '' })
const status = ref<'idle' | 'sending' | 'sent'>('idle')
const fehler = ref('')

async function senden() {
  fehler.value = ''
  if (!form.name || !form.email || !form.nachricht) {
    fehler.value = 'Bitte fülle Name, E-Mail und Nachricht aus.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    fehler.value = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    return
  }
  status.value = 'sending'
  try {
    const body = new URLSearchParams({ 'form-name': 'kontakt', ...form }).toString()
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!res.ok) throw new Error(String(res.status))
    status.value = 'sent'
  } catch {
    status.value = 'idle'
    fehler.value = 'Das hat leider nicht geklappt. Schreib mir gern direkt an bullisign@gmail.com.'
  }
}
</script>

<style scoped>
.kontakt { position: relative; overflow: hidden; background: var(--c-ink); color: var(--c-cream); padding: 48px 0 var(--sec-y); }
.k-shape { width: 220px; right: -90px; top: -90px; transform: rotate(200deg); }
.k-inner { position: relative; display: grid; gap: 40px; align-items: start; }
.k-text { display: flex; flex-direction: column; gap: 20px; }
.k-text .lead { color: #E9E2D4; }
.mail { color: var(--c-cream); }
.mail:hover { color: var(--c-butter); }

.k-card { background: var(--c-cream); color: var(--c-ink); border-radius: 22px; padding: 24px; }
.k-form { display: flex; flex-direction: column; gap: 16px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; }
.opt { font-weight: 400; color: var(--c-muted); }
.field input, .field textarea {
  font: inherit; font-size: 16px; padding: 14px 16px; border-radius: 12px;
  border: 1.5px solid var(--c-ink); background: var(--c-paper); color: var(--c-ink); width: 100%;
}
.field textarea { resize: vertical; }
.k-submit { align-self: stretch; }
.k-submit:disabled { opacity: .7; cursor: wait; }
.k-error { font-size: 14px; color: #8A2E1C; font-weight: 500; }
.k-hint { font-size: 13px; color: var(--c-muted); }
.k-done { min-height: 280px; display: flex; flex-direction: column; justify-content: center; gap: 12px; font-size: 16px; line-height: 1.6; }
.k-done-title { font-size: 26px; font-weight: 600; }
.hp { position: absolute; left: -9999px; }

@media (min-width: 900px) {
  .kontakt { padding: 96px 0 112px; }
  .k-shape { width: 300px; top: -110px; }
  .k-inner { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 56px; }
  .k-card { padding: 32px; }
  .k-submit { align-self: flex-start; }
}
</style>
