// Shared top bar for every page. Desktop shows the links; below 810px it shows MENU instead.
import { useEffect, useRef, useState } from 'react'
import { brand, ctaLink, homeLink, primaryLinks, secondaryLinks, type NavLink } from '../../config/navigation'
import SiteBag from './SiteBag'
import { bagCount, useBag } from './bag'

const COMPACT_QUERY = '(max-width: 809px)'

function useIsCompact(): boolean {
  const [compact, setCompact] = useState(() => window.matchMedia(COMPACT_QUERY).matches)
  useEffect(() => {
    const mq = window.matchMedia(COMPACT_QUERY)
    const onChange = () => setCompact(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return compact
}

// Marks the link for the page the visitor is on.
function isActive(href: string, path: string): boolean {
  return href === '/' ? path === '/' : path === href || path.startsWith(href + '/')
}

export default function SiteNav() {
  const compact = useIsCompact()
  const lines = useBag()
  const count = bagCount(lines)
  const path = window.location.pathname

  const [menuOpen, setMenuOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  // Open the bag when a piece is added. Only reacts to increases in quantity.
  const lastCount = useRef(count)
  useEffect(() => {
    if (count > lastCount.current) setBagOpen(true)
    lastCount.current = count
  }, [count])

  // Escape closes whichever panel is open, and both panels lock page scroll.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMenuOpen(false)
      setBagOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen || bagOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, bagOpen])

  // When the menu closes, return focus to its button for keyboard users.
  useEffect(() => {
    if (!menuOpen && compact) menuButton.current?.focus()
  }, [menuOpen, compact])

  const renderLink = (link: NavLink, onNavigate?: () => void) => (
    <a
      key={link.href}
      href={link.href}
      className={`site-nav__link${isActive(link.href, path) ? ' is-active' : ''}`}
      aria-current={isActive(link.href, path) ? 'page' : undefined}
      onClick={onNavigate}
    >
      {link.label}
    </a>
  )

  return (
    <>
      <header className="site-nav">
        <div className="site-nav__bar">
          <a href={homeLink.href} className="site-nav__brand" aria-label={`${brand.name} home`}>
            <span className="site-nav__wordmark">{brand.name}</span>
            <span className="site-nav__tagline">{brand.tagline}</span>
          </a>

          {!compact && <nav className="site-nav__links" aria-label="Main">{primaryLinks.map((l) => renderLink(l))}</nav>}

          <div className="site-nav__actions">
            {!compact && (
              <a href={ctaLink.href} className="site-nav__cta">{ctaLink.label}</a>
            )}
            <button type="button" className="site-nav__bag" onClick={() => setBagOpen(true)} aria-label={`Open bag, ${count} pieces`}>
              BAG ({count})
            </button>
            {compact && (
              <button
                ref={menuButton}
                type="button"
                className="site-nav__menu"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                MENU
              </button>
            )}
          </div>
        </div>
      </header>

      {compact && menuOpen && (
        <div id="site-menu" className="site-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="site-menu__head">
            <span className="site-nav__wordmark">{brand.name}</span>
            <button type="button" className="site-menu__close" onClick={() => setMenuOpen(false)}>CLOSE</button>
          </div>
          <nav className="site-menu__list" aria-label="Menu">
            {[homeLink, ...primaryLinks].map((l) => renderLink(l, () => setMenuOpen(false)))}
            <span className="site-menu__divider" />
            {secondaryLinks.map((l) => renderLink(l, () => setMenuOpen(false)))}
            <a href={ctaLink.href} className="site-menu__cta" onClick={() => setMenuOpen(false)}>{ctaLink.label}</a>
          </nav>
        </div>
      )}

      <SiteBag open={bagOpen} lines={lines} onClose={() => setBagOpen(false)} />
    </>
  )
}
