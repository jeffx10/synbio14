/*
* File: src/components/sections/Registration.tsx
* Description: Registration section with attendance options.
* Handles registration paths for both attendees and presenters.
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mic, ChevronRight } from 'lucide-react';
import { REGISTRATION } from '@/utils/constants';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Registration: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Attend Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 overflow-hidden group"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Register to Attend</h3>
            <p className="text-white/80 mb-6">
              Join us to learn from industry leaders, network with peers, 
              and explore the latest developments in synthetic biology.
            </p>

            <ul className="space-y-3 mb-4 text-white/70">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Access to all conference sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Networking opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Conference materials</span>
              </li>
            </ul>
            
            {/* Registration costs */}
            <div className="bg-white/10 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-white mb-2">Registration Fees:</h4>
              <p className="text-white/80">Trainees - <span className="font-medium text-white">$200</span> and Faculty - <span className="font-medium text-white">$300</span></p>
            </div>

            <motion.a
              href="https://www.eventbrite.ca/e/synbio-70-tickets-1344597700919?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Present Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 overflow-hidden group"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Mic className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Register to Present</h3>
            <p className="text-white/80 mb-6">
              Share your research and insights with the synthetic biology community. 
              Submit your presentation proposal for SynBio7.0.
            </p>

            <ul className="space-y-3 mb-4 text-white/70">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>15-minute presentation slot</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Featured in conference materials</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Networking opportunities</span>
              </li>
            </ul>
            
            {/* Abstract submission deadline notice */}
            <div className="bg-white/10 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-white mb-2">Important:</h4>
              <p className="text-white/80">Abstract submission deadline: <span className="font-medium text-white">May 7th, 2025</span> <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-0.5 rounded-full ml-1">Extended</span></p>
            </div>

            <motion.a
              href="/register#abstract-submission"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Abstract
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;