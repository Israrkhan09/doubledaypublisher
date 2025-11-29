import React, { useRef, useLayoutEffect, createContext, useContext, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// --- CONFIGURATION ---
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// The Intersection Observer hook is external, we'll define a simple mock for the single file.
const useIntersectionObserver = ({ threshold = 0.1 } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// --- CSS STYLES (INJECTED) ---

const CSS_STYLES = `
/* Inject the Aurora styles for the R3F components */
.stars-canvas-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* --- Ghost Hero Section Container --- */
.ghost-container {
      display: grid; 
    place-items: center; /* Centers content both horizontally and vertically */
    
    text-align: center;
    padding: 100px 50px;
    min-height: 85vh;

    position: relative;
    background-color: transparent; /* Must be transparent to see GlobalAurora */
    color: white;
    overflow: hidden;
    z-index: 10; 
}


/* Dark Overlay (REMOVED for clear visibility) */
.ghost-container::after {
    content: "";
    position: absolute;
    inset: 0;
    /* This background is set to fully transparent to allow the Aurora to show */
    background: transparent; 
    z-index: 1; 
}

/* Hero Content Styling (Centered Layout) */
.ghost-hero-content {
    z-index: 2; /* Content must be the highest z-index */
    max-width: 700px;
    padding: 0 20px;
    margin: auto; 
    position: relative;
}

.ghost-title {
    font-size: 37px;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 25px;
    color: white;
    /* Optional: Add text shadow for better visibility against bright spots */
    text-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
}

.ghost-description {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 40px;
    color: white;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    /* Optional: Add text shadow for better visibility against bright spots */
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
}

/* --- Buttons (Remaining Styles) --- */
.ghost-hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.ghost-hero-btn {
    padding: 14px 30px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    text-transform: uppercase;
    z-index: 2;
}

.btn-primary {
    background-color: #ffffffff;
    color: black;
}

.btn-primary:hover {
    background-color: #ffffffff;
    transform: translateY(-3px);
}

.btn-secondary {
    background-color: transparent;
    border: 2px solid white;
    color: white;
}

.btn-secondary:hover {
    background-color: white;
    color: #e54d2e;
    transform: translateY(-3px);
}


/* ================================== */
/* ( CONTENT ANIMATION ) CSS         */
/* ================================== */

/* --- Content Animation Initial State --- */
.reveal-item {
    transform: translateY(40px);
    transition: all 1s ease-out;
}

/* Delay for staggering effect */
.ghost-title { transition-delay: 0s; }
.ghost-description { transition-delay: 0.3s; }
.ghost-hero-buttons { transition-delay: 0.6s; }


/* --- Content Animation Final State (Triggered by Intersection Observer) --- */
.is-visible .reveal-item {
    transform: translateY(0);
}

/* --- Responsive Adjustments --- */
@media (max-width: 1024px) {
    .ghost-title { font-size: 3rem; }
    .ghost-description { font-size: 1.2rem; }
}

@media (max-width: 768px) {
    .ghost-container {
        padding: 80px 20px;
        min-height: 100vh;
    }
    .ghost-title { font-size: 2.2rem; }
    .ghost-description { font-size: 1.1rem; }
    .ghost-hero-buttons {
        flex-direction: column;
        gap: 15px;
    }
}
`;

// Helper function to dynamically inject CSS styles
const injectStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('ghost-hero-aurora-styles')) {
    const style = document.createElement('style');
    style.id = 'ghost-hero-aurora-styles';
    style.textContent = CSS_STYLES;
    document.head.appendChild(style);
  }
};

injectStyles();

// --- Aurora Background Logic (Integrated) ---

/**
 * Component to handle the animating radial gradient and stars background.
 */
const AuroraBackground = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate the color MotionValue
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Use the animated color to drive the radial gradient background
  // Note: Using a very dark color for the center to mimic the night sky and contrast the Aurora.
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #01040f 50%, ${color})`;

  return (
    <motion.div
      className="stars-canvas-wrapper"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Z-index is 0, behind everything
        backgroundColor: "#01040f", // Darker base color
        backgroundImage,
        overflow: "hidden",
      }}
    >
      <div className="stars-canvas-wrapper">
        <Canvas>
          <Stars radius={50} count={2000} factor={4} fade speed={2} /> 
        </Canvas>
      </div>
    </motion.div>
  );
};


// --- Hero Section Component ---

const GhostHeroAurora = () => {
    const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section
            ref={heroRef}
            className={`ghost-container ${isVisible ? 'is-visible' : ''}`}
        >
            <AuroraBackground /> 
            
            <div className="ghost-hero-content">
                <h1 className="reveal-item fade-up ghost-title">
                    Professional Ghostwriting To Turn Your Ideas Into Narratives
                </h1>
                
                <p className="reveal-item fade-up ghost-description">
                    Writing a novel takes time, averaging around 475 hours. With our ghostwriting services, our team of expert writers takes on this big commitment, making it easier for you to share your story. They handle the tough parts with care, shaping your narrative to stay true to your voice.
                </p>

                <div className="reveal-item fade-up ghost-hero-buttons">
                    <button className="ghost-hero-btn btn-primary">Call Now</button>
                    <button className="ghost-hero-btn btn-secondary">Get Free Consultation</button>
                </div>
            </div>
        </section>
    );
};

export default GhostHeroAurora;