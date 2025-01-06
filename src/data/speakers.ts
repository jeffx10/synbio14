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
    name: 'Dr. Jane Smith',
    title: 'Professor of Synthetic Biology',
    organization: 'University of Toronto',
    imageUrl: '/images/speaker-1.jpg',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'The Future of Synthetic Biology'
  },
  {
    id: '2',
    name: 'Dr. Michael Garton',
    title: 'Professor of Genetics',
    organization: 'MIT',
    imageUrl: '/images/speaker-2.jpg',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'The Future of Synthetic Biology'
  },
  {
    id: '3',
    name: 'Dr. Joe Biden',
    title: 'Professor of Math',
    organization: 'Harvard University',
    imageUrl: '/images/speaker-3.jpg',
    bio: 'Leading researcher in synthetic biology and genetic engineering.',
    talkTitle: 'The Future of Synthetic Biology'
  }
]
