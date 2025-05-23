/*
* File: src/types/schedule.ts
* Description: Type definitions for conference schedule.
* Contains interfaces and types for managing conference timeline and events.
*/

export type DayOfConference = 'Sunday' | 'Monday' | 'Tuesday'

export type TimeSlot = {
  start: string
  end: string
}

export interface ScheduleItem {
  id: string
  title: string
  description?: string
  speaker?: string
  chair?: string // Added to support session chairs
  time: TimeSlot
  location: string
  type: 'talk' | 'workshop' | 'break' | 'registration' | 'social' | 'keynote'
  day: DayOfConference
}

export interface DaySchedule {
  day: DayOfConference
  date: string
  items: ScheduleItem[]
}

export interface ScheduleFilter {
  day?: DayOfConference
  type?: ScheduleItem['type']
  speaker?: string
}