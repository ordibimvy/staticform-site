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

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Point the navbar's SHOP, LOOKBOOK, ARCHIVE and ABOUT items at their routes
  useEffect(() => {
    if (!containerRef.current) return
    const stops = [
      linkNavItem(containerRef.current, 'SHOP', '/shop'),
      linkNavItem(containerRef.current, 'LOOKBOOK', '/lookbook'),
      linkNavItem(containerRef.current, 'ARCHIVE', '/archive'),
      linkNavItem(containerRef.current, 'ABOUT', '/about'),
    ]
    return () => stops.forEach((stop) => stop())
  }, [])

  return (
    <div ref={containerRef}>
      <LayoutIsland>
        <ResponsiveWrapper Component={HomeExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
    </div>
  )
}

function LookbookPage() {
  return (
    <>
      <LayoutIsland>
        <ResponsiveWrapper Component={LookbookExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
      <FramerEffects reveals={LOOKBOOK_REVEALS} />
    </>
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
  const containerRef = useRef<HTMLDivElement>(null)

  // The 404's links resolve as relative "./", so point them at absolute routes
  useEffect(() => {
    if (!containerRef.current) return
    const stops = [
      linkNavItem(containerRef.current, 'BACK TO THE RUNWAY', '/'),
      linkNavItem(containerRef.current, 'SHOP', '/shop'),
    ]
    return () => stops.forEach((stop) => stop())
  }, [])

  return (
    <div ref={containerRef}>
      <LayoutIsland>
        <ResponsiveWrapper Component={NotFoundExperience} variants={RESPONSIVE_VARIANTS} />
      </LayoutIsland>
    </div>
  )
}

function App() {
  // Simple path switch: home at /, known routes below, anything else is a 404
  const path = window.location.pathname
  if (path.startsWith('/shop')) {
    return <StaticFormShopMosaic />
  }
  if (path.startsWith('/lookbook')) {
    return <LookbookPage />
  }
  if (path.startsWith('/archive')) {
    return <ArchivePage />
  }
  if (path.startsWith('/about')) {
    return <AboutPage />
  }
  if (path.startsWith('/contact')) {
    return <ContactPage />
  }
  if (path.startsWith('/shipping')) {
    return <ShippingPage />
  }
  if (path.startsWith('/returns')) {
    return <ReturnsPage />
  }
  if (path.startsWith('/privacy')) {
    return <PrivacyPage />
  }
  if (path.startsWith('/product/')) {
    return <ProductPage />
  }
  if (path === '/' || path === '/index.html') {
    return <HomePage />
  }

  return <NotFoundPage />
}

export default App
