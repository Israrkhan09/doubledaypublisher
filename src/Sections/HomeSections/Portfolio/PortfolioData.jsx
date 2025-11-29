import React, { useState, useMemo, useRef } from 'react';
import image_path_1 from '../images/main-fiction/Fiction-1.jpg';
import image_path_2 from '../images/main-fiction/Fiction-2.jpg';
import image_path_3 from '../images/main-fiction/Fiction-3.jpg';
import image_path_4 from '../images/main-fiction/Fiction-4.jpg';
import image_path_5 from '../images/main-fiction/Fiction-5.jpg';
import image_path_6 from '../images/main-fiction/Fiction-6.jpg';

import image_path_7 from '../images/main-nonfiction/nonfiction-1.jpg';
import image_path_8 from '../images/main-nonfiction/nonfiction-2.jpg';
import image_path_9 from '../images/main-nonfiction/nonfiction-3.jpg';
import image_path_10 from '../images/main-nonfiction/nonfiction-4.jpg';
import image_path_11 from '../images/main-nonfiction/nonfiction-5.jpg';
import image_path_12 from '../images/main-nonfiction/nonfiction-6.jpg';

import image_path_13 from '../images/main-memoirs/memoirs-1.jpg';
import image_path_14 from '../images/main-memoirs/memoirs-2.jpg';
import image_path_15 from '../images/main-memoirs/memoirs-3.jpg';
import image_path_16 from '../images/main-fantasy/fantasy-9.jpg';
import image_path_17 from '../images/main-fantasy/fantasy-10.jpg';
import image_path_18 from '../images/main-fantasy/fantasy-11.jpg';

import image_path_19 from '../images/main-fantasy/fantasy-1.jpg';
import image_path_20 from '../images/main-fantasy/fantasy-2.jpg';
import image_path_21 from '../images/main-fantasy/fantasy-3.jpg';
import image_path_22 from '../images/main-fantasy/fantasy-4.jpg';
import image_path_23 from '../images/main-fantasy/fantasy-5.jpg';
import image_path_24 from '../images/main-fantasy/fantasy-6.jpg';

import image_path_25 from '../images/main-children/children-1.jpg';
import image_path_26 from '../images/main-children/children-2.jpg';
import image_path_27 from '../images/main-children/children-3.jpg';
import image_path_28 from '../images/main-children/children-4.jpg';
import image_path_29 from '../images/main-children/children-5.jpg';
import image_path_30 from '../images/main-children/children-6.jpg';

// Imported specifically for the background animation
// import BackgroundImage from '../images/background-cover.jpg'; 


import { 
    motion, 
    AnimatePresence, 
    useScroll, 
    useTransform
} from 'framer-motion';

// Categories
const categories = [
    'Fiction Book', 
    'Non-Fiction Book', 
    'Memoir', 
    'Fantasy & Sci-Fi', 
    'Children\'s Book'
];

