/*
* File: src/pages/register.tsx
* Description: Registration page
*/

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Info } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Head from'next/head';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register - SynBio 7.0 Conference</title>
      </Head>
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
                <h2 className="text-3xl font-bold mb-6">Accommodations</h2>
                <div className="space-y-8">
                  {/* Chestnut Residence Option */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chestnut Residence</h3>
                        <p className="text-gray-700 mb-4">
                          We're happy to accommodate a Courtesy Block for SynBio 7.0 Conference attendees. 
                          Conveniently situated in downtown Toronto near the Eaton Centre, Chestnut Residence 
                          offers easy access to the heart of the city.
                        </p>
                        
                        {/* Room types */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-gray-800">Room Types:</h4>
                          <div className="space-y-4">
                            {/* Single Room */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-medium text-blue-700">Single Room</h5>
                              <p className="text-gray-600 mb-2">1 double-sized bed with private bathroom</p>
                              <p className="font-medium">$170 CAD single occupancy</p>
                              <p className="text-sm text-gray-500">(1 person, per room per night + 13% HST, max 2 adults, $20 for additional adult)</p>
                            </div>
                            
                            {/* Double Room */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-medium text-blue-700">Double Room</h5>
                              <p className="text-gray-600 mb-2">2 double-sized beds with private bathroom (maximum 2 people)</p>
                              <p className="font-medium">$192 CAD double occupancy</p>
                              <p className="text-sm text-gray-500">(2 people, per room per night + 13% HST, max 2 adults & 2 children, $10 for additional child)</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional info */}
                        <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start gap-3">
                          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-gray-700">
                            <p className="mb-1">All rates include breakfast and are in Canadian dollars with 13% tax applicable.</p>
                            <p className="text-xs">* Monthly room rate of 30+ nights are tax exempt (Meals are taxable)</p>
                          </div>
                        </div>
                        

                        <div className="mt-4">
                          <button 
                            disabled
                            className="inline-flex items-center gap-2 bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
                          >
                            Booking Coming Soon
                            <Info className="w-4 h-4" />
                          </button>
                          <p className="text-sm text-gray-500 mt-2">We're finalizing accommodation arrangements. Check back later for booking options.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* New College Residence Option */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">New College Residence</h3>
                        <p className="text-gray-700 mb-4">
                          New College residence has rooms available on a first-come, first-serve basis. 
                          Located at the University of Toronto campus, this is another convenient option for conference attendees.
                        </p>
                        
                        <div className="mt-4">
                          <a 
                            href="https://utoronto.starrezhousing.com/StarRezPortalXNCSummer/0FE9F831/17/366/Home-University_of_Toront?UrlToken=C23E3B6A"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Book Directly
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default RegisterPage;