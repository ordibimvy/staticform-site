import type { ComponentType } from 'react'
import * as bundle from './shipping.js'
import type { ShippingExperienceProps } from './shipping'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const ShippingExperience = (bundle as unknown as { default: ComponentType<ShippingExperienceProps> }).default

export default ShippingExperience
export type { ShippingExperienceProps }
