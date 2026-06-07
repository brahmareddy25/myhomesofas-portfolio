'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Full-screen Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          src="/Testimonials_board_with_reviews_202606041036.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Premium Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 via-transparent to-transparent" />
      </div>
      
      {/* Animated Content Overlay */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full h-full flex items-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-amber-500 uppercase text-sm mb-4 block font-medium"
          >
            Client Stories
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            Words of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Appreciation</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "6rem" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-amber-500/50 mb-6 rounded-full"
          />
          
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl drop-shadow-lg">
            Experience the comfort and luxury that our customers fall in love with. 
            Real stories from real homes transformed by our premium craftsmanship.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
