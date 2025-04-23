/*
* File: src/data/speakers.ts
* Description: Static speaker data for the conference.
* Contains information about all conference speakers.
*/

import { Speaker } from '@/types/speaker'

// TODO: Add complete speaker list
// TODO: Add speaker images
// TODO: Add talk details
export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Nika Shakiba',
    title: 'Assistant Professor',
    organization: 'University of British Columbia',
    imageUrl: '/images/Nika_Shabika.avif',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'Stem cell fitness engineering'
  },
  {
    id: '2',
    name: 'Dr. Kevin Solomon',
    title: 'Associate Professor',
    organization: 'University of Delaware',
    imageUrl: '/images/Kevin_Solomon.avif',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'Microbial systems engineering'
  },
  {
    id: '3',
    name: 'Dr. Benjamin Scott',
    title: 'Platform Lead, Engineering Biology',
    organization: 'Global Institute for Food Security',
    imageUrl: '/images/Benjamin_Scott.avif',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'Automated biotech for agriculture'
  },
  {
    id: '4',
    name: 'Dr. Adam Damry',
    title: 'Assistant Professor',
    organization: 'University of Ottawa',
    imageUrl: '/images/Adam_Damry.avif',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'Protein-solid interface engineering'
  } 
]
