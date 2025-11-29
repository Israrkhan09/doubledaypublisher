import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo_Image from '../Navbar/New folder/Doubleday-Publisher-White.png'

// Utility to generate paths - Memoized (useCallback is not strictly needed for non-state functions, but good practice for utilities)
const getRouterPath = (title) => {
    switch (title) {
        case 'Home':
            return '/';
        case 'About Us':
            return '/about-us';
        case 'Contact Us':
            return '/contact-us';
        case 'Blog':
            return '/blog';
        case "Children's Book":
            return '/childrens-book';
        case 'Publishing':
             return '/publishing'; // Added path for Publishing
        // Handle all other service links
        case 'Ghostwriting':
            return '/ghost-writing';
        default:
            return `/${title.toLowerCase().replace(/\s/g, '-')}`;
    }
};

// 🌟 CHANGE 1: DEFINED THE 'buttons' ARRAY
const navData = {
    logo: Logo_Image,
    mainLinks: [
        {
            title: 'Home',
        },
        
        // 1. Writing Books Link
        {
            title: 'Writing Books',
            dropdown: [
                [
                    'Ghostwriting', 
                    'Fiction Writing', 
                    'Non-Fiction Writing',
                    "Memoir Writing",
                    "Story Writing",
                    "Script Writing", 
                    "Book Editing",
                    
                ],
            ],
        },
        
       
        // 3. More Link
        {
            title: 'More',
            dropdown: [
                // About Us, Contact Us, Blog
                ['About Us', 'Contact Us'], 
            ],
        },
    ],
    // 🔥 NEW PROPERTY: Added the 'buttons' array to hold call-to-action links
    buttons: [
        { title: 'CALL NOW', path: '/contact-us' },
        // Add more buttons here if needed
    ]
};
// END navData

// --- Styles (Base styles remain the same) ---
const baseStyles = {
    navbarContainer: {
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1200px",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(10px)",
        borderRadius: "9999px",
        padding: "0.75rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(119, 119, 119, 0.58)",
    },
    navItemsGroup: { display: "flex", gap: "1.5rem", alignItems: "center" },
    logoContainer: { userSelect: "none", zIndex: 101, textDecoration: 'none', display: 'flex', alignItems: 'center' },
    logoImage: { height: "40px", width: "auto", display: 'block' },
    navLink: { 
        color: "white",
        fontSize: "1rem",
        padding: "0.1rem 0.2rem",
        borderRadius: "9999px",
        cursor: "pointer",
        userSelect: "none",
        position: "relative",
        display: 'flex',
        alignItems: 'center',
        textDecoration: "none",
        zIndex: 10,
        justifyContent: 'center',
        minWidth: '100px',
    },
    callNow: {
        background: "white",
        color: "black",
        padding: "0.75rem 1.25rem",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "600",
        whiteSpace: "nowrap",
        textDecoration: "none",

    },
    hamburger: { width: "28px", height: "22px", display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "pointer", zIndex: 101 },
    bar: { height: "3px", width: "100%", borderRadius: "3px", background: "white" },
    mobileMenu: { position: "absolute", top: "65px", left: "0", width: "100%", background: "rgba(30,30,30,0.95)", backdropFilter: "blur(10px)", borderRadius: "14px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem", zIndex: 99, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" },
    dropdownWrapper: {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%) translateY(10px)",
        background: "rgba(30,30,30,0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        padding: "1rem",
        marginTop: '0.5rem',
        minWidth: '200px',
        zIndex: 11,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
    },
    dropdownLink: { color: "white", padding: "0.5rem 0.75rem", display: "block", textDecoration: "none", borderRadius: "8px", transition: "background-color 0.2s", fontSize: "0.95rem", whiteSpace: "nowrap" },
    arrow: { width: '0', height: '0', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid white', marginLeft: '8px', marginTop: '3px', transition: 'transform 0.3s' },
    mobileItem: { color: "white", cursor: "pointer", fontSize: "1rem", padding: '0.5rem', borderRadius: '8px', textAlign: 'left', fontWeight: '500', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: "none" },
    mobileSubLink: { color: "white", fontSize: "0.9rem", padding: '0.3rem 1rem', display: 'block', borderRadius: '4px', fontWeight: '400', textDecoration: "none" },
};

// --- Framer Motion Variants (Defined once outside of render) ---
const mobileMenuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const mobileDropdownContentVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
};

const desktopDropdownVariants = {
    initial: {
        opacity: 0,
        clipPath: 'inset(10% 20% 100% 20% round 12px)',
        scale: 0.95
    },
    animate: {
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0% round 12px)',
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 30,
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        clipPath: 'inset(10% 20% 100% 20% round 12px)',
        scale: 0.95
    }
};

