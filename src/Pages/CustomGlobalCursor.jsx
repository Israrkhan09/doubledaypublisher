import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useAuroraColor } from '../Pages/GobalAurora'; 

const styles = {
    customCursor: {
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none", 
        zIndex: 9999,
        mixBlendMode: "difference", 
    },
};

export const CustomGlobalCursor = () => {
    // --- 1. Size Configuration ---
    const cursorSize = 12;      // Small Default size
    const enlargedSize = 70;    // Large Hover size

    // --- 2. Motion Values ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const size = useMotionValue(cursorSize); 
    
    // Consume the animated color MotionValue
    const animatedColor = useAuroraColor(); 

    // Configuration and springing for smooth movement
    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Animate the size change smoothly
    const animateSize = (newSize) => {
        animate(size, newSize, {
            type: "spring",
            stiffness: 400,
            damping: 30,
        });
    };

    // --- 3. Event Listeners and Hover Logic ---

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        // Hide the native cursor
        document.body.style.cursor = 'none';

        // Element selection remains the same, but we ensure it covers all potential targets.
        // We will run this check only once on mount, as these tags are standard.
        // If the issue persists, the solution will require a more complex check using MutationObserver 
        // or re-running this code after Swiper renders. For now, let's assume the DOM elements exist.
        const hoverableElements = document.querySelectorAll(
            'h1, h2, h3, p, button, a, input, textarea, span, [data-cursor-hover]' 
        );

        // Handlers for hover/unhover
        const handleMouseEnter = () => animateSize(enlargedSize);
        const handleMouseLeave = () => animateSize(cursorSize);

        // Add movement listener
        window.addEventListener("mousemove", handleMouseMove);

        // Add hover listeners to specified elements
        hoverableElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup: Restore native cursor and remove listeners
        return () => {
            document.body.style.cursor = 'auto'; // Restore cursor on unmount
            window.removeEventListener("mousemove", handleMouseMove);
            hoverableElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mouseX, mouseY]);

    // --- 4. Render ---

    return (
        <motion.div
            style={{
                ...styles.customCursor,
                left: useTransform(springX, (x) => x - size.get() / 2),
                top: useTransform(springY, (y) => y - size.get() / 2),
                width: size,
                height: size, 
                backgroundColor: animatedColor, 
            }}
            transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30 
            }}
        />
    );
};