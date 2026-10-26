// Captures screenshots and layout positions for visual review, using headless Chrome over the
// DevTools protocol (no extra dependencies). Usage: node scripts/capture.mjs <tag>
// Output: scripts/screenshots/<tag>/ (git-ignored)
import { spawn } from 'node:child_process'
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const TAG = process.argv[2] || 'run'
const OUT = join(process.cwd(), 'scripts', 'screenshots', TAG)
mkdirSync(OUT, { recursive: true })
const BASE = process.env.BASE_URL || 'http://localhost:5173'
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PORT = 9500 + Math.floor(Math.random() * 300)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'lookbook', path: '/lookbook' },
  { name: 'contact', path: '/contact' },
  { name: 'product', path: '/product/outerwear' },
]
const WIDTHS = [390, 768, 1440]

const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'cap-'))}`, 'about:blank'], { stdio: 'ignore' })
let target
for (let i = 0; i < 60 && !target; i++) {
  await sleep(500)
  try { target = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === 'page') } catch {}
}
if (!target) { chrome.kill(); throw new Error('Chrome did not start') }
const ws = new WebSocket(target.webSocketDebuggerUrl)
let nextId = 0
const pending = new Map()
ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id) } }
await new Promise((r) => (ws.onopen = r))
const send = (method, params = {}) => new Promise((res) => { const id = ++nextId; pending.set(id, res); ws.send(JSON.stringify({ id, method, params })) })
const evaluate = async (expr) => (await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })).result?.result?.value
const setViewport = (width) => send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 800 })
const shot = async (file, clip) => {
  const res = await send('Page.captureScreenshot', { format: 'png', ...(clip ? { captureBeyondViewport: true, clip: { ...clip, scale: 1 } } : {}) })
  writeFileSync(join(OUT, file), Buffer.from(res.result.data, 'base64'))
}
await send('Page.enable'); await send('Runtime.enable')

// Position of every Framer frame and site-chrome element, for numeric before/after comparison
const LAYOUT = `(() => JSON.stringify([...document.querySelectorAll('[data-framer-name], .site-nav, .site-footer, .site-main, .site-nav__bar, .site-footer__nav, .site-bag__panel')].slice(0, 800).map((e, i) => {
  const r = e.getBoundingClientRect()
  return { k: (e.getAttribute('data-framer-name') || e.className || e.tagName).toString().slice(0, 40) + '#' + i, x: Math.round(r.left), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) }
})))()`

for (const page of PAGES) {
  await setViewport(WIDTHS[0])
  await send('Page.navigate', { url: BASE + page.path })
  await sleep(3500)
  for (const w of WIDTHS) {
    await setViewport(w)
    await sleep(1500)
    const h = Math.ceil((await send('Page.getLayoutMetrics')).result.cssContentSize.height)
    await shot(`${page.name}-${w}.png`, { x: 0, y: 0, width: w, height: h })
    writeFileSync(join(OUT, `layout-${page.name}-${w}.json`), await evaluate(LAYOUT))
  }
}

// Chrome states: navbar, mobile menu, footer and bag drawer
await setViewport(1440)
await send('Page.navigate', { url: BASE + '/' })
await sleep(3500)
await shot('nav-desktop-1440.png')
await setViewport(390)
await sleep(1200)
await evaluate(`document.querySelector('.site-nav__menu').click()`)
await sleep(600)
await shot('nav-menu-open-390.png')
await evaluate(`document.querySelector('.site-menu__close').click()`)
await sleep(300)
await setViewport(1440)
await send('Page.navigate', { url: BASE + '/shop' })
await sleep(3500)
await evaluate(`document.querySelector('.site-nav__bag').click()`)
await sleep(800)
await shot('bag-open-1440.png')

ws.close(); chrome.kill()
console.log(`saved to ${OUT}`)
