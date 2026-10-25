// Shared bag storage.
// The Framer home and product bundles write to the same key and event name,
// so items added there show up here as well.
import { useEffect, useState } from 'react'

// The key keeps its old "static-form" name on purpose: renaming it would empty saved bags.
export const BAG_KEY = 'static-form:bag:v1'
export const BAG_EVENT = 'static-form:bag'

export interface BagLine {
  slug: string
  name: string
  color: string
  price: number | string
  image?: string
  size: string
  qty: number
  vid?: string
}

export function readBag(): BagLine[] {
  try {
    const raw = localStorage.getItem(BAG_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeBag(lines: BagLine[]) {
  try {
    localStorage.setItem(BAG_KEY, JSON.stringify(lines))
  } catch {
    // Storage can be blocked (private mode); the bag simply won't persist.
  }
  window.dispatchEvent(new CustomEvent(BAG_EVENT))
}

export function bagCount(lines: BagLine[]): number {
  return lines.reduce((total, line) => total + line.qty, 0)
}

export function setLineQty(slug: string, size: string, qty: number, max = 9) {
  const next = readBag().flatMap((line) => {
    if (line.slug !== slug || line.size !== size) return [line]
    return qty <= 0 ? [] : [{ ...line, qty: Math.min(max, qty) }]
  })
  writeBag(next)
}

export function removeLine(slug: string, size: string) {
  writeBag(readBag().filter((line) => !(line.slug === slug && line.size === size)))
}

// Keeps a component's copy of the bag in sync with storage and with other tabs.
export function useBag(): BagLine[] {
  const [lines, setLines] = useState<BagLine[]>([])
  useEffect(() => {
    const refresh = () => setLines(readBag())
    refresh()
    window.addEventListener(BAG_EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(BAG_EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])
  return lines
}
