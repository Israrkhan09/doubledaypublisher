import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../Sections/Image/Doubleday-Publisher-White.png';
import logoBlack from '../../Sections/Image/Doubleday-Publisher.png';
import './Navbar.css';

const navData = {
    mainLinks: [
        { title: 'Home' },
        {
            title: 'Writing Books',
            dropdown: [
                ['Ghost Writing', 'Fiction Writing', 'Non-Fiction Writing', 'Memoir Writing', 'Story Writing', 'Script Writing'],
            ],
        },
        { title: 'About Us' },
        { title: 'Contact Us' }
    ]
};

const getRouterPath = (title) => {
    switch (title) {
        case 'Home': return '/';
        case 'About Us': return '/about-us';
        case 'Contact Us': return '/contact-us';
        default: return `/${title.toLowerCase().replace(/\s/g, '-')}`;
    }
};

const NavItem = ({ linkData, activeDropdown, setActiveDropdown, isMobile }) => {
    const isDropdown = !!linkData.dropdown; 
    const isActive = activeDropdown === linkData.title;
    const isRouterLink = !isDropdown; 

    const toggleDropdown = () => {
        if (isDropdown) setActiveDropdown(isActive ? null : linkData.title);
    };
    
    const renderDropdownContent = () => (
        <ul className="dropdown single-column-dropdown">
            {linkData.dropdown.flatMap(column => 
                column.map((item, index) => (
                    <li key={index} onClick={(e) => e.stopPropagation()}>
                        <Link to={getRouterPath(item)} onClick={() => setActiveDropdown(null)}>
                            {item}
                        </Link>
                    </li>
                ))
            )}
        </ul>
    );
    
    const NavComponent = isRouterLink ? Link : 'a';
    const mainLinkProps = isRouterLink ? { to: getRouterPath(linkData.title) } : { href: '#' };

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

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); 
    const [isScrolled, setIsScrolled] = useState(false); 
    
    // ✅ Default set to 'light'
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // ✅ Apply theme globally
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Ensures the .light-mode class is synced for your other sections
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // ✅ Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ Dynamic Logo
    const currentLogo = theme === 'light' ? logoBlack : logoWhite;

    return (
        <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>

            {/* Logo */}
            <div className="navbar-header">
                <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
                    <img src={currentLogo} alt="Logo" className="logo-image" />
                </Link>
            </div>

            {/* Navigation Links */}
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
            </div>

            {/* Right Controls */}
            <div className="nav-right-controls">
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme} 
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>

                <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;