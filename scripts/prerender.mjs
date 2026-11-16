/**
 * Prerendering: erzeugt nach dem Build für jede Seite eine fertige HTML-Datei,
 * damit Suchmaschinen, KI-Crawler und Link-Vorschauen (LinkedIn, WhatsApp)
 * den Inhalt ohne JavaScript lesen können. Im Browser übernimmt danach Vue.
 *
 * Ablauf (siehe "build" in package.json):
 *   1. vite build --ssrManifest            → Browser-Version in dist/
 *   2. vite build --ssr src/entry-server.ts → Render-Version in dist-ssr/
 *   3. node scripts/prerender.mjs          → dist/<seite>.html für jede Seite
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const manifestFile = [path.join(dist, '.vite', 'ssr-manifest.json'), path.join(dist, 'ssr-manifest.json')].find((f) => fs.existsSync(f))
const manifest = manifestFile ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : {}

const entryFile = ['entry-server.mjs', 'entry-server.js'].map((f) => path.join(ssrDir, f)).find((f) => fs.existsSync(f))
if (!entryFile) throw new Error('Render-Version nicht gefunden (dist-ssr/entry-server.*)')
const { render, prerenderPaths, SITE_URL } = await import(pathToFileURL(entryFile).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function fill(page, url) {
  const canonical = SITE_URL + (url === '/' ? '/' : url)
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(page.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(page.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
    .replace('</head>', `${page.preloadLinks}</head>`)
    .replace('<div id="app"></div>', `<div id="app">${page.html}</div>`)
}

for (const url of prerenderPaths) {
  const page = await render(url, manifest)
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), fill(page, url))
  console.log(`  prerendered ${url} → dist/${file}`)
}

// 404-Seite (Netlify liefert dist/404.html automatisch mit Status 404 aus)
const notFound = await render('/nicht-gefunden', manifest)
const notFoundHtml = fill(notFound, '/404').replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex">')
fs.writeFileSync(path.join(dist, '404.html'), notFoundHtml)
console.log('  prerendered 404 → dist/404.html')

fs.rmSync(ssrDir, { recursive: true, force: true })
