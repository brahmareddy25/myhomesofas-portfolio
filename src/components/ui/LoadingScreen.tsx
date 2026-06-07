'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Shimmer Effect Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-[300px] sm:w-[400px] h-[200px] overflow-hidden"
        >
          {/* Custom SVG Logo */}
          <Logo className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
          
          {/* Gold shimmer overlay */}
          <motion.div
            className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
