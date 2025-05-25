/*
* File: src/components/sections/Schedule.tsx
* Description: Schedule section with day-based navigation.
* Shows conference schedule organized by day.
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { schedule } from '@/data/schedule';
import ScheduleTab from '@/components/shared/ScheduleTab';
import { DayOfConference } from '@/types/schedule';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<DayOfConference>('Monday');
  const days: DayOfConference[] = ['Sunday', 'Monday', 'Tuesday'];

  // Map days to display names with dates
  const dayDisplayNames = {
    'Sunday': 'June 1',
    'Monday': 'June 2', 
    'Tuesday': 'June 3'
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Day Selection Tabs */}
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {days.map((day) => (
          <motion.button
            key={day}
            className={`px-6 py-3 rounded-full font-medium text-sm sm:text-base
              ${activeDay === day 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-all duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(day)}
          >
            <div className="flex flex-col items-center">
              <span className="font-semibold">{day}</span>
              <span className="text-xs opacity-80">{dayDisplayNames[day]}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Schedule Content */}
      <div className="relative">
        {days.map((day) => (
          <ScheduleTab
            key={day}
            day={day}
            items={schedule[day]}
            isActive={activeDay === day}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;