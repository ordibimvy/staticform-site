import type { ComponentType } from 'react'
import * as bundle from './privacy.js'
import type { PrivacyExperienceProps } from './privacy'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const PrivacyExperience = (bundle as unknown as { default: ComponentType<PrivacyExperienceProps> }).default

export default PrivacyExperience
export type { PrivacyExperienceProps }
