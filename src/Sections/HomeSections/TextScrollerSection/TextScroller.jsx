
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

// --- Utility Functions ---
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// --- Styles ---
const parallaxContainerStyle = {
  overflow: 'hidden',
  lineHeight: '0.8',
  margin: 0,
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center', 
  flexWrap: 'nowrap',
  backgroundColor: 'transparent', 
  padding: '20px 0',
  
  borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  cursor: 'default',
  willChange: 'transform',
};

const scrollerStyle = {
  fontWeight: 900,
  textTransform: 'uppercase',
  fontSize: 'clamp(2rem, 6vw, 5rem)', 
  display: 'flex',
  whiteSpace: 'nowrap',
  flexWrap: 'nowrap',
  color: '#ffffffff',
  letterSpacing: '-2px',
  textShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
  willChange: 'transform',
};

const spanStyle = {
  display: 'block',
  marginRight: '40px',
//   opacity: 0.5,
};

// --- Fixed ParallaxText Component ---
export const ParallaxText = ({ 
  children, 
  baseVelocity = 50, 
  isPaused, 
  onEnter, 
  onLeave 
}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
  const skewAngle = baseVelocity > 0 ? 3 : -3;
  const directionFactor = useRef(baseVelocity >= 0 ? 1 : -1);
  
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer - FIXED
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: '100px' // Start/stop animation slightly before entering/leaving viewport
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation Frame - ONLY runs when in view and not paused
  useAnimationFrame((t, delta) => {
    // CRITICAL FIX: Only animate when both in view AND not paused
    if (isInView && !isPaused) {
      const cappedDelta = Math.min(delta, 32);
      const moveBy = directionFactor.current * Math.abs(baseVelocity) * (cappedDelta / 1000);
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <div 
      ref={containerRef}
      style={parallaxContainerStyle} 
      onMouseEnter={onEnter} 
      onMouseLeave={onLeave}
      className="select-none"
    >
      <motion.div 
        style={{ 
          ...scrollerStyle, 
          x, 
          skewX: skewAngle 
        }}
      >
        <span style={spanStyle}>{children}</span>
        <span style={spanStyle}>{children}</span>
        <span style={spanStyle}>{children}</span>
      </motion.div>
    </div>
  );
};