// Bag drawer: lists the pieces a client has picked and links to the contact page.
// Pieces are requests, not orders: there is no checkout on this site.
import { bagCount, removeLine, setLineQty, type BagLine } from './bag'
import { PRICE_PLACEHOLDER } from '../../config/prices'

interface SiteBagProps {
  open: boolean
  lines: BagLine[]
  onClose: () => void
}

export default function SiteBag({ open, lines, onClose }: SiteBagProps) {
  return (
    <div className={`site-bag${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <div className="site-bag__scrim" onClick={onClose} />
      <aside className="site-bag__panel" role="dialog" aria-modal="true" aria-label="Bag" inert={!open}>
        <header className="site-bag__head">
          <span>BAG ({bagCount(lines)})</span>
          <button type="button" className="site-bag__close" onClick={onClose}>CLOSE</button>
        </header>

        {lines.length === 0 ? (
          <p className="site-bag__empty">Nothing in the bag yet.</p>
        ) : (
          <ul className="site-bag__list">
            {lines.map((line) => (
              <li key={`${line.slug}-${line.size}`} className="site-bag__line">
                {line.image ? <img src={line.image} alt="" className="site-bag__img" /> : <div className="site-bag__img" />}
                <div className="site-bag__info">
                  <p className="site-bag__name">{line.name}</p>
                  <p className="site-bag__meta">{[line.color, line.size].filter(Boolean).join(' / ')}</p>
                  <p className="site-bag__price">{PRICE_PLACEHOLDER}</p>
                  <div className="site-bag__qty">
                    <button type="button" aria-label="Fewer" onClick={() => setLineQty(line.slug, line.size, line.qty - 1)}>−</button>
                    <span>{line.qty}</span>
                    <button type="button" aria-label="More" onClick={() => setLineQty(line.slug, line.size, line.qty + 1)}>+</button>
                    <button type="button" className="site-bag__remove" onClick={() => removeLine(line.slug, line.size)}>REMOVE</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {lines.length > 0 && <p className="site-bag__subtotal">SUBTOTAL {PRICE_PLACEHOLDER}</p>}
        <a className="site-bag__cta" href="/contact">REQUEST AN APPOINTMENT</a>
      </aside>
    </div>
  )
}
