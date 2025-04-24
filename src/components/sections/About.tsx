import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink, Navigation } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Two-Day Program",
      description: "Cutting-edge talks and posters showcasing the latest advances in synthetic biology"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Focused",
      description: "Connect with top researchers and industry leaders in synthetic biology across Canada"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "University of Toronto",
      description: "Held at Canada's leading academic institution in the heart of Toronto."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Social",
      description: "Network and connect with peers during our June 1st evening social event"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About SynBio7.0</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us for Canada's premier synthetic biology conference, bringing the research 
            community together to celebrate Canadian progress in this exciting and fast-growing field.
          </p>
          <p className="text-lg text-gray-500">
            Our goal is to promote collaborations and exchange of ideas between synthetic biology 
            research groups across Canada, fostering the next generation of innovations in the field.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Venue Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-10">Conference Venue</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Venue Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/myhal_auditorium.jpg" 
                alt="Myhal Centre Auditorium" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Venue Information */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-900">Myhal Centre for Engineering Innovation and Entrepreneurship</h4>
              <h5 className="text-xl text-blue-600">Margaret Lau Auditorium (MY150)</h5>
              
              <div className="space-y-4">
                {/* <p className="text-gray-700">
                  SynBio 7.0 will be hosted in the state-of-the-art Margaret Lau Auditorium, 
                  designed for interactive learning and collaboration. The venue features tiered seating 
                  arranged in tables to facilitate networking and discussion between participants.
                </p> */}
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-gray-600">55 St George St, Toronto, ON M5S 0C9</p>
                    <motion.a 
                      href="https://maps.app.goo.gl/sw3HM39b2E4pR2KU8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 text-sm hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Maps
                    </motion.a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Directions:</p>
                    <p className="text-gray-600">
                      Located on the University of Toronto's main campus, the Myhal Centre is easily 
                      accessible by public transit and is within walking distance of several parking facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;