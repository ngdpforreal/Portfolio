'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
    
    // Alternative: smooth scroll
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Force scroll to top on mount
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null; // Component ini tidak render apa-apa
}