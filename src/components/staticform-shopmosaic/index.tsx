import type { ComponentType } from 'react'
import * as bundle from './shopmosaic.js'
import type { StaticFormShopMosaicProps } from './shopmosaic'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const ShopMosaicBundle = (bundle as unknown as { default: ComponentType<StaticFormShopMosaicProps> }).default

// Editor defaults from the bundle's addPropertyControls. Standalone rendering doesn't apply
// them, so unset props render as "undefined" (e.g. "UNDEFINED420") and fall back to browser fonts.
const DEFAULTS: StaticFormShopMosaicProps = {
  allLabel: 'ALL',
  noteLabel: 'NOTE / AW26',
  viewLabel: 'VIEW',
  breakA: 'AW26',
  breakB: 'PART TWO / KNIT, SHIRTS, TROUSERS, OBJECTS',
  breakC: 'MADE IN PORTUGAL',
  currency: '€',
  productLinkBase: '/product/',
  compactBelow: 810,
  barHeight: 64,
  barHeightCompact: 58,
  fontSans: 'Geist, system-ui, sans-serif',
  fontSerif: "'Instrument Serif', 'Times New Roman', serif",
  fontMono: "'Geist Mono', ui-monospace, monospace",
  ink: '#11110F',
  bone: '#EDEAE2',
  surface: '#1A1916',
  muted: '#858178',
  accent: '#B93F32',
}

export default function StaticFormShopMosaic(props: StaticFormShopMosaicProps) {
  return <ShopMosaicBundle {...DEFAULTS} {...props} />
}
export type { StaticFormShopMosaicProps }
