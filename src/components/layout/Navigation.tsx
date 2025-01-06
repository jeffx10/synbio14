/*
* File: src/components/layout/Navigation.tsx
* Description: Main navigation component with responsive mobile menu.
* Handles site navigation and implements sticky header behavior.
*/

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/utils/constants'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <a href="#" className="text-xl font-bold text-gray-900">
            SynBio 7.0
          </a> */}

          <a href="#" className="flex items-center">
            <img 
              src="/images/logo.jpg" 
              alt="SynBio 7.0 Logo" 
              className="h-12 w-auto"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={
                    item.label === 'Register'
                      ? 'px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center'
                      : 'text-gray-600 hover:text-gray-900 transition-colors flex items-center'
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center justify-center w-full pt-2 pb-3 space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="w-full text-center">
                  <a
                    href={item.href}
                    className={
                      item.label === 'Register'
                        ? 'inline-block px-8 py-2 mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium hover:opacity-90 transition-opacity text-center min-w-[160px] max-w-[200px]'
                        : 'inline-block py-2 text-gray-600 hover:text-gray-900 transition-colors text-center w-full'
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation