import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';
import image_path from '../Image/fantasy-7.jpg';
import image_path_1 from '../Image/fantasy-8.jpg';

// Register GSAP plugins only once
gsap.registerPlugin(ScrollTrigger);

// --- Component Definition (JSX, Logic, and Styles in One File) ---

const PublishingCalloutSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null); // Not used, but kept for context
  const imageRefs = useRef([]);

  // --- Framer Motion Variants for Text Stagger and Lighting Effect ---
  
  // Parent container for staggering
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Stagger words one by one
        delayChildren: 0.2,
      },
    },
  };

  // Child (word) variants for the lighting/scroll effect
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.98,
      textShadow: "0 0 0px #00c49a" // Initial dark state
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      textShadow: "0 0 8px #00c49a", // Light effect on reveal
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.4,
        ease: "power2.out"
      },
    },
  };

  // --- GSAP Logic for Image Parallax (Text GSAP is removed, replaced by Framer Motion) ---
  useEffect(() => {
    if (!containerRef.current) return;

    // Set up GSAP context for better cleanup
    const ctx = gsap.context(() => {
      
      // The original GSAP text animation timeline (tl) is removed here
      // because Framer Motion's whileInView handles the text entry.
      
      // 2. Image Parallax (Slight up-down movement on scroll)
      gsap.to(imageRefs.current, {
        y: -50,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8, // Slower scrubbing for subtle parallax
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- Framer Motion Variants for Image and Button (No Change) ---

  const imageContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.3,
        delay: 0.5 
      }
    }
  };

  const imageItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };
  
  const getStartedHover = {
    backgroundColor: '#00c49a',
    borderColor: '#00c49a',
    color: '#121212',
    ...buttonHover
  };
  
  const phoneButtonHover = {
    backgroundColor: '#121212',
    color: '#00c49a',
    borderColor: '#00c49a',
    ...buttonHover
  };

  // Helper to wrap the headline text for Framer Motion staggering (Word-by-Word)
  const wrapHeadline = (text) => {
    // Split the text into words and include spaces
    return text.split(' ').map((word, index) => (
      <React.Fragment key={index}>
        <motion.span 
          className="word-span"
          variants={wordVariants}
          style={{ display: 'inline-block' }} // Needed for animation
        >
          {word}
        </motion.span>
        {/* Add space after every word except the last one */}
        {index < text.split(' ').length - 1 && '\u00A0'}
      </React.Fragment>
    ));
  };
  
  // --- JSX Structure ---
  return (
    <div className='publishing-section-root' ref={containerRef}>
        <div className='content-wrapper'>
            
            {/* Left Content Area - NOW USING Framer Motion's whileInView */}
            <div className='text-container' ref={textRef}>
                <motion.h1 
                    className='headline'
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible" // Animation triggers when in view (scroll)
                    viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
                >
                  {wrapHeadline("READY TO PUBLISH")}
                  <br />
                  {wrapHeadline("MANUSCRIPT AND MAKE")}
                  <br />
                  {wrapHeadline("MARK IN LITERARY WORLD?")}
                </motion.h1>
                  
                <hr className='headline-divider' />
                
                <p className='sub-text'>
                    Our online manuscript writers can publish your manuscript and help you join the vibrant world of the literary industry today!
                </p>

                {/* Button Group (Using Framer Motion for Interaction) */}
                <div className='button-group'>
                    
                    <motion.a 
                        href="#" 
                        className='button get-started'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        whileHover={getStartedHover}
                    >
                        GET STARTED <FiArrowRight className="icon" />
                    </motion.a>
                    
                    <motion.a 
                        href="tel:888-284-2123" 
                        className='button phone-number'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        whileHover={phoneButtonHover}
                    >
                        888-284-2123
                    </motion.a>
                    
                </div>
            </div>
            
            {/* Right Image Area (No Change) */}
            <motion.div 
                className='image-container'
                variants={imageContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div 
                    className='book-image book-one' 
                    variants={imageItemVariants}
                    ref={el => (imageRefs.current[0] = el)}
                    style={{ backgroundImage: `url(${image_path})` }} 
                />
                <motion.div 
                    className='book-image book-two' 
                    variants={imageItemVariants}
                    ref={el => (imageRefs.current[1] = el)}
                    style={{ backgroundImage: `url(${image_path_1})` }}
                />
            </motion.div>
        </div>
    </div>
  );
};

// --- CSS Styles (Styled Components/Injected Styles for Single File) ---

const styles = `
.publishing-section-root {
  background-color: #121212; /* Very dark background */
  color: #fff;
  padding: 80px 40px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden; 
  font-family: 'Arial', sans-serif;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

/* --- Left Text Content --- */
.text-container {
  max-width: 550px;
  }
  
  .headline {
    font-size: 38px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

/* Ensure the word wrapper doesn't break inline */
.headline .word-span { 
    display: inline-block;
}


.headline-divider {
  width: 150px;
  border: 0;
  border-top: 3px solid #00c49a; /* Vibrant green line */
  margin-left: 0;
  margin-bottom: 30px;
}

.sub-text {
  font-size: 17px;
  line-height: 1.6;
  color: #ffffffff;
  margin-bottom: 40px;
}

/* --- Button Group --- */
.button-group {
  display: flex;
  gap: 20px;
}

.button {
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.get-started {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.phone-number {
  background-color: #00c49a;
  color: #121212;
  border: 2px solid #00c49a;
}
.icon {
    margin-left: 10px;
    font-size: 1.1rem;
}

/* --- Right Image Content --- */
.image-container {
  display: flex;
  gap: 30px;
  position: relative;
  z-index: 5;
}

.book-image {
  width: 200px; /* Standard book width */
  height: 300px; /* Standard book height */
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.book-one {
  transform: translateY(-20px); /* Initial slight offset */
}

.book-two {
  transform: translateY(20px); /* Initial slight offset */
}

/* --- Media Queries for Responsiveness --- */
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
    text-align: center;
  }
  .text-container {
    max-width: 100%;
  }
  .headline-divider {
    margin: 30px auto;
  }
  .button-group {
    justify-content: center;
  }
  .image-container {
    margin-top: 40px;
  }
}

@media (max-width: 576px) {
    .publishing-section-root {
        padding: 60px 20px;
    }
    .headline {
        font-size: 2rem;
    }
    .button-group {
        flex-direction: column;
    }
    .book-image {
        width: 150px;
        height: 225px;
    }
}
`;

// Inject styles into the head of the document
const StyleInjector = () => (
    <style dangerouslySetInnerHTML={{ __html: styles }} />
);

// Final Exportable Component
const FinalPublishingCalloutSection = () => (
    <>
        <StyleInjector />
        <PublishingCalloutSection />
    </>
);

export default FinalPublishingCalloutSection;