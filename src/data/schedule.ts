/*
* File: src/data/schedule.ts
* Description: Conference schedule data.
* Contains detailed schedule for all conference days.
*/

import { ScheduleItem, DaySchedule, DayOfConference } from '@/types/schedule'
import { speakers } from './speakers'

export const schedule: Record<DayOfConference, ScheduleItem[]> = {
  'Friday': [
    {
      id: '1',
      title: 'Registration',
      time: {
        start: '15:30',
        end: '16:00'
      },
      location: 'Main Hall',
      type: 'registration',
      day: 'Friday'
    },
    {
      id: '2',
      title: 'Welcome Address',
      time: {
        start: '16:00',
        end: '16:30'
      },
      speaker: speakers[0].id,
      location: 'Main Hall',
      type: 'talk',
      day: 'Friday'
    },
    {
      id: '3',
      title: 'First Talk',
      time: {
        start: '16:00',
        end: '16:30'
      },
      speaker: speakers[0].id,
      location: 'Main Hall',
      type: 'talk',
      day: 'Friday'
    },
    {
      id: '4',
      title: 'Second Talk',
      time: {
        start: '16:00',
        end: '16:30'
      },
      speaker: speakers[0].id,
      location: 'Main Hall',
      type: 'social',
      day: 'Friday'
    }
  ],
  'Saturday': [
    // TODO: Add Sunday schedule
    {
      id: '1',
      title: 'Registration',
      time: {
        start: '15:30',
        end: '16:00'
      },
      location: 'Main Hall',
      type: 'registration',
      day: 'Friday'
    },
    {
      id: '2',
      title: 'Welcome Address',
      time: {
        start: '16:00',
        end: '16:30'
      },
      speaker: speakers[0].id,
      location: 'Main Hall',
      type: 'workshop',
      day: 'Friday'
    },
    {
      id: '3',
      title: 'Frist Talk',
      time: {
        start: '16:00',
        end: '16:30'
      },
      speaker: speakers[0].id,
      location: 'Main Hall',
      type: 'talk',
      day: 'Friday'
    }
  ],
  'Sunday': [
    // TODO: Add Sunday schedule
  ]
}