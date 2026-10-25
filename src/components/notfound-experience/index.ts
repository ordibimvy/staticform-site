import type { ComponentType } from 'react'
import * as bundle from './notfound.js'
import type { NotFoundExperienceProps } from './notfound'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const NotFoundExperience = (bundle as unknown as { default: ComponentType<NotFoundExperienceProps> }).default

export default NotFoundExperience
export type { NotFoundExperienceProps }
