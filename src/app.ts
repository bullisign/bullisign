import { createApp as createClientApp, createSSRApp } from 'vue'
import { createMemoryHistory, createWebHistory } from 'vue-router'
import App from './App.vue'
import { createAppRouter } from './router'

/**
 * Gemeinsame App-Fabrik für Browser und Prerendering.
 * Im Build wird jede Seite vorab als HTML gerendert (entry-server.ts),
 * im Browser übernimmt Vue dieses HTML (Hydration).
 */
export function createApp() {
  const app = import.meta.env.DEV && !import.meta.env.SSR ? createClientApp(App) : createSSRApp(App)
  const router = createAppRouter(import.meta.env.SSR ? createMemoryHistory() : createWebHistory())
  app.use(router)
  return { app, router }
}
