/*
* File: src/types/speaker.ts
* Description: Type definitions for conference speakers.
* Contains interfaces and types related to speaker information and presentations.
*/

// Base speaker information
export interface SpeakerBase {
    id: string
    name: string
    title: string
    organization: string
    imageUrl: string
    bio: string
  }
  
  // Extended speaker information including presentation details
  export interface Speaker extends SpeakerBase {
    talkTitle?: string
    talkDescription?: string
    talkTime?: string
    talkDay?: string
    socialMedia?: {
      twitter?: string
      linkedin?: string
      website?: string
    }
  }
  
  // Speaker card display options
  export interface SpeakerCardProps {
    speaker: Speaker
    variant?: 'compact' | 'full'
    showSocial?: boolean
  }
  