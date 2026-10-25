import type { ComponentType } from 'react'
import * as bundle from './contact.js'
import type { ContactExperienceProps } from './contact'

// The shipped .d.ts only declares the props interface, so the default export is cast here
const ContactExperience = (bundle as unknown as { default: ComponentType<ContactExperienceProps> }).default

export default ContactExperience
export type { ContactExperienceProps }
