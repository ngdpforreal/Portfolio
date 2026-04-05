'use client';

import { Mail, Github, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50/20 dark:bg-gray-800/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-12 bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl backdrop-blur-md inline-block">
            I'd love to hear from you! Whether you have a question or just want to say hi, 
            feel free to reach out.
          </p>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="mailto:naufalino@example.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.a>
            <motion.a 
              href="https://github.com/ngdpforreal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-800/90 dark:bg-gray-700 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <p className="mt-16 text-gray-800 dark:text-gray-300 flex items-center justify-center gap-2 font-medium bg-white/30 dark:bg-gray-800/40 px-6 py-3 rounded-full backdrop-blur-sm shadow-sm inline-flex mx-auto w-fit">
            © 2024 Naufalino Tuhfah T.K.W. Built with 
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            using Next.js
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}