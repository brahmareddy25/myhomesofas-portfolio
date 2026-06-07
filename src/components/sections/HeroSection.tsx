'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/Ultra_premium_luxury_sofa_adve.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="object-cover w-full h-full bg-dark-charcoal"
        />
        {/* Dark Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Floating Particles (Simple CSS animation approach combined with Framer Motion) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          // Simple deterministic pseudo-random generator to avoid SSR hydration mismatch
          const seededRandom = (seed: number) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
          };
          
          return (
            <motion.div
              key={i}
              className="absolute bg-gold-accent/20 rounded-full blur-sm"
              style={{
                width: (seededRandom(i * 1.1 + 1) * 8 + 4).toFixed(2) + 'px',
                height: (seededRandom(i * 1.2 + 2) * 8 + 4).toFixed(2) + 'px',
                left: (seededRandom(i * 1.3 + 3) * 100).toFixed(2) + '%',
                top: (seededRandom(i * 1.4 + 4) * 100).toFixed(2) + '%',
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Number((seededRandom(i * 1.5 + 5) * 10 + 10).toFixed(2)),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: 'easeOut' }} // Sync with LoadingScreen exit
          className="mb-6"
        >
          <span className="text-gold-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Welcome to the epitome of luxury
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            Crafted Comfort.<br />
            <span className="text-gradient">Designed For Life.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.8, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
        >
          Luxury sofas tailored to elevate every home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button size="lg" variant="primary">
            Explore Collection
          </Button>
          <Button size="lg" variant="outline">
            Visit Stores
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
