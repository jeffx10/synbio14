/*
* File: src/pages/index.tsx
* Description: Main landing page for the SynBio 7.0 conference website.
* Implements single-page scrolling design with navigation and all content sections.
*/

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Speakers from '@/components/sections/Speakers';
import Schedule from '@/components/sections/Schedule';
import Registration from '@/components/sections/Registration';
import Sponsors from '@/components/sections/Sponsors';

const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Hero 
            className="relative h-screen flex items-center justify-center"
            backgroundImage="/images/uoft_campus_2.jpg"
          />
        </motion.div>

        {/* Speakers Section */}
        <motion.section
          className="py-24 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Speakers</h2>
            <Speakers />
          </div>
        </motion.section>

        {/* Schedule Section */}
        <motion.section
          className="py-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Conference Schedule</h2>
            <Schedule />
          </div>
        </motion.section>

        {/* Registration Section */}
        <motion.section
          className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Join Us at SynBio 7.0</h2>
            <Registration />
          </div>
        </motion.section>

        {/* Sponsors Section */}
        <motion.section
          className="py-24 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Sponsors</h2>
            <Sponsors />
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}