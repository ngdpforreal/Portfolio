'use client';

import { useEffect, useState } from 'react';

export default function DynamicTitle() {
  const [currentSection, setCurrentSection] = useState('Home');

  useEffect(() => {
    const sections = [
      { id: 'hero', title: 'Home' },
      { id: 'about', title: 'About Me' },
      { id: 'skills', title: 'My Skills' },
      { id: 'projects', title: 'My Projects' },
      { id: 'contact', title: 'Contact' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => entry.target.id === s.id);
            if (section) {
              setCurrentSection(section.title);
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of section must be visible
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = `${currentSection} | Naufalino Portfolio`;
  }, [currentSection]);

  return null;
}