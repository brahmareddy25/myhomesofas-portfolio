'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
