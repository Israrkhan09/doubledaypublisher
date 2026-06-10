// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion'; // Import motion from framer-motion

// import Ghost_Image from '../Image/ghost-books-images.png'

// // --- Imports and Hook Mock (for single file use) ---

// // NOTE: We'll assume the image import path is correct when running in the project.
// const IMAGE_PATH = Ghost_Image; 

// // NOTE: Since this is a single file, we'll define a simple mock for the external hook.
// const useIntersectionObserverGhost = ({ threshold = 0.1 } = {}) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [threshold]);

//   return [ref, isVisible];
// };

// // --- Framer Motion Variants ---

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // Stagger delay for list items/paragraphs
//       delayChildren: 0.3 // Initial delay for text content
//     },
//   },
// };

// const textItemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//     },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, x: -100, rotate: -5 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     rotate: -3,
//     transition: {
//       type: "spring",
//       damping: 12,
//       stiffness: 80,
//       delay: 0.1 // Image starts slightly earlier than the text block
//     },
//   },
// };

// // --- CSS STYLES (INJECTED) ---

// // const BACKGROUND_COLOR = 'transparent'; 
// const BACKGROUND_COLOR_1 = '#0A0F1F'; // Dark theme color
// const ACCENT_COLOR = '#13FFAA'; // Bright color matching Aurora theme

// const CSS_STYLES = `
// /* --- SECTION STYLES --- */
// .ghostwriting-section {
//     padding: 80px 20px;
//     background-color: ${BACKGROUND_COLOR_1}; 
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden; 
// }

// /* --- MAIN CONTENT CONTAINER STYLES (Framer Motion handles entry animation) --- */
// .ghostwriting-content {
//     display: flex;
//     flex-wrap: wrap;
//     max-width: 1200px;
//     gap: 60px; 
//     align-items: center;
//     /* Removed old CSS scroll animation */
// }


// /* --- Image and Decorative Elements (Now handled by Framer Motion) --- */

// .image-wrapper {
//     flex: 1;
//     min-width: 350px;
//     max-width: 690px;
//     position: relative;
//     padding: 0; /* Remove excess padding, Framer motion handles transform */
// }

// .image-wrapper img {
//     max-width: 100%;
//     width: 690px;
//     height: 400px;
//     display: block;
//     z-index: 10;
//     position: relative; 
//     border-radius: 4px; 
    
//     /* ENHANCED SHADOW FOR DARK BG */
//     filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.9));
    
//     /* Remove CSS transforms and transitions as Framer Motion whileHover will handle them */
//     transition: none;
//     cursor: pointer;
// }

// /* Removed CSS pseudo-elements (::before, ::after) for a cleaner dark aesthetic */
// .image-wrapper::before,
// .image-wrapper::after {
//     display: none;
// }


// /* --- Text Content --- */

// .text-content {
//     flex: 2;
//     width: 450px;
//     min-width: 370px;
// }

// .text-content h2 {
//     font-size: 35px;
//     color: #ffffff; /* White text for dark background */
//     margin-bottom: 20px;
//     line-height: 1.2;
//     cursor: pointer; /* Indicates interactive hover effect */
// }

// .text-content p {
//     font-size: 14px;
//     color: #ccc; /* Light gray for body text */
//     line-height: 1.7;
//     margin-bottom: 18px;
// }

// .text-content ul {
//     list-style: none;
//     padding: 0;
//     margin-top: 20px;
// }

// .text-content ul li {
//     position: relative;
//     padding-left: 30px;
//     margin-bottom: 12px;
//     font-size: 14px;
//     color: #fff; /* White list item text */
//     line-height: 1.6;
// }

// .text-content ul li::before {
//     content: '✓';
//     position: absolute;
//     left: 0;
//     color: ${ACCENT_COLOR}; /* Bright accent color for checkmark */
//     font-size: 1.2em;
//     font-weight: bold;
//     top: 0;
// }

