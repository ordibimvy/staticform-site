import type { ComponentType } from 'react'
import * as bundle from './product.js'
import type { ProductExperienceProps } from './product'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const ProductExperience = (bundle as unknown as { default: ComponentType<ProductExperienceProps> }).default

export default ProductExperience
export type { ProductExperienceProps }
