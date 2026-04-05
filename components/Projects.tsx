'use client';

import { ExternalLink, Code2, Rocket, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxProjectCard = ({ children, index, containerRef }: { children: React.ReactNode, index: number, containerRef: React.RefObject<HTMLElement | null> }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100 - (index * 30), -100 + (index * 30)]);

  return (
    <motion.div style={{ y: yOffset }} className="h-full will-change-transform">
      {children}
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projects = [
    {
      title: "My Portfolio Website",
      description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features beautiful parallax effects and glassmorphism.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
      icon: Code2
    },
    {
      title: "Coming Soon",
      description: "I'm currently brainstorming and working on more exciting projects! Stay tuned to see what I build next.",
      tech: ["React", "JavaScript", "Node.js"],
      link: "#",
      icon: Rocket
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="down">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-500 text-center mb-16 pb-2">
            My Projects
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            // Removed backdrop-blur-xl and huge shadows for massive performance boost
            return (
              <ParallaxProjectCard key={project.title} index={index} containerRef={sectionRef}>
                <AnimatedSection 
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={0.1 + (index * 0.1)}
                >
                  <motion.div 
                    className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition duration-300 group h-full overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Decorative glow blob inside card - reduced blur */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col h-full relative z-10">
                      <div className="flex items-start gap-5 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-4 rounded-2xl shadow-inner border border-white/50 dark:border-gray-700/30"
                        >
                          <IconComponent className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white pt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg flex-grow leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech, i) => (
                          <motion.span 
                            key={tech}
                            className="bg-white/90 dark:bg-gray-900/80 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-100 dark:border-gray-700 shadow-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.a 
                        href={project.link}
                        className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold px-8 py-4 rounded-xl shadow-md transition duration-300 group/btn w-fit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatedSection>
              </ParallaxProjectCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}