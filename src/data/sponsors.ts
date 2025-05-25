/*
* File: src/data/sponsors.ts
* Description: Sponsor information and tier data.
* Contains all conference sponsor details and classifications.
*/

import { Sponsor } from '@/types/sponsor'

export const sponsors: Sponsor[] = [
  // Silver sponsors
  {
    id: 'neb',
    name: 'NEB',
    tier: 'silver',
    logoUrl: '/images/NEB-Logo.jpg',
    website: 'https://www.neb.com'
  },
  {
    id: 'evident',
    name: 'Evident',
    tier: 'silver',
    logoUrl: '/images/evident_logo_color_tm.jpg',
    website: 'https://www.evidentscientific.com'
  },
  {
    id: 'cagef',
    name: 'CAGEF',
    tier: 'silver',
    logoUrl: '/images/CAGEF_new_small.png',
    website: 'https://cagef.utoronto.ca/'
  },
  {
    id: 'ontariogenomics',
    name: 'Ontario Genomics',
    tier: 'silver',
    logoUrl: '/images/OG-25_Logo-Blue.png',
    website: 'https://www.ontariogenomics.ca/'
  },
  // Bronze sponsors
  {
    id: 'kapoose-creek',
    name: 'Kapoose Creek',
    tier: 'bronze',
    logoUrl: '/images/KapooseCreek.jpg',
    website: 'https://kapoosecreek.com'
  },
  {
    id: 'mcb-guelph',
    name: 'Department of Molecular and Cellular Biology',
    tier: 'bronze',
    logoUrl: '/images/University of Guelph DMCB.jpg',
    website: 'https://www.uoguelph.ca/mcb'
  },
  {
    id: 'sp-robotics',
    name: 'SP Robotics',
    tier: 'bronze',
    logoUrl: '/images/SPRobotics.jpg',
    website: 'https://sprobotics.com/tabs.aspx'
  },
  {
    id: 'flow-genomics',
    name: 'Flow Genomics',
    tier: 'bronze',
    logoUrl: '/images/FlowGenomics.png',
    website: 'https://flowgenomics.com'
  },
  {
    id: 'concordia',
    name: 'Concordia University, Center for Applied Synthetic Biology',
    tier: 'bronze',
    logoUrl: '/images/CASB logo.png',
    website: 'https://www.concordia.ca/research/casb.html'
  }
]