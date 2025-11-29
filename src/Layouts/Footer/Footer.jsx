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
                
                {/* Column 1: ABOUT US - Applied reveal-item and fade-up with delay */}
                <div className="footer-column about-us reveal-item fade-up" style={{ transitionDelay: '0.1s' }}>
                    <h4 className="footer-heading">ABOUT US</h4>
                    <ul className="footer-links">
                        <li><a href="#story">Our Story</a></li>
                        <li><a href="#people">Our People</a></li>
                        <li><a href="#locations">Location</a></li>
                        {/* <li><a href="#management">Management</a></li> */}
                        {/* <li><a href="#social">Social Impact</a></li> */}
                        {/* <li><a href="#accessibility">Accessibility Statement</a></li> */}
                        <li><a href="#careers">Careers</a></li>
                        {/* <li><a href="#imprints">Imprints</a></li> */}
                    </ul>
                </div>

                {/* Column 2: QUICK LINKS - Applied reveal-item and fade-up with delay */}
                <div className="footer-column quick-links reveal-item fade-up" style={{ transitionDelay: '0.2s' }}>
                    <h4 className="footer-heading">QUICK LINKS</h4>
                    <ul className="footer-links">
                        <li><a href="#partnerships">Partnerships</a></li>
                        {/* <li><a href="#media-queries">Media Queries</a></li> */}
                        {/* <li><a href="#influencers">Influencers</a></li> */}
                        {/* <li><a href="#company-reads">Company Reads</a></li> */}
                        {/* <li><a href="https://penguinrandomhouse.biz">PenguinRandomHouse.biz</a></li> */}
                        <li><a href="#email-preferences">Email Preferences</a></li>
                        <li><a href="#terms">Terms of Use</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        {/* <li><a href="#ca-privacy">CA Privacy Policy</a></li> */}
                        {/* <li><a href="#do-not-sell">Do Not Sell My Personal Info</a></li> */}
                        <li><a href="#affiliate">Affiliate Program Disclosure</a></li>
                        {/* <li><a href="#scams">Avoid Publishing Scams</a></li> */}
                    </ul>
                </div>

                {/* Column 3: HELP - Applied reveal-item and fade-up with delay */}
                <div className="footer-column help reveal-item fade-up" style={{ transitionDelay: '0.3s' }}>
                    <h4 className="footer-heading">HELP</h4>
                    <ul className="footer-links">
                        {/* <li><a href="#publishing">Publishing Process</a></li> */}
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#shipping">Shopping & Shipping FAQ</a></li>
                        <li><a href="#educators">For Educators</a></li>
                        <li><a href="#subrights">Subrights</a></li>
                        <li><a href="#permissions">Permissions</a></li>
                        <li><a href="#estate">Estate Information</a></li>
                    </ul>
                </div>

                {/* Column 4: CONNECT - Applied reveal-item and fade-up with delay */}
                <div className="footer-column connect reveal-item fade-up" style={{ transitionDelay: '0.4s' }}>
                    <h4 className="footer-heading">CONNECT</h4>
                    <p className="connect-text">Sign up for news about books, authors, and more from Penguin Random House</p>
                    
                    {/* STAY IN TOUCH Button */}
                    <a href="#stay-in-touch" className="stay-in-touch-btn">
                        <span className="icon"></span> 
                        STAY IN TOUCH
                    </a>

                    {/* Social Icons (Placeholder) */}
                    <div className="social-icons">
    <a href="#" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="#" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="#" aria-label="Pinterest">
        <FontAwesomeIcon icon={faPinterest} />
    </a>
    <a href="#" aria-label="YouTube">
        <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="#" aria-label="Twitter / X">
        <FontAwesomeIcon icon={faXTwitter} />
    </a>
</div>


                    <p className="copyright-info">
                        <a href="https://global.penguinrandomhouse.com" target="_blank" rel="noopener noreferrer">global.penguinrandomhouse.com</a>
                        <br />
                        © 2025 Penguin Random House
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;