// Portfolio Covers
const portfolioCovers = [
    { id: 1, src: image_path_1, title: 'Circe', category: 'Fiction Book' },
    { id: 2, src: image_path_2, title: 'Bright Edge', category: 'Fiction Book' },
    { id: 3, src: image_path_3, title: 'The Overstory', category: 'Fiction Book' },
    { id: 4, src: image_path_4, title: 'Fiction Title A', category: 'Fiction Book' },
    { id: 5, src: image_path_5, title: 'Fiction Title B', category: 'Fiction Book' },
    { id: 6, src: image_path_6, title: 'Fiction Title C', category: 'Fiction Book' },

    { id: 7, src: image_path_7 , title: 'Greenwood', category: 'Non-Fiction Book' },
    { id: 8, src: image_path_8, title: 'Digital Age', category: 'Non-Fiction Book' },
    { id: 9, src: image_path_9 , title: 'Non-Fiction A', category: 'Non-Fiction Book' },
    { id: 10, src: image_path_10 , title: 'Non-Fiction B', category: 'Non-Fiction Book' },
    { id: 11, src: image_path_11, title: 'Non-Fiction C', category: 'Non-Fiction Book' },
    { id: 12, src: image_path_12, title: 'Non-Fiction D', category: 'Non-Fiction Book' },

    // { id: 13, src: , title: 'Memoir A', category: 'Memoir' },
    { id: 14, src: image_path_13, title: 'The Great Game', category: 'Memoir' },
    { id: 15, src: image_path_14, title: 'Memoir B', category: 'Memoir' },
    { id: 16, src: image_path_15, title: 'Memoir C', category: 'Memoir' },
    { id: 17, src: image_path_16, title: 'Memoir D', category: 'Memoir' },
    { id: 18, src: image_path_17, title: 'Memoir E', category: 'Memoir' },
    { id: 18, src: image_path_18, title: 'Memoir F', category: 'Memoir' },

    { id: 19, src: image_path_19, title: 'Aperture', category: 'Fantasy & Sci-Fi' },
    { id: 20, src: image_path_20, title: 'Stars Fall', category: 'Fantasy & Sci-Fi' },
    { id: 21, src: image_path_21, title: 'Fantasy A', category: 'Fantasy & Sci-Fi' },
    { id: 22, src: image_path_22, title: 'Fantasy B', category: 'Fantasy & Sci-Fi' },
    { id: 23, src: image_path_23, title: 'Fantasy C', category: 'Fantasy & Sci-Fi' },
    { id: 24, src: image_path_24, title: 'Fantasy D', category: 'Fantasy & Sci-Fi' },

    { id: 25, src: image_path_25, title: 'Kids Adventure', category: 'Children\'s Book' },
    { id: 26, src: image_path_26, title: 'Children A', category: 'Children\'s Book' },
    { id: 27, src: image_path_27, title: 'Children B', category: 'Children\'s Book' },
    { id: 28, src: image_path_28, title: 'Children C', category: 'Children\'s Book' },
    { id: 29, src: image_path_29, title: 'Children D', category: 'Children\'s Book' },
    { id: 30, src: image_path_30, title: 'Children E', category: 'Children\'s Book' },
];

// Variants
const sectionVariants = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.1 } } };
const scrollItemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const coverItemVariants = { hidden: { opacity: 0, y: 100, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }, exit: (exitDelay) => ({ opacity: 0, y: -40, transition: { duration: 0.25, delay: exitDelay } }) };
const splitTextParent = { visible: { transition: { staggerChildren: 0.04 } } };
const splitTextChild = { hidden: { y: "120%", opacity: 0 }, visible: { y: "0%", opacity: 1, transition: { duration: 0.45 } } };

