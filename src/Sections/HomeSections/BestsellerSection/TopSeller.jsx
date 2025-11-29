import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import image_path from '../BestsellerSection/image/book-1.jpg'

// --- Screen Size Hook for Responsiveness ---
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

// --- Styles ---
const getStyles = (isMobile) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    padding: isMobile ? '40px 0' : '80px 0',
    // margin: '20px 0 0 0',
    // marginTop:'80px',
    paddingTop:'110px',
    paddingBottom:'90px',

    backgroundColor: 'rgba(5, 10, 20, 0.4)',
    // backgroundImage: 'linear-gradient(to bottom, rgba(5, 10, 20, 0.4) 0%, rgba(15, 25, 40, 0.4) 100%)',
    // boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(254, 240, 138, 0.15) inset',

    // borderRadius: '0',
    // borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    minHeight: '400px',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: isMobile ? 'center' : 'left',
  },
  contentSection: {
    flex: 1,
    padding: isMobile ? '0 20px' : '0 60px',
    marginBottom: isMobile ? '40px' : '0',
    textAlign: isMobile ? 'center' : 'left',
    maxWidth: isMobile ? '100%' : '550px',
    color: '#0156ffff',
    zIndex: 2,
  },
  imageSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: isMobile ? '100%' : '450px',
    perspective: '1000px',
  },
  featuredLabel: {
    fontSize: '18px',
    marginBottom: '5px',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#9ca3af',
  },
  starHeading: {
    fontSize: isMobile ? '1rem' : '1.2rem',
    marginBottom: isMobile ? '15px' : '25px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#fef08a',
    textShadow: '0 0 8px rgba(254, 240, 138, 0.7)',
  },
  bookTitle: {
    fontSize: isMobile ? '2.3rem' : '2.7rem',
    marginBottom: '15px',
    color: '#e5e7eb',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#fef08a',
    fontWeight: 600,
    textShadow: '0 0 5px rgba(254, 240, 138, 0.5)',
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#ccc',
    marginBottom: '30px',
    textAlign: isMobile ? 'center' : 'left',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: 'rgb(209 46 46)',
    backgroundImage: 'linear-gradient(to bottom, #ffffffff 0%, #ffffffff 100%)',
    color: 'black',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    transition: 'background-image 0.2s',
  },
  bookImage: {
    width: '100%',
    maxWidth: isMobile ? '250px' : '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7)',
    transformStyle: 'preserve-3d',
    display: 'block',
  },
});

// --- Animation Variants ---
const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  },
};

const contentItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const starGlitter = {
  animate: {
    textShadow: [
      '0 0 8px rgba(254, 240, 138, 0.7)',
      '0 0 15px rgba(254, 240, 138, 1), 0 0 25px rgba(255, 255, 255, 0.5)',
      '0 0 8px rgba(254, 240, 138, 0.7)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    }
  }
};

export const TopSeller = () => {
  const ref = useRef(null);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const styles = getStyles(isMobile);

  // FIXED: Clean straight-angle tilt
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const transform = useTransform(
    [rotateX, rotateY],
    ([rX, rY]) => `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`
  );

  const book = {
    title: "The Silent Watcher",
    author: "Elara Vance",
    description: `A gripping psychological thriller that explores the nature of identity and memory in a world where nothing is as it seems. Our top pick for a reason—it keeps you guessing until the final page.`,
    imageURL: image_path,
    month: "November 2025"
  };

  return (
    <motion.section
      ref={ref}
      style={styles.container}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Content */}
      <motion.div style={styles.contentSection}>
        <motion.p style={styles.featuredLabel} variants={contentItem}>
          FEATURED
        </motion.p>

        <motion.h1
          style={styles.starHeading}
          variants={starGlitter}
          animate="animate"
        >
          ⭐ Top Seller Book of the Month
        </motion.h1>

        <motion.h2 style={styles.bookTitle} variants={contentItem}>
          {book.title}
        </motion.h2>

        <motion.p
          style={{ ...styles.subtitle, marginTop: '-15px' }}
          variants={contentItem}
        >
          Featured for {book.month}
        </motion.p>

        <motion.p style={styles.description} variants={contentItem}>
          {book.description}
        </motion.p>

        <motion.p
          style={{
            ...styles.subtitle,
            marginBottom: '30px',
            color: '#ccc',
            textShadow: 'none',
            fontWeight: 500
          }}
          variants={contentItem}
        >
          Written by: {book.author}
        </motion.p>

        <motion.button
          style={styles.button}
          whileHover={{
            backgroundImage: 'linear-gradient(to bottom, #ffffffff 0%, #ffffffff 100%)',
            color:'black',
            scale: 1.02
          }}
          whileTap={{ scale: 0.98 }}
          variants={contentItem}
        >
          View Book
        </motion.button>
      </motion.div>

      {/* Image */}
      <div style={styles.imageSection}>
        <motion.img
          src={book.imageURL}
          alt={`Cover of ${book.title}`}
          style={{
            ...styles.bookImage,
            transform: transform,
          }}
          variants={contentItem}
          transition={{
            ...contentItem.visible?.transition,
            duration: 1.2,
            delay: 0.3
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)'
          }}
        />
      </div>
    </motion.section>
  );
};
