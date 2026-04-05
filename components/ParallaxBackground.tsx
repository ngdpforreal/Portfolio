'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background items moving at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Use a softer blur on a full screen wrapper instead of individual moving divs if possible,
  // or just use radial gradients which are extremely cheap and don't require blur filters.
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        {/* Glowing Orb 1 */}
        <motion.div
          style={{ y: y1, background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)' }}
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full"
        />
        
        {/* Glowing Orb 2 */}
        <motion.div
          style={{ y: y2, background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)' }}
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-[40%]"
        />

        {/* Glowing Orb 3 */}
        <motion.div
          style={{ y: y3, background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)' }}
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] rounded-[30%]"
        />
        
        {/* Glowing Orb 4 */}
        <motion.div
          style={{ y: y4, background: 'radial-gradient(circle, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0) 70%)' }}
          animate={{ rotate: -360, scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[30%] w-[30vw] h-[30vw] rounded-full"
        />
      </div>
    </div>
  );
}
