import type { ComponentType } from 'react'
import * as bundle from './archive.js'
import type { ArchiveExperienceProps } from './archive'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const ArchiveExperience = (bundle as unknown as { default: ComponentType<ArchiveExperienceProps> }).default

export default ArchiveExperience
export type { ArchiveExperienceProps }
