<template>
  <section class="section section-warm page-top">
    <div class="container container-two-col">
      <div class="about-image-wrap reveal">
        <div class="about-blob" aria-hidden="true"></div>
        <div class="about-photo">
          <img :src="jasminImg" alt="Jasmin Bullinger" />
        </div>
      </div>

      <div class="about-text reveal">
        <span class="eyebrow">Wer steckt dahinter</span>
        <h1 class="section-title">Hallo, ich bin<br /><em>Jasmin</em></h1>
        <p class="about-lead">
          Ich gestalte vom Problem her und mit echtem Interesse an den Menschen
          und Projekten, mit denen ich arbeite.
        </p>
        <p class="about-body">
          Ich bin gelernte Mediengestalterin Digital und Print, habe mich zur Visuellen Designerin
          weitergebildet und Informationsmanagement und Unternehmenskommunikation mit Schwerpunkt
          User Experience an der Hochschule Neu-Ulm studiert. Seit 2014 gestalte ich Print- und
          Digitalmedien, Websites und digitale Oberflächen, zum Beispiel den Onlineshop der
          Kosmetikmarke ELA oder in meiner Bachelorarbeit die komplette Oberfläche einer Software
          für industrielle Bildverarbeitung.
        </p>
        <p class="about-body">
          Weil ich aus dem Print komme und Websites auch selbst umsetze, denke ich von Anfang an in
          beiden Welten: Konzept, Gestaltung und Technik aus einer Hand. Meine Basis ist Dettingen unter
          Teck in der Region Stuttgart, ich arbeite vor Ort und remote. Ich nehme bewusst eine
          überschaubare Anzahl an Projekten an, um jedem die Aufmerksamkeit zu geben, die es verdient.
        </p>

        <div class="skills-row">
          <span v-for="s in skills" :key="s" class="skill-tag">{{ s }}</span>
        </div>

        <RouterLink to="/kontakt" class="btn-primary">Lass uns reden</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'
import jasminImg from '@/assets/jasmin.png'
useReveal()

const skills = ['Figma', 'Adobe XD', 'Photoshop', 'InDesign', 'Illustrator', 'HTML/CSS', 'JavaScript', 'WordPress', 'Webflow', 'Google Analytics', 'Social Media']
</script>

<style scoped>
.page-top { padding-top: calc(var(--space-xl) + 4rem); min-height: 100svh; }
.about-image-wrap { position: relative; display: flex; justify-content: center; }
.about-blob {
  position: absolute; inset: -24px;
  background: var(--c-misty); opacity: 0.35;
  border-radius: 50% 40% 55% 45% / 45% 55% 45% 55%;
  z-index: 0;
  animation: blob-drift 15s ease-in-out infinite alternate-reverse;
}
.about-photo {
  position: relative; z-index: 1;
  width: 100%; max-width: 380px; aspect-ratio: 3/4;
  background: var(--c-basket);
  border-radius: 52% 48% 44% 56% / 50% 46% 54% 50%;
  overflow: hidden;
}
.about-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.about-lead {
  font-family: var(--f-display); font-size: var(--size-xl);
  font-weight: 400; color: var(--c-basil);
  margin: 0.5rem 0 1rem; line-height: 1.5;
}
.about-body { font-size: var(--size-sm); font-weight: 300; color: var(--c-mid); line-height: 1.75; margin-bottom: 1rem; }
.skills-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0 1.5rem; }
.skill-tag {
  font-size: var(--size-xs); font-weight: 500; letter-spacing: 0.06em;
  color: var(--c-basil);
  background: rgba(168,170,88,0.18); border: 1px solid rgba(168,170,88,0.35);
  border-radius: 999px; padding: 0.3rem 0.8rem;
}
@media (max-width: 900px) { .about-image-wrap { max-width: 300px; margin: 0 auto; } }
</style>
