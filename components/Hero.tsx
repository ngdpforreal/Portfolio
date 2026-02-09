'use client';

import { Code2, Sparkles, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative">
      <div className="text-center px-4">
        {/* Animated Icon */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <div className="relative">
            <Code2 className="w-20 h-20 text-blue-600 dark:text-blue-400" />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animated Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Naufalino</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Naufalino Tuhfah T.K.W
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          7th Grade Student at SMP Plus Cordova CIC
        </motion.p>

        <motion.p 
          className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Aspiring Web Developer
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </motion.p>

        {/* Animated Button */}
        <motion.a 
          href="#about"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More About Me
          <Sparkles className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400 animate-bounce" />
      </motion.a>
    </section>
  );
}