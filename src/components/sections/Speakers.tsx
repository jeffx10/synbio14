/*
* File: src/components/sections/Speakers.tsx
* Description: Speakers grid section with speaker cards.
* Displays conference speakers in a responsive grid layout.
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpeakerCard from '@/components/shared/SpeakerCard';
import { speakers } from '@/data/speakers';

import { Mail } from 'lucide-react';


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
  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto ">
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {displayedSpeakers.map((speaker) => (
          <motion.div 
            key={speaker.id} 
            variants={itemVariants} 
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] 2xl:w-[calc(25%-1.5rem)] max-w-[280px] flex-grow-0 flex-shrink-0"
          >
            <SpeakerCard speaker={speaker} />
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        {speakers.length > 6 && !showAll && (
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

  // return (
  //   <div className="max-w-3xl mx-auto text-center">
  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       viewport={{ once: true }}
  //       transition={{ duration: 0.6 }}
  //       className="space-y-8"
  //     >
  //       {/* Main content */}
  //       <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
  //         <h3 className="text-2xl font-semibold text-gray-900 mb-6">
  //           Speakers Coming Soon
  //         </h3>
  //         <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
  //           Join us to hear from researchers and industry leaders who are working on exciting developments in synthetic biology. 
  //           We'll be announcing our speaker lineup soon!
  //         </p>
          
  //         {/* CTA for potential speakers */}
  //         <div className="bg-gray-50 rounded-xl p-6 max-w-xl mx-auto">
  //           <h4 className="text-lg font-medium text-gray-900 mb-3">
  //             Interested in Speaking?
  //           </h4>
  //           <p className="text-gray-600 mb-4">
  //             Interested in sharing your work at SynBio 7.0?<br/>
  //             Contact our organizing committee at:
  //           </p>
  //           <motion.a
  //             href="mailto:synbiocanadaconference@gmail.com"
  //             className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
  //             whileHover={{ scale: 1.02 }}
  //             whileTap={{ scale: 0.98 }}
  //           >
  //             <Mail className="w-4 h-4" />
  //             synbiocanadaconference@gmail.com
  //           </motion.a>
  //         </div>
  //       </div>
  //     </motion.div>
  //   </div>
  // );
};

export default Speakers;