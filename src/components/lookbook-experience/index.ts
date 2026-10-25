import type { ComponentType } from 'react'
import * as bundle from './lookbook.js'
import type { LookbookExperienceProps } from './lookbook'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const LookbookExperience = (bundle as unknown as { default: ComponentType<LookbookExperienceProps> }).default

export default LookbookExperience
export type { LookbookExperienceProps }
