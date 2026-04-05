'use client';

import { Code2, Sparkles, ArrowDown, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const yIconsFast = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yIconsSlow = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
      
      {/* Floating Background Icons Parallax */}
      <motion.div style={{ y: yIconsFast, opacity }} className="absolute top-[20%] left-[10%] opacity-20 dark:opacity-10 pointer-events-none will-change-transform">
        <Code2 className="w-32 h-32 text-blue-500" />
      </motion.div>
      <motion.div style={{ y: yIconsSlow, opacity }} className="absolute bottom-[20%] right-[10%] opacity-20 dark:opacity-10 pointer-events-none will-change-transform">
        <Rocket className="w-40 h-40 text-purple-500" />
      </motion.div>

      <motion.div style={{ y: yText, opacity, scale }} className="text-center px-4 w-full z-10 relative will-change-transform">
        {/* Animated Icon */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <div className="relative bg-white/40 dark:bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md shadow-lg border border-white/30 dark:border-gray-700/50">
            <Code2 className="w-24 h-24 text-blue-600 dark:text-blue-400" />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-10 h-10 text-yellow-500 absolute -top-4 -right-4" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animated Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-500 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-gray-900 dark:text-white">Naufalino</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-3 font-semibold tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Naufalino Tuhfah T.K.W
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          7th Grade Student at SMP Plus Cordova CIC
        </motion.p>

        {/* Modern Glassmorphic Pill */}
        <motion.div 
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center gap-3 bg-white/60 dark:bg-gray-800/60 py-4 px-8 rounded-full backdrop-blur-md border border-white/40 dark:border-gray-700/50 inline-flex shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        >
          Aspiring Web Developer
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </motion.div>

        {/* Animated Button */}
        <div>
          <motion.a 
            href="#about"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Learn More About Me
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 group-hover:text-yellow-300 transition-colors" />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-sm">
          <ArrowDown className="w-6 h-6 text-gray-800 dark:text-gray-200 animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
}