import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'

export { prerenderPaths, SITE_URL } from './router'

/** Rendert eine Seite zu HTML – wird nur beim Build von scripts/prerender.mjs aufgerufen. */
export async function render(url: string, manifest: Record<string, string[]>) {
  const { app, router } = createApp()
  await router.push(url)
  await router.isReady()

  const ctx: { modules?: Set<string> } = {}
  const html = await renderToString(app, ctx)
  const meta = router.currentRoute.value.meta

  return {
    html,
    title: meta.title,
    description: meta.description,
    preloadLinks: renderPreloadLinks(ctx.modules, manifest),
  }
}

function renderPreloadLinks(modules: Set<string> | undefined, manifest: Record<string, string[]>) {
  const seen = new Set<string>()
  let links = ''
  modules?.forEach((id) => {
    manifest[id]?.forEach((file) => {
      if (seen.has(file)) return
      seen.add(file)
      if (file.endsWith('.css')) links += `<link rel="stylesheet" href="${file}">`
      else if (file.endsWith('.js')) links += `<link rel="modulepreload" crossorigin href="${file}">`
    })
  })
  return links
}
