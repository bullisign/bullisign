<template>
  <section class="section page-top">
    <div class="blob blob-4" aria-hidden="true"></div>
    <div class="container container-narrow">
      <div class="section-header center">
        <span class="eyebrow">Projekt anfragen</span>
        <h1 class="section-title">Lass uns zusammenarbeiten.</h1>
        <p class="section-sub">
          Du hast ein Projekt im Kopf? Ich freue mich auf deine Nachricht
          und melde mich innerhalb von 24–48 Stunden.
        </p>
      </div>

      <form class="kontakt-form reveal" @submit.prevent="handleSubmit" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name *</label>
            <input v-model="form.name" type="text" id="name" name="name" placeholder="Dein Name" required />
          </div>
          <div class="form-group">
            <label for="email">E-Mail *</label>
            <input v-model="form.email" type="email" id="email" name="email" placeholder="deine@email.de" required />
          </div>
        </div>
        <div class="form-group">
          <label for="betreff">Worum geht es?</label>
          <input v-model="form.betreff" type="text" id="betreff" name="betreff" placeholder="z.B. Corporate Design, Website, Flyer …" />
        </div>
        <div class="form-group">
          <label for="nachricht">Nachricht *</label>
          <textarea v-model="form.nachricht" id="nachricht" name="nachricht" rows="5" placeholder="Erzähl mir von deinem Projekt …" required></textarea>
        </div>

        <div v-if="msg.text" class="form-msg" :class="msg.type">{{ msg.text }}</div>

        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Wird gesendet …' : 'Nachricht senden →' }}
        </button>
        <p class="form-hint">* Pflichtfelder · Deine Daten werden nicht weitergegeben.</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
useReveal()

// ✏️ Ersetze DEIN_CODE durch deinen Formspree-Code nach Registrierung auf https://formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/DEIN_CODE'

const form = reactive({ name: '', email: '', betreff: '', nachricht: '' })
const loading = ref(false)
const msg = reactive({ text: '', type: '' })

async function handleSubmit() {
  if (!form.name || !form.email || !form.nachricht) {
    msg.text = 'Bitte fülle alle Pflichtfelder aus.'
    msg.type = 'error'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    msg.text = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    msg.type = 'error'
    return
  }

  loading.value = true
  msg.text = ''

  const data = new FormData()
  Object.entries(form).forEach(([k, v]) => data.append(k, v))

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data
    })
    if (res.ok) {
      msg.text = 'Danke! Ich melde mich bald bei dir. 🌿'
      msg.type = 'success'
      Object.assign(form, { name: '', email: '', betreff: '', nachricht: '' })
    } else {
      msg.text = 'Etwas hat nicht geklappt – schreib mir direkt an bullisign@gmail.com'
      msg.type = 'error'
    }
  } catch {
    msg.text = 'Keine Verbindung – schreib mir direkt an bullisign@gmail.com'
    msg.type = 'error'
  } finally {
    loading.value = false
    setTimeout(() => { msg.text = '' }, 6000)
  }
}
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); min-height: 100svh; }
.kontakt-form { display: flex; flex-direction: column; gap: 1rem; position: relative; z-index: 1; margin-top: 3rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group label { font-size: var(--size-xs); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-mid); }
.form-group input,
.form-group textarea {
  font-family: var(--f-body); font-size: var(--size-md); font-weight: 300;
  color: var(--c-text); background: var(--c-linen);
  border: 1.5px solid var(--c-border); border-radius: 6px;
  padding: 0.8rem 1rem; outline: none; resize: vertical;
  transition: border-color var(--trans);
}
.form-group input:focus, .form-group textarea:focus { border-color: var(--c-thyme); }
.form-group input::placeholder, .form-group textarea::placeholder { color: var(--c-border); }
.form-msg {
  padding: 0.75rem 1rem; border-radius: 6px; font-size: var(--size-sm);
}
.form-msg.success { background: #EEF3E2; color: #404222; border: 1px solid #A8AA58; }
.form-msg.error   { background: #FDE8E8; color: #8B2020; border: 1px solid #F5AAAA; }
.form-hint { font-size: var(--size-xs); color: var(--c-mid); }
button:disabled { opacity: 0.6; cursor: not-allowed; }
@media (max-width: 680px) { .form-row { grid-template-columns: 1fr; } }
</style>
