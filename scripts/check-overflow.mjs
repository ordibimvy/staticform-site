// Measures sideways scroll on every route at many widths, using headless Chrome
// over the DevTools protocol (no extra dependencies). Start the dev server first: npm run dev
import { spawn } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const BASE = process.env.BASE_URL || 'http://localhost:5173'
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PORT = 9400 + Math.floor(Math.random() * 300)
const ROUTES = process.env.ROUTES ? process.env.ROUTES.split(',') : ['/', '/shop', '/lookbook', '/archive', '/about', '/contact', '/shipping', '/returns', '/privacy', '/product/outerwear', '/does-not-exist']
const WIDTHS = [390, 768, 810, 1024, 1200, 1280, 1366, 1440, 1536, 1920]
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const chrome = spawn(CHROME, [`--headless=new`, `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'overflow-'))}`, 'about:blank'], { stdio: 'ignore' })
// Wait until Chrome exposes its DevTools port (can take a few seconds on first launch)
let target
for (let i = 0; i < 60 && !target; i++) {
  await sleep(500)
  try { target = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === 'page') } catch {}
}
if (!target) { chrome.kill(); throw new Error('Chrome did not start') }
const ws = new WebSocket(target.webSocketDebuggerUrl)
let nextId = 0
const pending = new Map()
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data)
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id) }
}
await new Promise((r) => (ws.onopen = r))
const send = (method, params = {}) => new Promise((res) => { const id = ++nextId; pending.set(id, res); ws.send(JSON.stringify({ id, method, params })) })
const evaluate = async (expr) => (await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })).result?.result?.value
await send('Page.enable'); await send('Runtime.enable')

// Reports the three rightmost elements that extend past the viewport (ignoring the closed bag drawer)
const MEASURE = `(() => {
  const W = window.innerWidth
  const root = document.querySelector('[data-framer-name]')
  const offenders = [...document.querySelectorAll('body *')]
    .filter((e) => !e.closest('.site-bag') && e.getBoundingClientRect().right > W + 1)
    .sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right)
    .slice(0, 3)
    .map((e) => {
      const cs = getComputedStyle(e)
      return { tag: e.tagName, cls: String(e.className).slice(0, 60), frame: e.getAttribute('data-framer-name'), right: Math.round(e.getBoundingClientRect().right), width: cs.width, minWidth: cs.minWidth }
    })
  return {
    overflow: document.documentElement.scrollWidth - W,
    // The page's root Framer frame carries the variant ResponsiveWrapper selected
    variant: (document.querySelector('main [data-framer-name]') || {}).getAttribute?.('data-framer-name') || '-',
    offenders,
  }
})()`

const rows = []
for (const route of ROUTES) {
  await send('Emulation.setDeviceMetricsOverride', { width: WIDTHS[0], height: 900, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: BASE + route })
  await sleep(3500)
  for (const w of WIDTHS) {
    await send('Emulation.setDeviceMetricsOverride', { width: w, height: 900, deviceScaleFactor: 1, mobile: false })
    await sleep(1500)
    const m = await evaluate(MEASURE)
    rows.push({ route, width: w, ...m })
  }
}
ws.close(); chrome.kill()

const pad = (s, n) => String(s).padEnd(n)
console.log(`${pad('route', 22)}${pad('width', 7)}${pad('overflow', 10)}${pad('variant', 14)}widest offenders (right edge, computed width)`)
for (const r of rows) {
  const o = r.offenders.map((x) => `${x.tag}.${x.cls.split(' ')[0] || '-'} [${x.frame || '-'}] right=${x.right} w=${x.width}`).join(' | ')
  console.log(`${pad(r.route, 22)}${pad(r.width, 7)}${pad(r.overflow + 'px', 10)}${pad(r.variant, 14)}${o}`)
}
const bad = rows.filter((r) => r.overflow > 0).length
console.log(`\n${bad} of ${rows.length} route/width combinations overflow.`)
