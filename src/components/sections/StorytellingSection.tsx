'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorytellingSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const frameCount = 55;
  const currentFrame = (index: number) => 
    `/ezgif-2025e766b6413ffa-jpg/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Preload images
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          // Draw first frame once loaded
          renderImage(img);
        }
      };
      images.push(img);
    }

    const renderImage = (img: HTMLImageElement) => {
      // Calculate aspect ratio to cover canvas like object-fit: cover
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.width, img.height,
         centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    const seq = {
      frame: 0
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%', // Pin for 4 screen heights
        scrub: 1, // Smooth scrubbing
        pin: true,
      }
    });

    tl.to(seq, {
      frame: frameCount - 1,
      ease: 'none',
      onUpdate: () => {
        const frameIndex = Math.round(seq.frame);
        if (images[frameIndex]) {
          renderImage(images[frameIndex]);
        }
      }
    });

    // Story text animations within the timeline
    // We can animate text opacity/y based on timeline progress
    
    tl.fromTo('.story-text-1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.1)
      .to('.story-text-1', { opacity: 0, y: -50, duration: 0.1 }, 0.3)
      
      .fromTo('.story-text-2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.4)
      .to('.story-text-2', { opacity: 0, y: -50, duration: 0.1 }, 0.6)
      
      .fromTo('.story-text-3', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.7)
      .to('.story-text-3', { opacity: 0, y: -50, duration: 0.1 }, 0.9);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas for Video Sequence */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60"></canvas>
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black pointer-events-none" />

      {/* Storytelling Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        
        <div className="story-text-1 absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
          <span className="text-gold-accent tracking-[0.2em] uppercase text-sm mb-4">Our Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl leading-tight">
            Every sofa tells a story.
          </h2>
        </div>

        <div className="story-text-2 absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
          <span className="text-gold-accent tracking-[0.2em] uppercase text-sm mb-4">Craftsmanship</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl leading-tight">
            Built with passion.<br />Crafted with precision.
          </h2>
        </div>

        <div className="story-text-3 absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
          <span className="text-gold-accent tracking-[0.2em] uppercase text-sm mb-4">Legacy</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl leading-tight">
            Designed for generations.
          </h2>
        </div>

      </div>
    </section>
  );
}
