'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const stores = [
  {
    name: 'My Home Sofas Hyderabad',
    address: 'Plot No 101, Jubilee Hills Main Road, Hyderabad, Telangana 500033',
    mapLink: 'https://maps.google.com',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop', // Placeholder premium furniture store image
    hours: 'Mon - Sun: 10:00 AM - 9:00 PM',
  },
  {
    name: 'My Home Sofas Kakinada',
    address: 'Door No 8-45, Main Market Road, Kakinada, Andhra Pradesh 533001',
    mapLink: 'https://maps.google.com',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop', // Placeholder premium furniture store image
    hours: 'Mon - Sun: 10:00 AM - 8:30 PM',
  }
];

export default function StoreLocationsSection() {
  return (
    <section id="stores" className="py-16 md:py-24 bg-dark-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Visit Our Showrooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 font-light max-w-2xl mx-auto"
          >
            Experience the craftsmanship and comfort of our premium collections in person.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 perspective-1000">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-black border border-white/10 flex flex-col shadow-2xl preserve-3d transition-transform duration-500 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image Placeholder */}
              <div className="relative h-72 overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <Image 
                  src={store.image} 
                  alt={store.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-white mb-4">{store.name}</h3>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="w-5 h-5 text-gold-accent shrink-0 mt-1" />
                    <p className="font-light leading-relaxed">{store.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock className="w-5 h-5 text-gold-accent shrink-0" />
                    <p className="font-light">{store.hours}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-auto flex gap-4">
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.open(store.mapLink, '_blank')}
                  >
                    Get Directions
                  </Button>
                  <Button variant="outline" className="px-4">
                    <Phone className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
