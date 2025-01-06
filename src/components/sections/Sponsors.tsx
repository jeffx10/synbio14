/*
* File: src/components/sections/Sponsors.tsx
* Description: Sponsors carousel section with auto-scroll.
* Displays sponsor logos in a responsive, auto-scrolling carousel.
*/

// src/components/sections/Sponsors.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { sponsors } from '@/data/sponsors';
import { SponsorTier } from '@/types/sponsor';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tierConfig = {
  platinum: { height: 'h-32', width: 'w-48' },
  gold: { height: 'h-24', width: 'w-40' },
  silver: { height: 'h-20', width: 'w-32' },
  bronze: { height: 'h-16', width: 'w-28' }
};

const Sponsors: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Group sponsors by tier
  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<SponsorTier, typeof sponsors>);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sponsors.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sponsors.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Platinum Sponsors */}
      {sponsorsByTier.platinum && sponsorsByTier.platinum.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {sponsorsByTier.platinum.map((sponsor) => (
              <motion.a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative ${tierConfig.platinum.height} ${tierConfig.platinum.width} 
                          flex items-center justify-center p-6 bg-white rounded-lg shadow-md
                          hover:shadow-lg transition-shadow`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      )}

      {/* Other Tiers Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-8 justify-center flex-wrap"
            animate={controls}
          >
            <AnimatePresence mode="wait">
              {Object.entries(sponsorsByTier)
                .filter(([tier]) => tier !== 'platinum')
                .map(([tier, tierSponsors]) => (
                  <motion.div
                    key={tier}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full"
                  >
                    <h3 className="text-lg font-medium text-center mb-6 capitalize">
                      {tier} Sponsors
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                      {tierSponsors.map((sponsor) => (
                        <motion.a
                          key={sponsor.id}
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative ${tierConfig[sponsor.tier].height} 
                                    ${tierConfig[sponsor.tier].width} flex items-center 
                                    justify-center p-4 bg-white rounded-lg shadow-md
                                    hover:shadow-lg transition-shadow`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={sponsor.logoUrl}
                            alt={sponsor.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4">
          <motion.button
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div> */}
      </div>
    </div>
  );
};

export default Sponsors;
