/*
* File: src/utils/scroll.ts
* Description: Scroll handling utilities for smooth navigation.
* Manages smooth scrolling behavior and scroll-based animations.
*/
import React from 'react'

interface ScrollToSectionOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export const scrollToSection = (sectionId: string, options: ScrollToSectionOptions = {}) => {
  const { offset = 80, behavior = 'smooth' } = options;
  
  // Remove the '#' if it exists in the sectionId
  const targetId = sectionId.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: behavior
    });
  }
};

// Hook to get current scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  
  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  
  return scrollPosition;
};