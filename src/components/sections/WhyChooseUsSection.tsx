'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Ruler, ShieldCheck, Truck, MapPin, Gem } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-gold-accent" />,
    title: 'Expert Consultation',
    shortDescription: 'Friendly staff to guide your choices.',
    description: 'Our experienced interior experts help you select the perfect sofa tailored to your taste, lifestyle, and comfort needs. We believe in consultative, pressure-free service.'
  },
  {
    icon: <Ruler className="w-8 h-8 text-gold-accent" />,
    title: 'Home Measurement',
    shortDescription: 'Precision fitting for your space.',
    description: 'Avoid the guesswork. Our team visits your home to take precise measurements, ensuring your new luxury modular or L-shape sofa fits flawlessly into your floor plan.'
  },
  {
    icon: <Gem className="w-8 h-8 text-gold-accent" />,
    title: 'Premium Materials',
    shortDescription: 'Sustainably sourced, luxury grade.',
    description: 'Built with high-quality sustainably sourced teak woods, high-density memory foams, and imported Italian fabrics that guarantee longevity and unparalleled comfort.'
  },
  {
    icon: <Truck className="w-8 h-8 text-gold-accent" />,
    title: 'White-Glove Delivery',
    shortDescription: 'Delivered by our own trained team.',
    description: 'No third-party mishandling. Our trained professionals deliver directly to your living room, unbox, assemble, and place your furniture exactly where you want it.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold-accent" />,
    title: 'Lifetime Warranty',
    shortDescription: 'Guaranteed structural integrity.',
    description: 'We stand by our craftsmanship. Every sofa frame comes with a lifetime structural warranty, giving you complete peace of mind with your luxury investment.'
  },
  {
    icon: <MapPin className="w-8 h-8 text-gold-accent" />,
    title: 'Pan India Presence',
    shortDescription: 'Delivering luxury across the nation.',
    description: 'Whether you are in Mumbai, Delhi, or Bangalore, our premium delivery network ensures your bespoke furniture reaches you safely and on time across all major cities.'
  }
];

export default function WhyChooseUsSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="why-us" className="py-16 md:py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-accent tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            The My Home Sofas Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-light max-w-2xl mx-auto"
          >
            Experience furniture buying elevated to an art form. Hover over the cards to see what sets our premium service apart.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full h-[320px] md:h-[280px] min-h-[320px] md:min-h-[280px] group cursor-pointer perspective-1000"
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <div className={`w-full h-full relative preserve-3d transition-transform duration-700 ease-out md:group-hover:rotate-x-180 ${flippedIndex === index ? 'rotate-x-180' : ''}`}>
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-dark-charcoal border border-white/5 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
                  <div className="mb-6 p-5 rounded-2xl bg-black/50 border border-white/5 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-white font-serif mb-2">{feature.title}</h3>
                  <p className="text-gold-accent/80 font-light text-sm">
                    {feature.shortDescription}
                  </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-x-180 bg-gold-accent rounded-2xl p-8 flex flex-col justify-center text-center shadow-2xl shadow-gold-accent/20">
                  <h3 className="text-2xl text-black font-serif mb-4">{feature.title}</h3>
                  <p className="text-black/80 font-medium leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