// --- Desktop Nav Item (Memoized to prevent unnecessary re-renders) ---
const DesktopNavItem = React.memo(({ linkData, activeDropdown, setActiveDropdown }) => {
    const isDropdown = !!linkData.dropdown;
    const isActive = activeDropdown === linkData.title;

    const handleMouseEnter = useCallback(() => {
        if (isDropdown) setActiveDropdown(linkData.title);
    }, [isDropdown, setActiveDropdown, linkData.title]);

    const handleMouseLeave = useCallback(() => {
        if (isDropdown) setActiveDropdown(null);
    }, [isDropdown, setActiveDropdown]);

    const handleLinkClick = useCallback((e) => {
        if (isDropdown) e.preventDefault();
    }, [isDropdown]);

    return (
        <motion.div
            key={linkData.title}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={baseStyles.navLink}>
                <a 
                    href={linkData.path || getRouterPath(linkData.title)} 
                    style={{ color: 'inherit', textDecoration: 'none', padding: 0 }} 
                    onClick={handleLinkClick}
                >
                    {linkData.title}
                </a>

                {isDropdown && <motion.span style={baseStyles.arrow} animate={{ rotate: isActive ? 180 : 0 }} />}
            </div>

            <AnimatePresence>
                {isDropdown && isActive && (
                    <motion.div
                        style={baseStyles.dropdownWrapper}
                        variants={desktopDropdownVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {/* 🌟 CHANGE 2: Simplified map logic inside dropdown (as data is an array of strings now) */}
                        {linkData.dropdown[0].map((item, index) => (
                            <motion.a 
                                key={index} 
                                href={getRouterPath(item)} 
                                style={baseStyles.dropdownLink} 
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});


// --- Final Navbar Component ---
export const MagneticNavbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    // 1. Optimized resize listener
    useEffect(() => {
        const check = () => {
            const mobileState = window.innerWidth < 768;
            setIsMobile(prev => prev !== mobileState ? mobileState : prev);
        };
        check(); 
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // 2. Use useCallback for state togglers
    const toggleMenu = useCallback(() => { 
        setMenuOpen(prev => !prev); 
        setActiveDropdown(null);
        setActiveMobileDropdown(null); 
    }, []);
    
    const closeMobileMenu = useCallback(() => {
        setMenuOpen(false);
        setActiveMobileDropdown(null);
    }, []);


    const toggleMobileDropdown = useCallback((title) => { 
        setActiveMobileDropdown(prev => prev === title ? null : title); 
    }, []);


    return (
        <motion.nav style={baseStyles.navbarContainer}>
            
            {/* Logo */}
            {/* 🌟 CHANGE 3: Changed navData.logoSrc to navData.logo */}
            <motion.a href="/" style={baseStyles.logoContainer}>
                <img src={navData.logo} alt="Logo" style={baseStyles.logoImage} />
            </motion.a>

            {/* Desktop Links */}
            {!isMobile && (
                <div style={baseStyles.navItemsGroup}>
                    {navData.mainLinks.map((linkData) => (
                        <DesktopNavItem 
                            key={linkData.title} 
                            linkData={linkData} 
                            activeDropdown={activeDropdown} 
                            setActiveDropdown={setActiveDropdown} 
                        />
                    ))}
                </div>
            )}

            {/* Desktop Buttons */}
            {!isMobile && (
                <div style={baseStyles.navItemsGroup}>
                    {/* navData.buttons is now guaranteed to exist and be an array */}
                    {navData.buttons.map((btn) => (
                        <motion.a key={btn.title} href={btn.path} style={baseStyles.callNow} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{btn.title}</motion.a>
                    ))}
                </div>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
                <motion.div style={baseStyles.hamburger} onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
                    <motion.span style={baseStyles.bar} />
                    <motion.span style={baseStyles.bar} />
                    <motion.span style={baseStyles.bar} />
                </motion.div>
            )}

            {/* Mobile Menu */}
            {isMobile && (
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            style={baseStyles.mobileMenu}
                            variants={mobileMenuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {navData.mainLinks.map((linkData) => {
                                const isDropdown = !!linkData.dropdown;
                                const isActive = activeMobileDropdown === linkData.title;

                                if (isDropdown) {
                                    return (
                                        <div key={linkData.title}>
                                            <motion.div 
                                                style={baseStyles.mobileItem} 
                                                onClick={() => toggleMobileDropdown(linkData.title)} 
                                                whileTap={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                            >
                                                {linkData.title}
                                                <motion.span style={{ ...baseStyles.arrow, marginLeft: 0 }} animate={{ rotate: isActive ? 180 : 0 }} />
                                            </motion.div>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        variants={mobileDropdownContentVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        style={{ overflow: 'hidden', paddingLeft: '1rem', paddingBottom: '0.5rem' }}
                                                    >
                                                        {/* 🌟 CHANGE 4: Simplified map logic (access first array element) */}
                                                        {linkData.dropdown[0].map((item, index) => (
                                                            <motion.a 
                                                                key={index} 
                                                                href={getRouterPath(item)} 
                                                                style={baseStyles.mobileSubLink} 
                                                                onClick={closeMobileMenu}
                                                                whileTap={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                                            >
                                                                {item}
                                                            </motion.a>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <motion.a 
                                        key={linkData.title} 
                                        href={getRouterPath(linkData.title)} 
                                        style={baseStyles.mobileItem} 
                                        onClick={closeMobileMenu}
                                        whileTap={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    >
                                        {linkData.title}
                                    </motion.a>
                                );
                            })}

                            {/* Call Now Button (Mobile) */}
                            {navData.buttons.map((btn) => (
                                <motion.a 
                                    key={btn.title} 
                                    href={btn.path} 
                                    style={{...baseStyles.callNow, margin: '1rem 0 0 0', display: 'block', textAlign: 'center'}} 
                                    onClick={closeMobileMenu}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {btn.title}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </motion.nav>
    );
};