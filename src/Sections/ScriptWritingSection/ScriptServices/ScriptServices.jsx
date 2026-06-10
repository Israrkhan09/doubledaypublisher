import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; 

import image_path from '../Images/bg-image-1.avif'

const BOOKS_IMAGE_PLACEHOLDER = image_path; 

const useIntersectionObserver = ({ threshold = 0.1 } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Lock to visible permanently and stop observing
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty deps — run once on mount only

  return [ref, isVisible];
};

const services = [
    ['Ghostwriting', 'Book Formatting'],
    ['eBook Writing', 'Book Marketing'],
    ['Book Editing', 'Book Cover Designs'],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
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
    rotate: 2,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 1
    },
  },
};

// --- CSS STYLES (MODERN THEME SUPPORT) ---
const CSS_STYLES = `
:root {
    --hero-bg: transparent;
    --hero-text: #ffffff;
}

/* Switches to White when the toggle button is active */
/* Note: Adjust .light-mode if your toggle uses a different class name */
.light-mode .ghostwriting-hero-section,
[data-theme='light'] .ghostwriting-hero-section {
    --hero-bg: #ffffff;
    --hero-text: #1a1a1a;
}

.ghostwriting-hero-section {
    background-color: var(--hero-bg); 
    padding: 60px 0;
    position: relative;
    overflow: hidden; 
    transition: background-color 0.4s ease, color 0.4s ease;
}

.script-content-container {
    display: flex;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 0 40px; 
    gap: 40px;
    align-items: center; 
}

.script-hero-text-area {
    flex: 1; 
    max-width: 55%; 
}

.script-hero-title {
    font-size: 35px; 
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 20px;
    color: #173F5F; 
}

@media (max-width: 1024px) {
    .script-hero-title {
        font-size: 30px;
    }
}

.script-hero-description {
    font-size: 17px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: var(--hero-text);
    opacity: 0.8;
}

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
    color: var(--hero-text); 
}

.check-icon {
    color: #13FFAA; 
    font-weight: 900;
    font-size: 18px;
    margin-right: 10px;
}

.script-hero-image-area {
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.books-collage {
    max-width: 100%; 
    height: 400px;
    display: block;
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3)); 
    transition: transform 0.4s ease-out, filter 0.4s ease-out;
    cursor: pointer;
}

/* Hover animation removed */

@media (max-width: 900px) {
    .script-content-container {
        flex-direction: column;
        padding: 0 20px;
    }
    .script-hero-text-area {
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
}
`;

const injectStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('script-services-styles')) {
    const style = document.createElement('style');
    style.id = 'script-services-styles';
    style.textContent = CSS_STYLES;
    document.head.appendChild(style);
  }
};

injectStyles();

const ScriptServices = () => {
    const [contentRef, isContentVisible] = useIntersectionObserver({
        threshold: 0.15, 
    });
    
    return (
        <section className="ghostwriting-hero-section">
            <motion.div 
                ref={contentRef} 
                className="script-content-container"
                variants={containerVariants}
                initial="hidden"
                animate={isContentVisible ? "visible" : "hidden"}
            >
                <div className="script-hero-text-area">
                    <motion.h1 className="script-hero-title" variants={itemVariants}>
                        Premium Script Writing Services
                        Crafted to Bring Your Vision to Life
                    </motion.h1>
                    
                    <motion.p className="script-hero-description" variants={itemVariants}>
                        Are you searching for expert script writing services to transform your ideas into a compelling screenplay?
                        Our professional scriptwriters are here to make it happen. From gripping dialogues to powerful scenes and unforgettable character arcs, we specialize in crafting scripts that captivate viewers and deliver emotional impact.
                    </motion.p>
                    
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

                <motion.div 
                    className="script-hero-image-area"
                    variants={imageVariants}
                    initial="hidden"
                    animate={isContentVisible ? "visible" : "hidden"}
                >
                    <img 
                        src={BOOKS_IMAGE_PLACEHOLDER} 
                        alt="Book cover mockup" 
                        className="books-collage"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ScriptServices;