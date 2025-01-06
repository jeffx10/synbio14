/*
* File: src/utils/animations.ts
* Description: Animation utility functions and variants for Framer Motion.
* Contains reusable animations for the conference website sections.
*/

import { Variants } from 'framer-motion'

// Section entrance animations
export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

// Stagger children animations (for grids and lists)
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Card hover animations
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
}

// Parallax scroll effect for hero section
export const parallaxScroll: Variants = {
  initial: { y: 0 },
  animate: (scrollProgress: number) => ({
    y: scrollProgress * 0.5
  })
}

// TODO: Add schedule tab transition animations
// TODO: Add mobile menu animations
// TODO: Add sponsor carousel animations
