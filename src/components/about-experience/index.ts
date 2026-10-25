import type { ComponentType } from 'react'
import * as bundle from './about.js'
import type { AboutExperienceProps } from './about'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const AboutExperience = (bundle as unknown as { default: ComponentType<AboutExperienceProps> }).default

export default AboutExperience
export type { AboutExperienceProps }
