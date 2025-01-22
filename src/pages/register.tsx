/*
* File: src/pages/register.tsx
* Description: Registration page
*/

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Registration</h1>
              {/* <p className="text-xl text-white/90">
                Join us for SynBio 7.0 by securing your spot today. The registration fee of 210 CAD
                provides you with full access to the conference sessions, materials, networking and meals.
              </p> */}
              <p className="text-xl text-white/90">
                We want to make SynBio 7.0 accessible to everyone, especially students and trainees. 
                Registration fees and details will be posted here soon! 
                {/* Your registration will include full access to conference sessions, networking events, conference materials, and meals. */}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Important Dates Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Event</th>
                      <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Registration Opens</td>
                      <td className="px-6 py-4 text-right text-gray-800">Soon!</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Registration Ends</td>
                      <td className="px-6 py-4 text-right text-gray-800">TBD</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Abstract Submission Deadline</td>
                      <td className="px-6 py-4 text-right text-gray-800">TBD</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-800">Conference</td>
                      <td className="px-6 py-4 text-right text-gray-800">June 1st - June 3rd 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Abstract Submission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Abstract Submission</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-6">
                  Abstract submission will open soon!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Accommodation</h2>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-gray-700 text-lg mb-6">
                  More info soon!
                  
                  {/* Attendees can reserve their stay on UofT campus{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">here</a>.
                  Rooms on campus fill up faster during this season, so we recommend reserving your
                  accommodation as soon as you register. */}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cancellation Policy Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Cancellation Policy</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg">
                  Attendees can get a full refund if they cancel over 60 days before the conference.
                  Cancellations made between 30 to 60 days prior are eligible for a 50% refund. No
                  refunds are provided for cancellations within 30 days of the event. All cancellation
                  refunds incur a 35 CAD administrative charge.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;