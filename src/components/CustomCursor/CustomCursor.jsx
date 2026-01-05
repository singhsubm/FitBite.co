import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    // 1. Setup Move Logic (Lag-free)
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "power3" });

    // 2. Mouse Move Listener
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // 3. Hover Listeners (Jahan "view-product" class hogi wahan effect aayega)
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);

    // Ye logic un sab elements ko dhundega jinpe 'data-cursor="view"' laga hai
    // Hum event delegation use karenge taaki performance achi rahe
    const handleLinkHover = (e) => {
        if (e.target.closest('[data-cursor="view"]')) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    };
    
    window.addEventListener('mouseover', handleLinkHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  // 4. Animation for State Change (Normal vs Hover)
  useGSAP(() => {
    if (isHovered) {
      // Glassmorphism Big Circle State
      gsap.to(cursorRef.current, {
        width: 100,
        height: 100,
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Whitish transparent
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      // Show Text
      gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 0.3 });
    } else {
      // Normal Black Dot State
      gsap.to(cursorRef.current, {
        width: 16,
        height: 16,
        backgroundColor: "#000",
        backdropFilter: "blur(0px)",
        border: "none",
        duration: 0.3,
        ease: "power2.out"
      });
      // Hide Text
      gsap.to(textRef.current, { opacity: 0, scale: 0, duration: 0.2 });
    }
  }, [isHovered]);

  return (
    <div className='hidden lg:block'>
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
    >
      <span 
        ref={textRef} 
        className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0"
      >
        View More
      </span>
    </div>
    </div>
  );
};

export default CustomCursor;