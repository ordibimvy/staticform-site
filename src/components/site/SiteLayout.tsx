import './site.css'
// Wraps every page: shared navbar on top, the page in the middle, shared footer at the bottom.
import type { ReactNode } from 'react'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'

interface SiteLayoutProps {
  children: ReactNode
  className?: string
  backToShop?: boolean
}

export default function SiteLayout({ children, className, backToShop }: SiteLayoutProps) {
  return (
    <div className={`site${className ? ` ${className}` : ''}`}>
      <SiteNav />
      <main className="site-main">
        {backToShop && <a className="site-back" href="/shop">← BACK TO SHOP</a>}
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
