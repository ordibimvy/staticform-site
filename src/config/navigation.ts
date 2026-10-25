// One place to edit site links. Used by SiteNav, SiteFooter and the mobile MENU.

export interface NavLink {
  label: string
  href: string
}

export const brand = {
  name: 'ADELE',
  tagline: 'COUTURE • BESPOKE TAILORING',
  footerLine: "Formerly Antoine's Formalwear · Same location, new vision",
  address: '435 Congress Street, Portland, Maine 04101',
}

// Home is reached from the wordmark, so the top bar starts at Shop.
export const homeLink: NavLink = { label: 'HOME', href: '/' }

export const primaryLinks: NavLink[] = [
  { label: 'SHOP', href: '/shop' },
  { label: 'LOOKBOOK', href: '/lookbook' },
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

export const secondaryLinks: NavLink[] = [
  { label: 'PICKUP & DELIVERY', href: '/shipping' },
  { label: 'RETURNS', href: '/returns' },
  { label: 'PRIVACY', href: '/privacy' },
]

// Call-to-action in the top bar. Points to contact until a /book page exists.
export const ctaLink: NavLink = { label: 'BOOK', href: '/contact' }
