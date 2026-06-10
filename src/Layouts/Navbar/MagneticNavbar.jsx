import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../Sections/Image/Doubleday-Publisher.png';
import './Navbar.css';
import useIntersectionObserver from '../../Sections/HomeSections/hooks/UserObservationSection'

// --- Data Structure for the Entire Navigation (UPDATED TO CONTAIN ALL LISTED ITEMS) ---
const navData = {
    logo: logoImage,
    mainLinks: [
        {
            title: 'Home',
        },
        
        // 1. Writing Books Link (Dropdown now contains ALL items you listed together)
        {
            
            title: 'Writing Books',
            dropdown: [
                [
                   // Moved from top-level to dropdown
                    'Ghostwriting', 
                    'Fiction Writing', 
                    'Non-Fiction Writing',
                    "Memoir Writing",
                    "Story Writing",
                    "Script Writing", 
                    // "Children's Book",
                   
                ],
            ],
        },
        
        // 2. Book Editing Link (Top Level, unchanged)
        {
            title: 'Book Editing',
        },
        // REMOVED: Publishing is now inside 'Writing Books' dropdown
        
        // 3. More Link (Dropdown, no change)
        {
            title: 'More',
            dropdown: [
                // About Us, Contact Us, Blog (no change)
                ['About Us', 'Contact Us'], 
            ],
        },
    ]
    // callToAction: 'CALL NOW',
};

// Utility function to get the correct router path
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
        default:
            return `/${title.toLowerCase().replace(/\s/g, '-')}`;
    }
};

// --- Sub-component for a Nav Item (including Dropdown) ---
const NavItem = ({ linkData, activeDropdown, setActiveDropdown, isMobile }) => {
    const isDropdown = !!linkData.dropdown; 
    const isActive = activeDropdown === linkData.title;
    // Check if it's a simple router link (Book Editing) or just a dropdown trigger
    const isRouterLink = !!linkData.link || (!isDropdown && linkData.title !== 'Publishing'); 

    const toggleDropdown = () => {
        if (isDropdown) {
            setActiveDropdown(isActive ? null : linkData.title);
        }
    };
    
    // Function to render the individual dropdown link items
    const renderDropdownLink = (item) => {
        const path = getRouterPath(item);
        
        // All dropdown links will use <Link>
        return <Link to={path} onClick={() => setActiveDropdown(null)}>{item}</Link>;
    };


    const renderDropdownContent = () => {
        // Renders the single-column list from navData.dropdown
        return (
            <ul className="dropdown single-column-dropdown">
                {linkData.dropdown.flatMap(column => 
                    column.map((item, index) => (
                        <li 
                            key={index}
                            onClick={(e) => e.stopPropagation()} 
                        >
                            {renderDropdownLink(item)} 
                        </li>
                    ))
                )}
            </ul>
        );
    };
    
    // Define the component to use for the main navigation item
    const NavComponent = isRouterLink ? Link : 'a';
    // Logic for main link props adjusted: if it's a dropdown, use #, otherwise use its route.
    const mainLinkProps = isRouterLink ? { to: linkData.link || getRouterPath(linkData.title) } : { href: '#' };

    return (
        <li 
            className={`nav-item ${isDropdown ? 'has-dropdown' : ''} ${isActive ? 'active-dropdown' : ''}`}
            onClick={isMobile && isDropdown ? toggleDropdown : null}
            onMouseOver={!isMobile && isDropdown ? () => setActiveDropdown(linkData.title) : null}
            onMouseLeave={!isMobile && isDropdown ? () => setActiveDropdown(null) : null}
        >
            <NavComponent 
                {...mainLinkProps} 
                className={isDropdown ? 'dropdown-toggle' : ''}
                onClick={isMobile && isDropdown ? (e) => e.preventDefault() : undefined} 
            >
                {linkData.title}
                {isDropdown && <span className="arrow-down"></span>}
            </NavComponent>
            
            {isDropdown && (
                <div className={`dropdown-wrapper ${isActive ? 'visible' : 'hidden'}`}>
                    {renderDropdownContent()}
                </div>
            )}
        </li>
    );
};


// --- Main Navbar Component ---
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); 
    const [isScrolled, setIsScrolled] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveDropdown(null); 
    };

    // Scroll Effect Logic (Unchanged)
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `navbar-container ${isScrolled ? 'scrolled' : ''}`;

    return (
        <nav className={navbarClasses}>
            <div className="navbar-header">
                {/* --- Logo Link --- */}
                <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
    <img
        src={navData.logo} // This correctly uses the path as the image source
        alt="Doubleday Publisher Logo"
        className="logo-image" // Don't forget to define this class in Navbar.css
    />
</Link>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>

            <div className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    {navData.mainLinks.map((link, index) => (
                        <NavItem 
                            key={index}
                            linkData={link}
                            activeDropdown={activeDropdown}
                            setActiveDropdown={setActiveDropdown}
                            isMobile={isMenuOpen} 
                        />
                    ))}
                </ul>
                {/* <button className="call-to-action-btn">{navData.callToAction}</button> */}
            </div>
        </nav>
    );
};

export default Navbar;