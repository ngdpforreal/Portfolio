'use client';

import { 
  Globe, 
  Palette, 
  Zap, 
  Atom, 
  Triangle, 
  BookOpen, 
  Wind, 
  Github 
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "HTML", level: "Intermediate", Icon: Globe },
    { name: "CSS", level: "Intermediate", Icon: Palette },
    { name: "JavaScript", level: "Learning", Icon: Zap },
    { name: "React", level: "Learning", Icon: Atom },
    { name: "Next.js", level: "Learning", Icon: Triangle },
    { name: "TypeScript", level: "Beginner", Icon: BookOpen },
    { name: "Tailwind CSS", level: "Learning", Icon: Wind },
    { name: "Git & GitHub", level: "Beginner", Icon: Github },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Skills
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.Icon;
            return (
              <AnimatedSection 
                key={skill.name} 
                direction="up" 
                delay={index * 0.1}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-14 h-14 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {skill.level}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={0.8}>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-12 italic flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Always learning and improving!
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}