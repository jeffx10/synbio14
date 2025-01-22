/*
* File: src/components/layout/Footer.tsx
* Description: Site footer component with navigation and social links.
* Contains copyright information, social media links, and secondary navigation.
*/

import React from 'react';
import { Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONFERENCE_INFO, NAV_ITEMS, SOCIAL_LINKS } from '@/utils/constants';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterContentItem {
  icon: React.ReactNode;
  text: string;
}

interface FooterSection {
  title: string;
  links?: FooterLink[];
  content?: FooterContentItem[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   {
  //     icon: <Twitter className="w-5 h-5" />,
  //     href: SOCIAL_LINKS.twitter,
  //     label: 'Twitter'
  //   },
  //   {
  //     icon: <Linkedin className="w-5 h-5" />,
  //     href: SOCIAL_LINKS.linkedin,
  //     label: 'LinkedIn'
  //   },
  //   {
  //     icon: <Github className="w-5 h-5" />,
  //     href: 'https://github.com/synbio',
  //     label: 'GitHub'
  //   }
  // ];

  const footerSections: FooterSection[] = [
    {
      title: 'Quick Links',
      links: NAV_ITEMS.map(item => ({
        label: item.label,
        href: item.href
      }))
    },
    {
      title: 'Contact',
      content: [
        {
          icon: <Mail className="w-5 h-5" />,
          text: 'synbiocanadaconference@gmail.com'
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          text: `${CONFERENCE_INFO.venue.name}`
        }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7x1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{CONFERENCE_INFO.name}</h2>
            <p className="text-gray-400">
              {CONFERENCE_INFO.description}
            </p>
            <div className="flex space-x-4">
              {/* {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))} */}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {footerSections[0].title}
            </h3>
            <ul className="space-y-2">
              {footerSections[0].links?.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {footerSections[1].title}
            </h3>
            <ul className="space-y-4">
              {footerSections[1].content?.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <span className="mt-1 flex-shrink-0">{item.icon}</span>
                  <span className="break-all">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                         text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium 
                         hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {currentYear} {CONFERENCE_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;