'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';

export default function AboutUsSection() {
  return (
    <section id="story" className="py-16 md:py-32 bg-dark-charcoal relative overflow-hidden">
      {/* Background image subtle overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop" 
          alt="Craftsmanship" 
          fill
          sizes="100vw"
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left side: Images */}
        <div className="w-full md:w-1/2 relative h-[500px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
              alt="Crafting" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border-4 border-black shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop" 
              alt="Premium Material" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gold-accent/20 mix-blend-overlay" />
          </motion.div>
        </div>

        {/* Right side: Text Content */}
        <div className="w-full md:w-1/2">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-accent tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8"
          >
            Dedicated to handcrafted comfort and timeless design.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-white/70 font-light text-lg leading-relaxed"
          >
            <p>
              We combine expert craftsmanship, premium materials, and customer-first service to create sofas that become the heart of every home. 
            </p>
            <p>
              Our journey began with a simple philosophy: furniture should be as beautiful as it is enduring. From selecting the finest woods to tailoring imported fabrics, every step in our process is meticulous.
            </p>
            <p className="text-white/90 font-medium">
              Our mission is to provide elegant furniture with exceptional quality and trusted service throughout India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 w-48 h-auto opacity-50 hover:opacity-100 transition-opacity duration-500"
          >
            <Logo className="w-full h-full" color="#ffffff" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
