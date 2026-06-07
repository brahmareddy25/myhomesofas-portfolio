'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main className="flex-1 w-full bg-black">
        {children}
      </main>
      <Footer />
    </>
  );
}
