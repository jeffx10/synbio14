/*
* File: src/pages/register.tsx
* Description: Registration page
*/

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Info, FileText, Calendar } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Head from'next/head';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register - SynBio7.0 Conference</title>
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
                <p className="text-xl text-white/90 mb-4">
                  Join us for SynBio7.0, Canada's premier synthetic biology conference.
                </p>
                <div className="mt-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-8 text-center">Registration Fees</h3>
                  
                  <div className="flex flex-col items-center space-y-6">
                    {/* Price cards */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
                      {/* Trainee Card */}
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden flex-1 transform transition-transform hover:scale-105">
                        <div className="p-6 text-center">
                          <div className="text-3xl font-bold mb-1">$200</div>
                          <div className="text-xl mb-4">Trainees</div>
                          <ul className="text-white/80 text-sm space-y-2 mb-4">
                            <li>• Undergraduate Students</li>
                            <li>• PhD Students</li>
                            <li>• Postdoctoral Fellows</li>
                            <li>• Research Associates</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Faculty Card */}
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden flex-1 transform transition-transform hover:scale-105">
                        <div className="p-6 text-center">
                          <div className="text-3xl font-bold mb-1">$300</div>
                          <div className="text-xl mb-4">Faculty</div>
                          <ul className="text-white/80 text-sm space-y-2 mb-4">
                            <li>• Professors</li>
                            <li>• Principal Investigators</li>
                            <li>• Industry Professionals</li>
                            <li>• Academic Staff</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Included Features */}
                    <div className="bg-white/10 rounded-lg p-4 mt-6 w-full">
                      <p className="text-center text-white/90 text-sm">
                        All registrations include full access to conference sessions, networking events, and meals.
                      </p>
                    </div>
                  </div>
                </div>
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
                        <td className="px-6 py-4 text-right text-gray-800">
                          <a href="https://www.eventbrite.ca/e/synbio-70-tickets-1344597700919?aff=oddtdtcreator" 
                             className="text-blue-600 hover:underline" 
                             target="_blank" rel="noopener noreferrer">
                            Register Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-800">Abstract Submission Deadline</td>
                        <td className="px-6 py-4 text-right font-medium text-gray-800">May 7th, 2025</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-800">Registration Deadline</td>
                        <td className="px-6 py-4 text-right text-gray-800">TBD</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-800">Conference</td>
                        <td className="px-6 py-4 text-right text-gray-800">June 1st - June 3rd, 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Abstract Submission Section */}
          <section id="abstract-submission" className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Abstract Submission</h2>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg mb-4">
                        We invite researchers and professionals in synthetic biology to submit 
                        abstracts for oral and poster presentations at SynBio7.0.
                      </p>
                      <div className="flex items-start gap-2 mb-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-800">Important Deadline</p>
                          <p className="text-amber-700">
                            <span className="font-semibold">Extended deadline:</span> All abstracts must be submitted by May 7th, 2025.
                          </p>
                        </div>
                      </div>
                      <motion.a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScGm-rtDeBEUEDDPWbkXU-mAlxS_DY3Zl0_C0Nl11CMe3cuDA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Submit Your Abstract
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
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
                  {/* Chestnut Residence Option - UPDATED WITH NEW INFORMATION */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chestnut Residence</h3>
                        <p className="text-gray-700 mb-4">
                          We've arranged a special group rate at Chestnut Residence for SynBio7.0 attendees. Located in downtown Toronto near the Eaton Centre, Chestnut Residence offers convenient access to the University of Toronto and the city center.
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
                              <p className="text-gray-600 mb-2">2 double-sized beds with private bathroom</p>
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
                            <p>Rooms do not have televisions or telephones.</p>
                            <p className="font-medium mt-2">Special rates available until April 18, 2025 (45 days prior to arrival).</p>
                          </div>
                        </div>
                        
                        {/* Amenities */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-gray-800">Included Amenities:</h4>
                          <ul className="text-gray-600 list-disc pl-5 space-y-1">
                            <li>Breakfast: Served daily from 7:30 AM to 10:30 AM</li>
                            <li>Complimentary Wi-Fi access</li>
                            <li>Weekly housekeeping service for extended stays</li>
                          </ul>
                        </div>
                        
                        {/* Front desk hours and check-in/out times */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold mb-2 text-gray-800">General Information:</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li>Front Desk Hours: 7:00 AM to 11:00 PM</li>
                            <li>Check-In: 4:00 PM</li>
                            <li>Check-Out: 11:00 AM</li>
                          </ul>
                        </div>

                        {/* Booking button - UPDATED TO ACTIVE STATE WITH CORRECT LINK */}
                        <div className="mt-4">
                          <a 
                            href="https://hotels.cloudbeds.com/reservation/Qv9tew#promo=Synbio"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Book with Promo Code: Synbio
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <p className="text-sm text-gray-600 mt-2">
                            Use promo code <span className="font-semibold">Synbio</span> to access our special conference rates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* New College Residence Option - KEPT AS IS */}
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
          {/* ACCOMMODATION SECTION ENDS HERE */}

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