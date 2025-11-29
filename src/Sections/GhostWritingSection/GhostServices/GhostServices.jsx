import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

import image_path from '../Image/ghostwriting-updated-removebg-preview.png'

const BOOKS_IMAGE_PLACEHOLDER = image_path; 

// NOTE: Since this is a single file, we'll define a simple mock for the external hook.
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

// --- Data for the Bullet Points ---
const services = [
    ['Ghostwriting', 'Book Formatting'],
    ['eBook Writing', 'Book Marketing'],
    ['Book Editing', 'Book Cover Designs'],
];

// --- Framer Motion Variants for Staggered Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between child animations
      delayChildren: 0.2 // Initial delay before first child starts
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Use a spring animation for a natural feel
      damping: 10,
      stiffness: 100,
      duration: 0.7
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 2, // Initial rotation for the image
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 1
    },
  },
};

// --- CSS STYLES (INJECTED) ---

const BACKGROUND_COLOR = '#0A0F1F'; 

const CSS_STYLES = `
/* --- SECTION STYLES --- */
.ghostwriting-hero-section {
    background-color: ${BACKGROUND_COLOR}; 
    padding: 60px 0;
    position: relative;
    overflow: hidden; 
}

/* ------------------------------------------------------------------------ */
/* --- MAIN CONTENT CONTAINER STYLES (Framed by Framer Motion now) --- */
/* ------------------------------------------------------------------------ */
.ghost-content-container {
    display: flex;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 0 40px; 
    gap: 40px;
    align-items: center; 

    /* Removed previous opacity/transform transitions as Framer Motion will handle them */
}


/* --- LEFT TEXT AREA STYLES --- */
.ghost-hero-text-area {
    flex: 1; 
    max-width: 55%; 
}

.ghost-hero-title {
    font-size: 35px; 
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    color: #fff; 
}

.ghost-hero-description {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #ccc; 
}

/* --- SERVICE LIST --- */
.service-list-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 15px 30px; 
    margin-top: 20px;
}

.service-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #fff; 
}

.check-icon {
    color: #13FFAA; 
    font-weight: 900;
    font-size: 18px;
    margin-right: 10px;
}

/* --- RIGHT IMAGE AREA STYLES --- */
.ghost-hero-image-area {
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.books-collage {
    max-width: 100%; 
    height: auto;
    display: block;
    /* Static styles for realism and hover */
    /* ENHANCED SHADOW: More prominent and natural */
    filter: drop-shadow(0 25px 45px rgba(0, 0, 0, 0.9)); 
    /* Initial rotation now handled by Framer Motion */
    transition: transform 0.4s ease-out, filter 0.4s ease-out;
    cursor: pointer;
}

/* HOVER EFFECT (Preserved) */
.ghost-hero-image-area:hover .books-collage {
    transform: 
        translateY(-15px) 
        rotate(0deg)
        scale(1.03);
    filter: drop-shadow(0 40px 60px rgba(0, 0, 0, 1)); /* More intense shadow on hover */
}

/* --- CHAT BUTTON STYLES --- */
.chat-button-placeholder {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.chat-btn {
    background-color: #e54d2e; 
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
    .ghost-content-container {
        flex-direction: column;
        padding: 0 20px;
    }

    .ghost-hero-text-area {
        max-width: 100%;
        text-align: center;
    }
    
    .service-list-grid {
        grid-template-columns: 1fr; 
        justify-content: center;
    }
    
    .service-item {
        justify-content: center;
    }
    
    /* Disable complex hover effects on small screens */
    .books-collage,
    .ghost-hero-image-area:hover .books-collage {
        transform: none !important;
        filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.6)); /* Adjusted mobile shadow */
    }
}
`;

// Helper function to dynamically inject CSS styles
const injectStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('ghost-services-styles')) {
    const style = document.createElement('style');
    style.id = 'ghost-services-styles';
    style.textContent = CSS_STYLES;
    document.head.appendChild(style);
  }
};

injectStyles(); // Inject styles when the component file is loaded

// --- Component Definition ---

const GhostServices = () => {
    // We'll use the Intersection Observer to trigger Framer Motion animations
    const [contentRef, isContentVisible] = useIntersectionObserver({
        threshold: 0.15, 
    });
    
    return (
        <section className="ghostwriting-hero-section">
            <motion.div 
                ref={contentRef} // ATTACH THE REF TO THE MAIN MOTION CONTAINER
                className="ghost-content-container"
                variants={containerVariants}
                initial="hidden"
                animate={isContentVisible ? "visible" : "hidden"} // Animate when visible
            >
                
                {/* 1. Left Content Area (Text) - Each child uses itemVariants */}
                <div className="ghost-hero-text-area">
                    <motion.h1 className="ghost-hero-title" variants={itemVariants}>
                        Premium Ghostwriting Services <br />
                        Tailored To Your Needs
                    </motion.h1>
                    
                    <motion.p className="ghost-hero-description" variants={itemVariants}>
                        Are you looking for professional ghostwriting services to help share your story? Our
                        ghostwriting company is here to make it happen. We have a team of the best ghostwriters
                        for hire who excel at crafting everything from detailed narratives to tales of adventure or
                        stories of struggle and success. We'll help give your story the voice it deserves—one that
                        inspires and resonates with your audience.
                    </motion.p>
                    
                    {/* Bullet Points Grid - Also uses itemVariants, but each pair as one motion.div */}
                    <motion.div className="service-list-grid" variants={itemVariants}>
                        {services.map((pair, index) => (
                            <React.Fragment key={index}>
                                <div className="service-item">
                                    <span className="check-icon">✓</span> 
                                    <span className="service-name">{pair[0]}</span>
                                </div>
                                <div className="service-item">
                                    <span className="check-icon">✓</span> 
                                    <span className="service-name">{pair[1]}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>

                {/* 2. Right Image Area - Uses imageVariants */}
                <motion.div 
                    className="ghost-hero-image-area"
                    variants={imageVariants}
                    initial="hidden"
                    animate={isContentVisible ? "visible" : "hidden"}
                >
                    <img 
                        src={BOOKS_IMAGE_PLACEHOLDER} 
                        alt="Three professionally designed book covers" 
                        className="books-collage"
                    />
                </motion.div>
            </motion.div>
            
            {/* The Chat button is separate, you'll likely use a fixed position component for it */}
            <div className="chat-button-placeholder">
                <button className="chat-btn">Chat</button>
            </div>
            
        </section>
    );
};

export default GhostServices;