import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import Ghost_Image from '../Images/book-image.png';

const IMAGE_PATH = Ghost_Image; 

const useIntersectionObserverGhost = ({ threshold = 0.1 } = {}) => {
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

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
};

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3 
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100, rotate: -5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: -3,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      delay: 0.1 
    },
  },
};

// --- CSS STYLES (UPDATED FOR TRANSPARENT TO WHITE) ---
const ACCENT_COLOR = '#13FFAA'; 

const CSS_STYLES = `
:root {
    --ghost-bg: transparent;
    --ghost-text: #ffffff;
}

/* Switches to White Background and Dark Text in Light Mode */
.light-mode .script-writing-section,
[data-theme='light'] .script-writing-section {
    --ghost-bg: #F7F9FC;
    --ghost-text: #1a1a1a;
}

.script-writing-section {
    padding: 80px 20px;
    background-color: var(--ghost-bg); 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    transition: background-color 0.4s ease, color 0.4s ease;
}

.script-writing-content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 60px; 
    align-items: center;
}

.image-wrapper {
    flex: 1;
    min-width: 350px;
    max-width: 720px;
    position: relative;
}

.image-wrapper img {
    max-width: 100%;
    width: 690px;
    height: auto;
    display: block;
    z-index: 10;
    position: relative; 
    border-radius: 4px; 
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
    cursor: pointer;
}

.text-content {
    flex: 2;
    width: 450px;
    min-width: 370px;
}

.text-content h2 {
    font-size: 35px;
    font-weight: 600;
    color: var(--headline-color, #173F5F); 
    margin-bottom: 20px;
    line-height: 1.2;
    transition: color 0.4s ease;
}

@media (max-width: 1024px) {
    .text-content h2 {
        font-size: 30px;
    }
}

.text-content p {
    font-size: 17px;
    color: var(--ghost-text);
    opacity: 0.9;
    line-height: 1.7;
    margin-bottom: 18px;
    transition: color 0.4s ease;
}

.text-content ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

.text-content ul li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    font-size: 17px;
    color: var(--ghost-text);
    line-height: 1.6;
    transition: color 0.4s ease;
}

.text-content ul li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${ACCENT_COLOR};
    font-size: 1.2em;
    font-weight: bold;
    top: 0;
}

@media (max-width: 992px) {
    .script-writing-content {
        flex-direction: column;
        align-items: center;
    }
    .image-wrapper, .text-content {
        width: 100%;
        max-width: 600px;
    }
}
`;

const injectStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('script-writing-styles')) {
    const style = document.createElement('style');
    style.id = 'script-writing-styles';
    style.textContent = CSS_STYLES;
    document.head.appendChild(style);
  }
};

injectStyles(); 

const ScriptwritingSection = () => {
    const [contentRef, isContentVisible] = useIntersectionObserverGhost({
        threshold: 0.15, 
    });
    
    return (
        <section className="script-writing-section">
            <motion.div 
                ref={contentRef} 
                className="script-writing-content"
                initial="hidden"
                animate={isContentVisible ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div 
                    className="image-wrapper"
                    variants={imageVariants}
                > 
                    <img 
                        src={IMAGE_PATH} 
                        alt="Script-writing quality representation" 
                    />
                </motion.div>
                
                <div className="text-content">
                    <motion.h2 variants={textItemVariants}>
                        What Makes Our script-writing Company The Top Choice Today?
                    </motion.h2>
                    
                    <motion.p variants={textItemVariants}>
                        Our expert scriptwriters for hire capture your vision, tone, and storytelling style so seamlessly that every scene feels authentically yours. They don’t just write—they shape your ideas into powerful, engaging scripts while preserving the heart of your story.
                    </motion.p>
                    
                    <ul>
                        {[
                          "Our team brings clarity, creativity, and cinematic depth to every script.",
                          "We develop fresh concepts, plot ideas, and character arcs tailored to your vision.",
                          "We elevate your script’s quality by blending industry expertise with your storytelling goals.",
                          "We offer affordable script-writing services that structure your ideas into a compelling screenplay.",
                          "Our scriptwriters provide unique perspectives that make your screenplay captivating.",
                          "We refine pacing, dialogues, and scenes to enhance the narrative flow."
                        ].map((text, i) => (
                          <motion.li key={i} variants={textItemVariants}>
                            {text}
                          </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default ScriptwritingSection;