'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: '+', label: 'Design Awards' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 50000, suffix: '+', label: 'Products Delivered' },
];

function Counter({ from, to, suffix, duration = 2 }: { from: number; to: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return (
    <div ref={nodeRef} className="text-4xl md:text-5xl font-serif text-white font-bold tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-24 bg-dark-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gold-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 glass-effect rounded-2xl min-w-[200px] hover:-translate-y-2 transition-transform duration-300"
            >
              <Counter from={0} to={item.value} suffix={item.suffix} />
              <p className="text-white/60 mt-2 text-sm uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
