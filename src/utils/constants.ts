/*
* File: src/utils/constants.ts
* Description: Global constants and configuration values.
* Contains shared data and configuration used across components.
*/

// Conference information
export const CONFERENCE_INFO = {
    name: 'SynBio 7.0',
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
    { label: 'SynBio 7.0', href: '/#home' },
    { label: 'Schedule', href: '/#schedule' },
    { label: 'Speakers', href: '/#people' },
    { label: 'About', href: '/#about' },
    { label: 'Sponsors', href: '/#sponsors' },
    { label: 'Register', href: '/register' }
  ]
  
  // Registration links
  export const REGISTRATION = {
    attendee: 'https://example.com/register',
    presenter: 'https://example.com/present'
  }
  
  // Social media links
  export const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/synbio',
    linkedin: 'https://linkedin.com/company/synbio',
    instagram: 'https://instagram.com/synbio'
  }
  
  // TODO: Add conference schedule timings
  // TODO: Add sponsor tier configurations
  // TODO: Add contact information