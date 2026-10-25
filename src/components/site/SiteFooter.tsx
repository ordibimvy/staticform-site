// Shared footer for every page. Links come from src/config/navigation.ts.
import { brand, ctaLink, primaryLinks, secondaryLinks } from '../../config/navigation'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <span className="site-footer__wordmark">{brand.name}</span>
        <span className="site-footer__tagline">{brand.tagline}</span>
        <p className="site-footer__line">{brand.footerLine}</p>
        <p className="site-footer__address">{brand.address}</p>
      </div>
      <nav className="site-footer__nav" aria-label="Footer">
        {[...primaryLinks, ctaLink].map((l) => (
          <a key={l.href + l.label} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <nav className="site-footer__nav" aria-label="Information">
        {secondaryLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </footer>
  )
}
