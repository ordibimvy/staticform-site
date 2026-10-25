import type { ComponentType } from 'react'
import * as bundle from './returns.js'
import type { ReturnsExperienceProps } from './returns'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const ReturnsExperience = (bundle as unknown as { default: ComponentType<ReturnsExperienceProps> }).default

export default ReturnsExperience
export type { ReturnsExperienceProps }