// /* Responsive adjustments */
// @media (max-width: 992px) {
//     .ghostwriting-content {
//         flex-direction: column;
//         align-items: center;
//     }

//     .image-wrapper,
//     .text-content {
//         width: 100%;
//         max-width: 600px;
//     }

//     .text-content h2 {
//         font-size: 2em;
//         text-align: center;
//     }

//     /* Keep shadow light on mobile */
//     .image-wrapper img {
//         filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.6));
//     }
// }
// `;

// // Helper function to dynamically inject CSS styles
// const injectStyles = () => {
//   if (typeof document !== 'undefined' && !document.getElementById('ghost-writing-styles')) {
//     const style = document.createElement('style');
//     style.id = 'ghost-writing-styles';
//     style.textContent = CSS_STYLES;
//     document.head.appendChild(style);
//   }
// };

// injectStyles(); 

// // --- Component Definition ---

// const GhostwritingSection = () => {
//     // 1. Call the custom hook to get the ref and visibility state for the FULL CONTENT CONTAINER
//     const [contentRef, isContentVisible] = useIntersectionObserverGhost({
//         threshold: 0.15, 
//     });
    
//     return (
//         <section className="ghostwriting-section">
//             <motion.div 
//                 ref={contentRef} 
//                 className="ghostwriting-content"
//                 initial="hidden"
//                 animate={isContentVisible ? "visible" : "hidden"}
//                 variants={containerVariants}
//             >
                
//                 {/* 1. Image Wrapper (Left) - Uses imageVariants and whileHover */}
//                 <motion.div 
//                     className="image-wrapper"
//                     variants={imageVariants}
//                     whileHover={{ 
//                         scale: 1.05, 
//                         rotate: 0, 
//                         y: -15,
//                         filter: "drop-shadow(0 35px 60px rgba(19, 255, 170, 0.5))" // Subtle color shadow on hover
//                     }}
//                     transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                 > 
//                     <img 
//                         src={IMAGE_PATH} 
//                         alt="An image representing the quality of ghostwriting services" 
//                     />
//                 </motion.div>
                
//                 {/* 2. Text Content (Right) - Staggered entrance */}
//                 <div className="text-content">
//                     <motion.h2 
//                         variants={textItemVariants}
//                         whileHover={{ color: ACCENT_COLOR, scale: 1.01 }} // Text hover effect
//                         transition={{ duration: 0.2 }}
//                     >
//                         What Makes Our Ghostwriting Company The Top Choice Today?
//                     </motion.h2>
                    
//                     <motion.p variants={textItemVariants}>
//                         Even the best authors occasionally rely on ghostwriters sometimes to meet strict deadlines or tackle the demands of their projects. In fact, you might be surprised to learn that certain parts of your favorite books were actually penned with the help of a ghostwriter.
//                     </motion.p>
//                     <motion.p variants={textItemVariants}>
//                         Our best ghostwriters for hire match the author’s voice, tone, and style so perfectly that it feels natural. They don’t only write, but they also make sure the story stays authentic to the author. Our ghost writing services stand out for a reason, and here’s what makes our team one of the most sought-after in the industry:
//                     </motion.p>
                    
//                     {/* List Items - Staggered */}
//                     <ul>
//                         <motion.li variants={textItemVariants}>Our team brings clarity and creativity to the content.</motion.li>
//                         <motion.li variants={textItemVariants}>We offer fresh ideas for writing, marketing, promoting, and book publishing services.</motion.li>
//                         <motion.li variants={textItemVariants}>We elevate the book’s quality by blending professional expertise with your objectives.</motion.li>
//                         <motion.li variants={textItemVariants}>We provide affordable ghostwriting services to help structure your ideas into a cohesive book.</motion.li>
//                         <motion.li variants={textItemVariants}>Our ghostwriting company offers new perspectives that make the book feel unique and mesmerizing.</motion.li>
//                         <motion.li variants={textItemVariants}>We refine and trim unnecessary content to improve the overall flow and quality.</motion.li>
//                     </ul>
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default GhostwritingSection;