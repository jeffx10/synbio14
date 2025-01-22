import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

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
        description: "Held at Canada's leading academic institution in the heart of downtown Toronto."
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
          <h2 className="text-4xl font-bold mb-6">About SynBio 7.0</h2>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
      </div>
    </section>
  );
};

export default About;