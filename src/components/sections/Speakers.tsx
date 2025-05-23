/*
* File: src/components/sections/Speakers.tsx
* Description: Speakers grid section with speaker cards.
* Displays conference speakers in a responsive grid layout.
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpeakerCard from '@/components/shared/SpeakerCard';
import { speakers } from '@/data/speakers';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Speakers: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 5);
  
  // Split the speakers into two rows for the 3+2 layout
  const firstRowSpeakers = displayedSpeakers.slice(0, 3);
  const secondRowSpeakers = displayedSpeakers.slice(3);

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* First row - 3 speakers */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {firstRowSpeakers.map((speaker) => (
            <motion.div 
              key={speaker.id} 
              variants={itemVariants} 
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[280px] flex-grow-0 flex-shrink-0"
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </div>
        
        {/* Second row - 2 speakers */}
        {secondRowSpeakers.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {secondRowSpeakers.map((speaker) => (
              <motion.div 
                key={speaker.id} 
                variants={itemVariants} 
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(40%-1.5rem)] max-w-[280px] flex-grow-0 flex-shrink-0"
              >
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        {speakers.length > 5 && !showAll && (
          <motion.button
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold 
                     hover:bg-gray-800 transition-colors shadow-md text-center w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
          >
            See Full Speaker List
          </motion.button>
        )}
        
        <motion.a
          href="/register"
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-center w-full sm:w-auto
                   border-2 border-gray-900 hover:bg-gray-100 transition-colors shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register to Present
        </motion.a>
      </div>
    </div>
  );
};

export default Speakers;