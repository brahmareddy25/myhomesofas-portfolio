'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Settings, Maximize, Briefcase, Ruler, PenTool, Truck, ArrowRight, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Custom Manufacturing',
    icon: <PenTool className="w-8 h-8" />,
    description: 'Bespoke designs tailored to your exact vision. Choose your fabric, dimensions, and cushioning for a one-of-a-kind masterpiece.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'L Shape Sofas',
    icon: <Maximize className="w-8 h-8" />,
    description: 'Maximize your living area with our luxurious L-shape sectionals. Perfect for large families and modern open-plan homes.',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Luxury Recliners',
    icon: <Settings className="w-8 h-8" />,
    description: 'Experience ultimate relaxation with our motorized and manual premium recliners built with ergonomic support.',
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Modular Systems',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Adaptable furniture systems that grow and change with your lifestyle. Reconfigure your layout effortlessly.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Office Furniture',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Elevate your workspace with executive sofas and lounge seating designed to impress clients and comfort employees.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Home Measurements',
    icon: <Ruler className="w-8 h-8" />,
    description: 'Our experts visit your home to take precise measurements, ensuring your new furniture fits perfectly into your space.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Repair & Refurbish',
    icon: <ShieldCheck className="w-8 h-8" />,
    description: 'Breathe new life into your beloved furniture. We offer professional reupholstery and structural repair services.',
    image: 'https://images.unsplash.com/photo-1605276374104-162f154bfb28?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Pan India Delivery',
    icon: <Truck className="w-8 h-8" />,
    description: 'Safe, secure, and white-glove delivery directly to your doorstep, no matter where you are located in India.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-accent tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-white max-w-lg leading-tight"
            >
              Tailored services for your perfect space
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/60 font-light max-w-sm">
              Hover over our core offerings below to discover how we transform concepts into luxurious reality.
            </p>
          </motion.div>
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full h-[320px] md:h-[320px] min-h-[320px] group cursor-pointer perspective-1000"
            >
              <div tabIndex={0} className="w-full h-full relative preserve-3d transition-transform duration-700 ease-out md:group-hover:rotate-y-180 group-focus:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-dark-charcoal border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black border border-white/5 flex items-center justify-center text-gold-accent mb-6 shadow-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white">
                    {service.title}
                  </h3>
                  <div className="mt-8 flex items-center gap-2 text-white/40 text-sm font-medium tracking-wider uppercase">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-black border border-gold-accent/30 rounded-2xl overflow-hidden shadow-2xl shadow-gold-accent/10 flex flex-col items-center justify-center">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover opacity-20" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
                    <h3 className="text-xl font-serif text-gold-accent mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button className="text-white uppercase tracking-widest text-xs border-b border-gold-accent pb-1 w-max hover:text-gold-accent transition-colors relative z-20">
                      Learn More
                    </button>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
