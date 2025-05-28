/*
* File: src/data/schedule.ts
* Description: Conference schedule data.
* Contains detailed schedule for all conference days.
*/

import { ScheduleItem, DaySchedule, DayOfConference } from '@/types/schedule'
import { speakers } from './speakers'

export const schedule: Record<DayOfConference, ScheduleItem[]> = {
  'Sunday': [
    {
      id: 'sun-1',
      title: 'Social and Networking Event',
      time: {
        start: '18:00',
        end: '21:00'
      },
      location: "Hemingway's (142 Cumberland St. Toronto)",
      type: 'social',
      day: 'Sunday'
    }
  ],
  'Monday': [
    {
      id: 'mon-1',
      title: 'Registration',
      time: {
        start: '08:30',
        end: '09:00'
      },
      location: 'Lobby',
      type: 'registration',
      day: 'Monday'
    },
    {
      id: 'mon-2',
      title: 'Welcome Remarks',
      speaker: "Dr. Rebecca Shapiro",
      time: {
        start: '09:00',
        end: '09:15'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-3',
      title: 'Keynote: Dr. Kevin Solomon',
      speaker: 'Dr. Kevin Solomon',
      time: {
        start: '09:15',
        end: '10:15'
      },
      location: 'Theater',
      type: 'keynote',
      day: 'Monday'
    },
    {
      id: 'mon-4',
      title: 'Coffee Break',
      time: {
        start: '10:15',
        end: '10:45'
      },
      location: 'Lobby',
      type: 'break',
      day: 'Monday'
    },
    {
      id: 'mon-5',
      title: 'A sea of signals: quorum sensing regulates particle-associated bacterial communities in the surface oceans',
      speaker: 'Rachel Gregor',
      chair: 'Chris Lawson',
      time: {
        start: '10:45',
        end: '11:10'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-6',
      title: 'Using synthetic biology for engineering designer Saccharomyces cerevisiae extracellular vesicles',
      speaker: 'Jeff Bouffard',
      chair: 'Chris Lawson',
      time: {
        start: '11:10',
        end: '11:25'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-7',
      title: 'Evolution of Synthetic Gene Circuits  and Antifungal Resistance in Fluctuating Drug Conditions',
      speaker: 'Harold Flohr',
      chair: 'Chris Lawson',
      time: {
        start: '11:25',
        end: '11:40'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-8',
      title: 'Understanding Aneuploidy-Mediated Phenotypes via CRISPRa-dCas9 Screening and HyperdCas12a Multiplexing',
      speaker: 'Nicholas Gervais',
      chair: 'Chris Lawson',
      time: {
        start: '11:40',
        end: '11:55'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-9',
      title: 'Lunch / Poster Session',
      time: {
        start: '12:00',
        end: '13:30'
      },
      location: 'Theater',
      type: 'break',
      day: 'Monday'
    },
    {
      id: 'mon-10',
      title: 'Keynote: Dr. Nika Shakiba',
      speaker: 'Dr. Nika Shakiba',
      chair: 'Michael Garton',
      time: {
        start: '13:30',
        end: '14:30'
      },
      location: 'Theater',
      type: 'keynote',
      day: 'Monday'
    },
    {
      id: 'mon-11',
      title: 'Sensing and Modulating Neurodegenerative Protein Aggregation With a Synthetic Protein Circuit',
      speaker: 'Giulio Chiesa',
      chair: 'Michael Garton',
      time: {
        start: '14:30',
        end: '14:55'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-12',
      title: 'Systematic analysis of complex genetic interactions of conserved mitochondrial carriers',
      speaker: 'Brittany Greco',
      chair: 'Michael Garton',
      time: {
        start: '14:55',
        end: '15:10'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-13',
      title: 'Accelerated Reprogramming of hiPSCs into Functional Brain Endothelial Cells with Multiplexed CRISPR Activation',
      speaker: 'Roy Hwang',
      chair: 'Michael Garton',
      time: {
        start: '15:10',
        end: '15:25'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: 'mon-14',
      title: 'Coffee Break (Posters)',
      time: {
        start: '15:30',
        end: '16:00'
      },
      location: 'Lobby',
      type: 'break',
      day: 'Monday'
    },
    {
      id: 'mon-15',
      title: 'Keynote: Dr. Benjamin Scott',
      speaker: 'Dr. Benjamin Scott',
      chair: "Giulio Chiesa",
      time: {
        start: '16:00',
        end: '17:00'
      },
      location: 'Theater',
      type: 'keynote',
      day: 'Monday'
    },
    {
      id: 'mon-16',
      title: 'Closing Day 1',
      time: {
        start: '17:00',
        end: '17:15'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Monday'
    }
  ],
  'Tuesday': [
    {
      id: 'tue-1',
      title: 'Welcome Coffee',
      time: {
        start: '08:30',
        end: '09:00'
      },
      location: 'Lobby',
      type: 'registration',
      day: 'Tuesday'
    },
    {
      id: 'tue-2',
      title: 'Genomic and transcriptomic approaches identify targets for metabolic engineering of yeast tolerance to a PET plastic monomer',
      speaker: 'Eugene Fletcher',
      chair: 'Mohamed Nasr',
      time: {start: '09:00',
        end: '09:25'},
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
      },
      {
      id: 'tue-3',
      title: 'Engineering non-conventional yeasts for production of muconic and adipic acids',
      speaker: 'Michael Pyne',
      chair: 'Mohamed Nasr',
      time: {
        start: '09:25',
        end: '09:50'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: 'tue-4',
      title: 'Coffee Break',
      time: {
        start: '09:50',
        end: '10:20'
      },
      location: 'Lobby',
      type: 'break',
      day: 'Tuesday'
    },
    {
      id: 'tue-5',
      title: 'Keynote: Dr. Valerie Ward - Bioprocessing',
      speaker: 'Dr. Valerie Ward',
      chair: 'Chris Lawson',
      time: {
        start: '10:20',
        end: '11:20'
      },
      location: 'Theater',
      type: 'keynote',
      day: 'Tuesday'
    },
    {
      id: 'tue-6',
      title: 'Accelerated Design of Synthetic Microbiome for Sustainable Chemical Production from Organic Waste',
      speaker: 'Xu (Charlie) Chen',
      chair: 'Mohamed Nasr',
      time: {
        start: '11:20',
        end: '11:35'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: 'tue-7',
      title: 'Genome-Wide Trifunctional CRISPR Screen for Enhanced Fumaric Acid Tolerance in Kluyveromyces marxianus',
      speaker: 'Mackenzie Thornbury',
      chair: 'Mohamed Nasr',
      time: {
        start: '11:35',
        end: '11:50'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: 'tue-8',
      title: 'Lunch / Poster Session',
      time: {
        start: '12:00',
        end: '13:30'
      },
      location: 'Hall',
      type: 'break',
      day: 'Tuesday'
    },
    {
      id: 'tue-9',
      title: 'A multimodal digital microfluidic testing platform for antibody-producing cell lines',
      speaker: 'Jeremy Lant',
      chair: 'Keith Pardee',
      time: {
        start: '13:30',
        end: '13:55'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: 'tue-10',
      title: 'A Multiplexed CRISPR-Cas12a Platform to Detect MicroRNA at the Point of Need',
      speaker: 'Ariel Corsano',
      chair: 'Keith Pardee',
      time: {
        start: '13:55',
        end: '14:10'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: 'tue-11',
      title: 'Engineering CRISPR-based diagnostics for the rapid detection of Candida and antimicrobial resistance biomarkers',
      speaker: 'Amy Heathcote',
      chair: 'Keith Pardee',
      time: {
        start: '14:10',
        end: '14:25'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: 'tue-12',
      title: 'Coffee Break / SynBio Canada Workshop',
      time: {
        start: '14:30',
        end: '16:00'
      },
      location: 'Lobby',
      type: 'workshop',
      day: 'Tuesday'
    },
    {
      id: 'tue-13',
      title: 'Keynote: Dr. Adam Damry - Health / Devices',
      speaker: 'Dr. Adam Damry',
      chair: 'Nikki Weckman',
      time: {
        start: '16:00',
        end: '17:00'
      },
      location: 'Theater',
      type: 'keynote',
      day: 'Tuesday'
    },
    {
      id: 'tue-14',
      title: 'Concluding Remarks',
      time: {
        start: '17:00',
        end: '17:15'
      },
      location: 'Theater',
      type: 'talk',
      day: 'Tuesday'
    }
  ]
}
