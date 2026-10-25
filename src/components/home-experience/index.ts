import type { ComponentType } from 'react'
import * as bundle from './home-experience.js'
import type { HomeExperienceProps } from './home-experience'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const HomeExperience = (bundle as unknown as { default: ComponentType<HomeExperienceProps> }).default

export default HomeExperience
export type { HomeExperienceProps }
