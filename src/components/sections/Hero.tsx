/*
* File: src/components/sections/Hero.tsx
* Description: Hero section component with parallax background.
* Displays conference title, date, and main call-to-action.
*/

import React from 'react';
import { motion } from 'framer-motion';
import { CONFERENCE_INFO } from '@/utils/constants';

interface HeroProps {
  className?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ className, backgroundImage }) => {
  return (
    <section className={`relative ${className}`}>
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          className="bg-black/30 backdrop-blur-sm px-8 py-12 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/100">
            {CONFERENCE_INFO.name}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/100">
            {CONFERENCE_INFO.description}
          </p>
          
          <div className="text-xl md:text-2xl mb-8 text-white/50">
            <p className="mb-2">{CONFERENCE_INFO.venue.name}</p>
            <p>{CONFERENCE_INFO.dates.start} - {CONFERENCE_INFO.dates.end}</p>
          </div>

          <motion.button
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold 
                     hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl
                     transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;