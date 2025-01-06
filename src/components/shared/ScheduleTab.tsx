/*
* File: src/components/shared/ScheduleTab.tsx
* Description: Tab component for schedule section.
* Handles individual day schedule display and transitions.
*/

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScheduleItem } from '@/types/schedule';
import { MapPin, Clock } from 'lucide-react';

interface ScheduleTabProps {
  day: string;
  items: ScheduleItem[];
  isActive: boolean;
}

const ScheduleTab: React.FC<ScheduleTabProps> = ({ day, items, isActive }) => {
  if (!isActive) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={day}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 mb-4">{item.description}</p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{item.time.start} - {item.time.end}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Session Type Badge */}
              <div className="mt-4 md:mt-0 md:ml-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                  ${item.type === 'talk' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'workshop' ? 'bg-green-100 text-green-800' :
                    item.type === 'break' ? 'bg-gray-100 text-gray-800' :
                    item.type === 'registration' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'}`}
                >
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleTab;