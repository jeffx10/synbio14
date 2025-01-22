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
  const days: DayOfConference[] = ['Monday', 'Tuesday'];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Day Selection Tabs */}
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {days.map((day) => (
          <motion.button
            key={day}
            className={`px-6 py-3 rounded-full font-medium text-sm sm:text-base
              ${activeDay === day 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </motion.button>
        ))}
      </div>

      {/* Schedule Content */}
      <div className="relative min-h-[400px]">
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
