/*
* File: src/components/sections/Sponsors.tsx
* Description: Sponsors carousel section with auto-scroll.
* Displays sponsor logos in a responsive, auto-scrolling carousel.
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

//commented out
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import { sponsors } from '@/data/sponsors';
// import { SponsorTier } from '@/types/sponsor';

//commented out
// const tierConfig = {
//   platinum: { height: 'h-32', width: 'w-48' },
//   gold: { height: 'h-24', width: 'w-40' },
//   silver: { height: 'h-20', width: 'w-32' },
//   bronze: { height: 'h-16', width: 'w-28' }
// };

const Sponsors: React.FC = () => {
  // const [isPaused, setIsPaused] = useState(false);
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const controls = useAnimation();
  // const containerRef = useRef<HTMLDivElement>(null);

  // Group sponsors by tier
  // const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
  //   if (!acc[sponsor.tier]) {
  //     acc[sponsor.tier] = [];
  //   }
  //   acc[sponsor.tier].push(sponsor);
  //   return acc;
  // }, {} as Record<SponsorTier, typeof sponsors>);

  // useEffect(() => {
  //   if (!isPaused) {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % sponsors.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isPaused]);

  // const handleNext = () => {
  //   setCurrentSlide((prev) => (prev + 1) % sponsors.length);
  // };

  // const handlePrev = () => {
  //   setCurrentSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  // };

  // return (
  //   <div className="max-w-7xl mx-auto px-4">
  //     {/* Platinum Sponsors */}
  //     {sponsorsByTier.platinum && sponsorsByTier.platinum.length > 0 && (
  //       <div className="mb-16">
  //         <h3 className="text-xl font-semibold text-center mb-8">Platinum Sponsors</h3>
  //         <div className="flex flex-wrap justify-center gap-12">
  //           {sponsorsByTier.platinum.map((sponsor) => (
  //             <motion.a
  //               key={sponsor.id}
  //               href={sponsor.website}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className={`relative ${tierConfig.platinum.height} ${tierConfig.platinum.width} 
  //                         flex items-center justify-center p-6 bg-white rounded-lg shadow-md
  //                         hover:shadow-lg transition-shadow`}
  //               whileHover={{ scale: 1.05 }}
  //               whileTap={{ scale: 0.95 }}
  //             >
  //               <img
  //                 src={sponsor.logoUrl}
  //                 alt={sponsor.name}
  //                 className="max-w-full max-h-full object-contain"
  //               />
  //             </motion.a>
  //           ))}
  //         </div>
  //       </div>
  //     )}

  //     {/* Other Tiers Carousel */}
  //     <div
  //       className="relative"
  //       onMouseEnter={() => setIsPaused(true)}
  //       onMouseLeave={() => setIsPaused(false)}
  //     >
  //       <div className="overflow-hidden" ref={containerRef}>
  //         <motion.div
  //           className="flex gap-8 justify-center flex-wrap"
  //           animate={controls}
  //         >
  //           <AnimatePresence mode="wait">
  //             {Object.entries(sponsorsByTier)
  //               .filter(([tier]) => tier !== 'platinum')
  //               .map(([tier, tierSponsors]) => (
  //                 <motion.div
  //                   key={tier}
  //                   initial={{ opacity: 0 }}
  //                   animate={{ opacity: 1 }}
  //                   exit={{ opacity: 0 }}
  //                   className="w-full"
  //                 >
  //                   <h3 className="text-lg font-medium text-center mb-6 capitalize">
  //                     {tier} Sponsors
  //                   </h3>
  //                   <div className="flex flex-wrap justify-center gap-8">
  //                     {tierSponsors.map((sponsor) => (
  //                       <motion.a
  //                         key={sponsor.id}
  //                         href={sponsor.website}
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                         className={`relative ${tierConfig[sponsor.tier].height} 
  //                                   ${tierConfig[sponsor.tier].width} flex items-center 
  //                                   justify-center p-4 bg-white rounded-lg shadow-md
  //                                   hover:shadow-lg transition-shadow`}
  //                         whileHover={{ scale: 1.05 }}
  //                         whileTap={{ scale: 0.95 }}
  //                       >
  //                         <img
  //                           src={sponsor.logoUrl}
  //                           alt={sponsor.name}
  //                           className="max-w-full max-h-full object-contain"
  //                         />
  //                       </motion.a>
  //                     ))}
  //                   </div>
  //                 </motion.div>
  //               ))}
  //           </AnimatePresence>
  //         </motion.div>
  //       </div>

        //not needed, won't implment carousel
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


  //     </div>
  //   </div>
  // );

  //temporary
  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Main content */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Sponsorship Opportunities
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Support the next generation of synthetic biology research and innovation. 
            By sponsoring SynBio 7.0, you will connect with leading researchers, students, 
            and industry professionals in the field.
          </p>
          
          {/* Sponsorship levels teaser */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 mb-2">Academic Sponsors</h4>
              <p className="text-gray-600 text-sm">
                Support student participation and academic initiatives
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 mb-2">Industry Partners</h4>
              <p className="text-gray-600 text-sm">
                Showcase your organization and connect with talent
              </p>
            </div>
          </div>
          
          {/* Contact section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-xl mx-auto">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Become a Sponsor
            </h4>
            <p className="text-gray-600 mb-2">
              Interested in sponsoring SynBio 7.0?
            </p>
            <p className="text-gray-600 mb-4">
              Contact our organizing committee at:
            </p>
            <motion.a
              href="mailto:synbiocanadaconference@gmail.com"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              synbiocanadaconference@gmail.com
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
