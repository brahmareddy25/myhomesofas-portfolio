"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const materialsData = [
  {
    id: 'latex',
    name: 'Latex Premium',
    description: 'Our aerated latex foam blocks provide unparalleled breathable support. Naturally hypoallergenic and perfectly balanced for luxury comfort.',
    video: '/3DVideos/latex3D.mp4',
  },
  {
    id: 'wood',
    name: 'Solid Wood',
    description: 'We use only the finest kiln-dried solid wood for our frames, ensuring decades of structural integrity and stability.',
    video: '/3DVideos/wood3D.mp4',
  },
  {
    id: 'cushion',
    name: 'Plush Cushion Core',
    description: 'Engineered with memory foam layers and premium down feathers for a cloud-like seating experience that retains its shape.',
    video: '/3DVideos/cushion3D.mp4',
  },
  {
    id: 'leather',
    name: 'Premium Leather',
    description: 'Sourced globally, our premium leather offers rich textures, vibrant colors, and extreme durability against daily wear.',
    video: '/3DVideos/Leather3D.mp4',
  }
];

export default function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState(materialsData[0]);

  return (
    <section className="py-32 bg-white text-neutral-900 overflow-hidden relative" id="materials">
      
      {/* Decorative Parallax Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-neutral-900 tracking-tight">Premium Materials</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Discover the high-quality components that go into crafting our luxury sofas and beds. 
            Click a material to explore.
          </p>
        </motion.div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Material Selection List (Left side) with Staggered Animation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="lg:col-span-5 space-y-5"
          >
            {materialsData.map((material) => (
              <motion.button
                key={material.id}
                onClick={() => setActiveMaterial(material)}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${
                  activeMaterial.id === material.id 
                    ? 'bg-white border-l-4 border-amber-600 shadow-[0_20px_50px_rgba(0,0,0,0.08)] scale-[1.02]' 
                    : 'bg-neutral-50/50 border border-neutral-100 hover:bg-white hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${activeMaterial.id === material.id ? 'text-amber-600' : 'text-neutral-800'}`}>
                  {material.name}
                </h3>
                <AnimatePresence>
                  {activeMaterial.id === material.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-600 leading-relaxed">
                        {material.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </motion.div>

          {/* 3D Material Viewer (Right side) */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden perspective-1000">
            
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeMaterial.id}
                initial={{ opacity: 0, scale: 0.7, x: 80, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -80, rotateY: -15, filter: "blur(10px)" }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.6, type: "spring", bounce: 0.4 },
                  x: { duration: 0.6, type: "spring", bounce: 0.3 },
                  rotateY: { duration: 0.6, type: "spring" }
                }}
                className="relative w-full h-full flex items-center justify-center p-4 absolute inset-0 transform-style-3d"
              >
                {/* Continuous Floating/Levitation Animation for the Video */}
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    rotateX: [2, -2, 2],
                    rotateY: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 6, 
                    ease: "easeInOut",
                    repeat: Infinity 
                  }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  {/* Subtle dynamic shadow under the floating object */}
                  <motion.div 
                    animate={{ 
                      scale: [0.8, 1, 0.8],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    className="absolute -bottom-8 w-1/2 h-12 bg-black/10 blur-xl rounded-[100%]"
                  />

                  {/* 3D Video */}
                  <video 
                    src={activeMaterial.video} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-full max-h-full object-contain relative z-10"
                    style={{ 
                      mixBlendMode: 'multiply',
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)'
                    }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Instruction Overlay Removed per request */}
          </div>
        </div>
      </div>
    </section>
  );
}
