// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; 
// ❗ NEW IMPORTS for animation
import './FooterAnimation.css'; 
// import useIntersectionObserver from '../hooks/UserObservationSection';
import footerimage from '../../Sections/Image/Doubleday-Publisher-White.png'
import useIntersectionObserver from '../../Sections/HomeSections/hooks/UserObservationSection';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faYoutube,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";


// import useIntersectionObserver from '../hook/useIntersectionObserver'; 

const Footer = () => {
    // 1. Initialize the Intersection Observer hook
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 }); 

    // 2. Define the main container classes
    const containerClasses = [
        'footer',
        isVisible ? 'is-visible' : '' // This class triggers the animation
    ].join(' ').trim();
    
    return (
        // 3. Attach the ref and the conditional class to the main footer
        <footer ref={sectionRef} className={containerClasses}>
            <div className="footer-container">
                
                {/* Column 1: LOGO & DESCRIPTION - Applied reveal-item and fade-up with delay */}
                <div className="footer-column about-us reveal-item fade-up" style={{ transitionDelay: '0.1s' }}>
                    <img src={footerimage} alt="Doubleday Publisher Logo" className="footer-logo-img" />
                    <p className="footer-description">
                        Doubleday Publisher helps authors turn their ideas into published works, providing expert editing, ghostwriting, and publishing services.
                    </p>
                </div>

                {/* Column 2: BOOKS - Applied reveal-item and fade-up with delay */}
                <div className="footer-column help reveal-item fade-up" style={{ transitionDelay: '0.2s' }}>
                    <h4 className="footer-heading">BOOKS</h4>
                    <ul className="footer-links">
                        <li><a href="/ghost-writing">Ghost Writing</a></li>
                        <li><a href="/fiction-writing">Fiction Writing</a></li>
                        <li><a href="/non-fiction-writing">Non-Fiction Writing</a></li>
                        <li><a href="/memoir-writing">Memoir Writing</a></li>
                        <li><a href="/story-writing">Story Writing</a></li>
                        <li><a href="/script-writing">Script Writing</a></li>
                    </ul>
                </div>

                {/* Column 3: QUICK LINKS - Applied reveal-item and fade-up with delay */}
                <div className="footer-column quick-links reveal-item fade-up" style={{ transitionDelay: '0.3s' }}>
                    <h4 className="footer-heading">QUICK LINKS</h4>
                    <ul className="footer-links">
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 4: CONNECT - Applied reveal-item and fade-up with delay */}
                <div className="footer-column connect reveal-item fade-up" style={{ transitionDelay: '0.4s' }}>
                    <h4 className="footer-heading">CONNECT</h4>
                    <p className="connect-text">Sign up for news about books, authors, and more from Penguin Random House</p>
                    
                    {/* STAY IN TOUCH Button */}
                    <a href="/contact-us" className="stay-in-touch-btn">
                        <span className="icon"></span> 
                        STAY IN TOUCH
                    </a>

                    {/* Social Icons (Placeholder) */}
                    <div className="social-icons">
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
        <FontAwesomeIcon icon={faPinterest} />
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
        <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter / X">
        <FontAwesomeIcon icon={faXTwitter} />
    </a>
</div>


                </div>
            </div>

            {/* Bottom Divider and Copyright Section */}
            <div className="footer-bottom">
                <hr className="footer-divider" />
                <p className="copyright-info">
                    Copyright © 2026 DoubleDayPublisher®
                </p>
            </div>
        </footer>
    );
};

export default Footer;