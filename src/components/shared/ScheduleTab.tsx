/*
* File: src/components/shared/ScheduleTab.tsx
* Description: Tab component for schedule section with expand/collapse functionality.
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScheduleItem } from '@/types/schedule';
import { MapPin, Clock, ChevronDown, ChevronUp, User, Users, Coffee, Utensils, Star } from 'lucide-react';

interface ScheduleTabProps {
  day: string;
  items: ScheduleItem[];
  isActive: boolean;
}

const ScheduleTab: React.FC<ScheduleTabProps> = ({ day, items, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!isActive) return null;

  const displayedItems = isExpanded ? items : items.slice(0, 6);

  // Get icon based on event type
  const getEventIcon = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'keynote':
        return <Star className="w-4 h-4" />;
      case 'break':
        return <Coffee className="w-4 h-4" />;
      case 'registration':
        return <Users className="w-4 h-4" />;
      case 'social':
        return <Utensils className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  // Get styling based on event type for visual variety
  const getEventStyling = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'keynote':
        return 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500';
      case 'break':
        return 'bg-orange-50 border-l-4 border-orange-400';
      case 'registration':
        return 'bg-gray-50 border-l-4 border-gray-400';
      case 'social':
        return 'bg-purple-50 border-l-4 border-purple-400';
      case 'workshop':
        return 'bg-green-50 border-l-4 border-green-400';
      default:
        return 'bg-white hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300';
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={day}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        {/* Timeline container */}
        <div className="relative">
          {displayedItems && displayedItems.length > 0 ? (
            <>
              {displayedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`relative mb-2 rounded-lg shadow-sm transition-all duration-200 ${getEventStyling(item.type)}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start p-3 sm:p-4">
                    {/* Time column - fixed width */}
                    <div className="flex-shrink-0 w-16 sm:w-20 md:w-24 text-sm">
                      <div className="font-medium text-gray-900">{item.time.start}</div>
                      <div className="text-gray-500 text-xs sm:text-sm">{item.time.end}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 ml-2 sm:ml-4 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Title with icon */}
                        <div className="flex items-start gap-2 mb-1">
                          <span className={`flex-shrink-0 mt-0.5 ${
                            item.type === 'keynote' ? 'text-blue-600' :
                            item.type === 'break' ? 'text-orange-600' :
                            item.type === 'registration' ? 'text-gray-600' :
                            item.type === 'social' ? 'text-purple-600' :
                            item.type === 'workshop' ? 'text-green-600' :
                            'text-gray-600'
                          }`}>
                            {getEventIcon(item.type)}
                          </span>
                          <h3 className={`font-semibold text-gray-900 leading-tight ${
                            item.type === 'keynote' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                          }`}>
                            {item.title}
                          </h3>
                        </div>

                        {/* Speaker and Chair info - improved mobile layout */}
                        {(item.speaker || item.chair) && (
                          <div className="text-xs sm:text-sm text-gray-600 space-y-1 mt-1">
                            {item.speaker && (
                              <div>
                                <span className="text-gray-400">Speaker: </span>
                                <span className="font-medium">{item.speaker}</span>
                              </div>
                            )}
                            {item.chair && (
                              <div>
                                <span className="text-gray-400">Chair: </span>
                                <span>{item.chair}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Location */}
                        <div className="flex items-center gap-1 mt-1.5 text-xs sm:text-sm text-gray-500">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Type badge - only show on desktop */}
                      <div className="hidden lg:block flex-shrink-0">
                        <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium
                          ${item.type === 'keynote' ? 'bg-blue-100 text-blue-800' :
                            item.type === 'talk' ? 'bg-gray-100 text-gray-700' :
                            item.type === 'workshop' ? 'bg-green-100 text-green-800' :
                            item.type === 'break' ? 'bg-orange-100 text-orange-800' :
                            item.type === 'registration' ? 'bg-gray-100 text-gray-800' :
                            item.type === 'social' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'}`}
                        >
                          {item.type === 'keynote' ? 'Keynote' :
                           item.type === 'talk' ? 'Talk' :
                           item.type === 'workshop' ? 'Workshop' :
                           item.type === 'break' && item.title.toLowerCase().includes('lunch') ? 'Lunch' :
                           item.type === 'break' && item.title.toLowerCase().includes('coffee') ? 'Break' :
                           item.type === 'registration' ? 'Registration' :
                           item.type === 'social' ? 'Social' :
                           item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            <div className="text-center text-gray-500 py-8">
              No events scheduled for this day
            </div>
          )}
        </div>

        {/* Show More/Less Button */}
        {items.length > 6 && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 py-3 px-4 bg-gray-50 text-gray-700 rounded-lg 
                     flex items-center justify-center gap-2 hover:bg-gray-100 
                     transition-colors duration-200 text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={20} />
              </>
            ) : (
              <>
                Show More ({items.length - 6} more events) <ChevronDown size={20} />
              </>
            )}
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleTab;