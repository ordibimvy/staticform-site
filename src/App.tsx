import { useEffect, useRef } from 'react'
import AboutExperience from './components/about-experience'
import ArchiveExperience from './components/archive-experience'
import ContactExperience from './components/contact-experience'
import HomeExperience from './components/home-experience'
import LookbookExperience from './components/lookbook-experience'
import NotFoundExperience from './components/notfound-experience'
import PrivacyExperience from './components/privacy-experience'
import ProductExperience from './components/product-experience'
import ReturnsExperience from './components/returns-experience'
import ShippingExperience from './components/shipping-experience'
import StaticFormShopMosaic from './components/staticform-shopmosaic'
import SiteLayout from './components/site/SiteLayout'
import FramerEffects, { ABOUT_REVEALS, LOOKBOOK_REVEALS, PRIVACY_REVEALS, PRODUCT_REVEALS, RETURNS_REVEALS, SHIPPING_REVEALS } from './utils/FramerEffects.tsx'
import LayoutIsland from './utils/LayoutIsland.tsx'
import ResponsiveWrapper from './utils/ResponsiveWrapper.tsx'
import { linkNavItem } from './utils/linkNavItem.ts'

// Defined outside the component so the wrapper's effect dependency stays stable
const RESPONSIVE_VARIANTS = {
  base: 'Phone',
  md: 'Tablet',
  lg: 'Desktop',
  xl: 'Desktop XL',
}

// Framer's "View the collection" buttons have no href, so point them at the shop.
// The Framer navbar is hidden by the site navbar, so only CTAs are patched here.
function useShopCtas(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    return linkNavItem(ref.current, 'VIEW THE COLLECTION', '/shop')
  }, [ref])
}

function HomePage() {
  const ref = useRef<HTMLDivElement>(null)
  useShopCtas(ref)
  return (
    <div ref={ref}>
      <LayoutIsland>
        <ResponsiveWrapper Component={HomeExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
    </div>
  )
}

function LookbookPage() {
  const ref = useRef<HTMLDivElement>(null)
  useShopCtas(ref)
  return (
    <div ref={ref}>
      <LayoutIsland>
        <ResponsiveWrapper Component={LookbookExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={LOOKBOOK_REVEALS} />
    </div>
  )
}

function ArchivePage() {
  return (
    <LayoutIsland>
      <ResponsiveWrapper Component={ArchiveExperience} variants={RESPONSIVE_VARIANTS} />
    </LayoutIsland>
  )
}

function AboutPage() {
  return (
    <>
      <LayoutIsland>
        <ResponsiveWrapper Component={AboutExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={ABOUT_REVEALS} />
    </>
  )
}

function ContactPage() {
  return (
    <LayoutIsland>
      <ResponsiveWrapper Component={ContactExperience} variants={RESPONSIVE_VARIANTS} />
    </LayoutIsland>
  )
}

function ShippingPage() {
  return (
    <>
      <LayoutIsland>
        <ResponsiveWrapper Component={ShippingExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={SHIPPING_REVEALS} />
    </>
  )
}

function ReturnsPage() {
  return (
    <>
      <LayoutIsland>
        <ResponsiveWrapper Component={ReturnsExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={RETURNS_REVEALS} />
    </>
  )
}

function PrivacyPage() {
  return (
    <>
      <LayoutIsland>
        <ResponsiveWrapper Component={PrivacyExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={PRIVACY_REVEALS} />
    </>
  )
}

function ProductPage() {
  return (
    <>
      <LayoutIsland>
        <ResponsiveWrapper Component={ProductExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={PRODUCT_REVEALS} />
    </>
  )
}

function NotFoundPage() {
  const ref = useRef<HTMLDivElement>(null)

  // The 404's links resolve as relative "./", so point them at absolute routes
  useEffect(() => {
    if (!ref.current) return
    const stops = [
      linkNavItem(ref.current, 'BACK TO THE RUNWAY', '/'),
      linkNavItem(ref.current, 'SHOP', '/shop'),
    ]
    return () => stops.forEach((stop) => stop())
  }, [])

  return (
    <div ref={ref}>
      <LayoutIsland>
        <ResponsiveWrapper Component={NotFoundExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
    </div>
  )
}

function App() {
  // Simple path switch: home at /, known routes below, anything else is a 404
  const path = window.location.pathname

  let page
  let pageClass = ''
  if (path.startsWith('/shop')) {
    page = <StaticFormShopMosaic />
  } else if (path.startsWith('/lookbook')) {
    page = <LookbookPage />
  } else if (path.startsWith('/archive')) {
    page = <ArchivePage />
  } else if (path.startsWith('/about')) {
    page = <AboutPage />
  } else if (path.startsWith('/contact')) {
    page = <ContactPage />
  } else if (path.startsWith('/shipping')) {
    page = <ShippingPage />
  } else if (path.startsWith('/returns')) {
    page = <ReturnsPage />
  } else if (path.startsWith('/privacy')) {
    page = <PrivacyPage />
  } else if (path.startsWith('/product/')) {
    page = <ProductPage />
  } else if (path === '/' || path === '/index.html') {
    page = <HomePage />
    pageClass = 'site-home'
  } else {
    page = <NotFoundPage />
  }

  return (
    <SiteLayout className={pageClass} backToShop={path.startsWith('/product/')}>
      {page}
    </SiteLayout>
  )
}

export default App
