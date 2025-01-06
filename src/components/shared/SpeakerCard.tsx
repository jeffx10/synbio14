/*
* File: src/components/shared/SpeakerCard.tsx
* Description: Reusable card component for displaying speaker information.
* Shows speaker image, bio, and handles hover interactions.
*/

// src/components/shared/SpeakerCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Speaker } from '@/types/speaker';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Speaker Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={speaker.imageUrl || '/images/speakers/placeholder-speaker.jpg'}
          alt={speaker.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Speaker Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>
        <p className="text-sm text-gray-500 mb-4">{speaker.organization}</p>
        
        {speaker.talkTitle && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Presentation</h4>
            <p className="text-sm text-gray-600">{speaker.talkTitle}</p>
          </div>
        )}

        {/* Social Links */}
        {speaker.socialMedia && (
          <div className="flex gap-3 mt-4">
            {speaker.socialMedia.twitter && (
              <a
                href={speaker.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {speaker.socialMedia.linkedin && (
              <a
                href={speaker.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {speaker.socialMedia.website && (
              <a
                href={speaker.socialMedia.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Globe size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SpeakerCard;