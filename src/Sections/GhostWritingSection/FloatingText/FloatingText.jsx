import React, { useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import image_path_1 from '../FloatingText/image/ghost-1.webp'
import image_path_2 from '../FloatingText/image/crop-man-studying-near-laptop.jpg'
import image_path_3 from '../FloatingText/image/open-book-stacks-books.jpg'
import image_path_4 from '../FloatingText/image/two-students-studing-library.jpg'

// --- Book Writing Specific Menu Data ---
const MENU_ITEMS = [
    { 
        text: "GHOSTWRITING", 
        link: "/ghostwriting", 
        image: image_path_1,
        color: "#13FFAA", // Accent 1 (Theme Color)
        // Detailed process content for the marquee
        marqueeText: "CONCEPT > OUTLINE > DRAFTING > REVISIONS > DELIVERY" 
    },
    { 
        text: "PROFESSIONAL EDITING", 
        link: "/editing", 
        image: image_path_2,
        color: "#f87171", // Accent 2 (Theme Color)
        // Detailed process content for the marquee
        marqueeText: "LINE EDITING > COPYEDITING > PROOFREADING > FEEDBACK"
    },
    
];

// --- CSS STYLES (Injected for Single File) ---
const CSS_STYLES = `
/* --- CRITICAL FIX: Global Reset to eliminate default browser margins/padding and force no scrolling --- */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    /* FIX: Explicitly hide horizontal overflow globally */
    overflow-x: hidden; 
}
* {
    box-sizing: border-box; /* Ensures padding/borders don't cause overflow */
}
/* ----------------------------------------------------------------------------- */


/* Global Setup */
.menu-wrap {
    width: 100%;
    /* Use height: 100vh to constrain to the viewport */
    height: 40vh; 
    /* Small vertical padding for aesthetic spacing within 100vh */
    padding: 1rem 0; 
    margin: 0;
    /* 💥 MODIFICATION: The background color has been removed here. */
    background: transparent; 
    display: flex;
    justify-content: center;
    align-items: center;
    /* Prevent vertical scrolling on the wrapper */
    overflow-y: hidden; 
    /* NEW FIX: Explicitly hide horizontal overflow on the main container */
    overflow-x: hidden; 
}

.menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    /* Use height: 100% to inherit the constrained height of the parent (.menu-wrap) */
    height: 100%; 
    margin: 0 auto;
    perspective: 1500px; /* Crucial for the 3D effect */
}

/* Menu Item Container (motion.div) */
.menu__item {
    flex: 1;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    will-change: transform;
    /* Set background to transparent so the global .menu-wrap background shows through */
    background-color: transparent; 
    /* Remove transition as there is no background change */
    transition: none;
}
.menu__item:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Menu Link (motion.a) */
.menu__item-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    font-weight: 700;
    color: #fff;
    font-size: clamp(2rem, 2vw, 2rem); /* Responsive font size */
    z-index: 3; 
    transition: color 0.4s;
}

/* Marquee Container (motion.div) */
.marquee {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2; 
}

.marquee__inner-wrap {
    height: 100%;
    width: 200%;
    display: flex;
    transform: translateX(0);
}

.marquee__inner {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    width: 200%;
    will-change: transform;
    /* Speed up marquee animation */
    animation: marquee 10s linear infinite; 
}

.marquee span {
    /* Set the text color to solid white */
    color: #fff; 
    
    /* REMOVED: Background properties to ensure full transparency */
    background: none; 

    /* Ensure text has no clip or fill properties */
    -webkit-background-clip: unset; 
    background-clip: unset; 
    -webkit-text-fill-color: unset; 
    
    opacity: 1; /* Keep text opaque */ 

    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 700; /* Increased weight for visibility */
    font-size: clamp(2rem, 2vw, 2rem);
    line-height: 1.2;
    /* Added horizontal padding for spacing between text segments in marquee */
    padding: 0 1.5vw; 
    border-radius: 4px;
}

/* Increased Image Size for Clarity */
.marquee__img {
    width: 300px; /* Increased width */
    height: 100px; /* Increased height */
    margin: 0 3vw;
    border-radius: 6px;
    background-size: cover;
    background-position: 50% 50%;
    flex-shrink: 0; /* Important to prevent image resizing */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
`;

// Helper function to dynamically inject CSS styles
const injectStyles = () => {
    if (typeof document !== 'undefined' && !document.getElementById('flowing-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'flowing-menu-styles';
        style.textContent = CSS_STYLES;
        document.head.appendChild(style);
    }
};

injectStyles(); // Inject styles when the component file is loaded

// --- Component Definitions ---

/**
 * A reusable component for a single menu item with 3D and marquee animation on hover.
 */
function MenuItem({ link, text, image, accentColor, marqueeText }) {
    
    // --- Framer Motion 3D Tilt Logic ---
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Damping spring for smoother tilt
    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

    // 3D rotation based on mouse position
    const rotateX = useTransform(mouseYSpring, [0, 1], [-5, 5]); // Tilt up/down
    const rotateY = useTransform(mouseXSpring, [0, 1], [5, -5]); // Tilt left/right

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        const item = event.currentTarget;
        const rect = item.getBoundingClientRect();
        
        // Normalize mouse coordinates to 0-1 relative to the element
        x.set((event.clientX - rect.left) / rect.width);
        y.set((event.clientY - rect.top) / rect.height);
    };

    // Prepare repeated marquee content
    const repeatedMarqueeContent = useMemo(() => 
        Array.from({ length: 4 }).map((_, idx) => (
            <React.Fragment key={idx}>
                {/* Displaying the detailed marqueeText */}
                <span>{marqueeText}</span>
                <div className="marquee__img" style={{ 
                    backgroundImage: `url(${image})`,
                    // Add a subtle border matching the color
                    border: isHovered ? `2px solid #fff` : 'none' // Changed border to white
                }} />
            </React.Fragment>
        )), [marqueeText, image, isHovered]);

    // Marquee entrance variants (slide up from bottom)
    const marqueeVariants = {
        initial: { y: "100%" },
        animate: { y: "0%", transition: { type: "spring", stiffness: 100, damping: 15 } },
        exit: { y: "-100%", transition: { duration: 0.5, ease: "easeOut" } }
    };
    
    // Link text hover variants (color change and visibility control)
    const linkVariants = {
        // HIDE the text by setting opacity to 0 on hover
        hover: { color: "#fff", opacity: 0.20, transition: { duration: 0.2 } }, 
        // SHOW the text (opacity 1) when not hovered
        initial: { color: "#fff", opacity: 1 }
    };
    
    return (
        <motion.div
            className="menu__item"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // 3D Tilt Effect: Apply the transformed rotation
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={{ 
                scale: 1.02, 
                zIndex: 10,
                // The item maintains the default transparent background, showing the global Aurora BG
                boxShadow: `0 15px 30px rgba(0, 0, 0, 0.8)`,
            }}
            transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
            }}
        >
            <motion.a 
                className="menu__item-link" 
                href={link} 
                initial="initial"
                // Use the linkVariants to control opacity based on hover state
                animate={isHovered ? "hover" : "initial"}
                variants={linkVariants}
            >
                {text}
            </motion.a>
            
            {/* Marquee effect controlled by hover state */}
            {isHovered && (
                <motion.div 
                    className="marquee"
                    variants={marqueeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    // The marquee element is transparent, ensuring the background color from the parent is visible.
                >
                    <div className="marquee__inner-wrap">
                        <div className="marquee__inner" aria-hidden="true">
                            {repeatedMarqueeContent}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

/**
 * Main component to display the menu.
 */
function FlowingMenu() {
    return (
        <div className="menu-wrap">
            <nav className="menu">
                {MENU_ITEMS.map((item, idx) => (
                    <MenuItem 
                        key={idx} 
                        {...item}
                    />
                ))}
            </nav>
        </div>
    );
}


export default FlowingMenu;