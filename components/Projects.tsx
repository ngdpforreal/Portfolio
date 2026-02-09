'use client';

import { ExternalLink, Code2, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "My Portfolio Website",
      description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      icon: Code2
    },
    {
      title: "Coming Soon",
      description: "I'm working on more exciting projects! Stay tuned.",
      tech: ["React", "JavaScript"],
      link: "#",
      icon: Rocket
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Projects
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <AnimatedSection 
                key={project.title} 
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.2 + (index * 0.1)}
              >
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 group h-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
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
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}