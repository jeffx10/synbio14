/*
* File: src/types/sponsor.ts
* Description: Type definitions for conference sponsors.
* Contains interfaces and types for sponsor information and display.
*/

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze'

export interface Sponsor {
  id: string
  name: string
  tier: SponsorTier
  logoUrl: string
  website: string
  description?: string
  contributionAmount?: number
}

export interface SponsorDisplay {
  tier: SponsorTier
  size: {
    width: number
    height: number
  }
  priority: number
}

// TODO: Add validation schemas if needed
// TODO: Add utility types for filtering and sorting
// TODO: Add type guards for runtime validation