import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image_path from '../Image/fantasy-7.jpg';
import image_path_1 from '../Image/fantasy-8.jpg';

gsap.registerPlugin(ScrollTrigger);

const PublishingCalloutSection = () => {

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);

  // --- Framer Motion Variants (Preserved) ---
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.98,
      // textShadow: "0 0 0px #b8c0beff" 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      // textShadow: "0 0 8px #00c49a", 
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.4,
        ease: "power2.out"
      },
    },
  };

  // --- GSAP Logic (Preserved) ---
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRefs.current, {
        y: -50,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

  

  const wrapHeadline = (text) => {
    return text.split(' ').map((word, index, arr) => (
      <React.Fragment key={index}>
        <motion.span 
          className="word-span"
          variants={wordVariants}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
        {index < arr.length - 1 && '\u00A0'}
      </React.Fragment>
    ));
  };
  
  return (
    <div className="publishing-section-root" ref={containerRef}>
      <div className='content-wrapper'>
        <div className='text-container' ref={textRef}>
          <motion.h1 
            className='headline'
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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

          <div className='button-group'>
            <motion.a 
              href="tel:+1 929 322 1084" 
              className='button phone-number'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              
            >
              +1 929 322 1084
            </motion.a>
          </div>
        </div>
            
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


// --- Updated CSS (Now follows global dark mode) ---

const styles = `
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --sub-text-color: #444444;
  // --headline-color: #000000;
}

/* When global dark class is active */
body.dark,
html.dark,
.dark {
  --bg-color: #000000ff;
  --text-color: #ffffff;
  --sub-text-color: #ffffff;
  // --headline-color: #ffffff;
}


:root{
  --headline-color: #000000;   /* light mode = black */
}

[data-theme="dark"], .dark-mode{
  --headline-color: #ffffff;   /* dark mode = white */
}
.publishing-section-root {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 80px 40px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden; 
  font-family: 'Arial', sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease;
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

.text-container { max-width: 550px; }
  
.headline {
  font-size: 40px;
  color: var(--headline-color);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.headline .word-span { display: inline-block; }

.headline-divider {
  width: 150px;
  border: 0;
  border-top: 3px solid #000000ff;
  margin-left: 0;
  margin-bottom: 30px;
  color: var(--text-color);
}

.sub-text {
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 40px;
}

.button-group { display: flex; gap: 20px; }

.button {
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-number {
  background-color: #ffffffff;
  color: #121212;
  border: 2px solid #000000ff;
}
  .phone-number:hover
  {
  scale:1.1;
  background-color: #000000ff;
  color: #ffffffff;
  }

.image-container {
  display: flex;
  gap: 30px;
  position: relative;
  z-index: 5;
}

.book-image {
  width: 200px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
}

.book-one { transform: translateY(-20px); }
.book-two { transform: translateY(20px); }

@media (max-width: 992px) {
  .content-wrapper { flex-direction: column; text-align: center; }
  .text-container { max-width: 100%; }
  .headline-divider { margin: 30px auto; }
  .button-group { justify-content: center; }
  .image-container { margin-top: 40px; }
}

@media (max-width: 576px) {
  .publishing-section-root { padding: 60px 20px; }
  .headline { font-size: 2rem; }
  .button-group { flex-direction: column; }
  .book-image { width: 150px; height: 225px; }
}
`;

const StyleInjector = () => (
  <style dangerouslySetInnerHTML={{ __html: styles }} />
);

const FinalPublishingCalloutSection = () => (
  <>
    <StyleInjector />
    <PublishingCalloutSection />
  </>
);

export default FinalPublishingCalloutSection;
