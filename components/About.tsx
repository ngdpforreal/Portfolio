'use client';

import { GraduationCap, Code2, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "7th Grade Student",
      description: "SMP Plus Cordova CIC"
    },
    {
      icon: Code2,
      title: "Passion",
      subtitle: "Web Development",
      description: "Building the Future"
    },
    {
      icon: Rocket,
      title: "Goal",
      subtitle: "Full-Stack Developer",
      description: "Continuous Learning"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Animated Title */}
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
        </AnimatedSection>
        
        {/* Animated Paragraphs */}
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <AnimatedSection direction="left" delay={0.2}>
            <p>
              Hello! I'm <strong className="text-blue-600 dark:text-blue-400">Naufalino Tuhfah T.K.W</strong>, 
              a 7th grade student at <strong>SMP Plus Cordova CIC</strong>. 
              I'm passionate about web development and technology.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.3}>
            <p>
              At my age, I'm already exploring the exciting world of coding, learning how to build 
              websites and applications. I believe that technology is the future, and I want to be 
              part of creating it.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.4}>
            <p>
              Currently, I'm learning <strong>Next.js</strong>, <strong>React</strong>, and 
              <strong> TypeScript</strong> to build modern, fast, and beautiful websites. 
              This portfolio itself is built with Next.js!
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.5}>
            <p>
              When I'm not coding, I enjoy learning new technologies, watching tech tutorials, 
              and challenging myself with coding problems.
            </p>
          </AnimatedSection>
        </div>

        {/* Animated Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <AnimatedSection 
                key={card.title} 
                direction="up" 
                delay={0.6 + (index * 0.1)}
              >
                <motion.div 
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{card.subtitle}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}