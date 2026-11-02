import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.path === from.path) return false
    if (to.hash) return { el: to.hash, top: 96 }
    return { top: 0 }
  },
  routes: [
    { path: '/',              name: 'home',        component: HomeView },
    { path: '/leistungen',   name: 'leistungen',  component: () => import('@/views/LeistungenView.vue') },
    { path: '/portfolio',    name: 'portfolio',   component: () => import('@/views/PortfolioView.vue') },
    { path: '/ueber-mich',  name: 'ueber-mich',  component: () => import('@/views/UeberMichView.vue') },
    { path: '/referenzen',  name: 'referenzen',  component: () => import('@/views/ReferenzenView.vue') },
    { path: '/kontakt',     name: 'kontakt',     component: () => import('@/views/KontaktView.vue') },
    { path: '/impressum',   name: 'impressum',   component: () => import('@/views/ImpressumView.vue') },
    { path: '/datenschutz', name: 'datenschutz', component: () => import('@/views/DatenschutzView.vue') },
  ]
})

export default router
