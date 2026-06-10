import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TopSellerModal } from "../BestsellerSection/TopSellerModal";

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
const getStyles = (isMobile, isTabletOrMobile) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    padding: isMobile ? '40px 0' : '80px 0',
    paddingTop:'110px',
    paddingBottom:'90px',
    backgroundColor: "var(--hero-bg)", 
    color: "var(--text-color)",
    minHeight: '400px',
    textAlign: isMobile ? 'center' : 'left',
  },
  innerContainer: {
    display: isMobile ? 'flex' : 'grid',
    flexDirection: isMobile ? 'column' : undefined,
    gridTemplateColumns: isMobile ? undefined : '1.2fr 0.8fr',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: isMobile ? '30px' : '50px',
    boxSizing: 'border-box',
  },
  contentSection: {
    flex: isMobile ? '1' : '1.2',
    padding: '0',
    marginBottom: isMobile ? '40px' : '0',
    textAlign: isMobile ? 'center' : 'left',
    maxWidth: '100%',
    zIndex: 2,
    boxSizing: 'border-box',
  },
  imageSection: {
    flex: isMobile ? '1' : '0.8',
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-end',
    alignItems: 'center',
    maxWidth: '100%',
    perspective: '1000px',
    boxSizing: 'border-box',
  },
  featuredLabel: {
    fontSize: '18px',
    marginBottom: '5px',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted, #9ca3af)', // Use variable for muted text
  },
  starHeading: {
    fontSize: isMobile ? '1rem' : '1.2rem',
    marginBottom: isMobile ? '15px' : '25px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--accent-color, #e8c900ff)', // Dynamic yellow
    textShadow: '0 0 8px rgba(254, 240, 138, 0.4)',
    transition: "color 0.3s ease",
  },
  bookTitle: {
    fontSize: isTabletOrMobile ? 'clamp(24px, 6vw, 30px)' : '35px',
    marginBottom: '15px',
    color: '#173F5F', // Dynamic title color
    fontWeight: 600,
    transition: "color 0.3s ease",
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: 'var(--accent-color, #b4b19eff)', // Dynamic yellow
    fontWeight: 600,
    textShadow: '0 0 5px rgba(254, 240, 138, 0.3)',
    transition: "color 0.3s ease",
  },
  description: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: 'var(--text-color)', // Dynamic description color
    opacity: 0.8,
    marginBottom: '30px',
    textAlign: isMobile ? 'center' : 'left',
    transition: "color 0.3s ease",
  },
  button: {
    padding: '12px 25px',
    backgroundColor: 'rgb(209 46 46)',
    backgroundImage: 'linear-gradient(to bottom, #ffffffff 0%, #ffffffff 100%)',
    color: 'black',
    border: '1px solid black',
    borderRadius: '6px',
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

// Animations (Kept identical as requested)
const sectionReveal = {
  // hidden: { opacity: 0, y: 50 },
  visible: {
    // opacity: 1,
    // y: 0,
    // transition: {
    //   type: 'spring',
    //   stiffness: 60,
    //   damping: 10,
    //   staggerChildren: 0.15,
    //   delayChildren: 0.2
    // }
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
  const isTabletOrMobile = width <= 1024;
  const styles = getStyles(isMobile, isTabletOrMobile);

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

  const [showModal, setShowModal] = useState(false);

  const book = {
    title: "The Silent Watcher",
    author: "Elara Vance",
    description: `A gripping psychological thriller that explores identity and memory.`,
    longDescription: `
“The Silent Watcher” is a psychological thriller that dives deep into memory,
identity, and the unsettling feeling of being observed...
`,
    imageURL: image_path,
    month: "November 2025"
  };

  return (
    <>
      {showModal && (
        <TopSellerModal book={book} onClose={() => setShowModal(false)} />
      )}

      <motion.section
        ref={ref}
        style={styles.container}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div style={styles.innerContainer}>
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

            <motion.h2 className="topseller-book-title" style={styles.bookTitle} variants={contentItem}>
              {book.title}
            </motion.h2>

            <motion.p
              style={{ ...styles.subtitle, marginTop: "-15px" }}
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
                marginBottom: "30px",
                color: "var(--text-color)", // Changed from #ccc
                opacity: 0.7,
                textShadow: "none",
                fontWeight: 500,
              }}
              variants={contentItem}
            >
              Written by: {book.author}
            </motion.p>

            <motion.button
              style={styles.button}
              whileHover={{
                backgroundImage:
                  "linear-gradient(to bottom, #ffffffff 0%, #ffffffff 100%)",
                color: "black",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              variants={contentItem}
              onClick={() => setShowModal(true)}
            >
              View Book Detail
            </motion.button>
          </motion.div>

          <div style={styles.imageSection}>
            <motion.img
              src={book.imageURL}
              alt={book.title}
              style={{ ...styles.bookImage, transform: transform }}
              variants={contentItem}
              transition={{
                ...contentItem.visible?.transition,
                duration: 1.2,
                delay: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)",
              }}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};