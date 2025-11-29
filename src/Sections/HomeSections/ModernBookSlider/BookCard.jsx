// components/BookCard.jsx
import React, { useEffect, useState } from 'react';
import { color, motion, useAnimation } from 'framer-motion';

// Base Styles (without media query)
const baseBookCardStyles = {
    cardContainer: {
        display: 'flex',
        color:'white', // Use 'color' instead of 'Text'
        padding: '2rem',
        borderRadius: '1.5rem',
        backgroundColor: '#0A0F1F',
        backdropFilter: "blur(50px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(119, 119, 119, 0.58)",
        maxWidth: '1080px',
        marginLeft: '44px',
        margin: '0 auto',
        alignItems: 'center',
        gap: '2.5rem',
        opacity: 0.95,
    },
    imageWrapper: {
        flexShrink: 0,
        width: '260px',
        height: '400px',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f8f8f8',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain', 
        display: 'block',
    },
    contentWrapper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        paddingTop: '1rem',
    },
    genreTag: {
        display: 'inline-block',
        backgroundColor: '#e0e0e0',
        color: '#555555',
        padding: '0.4rem 1rem',
        borderRadius: '0.75rem',
        fontSize: '0.9rem',
        fontWeight: '500',
        marginBottom: '1rem',
    },
    title: {
        fontSize: '35px',
        fontWeight: '700',
        color: '#ffffffff',
        padding:'10px 20px',
        // background:'red',
        marginBottom: '0.5rem',
        lineHeight: '1.2',
    },
    author: {
        fontSize: '18px',
        color: '#cac9c9ff',
        marginBottom: '1.5rem',
        fontStyle: 'italic',
    },
    description: {
        fontSize: '1rem',
        color: '#cac9c9ff',
        lineHeight: '1.6',
        marginBottom: '2rem',
    },
    readMoreButton: {
        background: "white",
        color: 'black',
        padding: '0.75rem 1.25rem',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        alignSelf: 'flex-start',
    },
};

// Mobile Overrides (to be merged when screen is small)
const mobileOverrides = {
    cardContainer: {
        marginLeft: '1px',
        marginBottom:'-20px',
        width:'345px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.8rem',
        gap: '1.5rem',
    },
    // 👈 **UPDATED:** Title font size is now 33px
    title: {
        fontSize: '28px', 
        fontWeight: '700',
    },
    // 👈 **NEW:** Added author font size override for 15px
    author: {
        fontSize: '18px', 
    },
    imageWrapper: {
        width: '200px',
        height: '300px',
    },
    contentWrapper: {
        paddingTop: '0',
        textAlign: 'center',
        alignSelf: 'center',
    },
    genreTag: {
        margin: '0 auto 1rem auto',
    },
    readMoreButton: {
        alignSelf: 'center',
    },
};

// Variants for sequential animation (unchanged)
const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
        } 
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export const BookCard = ({ book, isActive }) => {
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // 1. Hook to track screen size and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. Conditional Style Application (UPDATED to include author)
    const bookCardStyles = {
        cardContainer: {
            ...baseBookCardStyles.cardContainer,
            ...(isMobile ? mobileOverrides.cardContainer : {}),
        },
        imageWrapper: {
            ...baseBookCardStyles.imageWrapper,
            ...(isMobile ? mobileOverrides.imageWrapper : {}),
        },
        contentWrapper: {
            ...baseBookCardStyles.contentWrapper,
            ...(isMobile ? mobileOverrides.contentWrapper : {}),
        },
        genreTag: {
            ...baseBookCardStyles.genreTag,
            ...(isMobile ? mobileOverrides.genreTag : {}),
        },
        title: {
            ...baseBookCardStyles.title, // Base style for non-mobile
            ...(isMobile ? mobileOverrides.title : {}), // Override for mobile
        },
        author: {
            ...baseBookCardStyles.author, // Base style for non-mobile
            ...(isMobile ? mobileOverrides.author : {}), // Override for mobile
        },
        description: baseBookCardStyles.description,
        readMoreButton: {
            ...baseBookCardStyles.readMoreButton,
            ...(isMobile ? mobileOverrides.readMoreButton : {}),
        },
        bookImage: baseBookCardStyles.bookImage,
    };

    // Animation logic (unchanged)
    useEffect(() => {
        if (isActive) {
            controls.start("visible");
        } else {
            controls.start("hidden"); 
        }
    }, [isActive, controls]);

    return (
        <motion.div style={bookCardStyles.cardContainer}
            initial="hidden"
            animate={controls}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1, 
                        delayChildren: 0.2, 
                    },
                },
                hidden: {
                    transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1, 
                    },
                },
            }}
        >
            <motion.div style={bookCardStyles.imageWrapper} variants={contentVariants}>
                <img 
                    src={book.image} 
                    alt={book.alt} 
                    style={bookCardStyles.bookImage} 
                />
            </motion.div>
            <motion.div style={bookCardStyles.contentWrapper}>
                <motion.span style={bookCardStyles.genreTag} variants={contentVariants}>
                    {book.genre}
                </motion.span>
                <motion.h2 style={bookCardStyles.title} variants={contentVariants}>
                    {book.title}
                </motion.h2>
                <motion.p style={bookCardStyles.author} variants={contentVariants}>
                    {book.author}
                </motion.p>
                <motion.p style={bookCardStyles.description} variants={contentVariants}>
                    {book.description}
                </motion.p>
                <motion.button 
                    style={bookCardStyles.readMoreButton}
                    whileHover={{ backgroundColor: '#ffffffff', color: 'black', border: '1px solid black' ,  scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    variants={contentVariants}
                >
                    Read More
                </motion.button>
            </motion.div>
        </motion.div>
    );
};