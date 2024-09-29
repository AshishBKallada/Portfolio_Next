'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface RandomMovingOverlayProps {
  letter?: string; 
}

const RandomMovingOverlay: React.FC<RandomMovingOverlayProps> = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createTween = () => {
      gsap.to(overlayRef.current!, {
        duration: 30,
        x: () => gsap.utils.random(0, window.innerWidth, 1),
        y: () => gsap.utils.random(0, window.innerHeight, 1),
        repeat: -1,
        //repeatDelay: 1, // Uncomment for a delay between repeats
        ease: "power1.inOut",
        repeatRefresh: true,
      });
    };

    const handleScroll = () => {
      overlayRef.current!.style.top = `${window.scrollY}px`; // Update top position based on scroll
    };

    createTween();

    window.addEventListener('scroll', handleScroll);

    return () => {
      gsap.killTweensOf(overlayRef.current!); // Clean up tweens on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [overlayRef]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="absolute h-12 w-12 bg-white rounded-full font-bold text-black">
        <p className='text-black items-center justify-center'>SKILLS</p>

      </div>
    </div>
  );
};

export default RandomMovingOverlay;