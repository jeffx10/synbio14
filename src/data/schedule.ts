/*
* File: src/data/schedule.ts
* Description: Conference schedule data.
* Contains detailed schedule for all conference days.
*/

import { ScheduleItem, DaySchedule, DayOfConference } from '@/types/schedule'
import { speakers } from './speakers'

export const schedule: Record<DayOfConference, ScheduleItem[]> = {
  'Monday': [
    {
      id: '1',
      title: 'Registration',
      time: {
        start: '08:30',
        end: '09:00'
      },
      location: 'lobby',
      type: 'registration',
      day: 'Monday'
    },
    {
      id: '2',
      title: 'Welcome Remarks',
      time: {
        start: '09:00',
        end: '09:15'
      },
      location: 'theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: '3',
      title: 'Keynote',
      time: {
        start: '09:15',
        end: '10:15'
      },
      location: 'theater',
      type: 'keynote',
      day: 'Monday'
    },
    {
      id: '4',
      title: 'Coffee Break',
      time: {
        start: '10:15',
        end: '10:45'
      },
      location: 'lobby',
      type: 'break',
      day: 'Monday'
    },
    {
      id: '5',
      title: 'Keynote',
      time: {
        start: '10:45',
        end: '11:45'
      },
      location: 'theater',
      type: 'keynote',
      day: 'Monday'
    },
    {
      id: '6',
      title: 'Talks',
      time: {
        start: '11:45',
        end: '13:30'
      },
      location: 'theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: '7',
      title: 'Lunch / Poster Session',
      time: {
        start: '13:30',
        end: '14:30'
      },
      location: 'hall',
      type: 'break',
      day: 'Monday'
    },
    {
      id: '8',
      title: 'Keynote',
      time: {
        start: '14:30',
        end: '15:30'
      },
      location: 'theater',
      type: 'keynote',
      day: 'Monday'
    },
    {
      id: '9',
      title: 'Coffee Break',
      time: {
        start: '15:30',
        end: '16:00'
      },
      location: 'hall',
      type: 'break',
      day: 'Monday'
    },
    {
      id: '10',
      title: 'Talks',
      time: {
        start: '16:00',
        end: '17:00'
      },
      location: 'theater',
      type: 'talk',
      day: 'Monday'
    },
    {
      id: '11',
      title: 'Closing Day 1',
      time: {
        start: '17:00',
        end: '17:15'
      },
      location: 'theater',
      type: 'talk',
      day: 'Monday'
    }
  ],
  'Tuesday': [
    {
      id: '1',
      title: 'Welcome Coffee',
      time: {
        start: '08:30',
        end: '09:00'
      },
      location: 'lobby',
      type: 'registration',
      day: 'Tuesday'
    },
    {
      id: '2',
      title: 'Keynote',
      time: {
        start: '09:00',
        end: '10:00'
      },
      location: 'theater',
      type: 'keynote',
      day: 'Tuesday'
    },
    {
      id: '3',
      title: 'Coffee Break',
      time: {
        start: '10:00',
        end: '10:30'
      },
      location: 'hall',
      type: 'break',
      day: 'Tuesday'
    },
    {
      id: '4',
      title: 'Talks',
      time: {
        start: '10:30',
        end: '12:00'
      },
      location: 'theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: '5',
      title: 'Lunch / Poster Session',
      time: {
        start: '12:00',
        end: '13:30'
      },
      location: 'hall',
      type: 'break',
      day: 'Tuesday'
    },
    {
      id: '6',
      title: 'Keynote',
      time: {
        start: '13:30',
        end: '14:30'
      },
      location: 'theater',
      type: 'keynote',
      day: 'Tuesday'
    },
    {
      id: '7',
      title: 'Coffee Break',
      time: {
        start: '14:30',
        end: '16:00'
      },
      location: 'hall',
      type: 'break',
      day: 'Tuesday'
    },
    {
      id: '8',
      title: 'Talks',
      time: {
        start: '16:00',
        end: '17:00'
      },
      location: 'theater',
      type: 'talk',
      day: 'Tuesday'
    },
    {
      id: '9',
      title: 'Concluding Remarks',
      time: {
        start: '17:00',
        end: '17:15'
      },
      location: 'theater',
      type: 'talk',
      day: 'Tuesday'
    }
  ],
  'Sunday': []
}