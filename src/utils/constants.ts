/*
* File: src/utils/constants.ts
* Description: Global constants and configuration values.
* Contains shared data and configuration used across components.
*/

// Conference information
export const CONFERENCE_INFO = {
  name: 'SynBio7.0 and Bioengineering',
  dates: {
    start: 'June 1',
    end: 'June 3'
  },
  venue: {
    name: 'University of Toronto',
    city: 'Toronto',
    country: 'Canada'
  },
  description: '7th annual synthetic biology conference'
}

// Nav items
export const NAV_ITEMS = [
  { label: 'SynBio7.0', href: '/#home' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Speakers', href: '/#people' },
  { label: 'About', href: '/#about' },
  { label: 'Accomodations', href: '/accomodations' },
  { label: 'Register', href: 'https://www.eventbrite.ca/e/synbio-70-tickets-1344597700919?aff=oddtdtcreator' }
]

// Registration and abstract submission links
export const REGISTRATION = {
  attendee: 'https://www.eventbrite.ca/e/synbio-70-tickets-1344597700919?aff=oddtdtcreator',
  presenter: 'https://www.eventbrite.ca/e/synbio-70-tickets-1344597700919?aff=oddtdtcreator',
  abstractSubmission: 'https://forms.gle/SynBioAbstractSubmission'
}

// Key dates
export const KEY_DATES = {
  registrationOpens: 'March 1st, 2025',
  abstractDeadline: 'May 7th, 2025',
  registrationDeadline: 'May 15th, 2025',
  conferenceStart: 'June 1st, 2025',
  conferenceEnd: 'June 3rd, 2025'
}

// Registration fees
export const REGISTRATION_FEES = {
  trainee: 200, // Undergrad, PhD, Postdocs, Research Associates
  faculty: 300
}

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/synbio',
  linkedin: 'https://linkedin.com/company/synbio',
  instagram: 'https://instagram.com/synbio'
}