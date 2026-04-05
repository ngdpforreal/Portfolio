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
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSkillCard = ({ children, index, containerRef }: { children: React.ReactNode, index: number, containerRef: React.RefObject<HTMLElement | null> }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const row = Math.floor(index / 4);
  const col = index % 4;
  // Parallax formula: stagger by row and column
  const yOffset = useTransform(scrollYProgress, [0, 1], [100 - (row * 30 + col * 20), -50 + (row * 30 + col * 20)]);

  return (
    <motion.div style={{ y: yOffset }} className="h-full will-change-transform">
      {children}
    </motion.div>
  );
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50/30 dark:bg-gray-800/20 backdrop-blur-sm border-y border-white/20 dark:border-gray-700/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Skills
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.Icon;
            return (
              <ParallaxSkillCard key={skill.name} index={index} containerRef={sectionRef}>
                <AnimatedSection 
                  direction="up" 
                  delay={index * 0.1}
                >
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/40 dark:border-gray-700/50 hover:shadow-xl transition duration-300 text-center group cursor-pointer"
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
              </ParallaxSkillCard>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={0.8}>
          <p className="text-center text-gray-800 dark:text-gray-300 mt-16 italic flex items-center justify-center gap-2 font-medium bg-white/40 dark:bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm shadow-sm inline-flex mx-auto w-fit">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Always learning and improving!
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}