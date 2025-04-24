/*
* File: src/pages/accommodations.tsx
* Description: Accommodations page
* Provides information about lodging options for conference attendees.
*/

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Info } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Head from 'next/head';

const AccommodationsPage = () => {
  return (
    <>
      <Head>
        <title>Accommodations - SynBio7.0 Conference</title>
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodations</h1>
                <p className="text-xl text-white/90">
                  Conference lodging options for SynBio7.0 attendees
                </p>
              </motion.div>
            </div>
          </div>

          {/* Accommodation Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl mx-auto"
              >
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Lodging Options</h2>
                    <p className="text-gray-700 mb-4">
                      We've arranged special accommodation options for SynBio7.0 attendees at two convenient locations. 
                      Both options provide easy access to the conference venue at the University of Toronto.
                    </p>
                  </div>

                  {/* Chestnut Residence Option */}
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

                        {/* Booking button */}
                        <div className="mt-4">
                          <motion.a 
                            href="https://hotels.cloudbeds.com/reservation/Qv9tew#promo=Synbio"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book with Promo Code: Synbio
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          <p className="text-sm text-gray-600 mt-2">
                            Use promo code <span className="font-semibold">Synbio</span> to access our special conference rates.
                          </p>
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
                        
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold mb-2 text-gray-800">Reservation Details:</h4>
                          <p className="text-gray-600">
                            The New College Residence offers campus accommodations at affordable rates. Booking is managed directly 
                            through the University of Toronto's summer accommodation system.
                          </p>
                        </div>

                        <div className="mt-4">
                          <motion.a 
                            href="https://utoronto.starrezhousing.com/StarRezPortalXNCSummer/0FE9F831/17/366/Home-University_of_Toront?UrlToken=C23E3B6A"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book Directly
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nearby Hotels Section */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Other Nearby Hotels</h3>
                    <p className="text-gray-700 mb-6">
                      Toronto offers many accommodation options within easy reach of the University of Toronto campus. 
                      Here are some additional hotels in the area:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900">Park Hyatt Toronto</h4>
                        <p className="text-gray-600 text-sm">5-10 minute walk to campus</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900">Kimpton Saint George Hotel</h4>
                        <p className="text-gray-600 text-sm">5-10 minute walk to campus</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900">Chelsea Hotel Toronto</h4>
                        <p className="text-gray-600 text-sm">15-20 minute walk to campus</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900">Marriott at CF Toronto Eaton Centre</h4>
                        <p className="text-gray-600 text-sm">20-15 minute walk to campus</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transportation Tips */}
                <div className="mt-10 bg-gray-50 rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Transportation Tips</h2>
                  <p className="text-gray-700 mb-4">
                    The University of Toronto's St. George campus is centrally located and accessible by various transportation options:
                  </p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-2">
                    <li>From Toronto Pearson International Airport (YYZ): Take the UP Express train to Union Station (~25 minutes), then either a short subway ride or a 35-minute walk to campus.</li>
                    <li>Public Transit: The campus is served by multiple TTC subway stations (St. George, Museum, Queen's Park) and streetcar/bus routes.</li>
                    <li>Biking: Toronto has a bike-share program (Bike Share Toronto) with stations throughout downtown, including on campus.</li>
                    <li>Ride-sharing services like Uber and Lyft are readily available throughout Toronto.</li>
                  </ul>
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

export default AccommodationsPage;