// Book card
const BookCoverItem = ({ book, index, totalItems }) => {
    const exitDelay = (totalItems - 1 - index) * 0.05;
    const enterDelay = index * 0.1;
    return (
        <motion.div
            custom={exitDelay}
            variants={coverItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            transition={{ ...coverItemVariants.visible.transition, delay: enterDelay }}
            style={{ borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer', aspectRatio: '3/4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.35)" }}
        >
            <img src={book.src} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
    );
};

const AnimatedWord = ({ children }) => (
    <motion.span variants={splitTextChild} style={{ display: 'inline-block', overflow: 'hidden' }}>{children}</motion.span>
);

export const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState(categories[0]);
    const sectionRef = useRef(null);

    // Scroll animation for main content
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    
    // 👈 **NEW:** Animation controls for background image
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const backgroundBlur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(0px)", "blur(2px)", "blur(0px)"]);


    const filteredCovers = useMemo(() => portfolioCovers.filter(c => c.category === activeFilter).slice(0, 6), [activeFilter]);
    const totalFiltered = filteredCovers.length;

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariants}
            style={{ 
                padding: "4rem 0.5rem 7rem", 
                minHeight: '100vh', 
                overflow: 'hidden', 
                perspective: '1000px', 
                // background:'white',
                marginTop: '-30px',
                position: 'relative' // Needed for absolute positioning of BG image
            }}
        >
            {/* 👈 **NEW:** Animated Background Image */}
            <motion.div 
                style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    // backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: backgroundY, // Parallax movement
                    filter: backgroundBlur, // Scroll-based blur
                    scale: 1.1, // Slight zoom to cover parallax edges
                    opacity: 0.15, // Keep it subtle
                }}
            />

            {/* Title */}
            <motion.div variants={scrollItemVariants} style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                <motion.h2 
                    style={{ 
                        marginBottom:'-20px', 
                        fontSize: '35px', 
                        fontWeight: 800, 
                        color: '#fff', 
                        display: 'inline-block', 
                        y: titleY 
                    }} 
                    // 👈 **UPDATED:** Responsive Heading Size
                    sizes={{ 
                        base: '2rem', // Mobile
                        lg: '3rem'    // Desktop
                    }}
                    variants={splitTextParent}
                >
                    {"Our Award-Winning Book Cover Portfolio".split(" ").map((word, i) => (
                        <span key={i} style={{ display: 'inline-block', marginRight: '0.65rem' }}>
                            <AnimatedWord>{word}</AnimatedWord>
                        </span>
                    ))}
                </motion.h2>
                <motion.p style={{ color: '#ccc', fontSize: '18px' }} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                    Explore the masterpieces we've built across multiple genres.
                </motion.p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div variants={scrollItemVariants} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                {categories.map(c => (
                    <motion.button 
                        key={c} 
                        onClick={() => setActiveFilter(c)}
                        style={{
                            padding: '0.6rem 1.6rem',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 600,
                            transition: "0.25s",
                            overflow: 'hidden',
                            position: 'relative',

                            // Base Styles
                            border: activeFilter === c ? "2px solid #fff" : "none",
                            color: activeFilter === c ? "black": "black",
                            
                            // Background Gradient 
                            background:'white',
                            
                            // Text Lighting Animation
                            animation: activeFilter === c 
                                ? "text-glow-pulse 2s infinite ease-in-out" 
                                : "none",
                            willChange: activeFilter === c ? "text-shadow, background-position" : "auto",
                        }}
                        // Framer Motion Animations for Dynamic Lighting
                        animate={{ 
                            // 1. Background Shift (The "Traveling Light" effect)
                            backgroundPositionX: activeFilter === c ? ['0%', '-150%', '0%'] : '0%', 
                            
                            // 2. Box Shadow Pulse (Outer Glow)
                            boxShadow: activeFilter === c 
                                ? ["0 0 10px rgba(34, 211, 238, 0.7)", "0 0 25px rgba(34, 211, 238, 0.4)", "0 0 5px rgba(34, 211, 238, 0.7)"]
                                : "none",
                        }}
                        transition={{ 
                            // Background Shift transition (Slower, continuous movement)
                            backgroundPositionX: activeFilter === c ? { 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "linear" 
                            } : { duration: 0 },
                            
                            // Box Shadow transition (Faster, pulsing movement)
                            boxShadow: activeFilter === c ? {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            } : { duration: 0 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {c}
                    </motion.button>
                ))}
            </motion.div>

            {/* Grid */}
            <motion.div variants={scrollItemVariants} style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: 'relative', zIndex: 1 }}>
                <motion.div key={activeFilter} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem" }}>
                    <AnimatePresence mode="popLayout">
                        {filteredCovers.map((book, index) => (
                            <BookCoverItem key={book.id} book={book} index={index} totalItems={totalFiltered} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.button variants={scrollItemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{
                    margin: "3rem auto 0",
                    padding: "12px 20px",
                    borderRadius: 8,
                    display: "block",
                    fontSize: "16px",
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: 'none',
                    background: "white",
                    color: 'black',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.4)',
                    position: 'relative', 
                    zIndex: 1
                }}
            >
                VIEW FULL PORTFOLIO
            </motion.button>
        </motion.section>
    );
};